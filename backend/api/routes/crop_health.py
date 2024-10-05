from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import random
from datetime import datetime, timedelta

router = APIRouter()

class GrowthData(BaseModel):
    date: str
    height: float

class CropHealthData(BaseModel):
    overallHealth: float
    pestRisk: str
    nutrientLevels: str
    growthData: List[GrowthData]
    alerts: List[str]

@router.get("/", response_model=CropHealthData)
async def get_crop_health_data():
    # In a real application, you would fetch this data from a database or IoT devices
    today = datetime.now()
    growth_data = [
        {
            "date": (today - timedelta(days=i)).strftime("%Y-%m-%d"),
            "height": round(random.uniform(10, 50), 2)
        }
        for i in range(7, 0, -1)
    ]
    
    return {
        "overallHealth": round(random.uniform(70, 100), 2),
        "pestRisk": random.choice(["Low", "Medium", "High"]),
        "nutrientLevels": random.choice(["Optimal", "Suboptimal", "Deficient"]),
        "growthData": growth_data,
        "alerts": [
            "Possible nutrient deficiency detected in sector A3",
            "Pest activity increased in sector B2"
        ] if random.random() < 0.3 else []
    }

@router.post("/update-health")
async def update_crop_health(health_data: CropHealthData):
    # In a real application, you would update this data in a database
    return {"message": "Crop health data updated successfully"}

@router.get("/historical")
async def get_historical_health_data(days: int = 30):
    # In a real application, you would fetch this data from a database
    today = datetime.now()
    return {
        "data": [
            {
                "date": (today - timedelta(days=i)).strftime("%Y-%m-%d"),
                "overallHealth": round(random.uniform(70, 100), 2)
            }
            for i in range(days, 0, -1)
        ]
    }