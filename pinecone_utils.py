import os

from dotenv import load_dotenv

from pinecone import Pinecone

from sentence_transformers import SentenceTransformer


load_dotenv()


# Embedding Model

embedding_model = SentenceTransformer(
    "BAAI/bge-large-en-v1.5"
)


# Pinecone Client

pc = Pinecone(
    api_key=os.getenv("PINECONE_API_KEY")
)


index = pc.Index(
    "meeting-memory"
)

# Store Function

def store_memory(
    meeting_id,
    text
):

    embedding = embedding_model.encode(
        text
    ).tolist()

    index.upsert(
        vectors=[
            {
                "id": meeting_id,
                "values": embedding,
                "metadata": {
                    "content": text
                }
            }
        ]
    )

# Search Function

def search_memory(
    query,
    top_k=3
):

    embedding = embedding_model.encode(
        query
    ).tolist()

    results = index.query(

        vector=embedding,

        top_k=top_k,

        include_metadata=True

    )

    memories = []

    for match in results["matches"]:

        memories.append(

            match["metadata"]["content"]
        )

    return memories

