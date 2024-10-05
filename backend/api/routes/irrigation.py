from fastapi import APIRouter, HTTPException
from models.irrigation_model import IrrigationModel

router = APIRouter()

@router.get("/")
async def get_irrigation_data():
    # Fetch and return irrigation data
    return {"message": "Irrigation data"}

@router.post("/")
async def create_irrigation_data(irrigation: IrrigationModel):
    # Process and store irrigation data
    return {"message": "Irrigation data created"}
