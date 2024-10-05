import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import joblib

class CropHealthModel:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)

    def train(self, data_path):
        # Load and preprocess data
        data = pd.read_csv(data_path)
        X = data[['ndvi', 'soil_moisture', 'temperature', 'pest_presence']]
        y = data['crop_health_status']

        # Split data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train model
        self.model.fit(X_train, y_train)

        # Evaluate model
        y_pred = self.model.predict(X_test)
        print(classification_report(y_test, y_pred))

    def predict(self, ndvi, soil_moisture, temperature, pest_presence):
        features = [[ndvi, soil_moisture, temperature, pest_presence]]
        return self.model.predict(features)[0]

    def save_model(self, path):
        joblib.dump(self.model, path)

    def load_model(self, path):
        self.model = joblib.load(path)

if __name__ == "__main__":
    model = CropHealthModel()
    model.train("path/to/training_data.csv")
    model.save_model("crop_health_model.joblib")