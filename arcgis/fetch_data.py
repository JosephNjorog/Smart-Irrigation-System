import arcgis
from arcgis.gis import GIS
from arcgis.features import FeatureLayer
import sys
import os

# Add the parent directory to the system path if the config module is not found
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

try:
    from config import ARCGIS_USERNAME, ARCGIS_PASSWORD
except ImportError:
    raise ImportError("Could not import 'config'. Ensure 'config.py' is in the correct directory.")

def fetch_field_data():
    # Connect to ArcGIS Online
    gis = GIS("https://www.arcgis.com", ARCGIS_USERNAME, ARCGIS_PASSWORD)

    # Access the feature layer containing field data
    field_layer = FeatureLayer("YOUR_FEATURE_LAYER_URL")

    # Query all features
    fields = field_layer.query(where="1=1", out_fields="*")

    # Process and return the data
    return [
        {
            "id": feature.attributes["id"],
            "name": feature.attributes["name"],
            "boundary": feature.geometry,
            "cropType": feature.attributes["crop_type"],
            "area": feature.attributes["area"]
        }
        for feature in fields.features
    ]

if __name__ == "__main__":
    print(fetch_field_data())