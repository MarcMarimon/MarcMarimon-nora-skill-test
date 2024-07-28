# MarcMarimon-nora-skill-test

## Problem Description 

Nora's ecosystem of technologies is made up of three main elements: Nora Professional, Nora
App and Noralytics. This technical test describes a small subset of the features and functionality
of Nora Professional.

1. **Therapists, Patients and Centers**

   The objective of the Nora Professional system is that health professionals, therapists from now
on, can actively monitor the patients discharged after suffering a stroke. The therapists belong
to a single center which is identified by a unique code made up of five alphanumeric characters.
Patients are also assigned to a single center. And also patients are assigned to a therapist.
Patients can only be assigned to a therapist if they belong to the same center.

3. **Surveys:**

   One of the most used monitoring methods is to carry out surveys to the patients. A survey is
made up of questions which can be of the type Open, Range or Decimal.
- Open-ended questions are answered with free-form text
- Range-type questions are answered with an integer between two values (min and max)
- Decimal questions are answered with an unrestricted decimal number


Surveys may also contain groups of questions, these receive a name and are composed of a
series of questions.
It is of interest to know the numerical value of a whole survey, that is, the sum of the values of
all the responses. If the question is open type, its value is 0.
The surveys belong to a single center. The therapist may send surveys to patients when the
following conditions are met:


- The survey belongs to the same center as the therapist
- The patient belongs to the same center and is assigned to the therapist

  

3. **Attributes and format restrictions:**

***Center attributes:***

- Code
- Address
  
***Therapist attributes:***
- Name (required)
- Telephone (optional)
- email (the format must be validated)


***Patient attributes:***
- patient code (free string, maximum 10 characters)
- telephone (optional)
- email (required)
- name (required)

  
***Format restrictions:***
- Center code: 5 alphanumeric characters. Mandatory and unique field
- Patient code: Alphanumeric of max
- Email: correct email format

# Nora Professional

This project is an application for managing surveys and associated questions. Below are the steps to set up the project in your local environment.

## Prerequisites

1. **Node.js and npm:** Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. You can check their installation with the following commands:
   ```bash
   node -v
   npm -v
   ```
2. **MySQL:** You will need [MySQL](https://dev.mysql.com/downloads/mysql/) installed and running. Ensure that the MySQL service is running and that you can access it.
   
## Clone the Repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/yourusername/nora-professional.git
cd nora-professional
```
## Install Dependencies

Install the Node.js and Sequelize dependencies:
```bash
npm install
```
## Configure Sequelize

### Initialize Sequelize

If you have not initialized Sequelize in your project yet, run the following command to set up the **`sequelize-cli`** configuration:
```bash
npx sequelize-cli init
```
This will generate the following directories:

- `config/`: For database configuration files.
- `models/`: For Sequelize models.
- `migrations/`: For migration files.
- `seeders/`:  For data seed files.

### Configure config/config.json`

Open the config/config.json file and adjust the settings to connect to your MySQL database:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "nora_professional",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
Make sure to replace **"your_password"** with your database password.

### Run Migrations

If you have pending migrations, run them with:
```bash
npx sequelize-cli db:migrate
```
### Insert Initial Data

To insert initial data into the database, run the following command:
```bash
npx ts-node src/db/init.ts
```
This command will execute the **init.ts** script located in **`src/db`** to insert initial data into the database.

### Start the Server

To start the application, run:

```bash
npm start
```
This will start the server on port 3000 by default. You can access the API at **[http://localhost:3000.]**


### API Usage
You can test the following endpoints using [Postman](https://www.postman.com/)  or any HTTP client:
This is the API published by me for creating a survey and calculating the total value of a survey: [https://documenter.getpostman.com/view/32893977/2sA3kaCJmq#ea42bc1b-f1fa-4962-9b87-3888af695440](https://documenter.getpostman.com/view/32893977/2sA3kaCJmq#ea42bc1b-f1fa-4962-9b87-3888af695440)  
If you want to create it on your own, here are the steps to follow:


#### Create Survey

- **Method:** POST
- **URL:** `/api/surveys`

**Request Body (JSON):**

```json
{
  "name": "Customer Satisfaction Survey",
  "centerCode": "ABC12",
  "questions": [
    {
      "name": "Group 1",
      "questions": [
        { "type": "text", "content": "How would you rate our service?", "response": "4" },
        { "type": "text", "content": "Would you recommend our service?", "response": "5" }
      ]
    }
  ]
}
```
#### Calculate Total Value of a Survey

- **Method:** GET
- **URL:** `/api/surveys/:surveyId/value`

**Example:** `http://localhost:3000/api/surveys/1/value`

Where `:surveyId` is the ID of the survey you want to calculate the value for.

---

### Contributions

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push your changes to your repository:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a pull request.


