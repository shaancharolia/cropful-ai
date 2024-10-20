from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)

# Enable CORS for all domains and routes
CORS(app)

# Load the trained model
with open('linear_regression_model.pkl', 'rb') as f:
    lr_model = pickle.load(f)

# Mapping dictionaries
crop_mapping = {'Barley': 0, 'Cotton': 1, 'Maize': 2, 'Rice': 3, 'Soybean': 4, 'Wheat': 5}
soil_mapping = {'Chalky': 0, 'Clay': 1, 'Loam': 2, 'Peaty': 3, 'Sandy': 4, 'Silt': 5}
region_mapping = {'North': 0, 'East': 1, 'South': 2, 'West': 3}


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)

        # Check for required fields
        if not data or 'region' not in data or 'soilType' not in data or 'crop' not in data:
            return jsonify({'error': 'Invalid input data'}), 400

        Region = region_mapping[data['region']]
        Soil_Type = soil_mapping[data['soilType']]
        Crop = crop_mapping[data['crop']]
        Rainfall_mm = float(data['rainfall'])
        Temperature_Celsius = float(data['temperature'])
        Fertilizer_Used = 1 if data['fertilizerUsed'] == 'Yes' else 0
        Irrigation_Used = 1 if data['irrigationUsed'] == 'Yes' else 0
        Days_To_Harvest = int(data['daysToHarvest'])

        # Create DataFrame for prediction
        input_data = pd.DataFrame([{
            'Region': Region,
            'Soil_Type': Soil_Type,
            'Crop': Crop,
            'Rainfall_mm': Rainfall_mm,
            'Temperature_Celsius': Temperature_Celsius,
            'Fertilizer_Used': Fertilizer_Used,
            'Irrigation_Used': Irrigation_Used,
            'Days_to_Harvest': Days_To_Harvest
        }])

        # One-hot encode categorical features to match the training data
        input_encoded = pd.get_dummies(input_data, columns=['Region', 'Soil_Type', 'Crop'], drop_first=True)

        # Ensure the columns match the model's input
        model_columns = ['Region', 'Soil_Type', 'Crop', 'Rainfall_mm', 'Temperature_Celsius', 'Fertilizer_Used', 'Irrigation_Used', 'Days_to_Harvest']  # Update this with actual feature names
        model_columns += [col for col in lr_model.feature_names_in_ if col not in model_columns]

        # Align the input DataFrame with the model's expected columns
        for col in model_columns:
            if col not in input_encoded.columns:
                input_encoded[col] = 0  # Assign 0 if the column is missing

        input_encoded = input_encoded[model_columns]  # Ensure the columns are in the same order as training

        # Make prediction
        predicted_yield = lr_model.predict(input_encoded)
        return jsonify({'predictedYield': predicted_yield[0]})

    except Exception as e:
        print(f"Error: {e}")  # Log the specific error
        return jsonify({'error': 'Prediction failed', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
