# Austin Housing Price Prediction

This project aims to predict housing prices in Austin using various features related to the properties. The project involves data preprocessing, feature engineering, model training, evaluation, and tuning.

## Project Structure

- `austin_housing_price_prediction.ipynb`: The Jupyter Notebook containing the complete workflow of the project.

## Data Description

The dataset used in this project contains information about houses in Austin, including features such as location, property type, year built, number of bedrooms, bathrooms, living area, and more. The dataset covers the years 2018 to 2021.

### Features

- `zpid`: Unique identifier for the property.
- `city`: City where the property is located.
- `streetAddress`: Street address of the property.
- `zipcode`: Zipcode of the property.
- `description`: Description of the property.
- `latitude`: Latitude coordinate of the property.
- `longitude`: Longitude coordinate of the property.
- `propertyTaxRate`: Property tax rate.
- `garageSpaces`: Number of garage spaces.
- `hasAssociation`: Whether the property has an association.
- `hasCooling`: Whether the property has cooling.
- `hasGarage`: Whether the property has a garage.
- `hasHeating`: Whether the property has heating.
- `hasSpa`: Whether the property has a spa.
- `hasView`: Whether the property has a view.
- `homeType`: Type of the property.
- `parkingSpaces`: Number of parking spaces.
- `yearBuilt`: Year the property was built.
- `latestPrice`: Latest price of the property.
- `numPriceChanges`: Number of price changes.
- `latest_saledate`: Latest sale date.
- `latest_salemonth`: Latest sale month.
- `latest_saleyear`: Latest sale year.
- `latestPriceSource`: Source of the latest price.
- `numOfPhotos`: Number of photos.
- `numOfAccessibilityFeatures`: Number of accessibility features.
- `numOfAppliances`: Number of appliances.
- `numOfParkingFeatures`: Number of parking features.
- `numOfPatioAndPorchFeatures`: Number of patio and porch features.
- `numOfSecurityFeatures`: Number of security features.
- `numOfWaterfrontFeatures`: Number of waterfront features.
- `numOfWindowFeatures`: Number of window features.
- `numOfCommunityFeatures`: Number of community features.
- `lotSizeSqFt`: Lot size in square feet.
- `livingAreaSqFt`: Living area size in square feet.
- `numOfPrimarySchools`: Number of primary schools nearby.
- `numOfElementarySchools`: Number of elementary schools nearby.
- `numOfMiddleSchools`: Number of middle schools nearby.
- `numOfHighSchools`: Number of high schools nearby.
- `avgSchoolDistance`: Average distance to nearby schools.
- `avgSchoolRating`: Average rating of nearby schools.
- `avgSchoolSize`: Average size of nearby schools.
- `MedianStudentsPerTeacher`: Median number of students per teacher.
- `numOfBathrooms`: Number of bathrooms.
- `numOfBedrooms`: Number of bedrooms.
- `numOfStories`: Number of stories.
- `homeImage`: URL of the home image.

## Workflow

### Data Preprocessing

- Fill missing values with median or most frequent values.
- Standardize numerical features.
- One-hot encode categorical features.

### Feature Engineering

- Create new features such as the ratio of bedrooms to living area size (`rooms_per_sqft`).

### Model Training and Tuning

- Use RandomForestRegressor for initial model training.
- Perform GridSearchCV for hyperparameter tuning.

### Model Evaluation

- Calculate performance metrics such as Mean Squared Error (MSE) and R² score.
- Plot actual vs. predicted values.
- Analyze residuals.
- Evaluate feature importance.

### Cross-Validation

- Use cross-validation to assess the stability and generalization ability of the model.

## Results

- Best Parameters: `{ 'model__max_depth': 20, 'model__min_samples_leaf': 2, 'model__min_samples_split': 2, 'model__n_estimators': 100 }`
- Mean Squared Error (Best Model): 98105978363.12245
- R² Score (Best Model): 0.5854810615842705

## Conclusion

The RandomForestRegressor model with the best hyperparameters achieves an R² score of 0.585, indicating that the model explains approximately 58.5% of the variance in housing prices. Feature importance analysis helps identify the most influential factors affecting housing prices.

## How to Run

1. Clone the repository:
    
        sh
    
    Copy code
    
    git clone https://github.com/steve-yuan-8276/machine_learning.git
    

2. Navigate to the project directory:
    
        sh
    
    Copy code
    
    cd machine_learning/Austin_housing_Price
    

3. Install the required dependencies:
    
        sh
    
    Copy code
    
    pip install -r requirements.txt
    

4. Open the Jupyter Notebook:
    
        sh
    
    Copy code
    
    jupyter notebook austin_housing_price_prediction.ipynb
    

## License

This project is licensed under the MIT License. See the LICENSE file for details.