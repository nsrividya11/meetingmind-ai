from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from workflow import build_workflow

from fastapi import Header
import jwt
import os

from supabase_utils import (
    save_meeting,
    save_tasks,
    get_meetings,
    get_tasks,
    approve_meeting,
    complete_task
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

workflow = build_workflow()


class MeetingRequest(BaseModel):
    transcript: str


@app.get("/")
def home():

    return {
        "message": "MeetingMind AI Running"
    }


@app.post("/process-meeting")
def process_meeting(

    request: MeetingRequest,

    authorization: str = Header(None)

):

    token = authorization.replace(

        "Bearer ",

        ""

    )

    payload = jwt.decode(

        token,

        options={

            "verify_signature": False

        }

    )

    user_id = payload["sub"]

    result = workflow.invoke({

        "transcript": request.transcript

    })

    result["transcript"] = request.transcript

    meeting_id = save_meeting(

        result,

        user_id

    )

    save_tasks(

        meeting_id,

        result["tasks"],

        user_id

    )

    return {

        "analysis": result["analysis"],

        "related_context": result["related_context"],

        "followup_email": result["followup_email"],

        "approval_status": result["approval_status"],

        "tasks": result["tasks"]

    }


@app.get("/meetings")
def meetings(

    authorization: str = Header(None)

):

    token = authorization.replace(

        "Bearer ",

        ""

    )

    payload = jwt.decode(

        token,

        options={

            "verify_signature": False

        }

    )

    return get_meetings(

        payload["sub"]

    )


@app.get("/tasks")
def tasks(

    authorization: str = Header(None)

):

    token = authorization.replace(

        "Bearer ",

        ""

    )

    payload = jwt.decode(

        token,

        options={

            "verify_signature": False

        }

    )

    return get_tasks(

        payload["sub"]

    )


@app.put("/approve-meeting/{meeting_id}")
def approve(meeting_id: int):

    return approve_meeting(meeting_id)


@app.put("/complete-task/{task_id}")
def complete(task_id: int):

    return complete_task(task_id)