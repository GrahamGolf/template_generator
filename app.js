const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// ​const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
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
        console.log(response)
        switch(response.role) {
            case "manager":
                createManager();
                break;
            case "engineer":
                createEngineer();
                break;
            case "intern":
                createIntern();
                break;
            default:
                return null
          }
    })
}
    
    
    //prompt for manager information to start team creation
    //once manager is entered, prompt for adding additiona team members
    //if yes, prompt for employee role
    //if no, create team.html


function createManager () {
    return inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Manager's employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Manager's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the Manager's office number?",
                name: "officeNumber"
            },
        ]).then(function(response){
            console.log(response)
            teamList.push(new Manager (response.name, response.id, response.email, response.officeNumber))
            console.log(teamList);
        })
}

function createEngineer () {
    return inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Engineer's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Engineer's employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Engineer's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the Engineer's Github name?",
                name: "github"
            },
        ]).then(function(response){
            console.log(response)
        })
}

function createIntern () {
    return inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Intern's employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Intern's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What school does the intern attend?",
                name: "school"
            },
        ])
        .then(function(response){
            console.log(response)
        })
}


// employeeType()