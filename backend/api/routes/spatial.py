from fastapi import APIRouter, HTTPException
from arcgis.gis import GIS
from config import ARC_GIS_API_KEY

router = APIRouter()

@router.get("/")
async def get_spatial_data():
    # Fetch and return spatial data using ArcGIS
    gis = GIS(api_key=ARC_GIS_API_KEY)
    # Perform some operations with the GIS instance
    return {"message": "Spatial data"}
