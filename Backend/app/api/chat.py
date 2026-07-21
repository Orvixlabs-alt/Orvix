from fastapi import APIRouter
from pydantic import BaseModel
from app.core.ai_provider import client

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):

    # Future AI Call (Groq/OpenAI)
    # response = client.chat.completions.create(
    #     model="llama-3.3-70b-versatile",
    #     messages=[
    #         {
    #             "role": "user",
    #             "content": request.message
    #         }
    #     ]
    # )

    # ai_reply = response.choices[0].message.content

    return {
        "user": request.message,
        "orvix": f"You said: {request.message}"
    }