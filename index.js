// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./Develop/utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
        return inquirer.prompt(questions);
    }
    // An array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What javascript command is used to install the necessary dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license',
        choices: ['None', 'MIT License', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Eclipse Publice License 2.0', 'GNU AGPLv3', 'GNU GPLv2', 'GNU LGPLv2.1', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What javascript command is used to test your project?',
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
];

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
        .then(() => console.log("Successfully wrote to README.md!"))
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();