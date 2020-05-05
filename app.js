const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// ​const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

function createManager () {
    inquirer
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
        })
}

function createEngineer () {
    inquirer
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
    inquirer
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


createManager()
createEngineer()
createIntern()