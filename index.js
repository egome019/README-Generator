const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
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
            "BSD 3"
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
        // declared the prompt questions in order to access user response
        const data = await inquirer.prompt(questions)
        
        // used switch statement for the license part of readme to link to correct license and passed the license property of the user's response
        switch (data.license) {
            case "MIT":
                data.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)";
                data.link = "[MIT](https://opensource.org/licenses/MIT)";
                break;
            
            case "APACHE 2.0":
                data.badge = "[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/licenses/Apache-2.0)";
                data.link = "[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)";
                break;
                
            case "GPL 3.0":
                data.badge = "[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
                data.link = "[GPL 3.0](https://opensource.org/licenses/GPL-3.0)";
                break;

            case "BSD 3":
                data.badge = "[![License: GPL](https://img.shields.io/badge/License-BSD-red.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                data.link = "[BSD-3](https://opensource.org/licenses/BSD-3-Clause)";
                break;
        }

        // declared the markdown file template and passed data const to fill in template with user responses
        const readme = generateMarkdown(data);
        // readme file gets generated through writeFileAsync const and I passed through the name of file generated and the readme template
        await writeFileAsync("README.md", readme);

        console.log("Success!")
    } catch (error) {
        console.log(error)
    }
    
};
// call the init function that begins the process of generating the readme file
init();
