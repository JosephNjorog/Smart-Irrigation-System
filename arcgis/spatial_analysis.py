import arcpy
from arcgis.features import GeoAccessor, GeoSeriesAccessor
import pandas as pd

def calculate_ndvi(red_band, nir_band):
    """Calculate Normalized Difference Vegetation Index (NDVI)"""
    return (nir_band - red_band) / (nir_band + red_band)

def analyze_crop_health(field_data, satellite_imagery):
    # Load field data into a spatially enabled dataframe
    fields_df = pd.DataFrame(field_data)
    fields_sdf = GeoAccessor.from_geodataframe(fields_df)

    # Load satellite imagery
    raster = arcpy.Raster(satellite_imagery)

    # Extract red and near-infrared bands
    red_band = raster.getBand(3)
    nir_band = raster.getBand(4)

    # Calculate NDVI
    ndvi = calculate_ndvi(red_band, nir_band)

    # Zonal statistics
    zonal_stats = arcpy.sa.ZonalStatisticsAsTable(fields_sdf, "id", ndvi, "crop_health_stats")

    # Join zonal statistics with field data
    result = fields_sdf.spatial.join(zonal_stats)

    return result.to_dict('records')

if __name__ == "__main__":
    field_data = [{"id": 1, "name": "Field 1", "geometry": {"type": "Polygon", "coordinates": [[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]]}}]
    satellite_imagery = "path/to/satellite_imagery.tif"
    print(analyze_crop_health(field_data, satellite_imagery))