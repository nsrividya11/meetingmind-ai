import os
from dotenv import load_dotenv
from pinecone import Pinecone
import voyageai

load_dotenv()

# Voyage AI Client
client = voyageai.Client(
    api_key=os.getenv("VOYAGE_API_KEY")
)

# Pinecone Client
pc = Pinecone(
    api_key=os.getenv("PINECONE_API_KEY")
)

# Change this ONLY if your index name is different
index = pc.Index("meeting-memory")



def store_memory(meeting_id, text):

    try:

        result = client.embed(
            texts=[text],
            model="voyage-3-lite",
            input_type="document"
        )

        embedding = result.embeddings[0]

        index.upsert(
            vectors=[
                {
                    "id": str(meeting_id),
                    "values": embedding,
                    "metadata": {
                        "content": text
                    }
                }
            ]
        )

    except Exception as e:

        print("Memory Store Error:", e)


def search_memory(query, top_k=3):

    try:

        result = client.embed(
            texts=[query],
            model="voyage-3-lite",
            input_type="query"
        )

        embedding = result.embeddings[0]

        results = index.query(
            vector=embedding,
            top_k=top_k,
            include_metadata=True
        )

        memories = []

        for match in results["matches"]:

            if "metadata" in match:

                memories.append(
                    match["metadata"].get(
                        "content",
                        ""
                    )
                )

        return memories

    except Exception as e:

        print("Memory Search Error:", e)

        return []