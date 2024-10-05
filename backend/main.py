from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import irrigation, crop_health, spatial

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Include routers
app.include_router(irrigation.router, prefix="/api/irrigation", tags=["irrigation"])
app.include_router(crop_health.router, prefix="/api/crop-health", tags=["crop health"])
app.include_router(spatial.router, prefix="/api/spatial", tags=["spatial"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Smart Irrigation & Crop Monitoring API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)