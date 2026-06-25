import os
from dotenv import load_dotenv
from pinecone import Pinecone
from sentence_transformers import SentenceTransformer

load_dotenv()

embedding_model = None
index = None


def get_embedding_model():
    global embedding_model

    if embedding_model is None:
        embedding_model = SentenceTransformer(
    "sentence-transformers/all-MiniLM-L6-v2"
)

    return embedding_model


def get_index():
    global index

    if index is None:
        pc = Pinecone(
            api_key=os.getenv("PINECONE_API_KEY")
        )

        index = pc.Index("meeting-memory-v2")

    return index

# Store Function

def store_memory(meeting_id, text):

    model = get_embedding_model()
    pinecone_index = get_index()

    embedding = model.encode(text).tolist()

    pinecone_index.upsert(
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

def search_memory(query, top_k=3):

    model = get_embedding_model()
    pinecone_index = get_index()

    embedding = model.encode(query).tolist()

    results = pinecone_index.query(
        vector=embedding,
        top_k=top_k,
        include_metadata=True
    )

    memories = []

    for match in results["matches"]:
        memories.append(match["metadata"]["content"])

    return memories