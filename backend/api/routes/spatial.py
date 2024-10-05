from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import random

router = APIRouter()

class SpatialPoint(BaseModel):
    lat: float
    lon: float

class FieldData(BaseModel):
    id: str
    name: str
    boundary: List[SpatialPoint]
    cropType: str
    area: float

@router.get("/fields", response_model=List[FieldData])
async def get_fields():
    # In a real application, you would fetch this data from a database or GIS
    return [
        {
            "id": "field1",
            "name": "North Field",
            "boundary": [
                {"lat": 40.7128, "lon": -74.0060},
                {"lat": 40.7138, "lon": -74.0070},
                {"lat": 40.7148, "lon": -74.0060},
                {"lat": 40.7138, "lon": -74.0050},
            ],
            "cropType": "Corn",
            "area": 10.5
        },
        {
            "id": "field2",
            "name": "South Field",
            "boundary": [
                {"lat": 40.7018, "lon": -74.0060},
                {"lat": 40.7028, "lon": -74.0070},
                {"lat": 40.7038, "lon": -74.0060},
                {"lat": 40.7028, "lon": -74.0050},
            ],
            "cropType": "Soybeans",
            "area": 8.2
        }
    ]

@router.get("/field/{field_id}")
async def get_field(field_id: str):
    # In a real application, you would fetch this data from a database or GIS
    fields = await get_fields()
    field = next((f for f in fields if f["id"] == field_id), None)
    if field is None:
        raise HTTPException(status_code=404, detail="Field not found")
    return field

@router.post("/field")
async def create_field(field: FieldData):
    # In a real application, you would save this data to a database or GIS
    return {"message": "Field created successfully", "field_id": field.id}

@router.put("/field/{field_id}")
async def update_field(field_id: str, field: FieldData):
    # In a real application, you would update this data in a database or GIS
    return {"message": "Field updated successfully"}

@router.delete("/field/{field_id}")
async def delete_field(field_id: str):
    # In a real application, you would delete this data from a database or GIS
    return {"message": "Field deleted successfully"}