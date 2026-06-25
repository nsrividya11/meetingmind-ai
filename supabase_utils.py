import os

from dotenv import load_dotenv

from supabase import create_client

load_dotenv()

supabase = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)


def save_meeting(result, user_id="demo-user"):

    data = {

        "user_id": user_id,

        "transcript": result["transcript"],

        "analysis": result["analysis"],

        "related_context": result["related_context"],

        "followup_email": result["followup_email"],

        "approval_status": result["approval_status"]

    }

    response = (

        supabase

        .table("meetings")

        .insert(data)

        .execute()

    )

    return response.data[0]["id"]


def save_tasks(meeting_id, tasks, user_id="demo-user"):

    if not tasks:
        return

    records = []

    for task in tasks:

        records.append({

            "meeting_id": meeting_id,

            "user_id": user_id,

            "assignee": task["assignee"],

            "task": task["task"],

            "due_date": task["due_date"],

            "status": "Pending"

        })

    supabase.table("tasks").insert(records).execute()


def get_meetings(user_id="demo-user"):

    response = (

        supabase

        .table("meetings")

        .select("*")

        .eq("user_id", user_id)

        .order("created_at", desc=True)

        .execute()

    )

    return response.data


def get_tasks(user_id="demo-user"):

    response = (

        supabase

        .table("tasks")

        .select("*")

        .eq("user_id", user_id)

        .order("created_at", desc=True)

        .execute()

    )

    return response.data


def approve_meeting(meeting_id):

    response = (

        supabase

        .table("meetings")

        .update({

            "approval_status": "approved"

        })

        .eq("id", meeting_id)

        .execute()

    )

    return response.data


def complete_task(task_id):

    response = (

        supabase

        .table("tasks")

        .update({

            "status": "Completed"

        })

        .eq("id", task_id)

        .execute()

    )

    return response.data