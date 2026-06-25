from typing import TypedDict


class MeetingState(TypedDict):

    transcript: str

    analysis: str

    summary: str

    decisions: str

    action_items: str

    risks: str

    related_context: str

    followup_email: str

    approval_status: str

    tasks: list