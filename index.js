// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [];

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

# ${title}

## Description
${description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing


## Tests


## Questions
If you have any questions about the repo, open an issue or contact me directly at <${questionsEmail}>.
You can find more of my work at [${questionsUser}](https://www.github.com/${questionsUser})


`, "utf8", (err) => err ? console.error(err) : console.log('Success!'));
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();