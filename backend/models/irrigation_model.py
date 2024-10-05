from pydantic import BaseModel

class IrrigationModel(BaseModel):
    field_id: int
    water_level: float
    soil_moisture: float
    timestamp: str
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import joblib

class IrrigationModel:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)

    def train(self, data_path):
        # Load and preprocess data
        data = pd.read_csv(data_path)
        X = data[['soil_moisture', 'temperature', 'humidity', 'light_intensity']]
        y = data['irrigation_amount']

        # Split data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train model
        self.model.fit(X_train, y_train)

        # Evaluate model
        y_pred = self.model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        print(f"Model MSE: {mse}")

    def predict(self, soil_moisture, temperature, humidity, light_intensity):
        features = [[soil_moisture, temperature, humidity, light_intensity]]
        return self.model.predict(features)[0]

    def save_model(self, path):
        joblib.dump(self.model, path)

    def load_model(self, path):
        self.model = joblib.load(path)

if __name__ == "__main__":
    model = IrrigationModel()
    model.train("path/to/training_data.csv")
    model.save_model("irrigation_model.joblib")