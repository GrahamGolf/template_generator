const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

let firstEmployee = true;
let teamList = [];
let createTeam = true;


async function init () {
    while (createTeam === true) {
        if (firstEmployee) {
            await createManager()
            firstEmployee = false
        }
        else {
            await inquirer
            .prompt ([
                {                
                type: "list",
                message: "Would you like to add another employee to this team?",
                choices: ["yes", "no"],
                name: "addEmployee"
                }
        ]).then(async function(response){
            if (response.addEmployee === "yes") {
                await employeeType()
            }
            else {
                createTeam = false
            }
        })
        }
    }
    console.log(teamList)
    const html = render(teamList);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }

    fs.writeFile(outputPath, html, function(err) {

        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
}

init()

function employeeType () {
    return inquirer
    .prompt ([
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["manager", "engineer", "intern"],
            name: "role"
        },
    ]).then(function(response){
        switch(response.role) {
            case "manager":
                return createManager();
            case "engineer":
                return createEngineer();
            case "intern":
                return createIntern();
            default:
                return null
          }
    })
}


function createManager () {
    return inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Manager's name?",
                name: "name",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "name not entered"
                }
            },
            {
                type: "input",
                message: "What is the Manager's employee id?",
                name: "id",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "id not entered"
                }
            },
            {
                type: "input",
                message: "What is the Manager's email?",
                name: "email",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "email not entered"
                }
            },
            {
                type: "input",
                message: "What is the Manager's office number?",
                name: "officeNumber",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "office number not entered"
                }
            },
        ]).then(function(response){
            teamList.push(new Manager (response.name, response.id, response.email, response.officeNumber))
        })
}

function createEngineer () {
    return inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Engineer's name?",
                name: "name",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "name not entered"
                }
            },
            {
                type: "input",
                message: "What is the Engineer's employee id?",
                name: "id",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "id not entered"
                }
            },
            {
                type: "input",
                message: "What is the Engineer's email?",
                name: "email",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "email not entered"
                }
            },
            {
                type: "input",
                message: "What is the Engineer's Github name?",
                name: "github",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "github not entered"
                }
            },
        ]).then(function(response){
            teamList.push(new Engineer (response.name, response.id, response.email, response.github))
        })
}

function createIntern () {
    return inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "name",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "name not entered"
                }
            },
            {
                type: "input",
                message: "What is the Intern's employee id?",
                name: "id",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "id not entered"
                }
            },
            {
                type: "input",
                message: "What is the Intern's email?",
                name: "email",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "email not entered"
                }
            },
            {
                type: "input",
                message: "What school does the intern attend?",
                name: "school",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "school not entered"
                }
            },
        ])
        .then(function(response){
            teamList.push(new Intern (response.name, response.id, response.email, response.school))
        })
}