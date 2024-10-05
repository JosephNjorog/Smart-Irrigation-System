from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import random

router = APIRouter()

class IrrigationSchedule(BaseModel):
    day: str
    startTime: str
    duration: int

class IrrigationData(BaseModel):
    waterUsage: float
    soilMoisture: float
    nextIrrigation: str
    schedule: List[IrrigationSchedule]

@router.get("/", response_model=IrrigationData)
async def get_irrigation_data():
    # In a real application, you would fetch this data from a database or IoT devices
    return {
        "waterUsage": round(random.uniform(100, 500), 2),
        "soilMoisture": round(random.uniform(20, 80), 2),
        "nextIrrigation": "2023-05-15 08:00:00",
        "schedule": [
            {"day": "Monday", "startTime": "06:00", "duration": 30},
            {"day": "Wednesday", "startTime": "06:00", "duration": 30},
            {"day": "Friday", "startTime": "06:00", "duration": 30},
        ]
    }

@router.post("/schedule")
async def update_irrigation_schedule(schedule: List[IrrigationSchedule]):
    # In a real application, you would update the schedule in a database
    return {"message": "Irrigation schedule updated successfully"}

@router.get("/water-usage")
async def get_water_usage(days: int = 7):
    # In a real application, you would fetch this data from a database or IoT devices
    return {
        "data": [
            {"date": f"2023-05-{i+1:02d}", "usage": round(random.uniform(100, 500), 2)}
            for i in range(days)
        ]
    }