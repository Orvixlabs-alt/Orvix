from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import sqlite3

router = APIRouter()


class RegisterRequest(BaseModel):
    username: str
    password: str


@router.post("/register", tags=["Authentication"])
def register(request: RegisterRequest):
    conn = sqlite3.connect("orvix.db")
    cursor = conn.cursor()

    # Check if username already exists
    cursor.execute(
        "SELECT * FROM users WHERE username = ?",
        (request.username,)
    )

    user = cursor.fetchone()

    if user:
        conn.close()
        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    # Insert new user
    cursor.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        (request.username, request.password)
    )

    conn.commit()
    conn.close()

    return {
        "message": "User registered successfully",
        "username": request.username
    }