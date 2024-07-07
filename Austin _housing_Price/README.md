# Austin Housing Price Prediction

This project aims to predict housing prices in Austin using various features related to the properties. The project involves data preprocessing, feature engineering, model training, evaluation, and tuning.

## Project Structure

- `austin_house_analysis_visualization.ipynb`: The Jupyter Notebook containing data analysis and visualization.
- `feather_engineering_prediction.ipynb`: The Jupyter Notebook containing feature engineering and prediction workflow.

## Data Description

The dataset used in this project contains information about houses in Austin, including features such as location, property type, year built, number of bedrooms, bathrooms, living area, and more. The dataset covers the years 2018 to 2021. For a detailed list of features, refer to the notebooks.

## Workflow

### Data Preprocessing

- Fill missing values with median or most frequent values.
- Standardize numerical features.
- One-hot encode categorical features.

### Feature Engineering

- Create new features such as the ratio of bedrooms to living area size (`rooms_per_sqft`), house age, and price per square foot.
- Analyze feature correlation and importance.

### Data Analysis

- Conduct exploratory data analysis (EDA) to understand data distribution and relationships between features.
- Visualize the data using plots such as histograms, scatter plots, and heatmaps.

### Model Training and Tuning

- Use Linear Regression for initial model training and evaluation.
- Apply RandomForestRegressor for improved model performance.
- Perform GridSearchCV for hyperparameter tuning.

### Model Evaluation

- Calculate performance metrics such as Mean Squared Error (MSE) and R² score.
- Plot actual vs. predicted values.
- Analyze residuals and evaluate feature importance.

### Cross-Validation

- Use cross-validation to assess the stability and generalization ability of the model.

### Statistical Tests

- Conduct Shapiro-Wilk test for normality of residuals.
- Perform Levene test for homogeneity of variances.
- Use t-test for comparing means of actual and predicted residuals.

## Results

- **Best Parameters:** `{ 'model__max_depth': 20, 'model__min_samples_leaf': 2, 'model__min_samples_split': 2, 'model__n_estimators': 100 }`
- **Mean Squared Error (Best Model):** 36983731334.62773
- **R² Score (Best Model):** 0.8437357486819116

## Conclusion

The RandomForestRegressor model with the best hyperparameters achieves an R² score of approximately 0.844, indicating that the model explains around 84.4% of the variance in housing prices. Feature importance analysis helps identify the most influential factors affecting housing prices. Residual analysis and statistical tests indicate areas where the model can be further improved.

## License

This project is licensed under the MIT License. See the LICENSE file for details.