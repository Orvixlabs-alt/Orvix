from fastapi import FastAPI

app = FastAPI(
    title="ORVIX API",
    version="0.1.0"
)

@app.get("/")
def home():
    return {
        "company": "ORVIX",
        "status": "Running",
        "message": "Welcome Founder 🚀"
    }