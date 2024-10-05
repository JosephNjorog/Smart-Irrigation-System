import numpy as np
from tensorflow.keras.preprocessing.image import ImageDataGenerator

def augment_images(images, labels, batch_size=32):
    datagen = ImageDataGenerator(
        rotation_range=20,
        width_shift_range=0.2,
        height_shift_range=0.2,
        horizontal_flip=True,
        zoom_range=0.2,
        shear_range=0.2,
        fill_mode='nearest'
    )
    
    # Fit the ImageDataGenerator to the data
    datagen.fit(images)
    
    # Create an iterator for the augmented data
    augmented_data = datagen.flow(images, labels, batch_size=batch_size)
    
    return augmented_data

def apply_augmentation(image):
    datagen = ImageDataGenerator(
        rotation_range=20,
        width_shift_range=0.2,
        height_shift_range=0.2,
        horizontal_flip=True,
        zoom_range=0.2,
        shear_range=0.2,
        fill_mode='nearest'
    )
    
    # Expand dimensions to create a batch of size 1
    image = np.expand_dims(image, axis=0)
    
    # Get the first (and only) augmented image
    augmented_image = next(datagen.flow(image, batch_size=1))[0]
    
    return augmented_image

if __name__ == "__main__":
    # Example usage
    # You would need to load your images and labels first
    # images = ...
    # labels = ...
    # augmented_data = augment_images(images, labels)
    # for batch_images, batch_labels in augmented_data:
    #     # Use the augmented batch in your model
    #     pass
    
    # Single image augmentation
    # image = ...
    # augmented_image = apply_augmentation(image)
    pass