from workflow import (
    build_workflow
)


workflow = build_workflow()


result = workflow.invoke(

    {

        "transcript": """
        Vendor A security review is still pending.

        Procurement team wants to evaluate Vendor A.
        """
    }
)

print("\nANALYSIS\n")
print(result["analysis"])

print("\nRELATED CONTEXT\n")
print(result["related_context"])

print("\nFOLLOWUP EMAIL\n")
print(result["followup_email"])

print("\nAPPROVAL STATUS\n")
print(result["approval_status"])

