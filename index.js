const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./src/generateHtmlPage");
const Employee = require("./lib/Employee");

// Class containing all questions
class Prompt {
  constructor() {
    this.teamArray = [];
  }
  getTeamArray() {
    return this.teamArray;
  }

  questions() {
    inquirer
      .prompt({
        type: "list",
        name: "employee",
        message: "Which type of employee would you like to add to the team?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I finished entering my team info",
        ],
      })

      .then((data) => {
        console.log(data, "It is console.log");
        if (data.employee === "Manager") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Please enter the manager name",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    return false;
                  }
                },
              },
              {
                type: "number",
                name: "id",
                message: "Please enter the manager's employee id",
                validate: (idInput) => !!idInput,
              },
              {
                type: "input",
                name: "email",
                message: "Please enter the manager's email",
                validate: (emailInput) => {
                  if (emailInput) {
                    return true;
                  } else {
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "officeNumber",
                message: "Please enter the manager's office number",
                validate: (officeNumberInput) => {
                  if (officeNumberInput) {
                    return true;
                  } else {
                    return false;
                  }
                },
              },
            ])
            .then((templateData) => {
              const newManager = new Manager(
                templateData.name,
                templateData.id,
                templateData.email,
                templateData.officeNumber
              );

              this.teamArray.push(newManager);
              console.log(this);
              this.questions();
            });
        } else if (data.employee === "Engineer") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Please enter the engineer's name",
                validate: (nameInput) => !!nameInput,
              },
              {
                type: "number",
                name: "id",
                message: "Please enter the engineer's employee id",
                validate: (idInput) => !!idInput,
              },
              {
                type: "input",
                name: "email",
                message: "Please enter the engineer's email",
                validate: (emailInput) => !!emailInput,
              },
              {
                type: "input",
                name: "github",
                message: "Please enter the engineer's github username",
                validate: (githubInput) => !!githubInput,
              },
            ])
            .then((templateData) => {
              const newEngineer = new Engineer(
                templateData.name,
                templateData.id,
                templateData.email,
                templateData.github
              );
              this.teamArray.push(newEngineer);
              this.questions();
            });
        } else if (data.employee === "Intern") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Please enter the intern's name",
                validate: (nameinput) => !!nameinput,
              },
              {
                type: "number",
                name: "id",
                message: "Please enter the intern's employee id",
                validate: (idInput) => !!idInput,
              },
              {
                type: "input",
                name: "email",
                message: "Please enter the intern's email",
                validate: (emailInput) => !!emailInput,
              },
              {
                type: "input",
                name: "school",
                message: "Please enter the intern's school name",
                validate: (schoolInput) => !!schoolInput,
              },
            ])
            .then((templateData) => {
              const newIntern = new Intern(
                templateData.name,
                templateData.id,
                templateData.email,
                templateData.school
              );
              this.teamArray.push(newIntern);
              this.questions();
            });
        } else if (data.employee == "I finished entering my team info") {
          const pagehtml = generateHTML(this.getTeamArray());
          fs.writeFile("./dist/index.html", pagehtml, (err) => {
            if (err) throw new Error(err);
            console.log(
              "Page created! Check out index.html in the dist/ folder to see it!"
            );
          });
        }
      });
  }
}
const prompt = new Prompt();

prompt.questions();
/**
 * List prompt example
 */
module.exports = Prompt;
