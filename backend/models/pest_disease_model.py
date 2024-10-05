import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

class PestDiseaseModel:
    def __init__(self, num_classes):
        self.num_classes = num_classes
        self.model = self._build_model()

    def _build_model(self):
        base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
        x = base_model.output
        x = GlobalAveragePooling2D()(x)
        x = Dense(1024, activation='relu')(x)
        output = Dense(self.num_classes, activation='softmax')(x)
        model = Model(inputs=base_model.input, outputs=output)
        return model

    def train(self, train_data, validation_data, epochs=10):
        self.model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(train_data, validation_data=validation_data, epochs=epochs)

    def predict(self, image):
        return self.model.predict(image)

    def save_model(self, path):
        self.model.save(path)

    def load_model(self, path):
        self.model = tf.keras.models.load_model(path)

if __name__ == "__main__":
    num_classes = 10  # Example: 10 different types of pests/diseases
    model = PestDiseaseModel(num_classes)
    # You would need to prepare your train_data and validation_data
    # model.train(train_data, validation_data)
    # model.save_model("pest_disease_model.h5")