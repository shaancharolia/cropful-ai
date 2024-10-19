import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Load the dataset
data = pd.read_csv('backend\crop_yield.csv')

# Mapping weather condition to numerical values
crop_mapping = {'Barley': 0, 'Cotton': 1, 'Maize': 2, 'Rice': 3, 'Soybean': 4, 'Wheat': 5}
soil_mapping = {'Chalky': 0, 'Clay': 1, 'Loam': 2, 'Peaty': 3, 'Sandy': 4, 'Silt': 5}
region_mapping = {'North': 0, 'East': 1, 'South': 2, 'West': 3}
true_false = {"False": 0, "True": 1}
data['Crop'] = data['Crop'].map(crop_mapping)
data['Soil_Type'] = data['Soil_Type'].map(soil_mapping)
data['Region'] = data['Region'].map(region_mapping)

# Mapping boolean values to 0 and 1
data['Fertilizer_Used'] = data['Fertilizer_Used'].map({False: 0, True: 1})
data['Irrigation_Used'] = data['Irrigation_Used'].map({False: 0, True: 1})

#test
frs = 5

# Define the features (X) and target (y)
features = ['Region', 'Soil_Type', 'Crop', 'Rainfall_mm', 'Temperature_Celsius', 
            'Fertilizer_Used', 'Irrigation_Used', 'Days_to_Harvest']
target = 'Yield_tons_per_hectare'

# Convert categorical columns to numerical values
data_encoded = pd.get_dummies(data[features])

# Split the data into training and testing sets (80% train, 15% test, 5% left aside)
X = data_encoded
y = data[target]

# Training vals are X_train and y_train
# Testing vals are X_test, and y_test
# Additional vals are X_addvall and y_addval

X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.2, random_state=42)
X_test, X_addval, y_test, y_addval = train_test_split(X_temp, y_temp, test_size=0.25, random_state=42)

# Initialize and train the Linear Regression model
lr_model = LinearRegression()
lr_model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = lr_model.predict(X_test)

# Evaluate the model using Root Mean Squared Error (RMSE)
rmse = mean_squared_error(y_test, y_pred, squared=False)
# print(f"Root Mean Squared Error: {rmse}")

# testing shi
#Mapping dictionary values

#Name of the parameter should be the Region
region = region_mapping[input("Enter the Region: ")]
#Name of the parameter should be the soil type
soil = soil_mapping[input("Enter the soil: ")]
#Name of the parameter should be the Crop
crop = crop_mapping[input("Enter the crop: ")]
rainfall = float(input("Enter the rainfall in mm: "))
#TEMP IS IN CELSIUS
temperature = float(input("Enter the temperature in celsius: "))

# Correctly map user input to boolean values
fertilizer_used = input("Enter if you used fertilizer (True or False): ").strip().lower() == "true"
irrigation_used = input("Enter if you used irrigation (True or False): ").strip().lower() == "true"

# Convert Days to Harvest input to an integer
days_to_harvest = int(input("Enter the days it took to harvest: "))

# Define the input values for testing
test_input = {
    'Region': region,  # West (for example)
    'Soil_Type': soil,  # Sandy (example)
    'Crop': crop,  # Silt (example)
    'Rainfall_mm': rainfall,  # 506.123 (example)
    'Temperature_Celsius': temperature,  # 27.23 (example)
    'Fertilizer_Used': fertilizer_used,  # False (example)
    'Irrigation_Used': irrigation_used,  # True (example)
    'Days_to_Harvest': days_to_harvest  # 73 (example)
}

# Convert the input to a DataFrame
test_df = pd.DataFrame([test_input])

# If you used one-hot encoding, you need to ensure your test input matches the training input's shape.
# Here, I'll add dummy variables for categorical features.
test_encoded = pd.get_dummies(test_df, columns=['Region', 'Soil_Type', 'Crop'], drop_first=True)

# Align the test input with the training input columns (you may need to add missing columns with 0)
for col in X.columns:
    if col not in test_encoded.columns:
        test_encoded[col] = 0

test_encoded = test_encoded[X.columns]  # Ensure the columns are in the same order as training

# Make a prediction
predicted_yield = lr_model.predict(test_encoded)
print(f"Predicted Yield (tons per hectare): {predicted_yield[0]}")
