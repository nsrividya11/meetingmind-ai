from pinecone_utils import (
    store_memory,
    search_memory
)


store_memory(

    meeting_id="meeting_1",

    text="""
    Vendor A failed security review.
    Procurement approval is pending.
    """
)


results = search_memory(
    "Vendor A security issue"
)

print(results)