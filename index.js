// Dependencies and packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'descMotivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'descBuild',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'descProblem',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'descLearn',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What use does this project have?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['Apache', 'GNU', 'MIT', 'ISC', 'OpenBSD', 'None'],
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What are the guidelines how developers can contribute.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can others test your application.',
  },
  {
    type: 'input',
    name: 'questionGitHub',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'questionEmail',
    message: 'What is your email address?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => (error ? console.error(error) : console.log(data)));
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    if (response.title === '') {
      console.log('Title required to continue');
      return;
    }
    writeToFile('README.md', generateMarkdown(response));
  });
}

// Call to initialize app
init();
