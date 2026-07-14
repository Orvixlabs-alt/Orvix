from fastapi import FastAPI
from app.api.health import router as health_router

app = FastAPI(
    title="ORVIX API",
    version="0.1.0"
)

app.include_router(health_router)

@app.get("/")
def home():
    return {
        "company": "ORVIX",
        "status": "Running",
        "message": "Day 7 Test"
    }