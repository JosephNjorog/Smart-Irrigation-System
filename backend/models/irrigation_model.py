from pydantic import BaseModel

class IrrigationModel(BaseModel):
    field_id: int
    water_level: float
    soil_moisture: float
    timestamp: str
