# project-calculator

### ← README.md
### CHALLENGE 1: Project Description
Calculator to determine a pension benefit.

The elements for the calculation:
- Average monthly salary
- Years and months of service
- Age at retirement (rounded down to nearest whole years)
- Estimated monthly Social Security benefit
- Number of years of participation in Social Security

Page elements:
- Text input box
- Drop down list
- Button to perform calculation
- Button to reset page and clear user-input elements
- Text labels for each user element
- Results presented in either narrative form or as bullet points

Calculations, logic, decisions:
- Salary x max of 35 years service credit x 0.02 (maximum of 70 percent)
- Salary x maximum of 10 years of service credit years over 35 x 0.01 (maximum of 80 percent)
- Reduce benefit by subtracting primary insurance amount, then reduce benefit by multiplying early retirement factor


### CHALLENGE 2: Data Types
Salary
- number
- avgSalary
- initial = 0
- change through user input
- Text input box and results paragraph

Service credit
- number
- servCredit
- initial = 0
- change through user input.
- select drop down boxes for years and months and results paragraph

Birth date
- date
- birthDate
- initial = 0
- change through user input
- text input box

Retirement date
- date
- retDate
- initial = 0
- change through user input
- text input box

Retirement age
- number
- retAge
- retDate - birthDate, rounded down to nearest whole age
- calculated result
- display in document.body

Social Security benefit
- number
- ssaBenefit
- initial = 0
- change through user input
- text input box

Social Security years (similar to Service Credit)
- number
- ssaYears
- initial = 0
- change through user input.
- select drop down boxes for years and months and results paragraph

Early Retirement Factor
- object {[age]: [percentage]}
- erFactor
- predetermined in table
- data does not change; used as a lookup table
- hidden from user

### CHALLENGE 3: Pseudocode
Line 1

Line 2
