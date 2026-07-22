from fastapi import APIRouter

router = APIRouter()

@router.get("/version")
def version():
    return {
        "project": "ORVIX",
        "assistant": "ORA",
        "version": "0.1.0",
        "status": "development"
    }