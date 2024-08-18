# Beijing Housing Price Analysis and Prediction

This project presents an analysis and prediction model for housing prices in Beijing. By applying various data analysis techniques and machine learning models, we aim to explore the factors influencing housing prices and predict future prices based on these factors.

## Project Overview

Using the dataset from Beijing housing data, this project involves conducting an in-depth analysis of housing prices in different districts of Beijing. The project applies linear regression and other analytical techniques to understand the relationship between housing prices and various factors, including location, floor, area, proximity to schools, and subway access.

## Tasks

1. **Data Exploration and Preprocessing:**

    - Load and clean the dataset to handle missing values, outliers, and categorical variables.
    - Perform exploratory data analysis (EDA) to understand the distribution of housing prices and the influence of various factors.
2. **Feature Engineering:**

    - Create new features based on existing ones, such as logarithmic transformations for skewed data (e.g., area and price).
    - Handle categorical variables by creating dummy variables for district and other categorical factors.
3. **Model Development:**

    - Develop a linear regression model to predict housing prices based on selected features.
    - Evaluate model performance using residual plots, p-values, R-squared values, and other statistical metrics.
4. **Price Prediction:**

    - Use the developed model to predict housing prices for new data.
    - Analyze the effect of different factors such as proximity to schools, subway, and district on predicted prices.

## Solution

The complete analysis, including data exploration, feature engineering, model development, and performance evaluation, is provided in the Jupyter Notebook [Beijing_Housing_Analysis_Prediction.ipynb](https://github.com/steve-yuan-8276/machine_learning/blob/main/4.Beijing_housing_price_prediction/Beijing_Housing_Analysis_Prediction.ipynb).

## Skills Utilized

- **Machine Learning:** Applied linear regression and other techniques to predict continuous outcomes.
- **Python:** Used Python for data processing, model development, and visualization.
- **Pandas and Seaborn:** Utilized for data manipulation, statistical analysis, and visualization.
- **Feature Engineering:** Created new features and handled categorical variables for better model performance.

## Usage

To replicate the analysis and predictions in this project, follow these steps:

1. Clone the repository:
    
```    
    git clone https://github.com/steve-yuan-8276/machine_learning.git
```    

2. Navigate to the project directory:
    

```    
    cd machine_learning/4.Beijing_housing_price_prediction
```    

3. Open the Jupyter Notebook:
   
```    
    jupyter notebook Beijing_Housing_Analysis_Prediction.ipynb
```    

4. Run the cells in the notebook to perform the analysis and build the prediction models.

## Conclusion

This project demonstrates how data analysis and machine learning techniques can be applied to predict housing prices in Beijing. By examining the influence of various factors such as location, proximity to schools, and subway access, the project provides insights into the dynamics of the Beijing housing market.

For more details, refer to the [notebook](https://github.com/steve-yuan-8276/machine_learning/blob/main/4.Beijing_housing_price_prediction/Beijing_Housing_Analysis_Prediction.ipynb).

Stay tuned for more updates and new projects!