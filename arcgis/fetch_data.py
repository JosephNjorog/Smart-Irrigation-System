import arcgis
from arcgis.gis import GIS
from arcgis.features import FeatureLayer
from config import ARCGIS_USERNAME, ARCGIS_PASSWORD

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