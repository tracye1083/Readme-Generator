// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([{
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Select a license',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter testing instructions: ',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'questionsUser',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'questionsEmail',
    },
])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

.then((response) => {
    console.log(response)
    let { title, description, installation, usage, license, contributing, tests, questionsUser, questionsEmail } = response;
    fs.writeFile("README.md", `

# Title
${response.title}

## Description
${response.description}




`, "utf8", (err) => err ? console.error(err) : console.log('Success!'));
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();