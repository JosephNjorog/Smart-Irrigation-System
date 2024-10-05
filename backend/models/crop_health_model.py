from pydantic import BaseModel

class CropHealthModel(BaseModel):
    field_id: int
    health_index: float
    pest_presence: bool
    timestamp: str
