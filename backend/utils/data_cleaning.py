import pandas as pd
import numpy as np

def remove_outliers(df, columns, n_std=3):
    """
    Remove outliers from specified columns in a DataFrame.
    Outliers are defined as values more than n_std standard deviations from the mean.
    """
    for col in columns:
        mean = df[col].mean()
        std = df[col].std()
        df = df[(df[col] >= mean - n_std * std) & (df[col] <= mean + n_std * std)]
    return df

def fill_missing_values(df, numeric_strategy='mean', categorical_strategy='mode'):
    """
    Fill missing values in a DataFrame.
    For numeric columns, use the specified strategy ('mean', 'median', or a constant value).
    For categorical columns, use the specified strategy ('mode' or a constant value).
    """
    numeric_columns = df.select_dtypes(include=[np.number]).columns
    categorical_columns = df.select_dtypes(exclude=[np.number]).columns
    
    if numeric_strategy == 'mean':
        df[numeric_columns] = df[numeric_columns].fillna(df[numeric_columns].mean())
    elif numeric_strategy == 'median':
        df[numeric_columns] = df[numeric_columns].fillna(df[numeric_columns].median())
    else:
        df[numeric_columns] = df[numeric_columns].fillna(numeric_strategy)
    
    if categorical_strategy == 'mode':
        df[categorical_columns] = df[categorical_columns].fillna(df[categorical_columns].mode().iloc[0])
    else:
        df[categorical_columns] = df[categorical_columns].fillna(categorical_strategy)
    
    return df

def normalize_data(df, columns):
    """
    Normalize specified columns in a DataFrame to have values between 0 and 1.
    """
    for col in columns:
        df[col] = (df[col] - df[col].min()) / (df[col].max() - df[col].min())
    return df

def encode_categorical(df, columns):
    """
    Perform one-hot encoding on specified categorical columns in a DataFrame.
    """
    return pd.get_dummies(df, columns=columns)

if __name__ == "__main__":
    # Example usage
    # df = pd.read_csv('your_data.csv')
    # df = remove_outliers(df, ['temperature', 'humidity'])
    # df = fill_missing_values(df)
    # df = normalize_data(df, ['soil_moisture', 'light_intensity'])
    # df = encode_categorical(df, ['crop_type', 'soil_type'])
    pass
