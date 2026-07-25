from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import sqlite3
import bcrypt

router = APIRouter()


class LoginRequest(BaseModel):
    username: str
    password: str


@router.post("/login", tags=["Authentication"])
def login(request: LoginRequest):
    conn = sqlite3.connect("orvix.db")
    cursor = conn.cursor()

    cursor.execute(
        "SELECT username, password FROM users WHERE username = ?",
        (request.username,)
    )

    user = cursor.fetchone()
    conn.close()

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    stored_password = user[1]

    if not bcrypt.checkpw(
        request.password.encode("utf-8"),
        stored_password.encode("utf-8")
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    return {
        "message": "Login successful",
        "username": user[0]
    }