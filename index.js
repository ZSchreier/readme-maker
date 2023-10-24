
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
  {
    type: 'input',
    message: 'What would you like your title to be?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Give me your description:',
    name: 'description'
  },
  {
    type: 'input',
    message: 'List any install instructions:',
    name: 'installInstructions'
  },
  {
    type: 'input',
    message: 'List any pertinent usage information:',
    name: 'usageInfo'
  },
  {
    type: 'input',
    message: 'List any contribution guidelines:',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'List any necessary test instructions:',
    name: 'testInstructions'
  },
  {
    type: 'list',
    message: 'Which license is your project using:',
    name: 'license',
    choices: [
      {name: 'MIT', value: ['MIT','https://choosealicense.com/licenses/mit/']},
      {name: 'GNU GPLv3', value: ['GNUGPLv3','https://choosealicense.com/licenses/gpl-3.0/']},
      {name: 'Apache', value: ['Apache','https://choosealicense.com/licenses/apache-2.0/']}
    ]
  },
  {
    type: 'input',
    message: `What's your Github username?`,
    name: 'githubName'
  },
  {
    type: 'input',
    message: `What email do you want to provide for others?`,
    name: 'email'
  }
];


function init() {
  inquirer.prompt(questions)
    .then(responses => {
      const text = 
`
# ${responses.title}
![Static Badge](https://img.shields.io/badge/License-${responses.license[0]}-blue)


## Description

${responses.description}

## Table of Contents

- [Installation](#installation)
- [Usage Infromation](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)

## Installation

${responses.installInstructions}

## Usage Information

${responses.usageInfo}

## Contribution Guidelines

${responses.contribution}

## Test Instructions

${responses.testInstructions}

## License

The license used for this project is [${responses.license[0]}](${responses.license[1]}).

---

## Questions

Contact me on [Github](https://github.com/${responses.githubName})

Contact me via email at ${responses.email}`;

      fs.writeFile('newREADME.md', text, (error) => {
        if(error){
          console.log('Something failed here');
        }
      })
    })
}

init();
