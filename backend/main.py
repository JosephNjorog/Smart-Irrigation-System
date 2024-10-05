from fastapi import FastAPI
from api.routes import irrigation, crop_health, spatial

app = FastAPI()

app.include_router(irrigation.router, prefix="/api/irrigation", tags=["irrigation"])
app.include_router(crop_health.router, prefix="/api/crop_health", tags=["crop_health"])
app.include_router(spatial.router, prefix="/api/spatial", tags=["spatial"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
