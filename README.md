# BrightHorizons Web Automation with Cypress  

## 📌 Project Overview  
This project automates the **BrightHorizons** web application using **Cypress** to ensure smooth and reliable UI testing. The framework follows **BDD (Behavior-Driven Development)** using **Cucumber**. It integrates with **Jenkins for CI/CD** and generates **Cucumber HTML reports** for test execution insights.  

## 👨‍💻 Author  
**Srikanth R** 
**srikanth.rajashekhar@gmail.com**  

## 🚀 Features  
✔ Automated UI tests using **Cypress**  
✔ **BDD implementation** with **Cucumber**  
✔ **Tag-based execution** (`@Sanity`, `@Regression`, etc.)  
✔ **Cypress multi-reporters** for detailed test reports  
✔ **Parallel test execution** support  
✔ **CI/CD integration** with **Jenkins**  
✔ **Environment configuration support** (test, prod, UAT, etc.)  

## 🛠 Tech Stack  
- **Cypress** (JavaScript-based UI automation)  
- **Cucumber** (for BDD step definitions)  
- **Mocha & Mochawesome** (for reporting)  
- **Multiple Cucumber HTML Reporter** (for BDD-style reports)  
- **Jenkins** (for CI/CD)  
- **GitHub** (for version control)  

## 🏗 Setup & Installation  
### 1️⃣ **Clone the Repository**  
## 🏗 Setup & Installation  
### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/your-repo/BrightHorizons-Cypress.git
cd BrightHorizons-Cypress

npm install

Run All Tests
npx cypress run

Run Tests in Chrome (Headless)
npx cypress run --browser chrome --headless

Run Specific Tests with a Tag (e.g., @Sanity)
npx cypress run --env TAGS="@Sanity"

Run Cypress in Interactive Mode
npx cypress open

After execution, the Cucumber HTML Report is generated at:
cypress/cucumberReports/cucumber-html-report/index.html

🔄 Continuous Integration (CI) with Jenkins
The project integrates with Jenkins for scheduled test execution.
Post-build step publishes Cucumber HTML Reports.
To run Cypress tests in Jenkins, use:
npx cypress run --browser chrome --headless --env TAGS="@Regression"