import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
ARC_GIS_API_KEY = os.getenv("ARC_GIS_API_KEY")
