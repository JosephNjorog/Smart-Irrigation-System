from fastapi import APIRouter, HTTPException
from models.crop_health_model import CropHealthModel

router = APIRouter()

@router.get("/")
async def get_crop_health_data():
    # Fetch and return crop health data
    return {"message": "Crop health data"}

@router.post("/")
async def create_crop_health_data(crop_health: CropHealthModel):
    # Process and store crop health data
    return {"message": "Crop health data created"}
