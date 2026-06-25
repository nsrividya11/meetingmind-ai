ANALYSIS_PROMPT = """
You are an expert meeting intelligence assistant.

Analyze the meeting transcript.

Return the response in the following format:

SUMMARY:
<summary>

DECISIONS:
<decisions>

ACTION_ITEMS:
<action items>

RISKS:
<risks>

Meeting Transcript:

{transcript}
"""

CONTEXT_PROMPT = """
You are an organizational memory assistant.

Current Meeting Analysis:

{analysis}

Related Historical Meetings:

{related_context}

Identify:

1. Previously discussed topics
2. Recurring risks
3. Repeated decisions
4. Relevant historical context

Generate a concise section called:

RELATED HISTORICAL CONTEXT
"""

FOLLOWUP_PROMPT = """
You are an executive assistant.

Based on the meeting analysis and
historical context, draft a professional
follow-up email.

Requirements:

- Keep it concise
- Include meeting outcomes
- Include action items
- Do not invent information
- Do not include placeholders such as
  [Your Name]
- Do not sign the email
- Return only the email body

Meeting Analysis:

{analysis}

Related Context:

{related_context}
"""

TASK_EXTRACTION_PROMPT = """
You are an AI meeting assistant.

Extract every action item mentioned in the meeting transcript.

For each task identify:

1. Assignee
2. Task
3. Due Date

Return ONLY a valid JSON array.

Example:

[
    {{
        "assignee":"Bob",
        "task":"Send pricing updates",
        "due_date":"Friday"
    }},
    {{
        "assignee":"Alice",
        "task":"Prepare presentation",
        "due_date":"Monday"
    }}
]

If no due date is mentioned, use:

"Not Specified"

Do not return explanations.

Meeting Transcript:

{transcript}
"""