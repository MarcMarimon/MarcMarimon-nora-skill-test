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
