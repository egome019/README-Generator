const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./generateMarkdown");
const generateMarkdown = require("./generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
]






// function that starts the program
async function init(){
    console.log("Generating README...")

    try {
        const response = await inquirer.prompt(questions);

        const readme = generateMarkdown(response);

        await writeFileAsync("README.md", readme);

        console.log("Success!")
    } catch (error) {
        console.log(error)
    }
    
    const readme = response.projectName
    
};

init();
