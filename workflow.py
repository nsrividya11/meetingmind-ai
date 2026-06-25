from dotenv import load_dotenv

from langchain_groq import ChatGroq

from state import MeetingState

from prompts import ANALYSIS_PROMPT, CONTEXT_PROMPT, FOLLOWUP_PROMPT

from pinecone_utils import search_memory

from langgraph.graph import (
    StateGraph,
    START,
    END
)

import json

from prompts import TASK_EXTRACTION_PROMPT

import os

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

def analyze_meeting(
    state: MeetingState
):

    prompt = ANALYSIS_PROMPT.format(
        transcript=state["transcript"]
    )

    response = llm.invoke(prompt)

    return {
        "analysis": response.content
    }

def retrieve_related_context(
    state: MeetingState
):

    memories = search_memory(
        state["analysis"]
    )

    historical_context = "\n".join(
        memories
    )

    prompt = CONTEXT_PROMPT.format(

        analysis=state["analysis"],

        related_context=historical_context
    )

    response = llm.invoke(prompt)

    return {

        "related_context": response.content
    }

def generate_followup_email(
    state: MeetingState
):

    prompt = FOLLOWUP_PROMPT.format(

        analysis=state["analysis"],

        related_context=state["related_context"]
    )

    response = llm.invoke(
        prompt
    )

    return {

        "followup_email": response.content
    }

def request_approval(
    state: MeetingState
):

    return {

        "approval_status": "pending"
    }

# Creating Graph

def extract_tasks(state):

    prompt = TASK_EXTRACTION_PROMPT.format(
        transcript=state["transcript"]
    )

    response = llm.invoke(prompt)

    content = response.content

    content = content.replace(
        "```json",
        ""
    )

    content = content.replace(
        "```",
        ""
    )

    tasks = json.loads(
        content.strip()
    )

    state["tasks"] = tasks

    return state

def build_workflow():

    graph = StateGraph(
        MeetingState
    )

    # Register Nodes

    graph.add_node(
        "meeting_analysis",
        analyze_meeting
    )

    graph.add_node(
        "memory_retrieval",
        retrieve_related_context
    )

    graph.add_node(
    "extract_tasks",
    extract_tasks
)

    graph.add_node(
        "email_generation",
        generate_followup_email
    )

    graph.add_node(
        "approval_request",
        request_approval
    )

    # Adding Edges

    graph.add_edge(
        START,
        "meeting_analysis"
    )

    graph.add_edge(
        "meeting_analysis",
        "memory_retrieval"
    )

    graph.add_edge(
    "memory_retrieval",
    "extract_tasks"
)

    graph.add_edge(
    "extract_tasks",
    "email_generation"
)

    graph.add_edge(
        "email_generation",
        "approval_request"
    )

    graph.add_edge(
        "approval_request",
        END
    )

    return graph.compile()




