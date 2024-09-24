# Titanic Passenger Survival Prediction

This project analyzes the Titanic dataset and predicts passenger survival using a decision tree classifier. The dataset contains various attributes such as passenger class, gender, age, and more. The project applies data cleaning, feature engineering, and modeling to make survival predictions, using the popular Titanic dataset as a case study for binary classification problems in machine learning.

* * *

## Project Overview

The goal of this project is to build a machine learning model that predicts whether a passenger survived the Titanic disaster. The project uses a decision tree classifier and performs cross-validation to ensure the model's accuracy. The analysis involves key steps such as data exploration, cleaning, feature selection, and model evaluation.

* * *

## Dataset

The dataset used for this project is the Titanic passenger list, which is publicly available. It contains the following key columns:

- **Pclass**: Ticket class (1 = 1st, 2 = 2nd, 3 = 3rd)
- **Sex**: Gender
- **Age**: Age in years
- **SibSp**: Number of siblings/spouses aboard
- **Parch**: Number of parents/children aboard
- **Fare**: Passenger fare
- **Embarked**: Port of Embarkation (C = Cherbourg, Q = Queenstown, S = Southampton)
- **Survived**: Survival status (0 = No, 1 = Yes)
* * *

## Project Structure

- `titanic_analysis.ipynb`: The main notebook containing all code, analysis, and visualizations.
- `DataSource/`: Folder containing Titanic dataset files:
    - `titanic_train.csv`: Training dataset used for model building.
    - `titanic_test.csv`: Test dataset used for predictions.
- `Outputs/`: Folder where visualizations and model outputs are saved.
* * *

## Exploratory Data Analysis

- **Data Overview**: Basic data exploration is performed using `.info()`, `.describe()`, and `.value_counts()` to understand data types, missing values, and overall distribution.
- **Null Values**: The dataset contains missing values in the `Age`, `Fare`, and `Cabin` columns, with `Cabin` having 77% missing data.
* * *

## Data Cleaning

The following steps were taken to clean the data:

1. **Filling Missing Values**:

    - Missing `Age` values were filled with the average age.
    - Missing `Embarked` values were filled with the most common port ('S').
    - `Cabin` was dropped due to a high percentage of missing values.
2. **Dropping Unnecessary Columns**: The following columns were dropped:

    - `PassengerId`: Not useful for prediction.
    - `Name`: Not useful for prediction.
    - `Ticket`: Irregular and hard to use.
    - `Cabin`: Too many missing values.
* * *

## Feature Engineering

- The following features were selected for model training:
    - `Pclass`, `Sex`, `Age`, `SibSp`, `Parch`, `Fare`, and `Embarked`.
- **DictVectorizer** was used to convert categorical string data into numeric format for use in machine learning algorithms.
* * *

## Modeling and Evaluation

- A decision tree classifier was constructed using the ID3 algorithm, with `criterion='entropy'`.
- The model was trained using the transformed feature matrix and `Survived` as the target variable.
- **Model accuracy** was evaluated using:
    - Training set score: 98.2%
    - Cross-validation accuracy: 78.35% (10-fold cross-validation).
* * *

## Decision Tree Visualization

The decision tree model was visualized using `sklearn.tree.plot_tree`. A detailed decision tree was generated to show how decisions were made based on the features.

The decision tree was saved in the `Outputs/` folder as a PNG file.

* * *

## Results

- The decision tree classifier achieved high accuracy on the training set but performed lower on cross-validation, suggesting potential overfitting.
- The cross-validation score of 78.35% better reflects the model's real-world performance.

* * *

### Contact Information

For further inquiries, please reach out to Feng Yuan via [GitHub](https://github.com/steve-yuan-8276).