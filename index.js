// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown')

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            let { title, description, installation, usage, license, contributing, tests, questionsUser, questionsEmail } = response;

            fs.writeFile("README.md", `
# ${title}

![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg "License Badge")

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

To install necessary dependencies, run the following command:

~~~javascript
${installation}
~~~

## Usage

${usage}

## License

This project is licensed under the ${license} license.

## Contributing

${contributing}

## Tests

To run tests, run the following command:

~~~javascript
${tests}
~~~

## Questions

If you have any questions about the repo, open an issue or contact me directly at <${questionsEmail}>.
You can find more of my work at [${questionsUser}](https://www.github.com/${questionsUser})
`, "utf8", (err) => err ? console.error(err) : console.log('Success!'));
        });
}

// Function call to initialize app
init();