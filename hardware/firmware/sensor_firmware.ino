#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "YourWiFiSSID";
const char* password = "YourWiFiPassword";
const char* serverName = "http://your-api-endpoint.com/sensor-data";

// Pin definitions
const int soilMoisturePin = 34;
const int temperaturePin = 35;
const int humidityPin = 32;
const int lightIntensityPin = 33;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    // Read sensor data
    int soilMoisture = analogRead(soilMoisturePin);
    float temperature = readTemperature();
    float humidity = readHumidity();
    int lightIntensity = analogRead(lightIntensityPin);

    // Create JSON payload
    DynamicJsonDocument doc(1024);
    doc["soil_moisture"] = soilMoisture;
    doc["temperature"] = temperature;
    doc["humidity"] = humidity;
    doc["light_intensity"] = lightIntensity;

    String jsonString;
    serializeJson(doc, jsonString);

    // Send HTTP POST request
    int httpResponseCode = http.POST(jsonString);

    if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }

  delay(300000); // Send data every 5 minutes
}

float readTemperature() {
  // Replace with actual code to read from your temperature sensor
  return analogRead(temperaturePin) * 0.1;
}

float readHumidity() {
  // Replace with actual code to read from your humidity sensor
  return analogRead(humidityPin) * 0.1;
}