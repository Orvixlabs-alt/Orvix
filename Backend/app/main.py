from fastapi import FastAPI
from app.api.health import router as health_router
from app.api.chat import router as chat_router

app = FastAPI(
    title="ORVIX API",
    version="0.1.0"
)

# Include API Routers
app.include_router(health_router)
app.include_router(chat_router)

@app.get("/")
def home():
    return {
        "company": "ORVIX",
        "status": "Running",
        "message": "Welcome Founder 🚀"
    }