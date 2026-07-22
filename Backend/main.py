from fastapi import FastAPI

from app.core.database import init_db
from app.api.health import router as health_router
from app.api.chat import router as chat_router
from app.api.version import router as version_router

app = FastAPI(
    title="ORVIX API",
    description="Official backend API for ORVIX and ORA AI Assistant.",
    version="0.1.0"
)

# Initialize database
init_db()

# Include API Routers
app.include_router(health_router)
app.include_router(chat_router)
app.include_router(version_router)


@app.get("/", tags=["Home"])
def home():
    return {
        "company": "ORVIX",
        "assistant": "ORA",
        "status": "Running",
        "message": "Welcome Founder 🚀"
    }