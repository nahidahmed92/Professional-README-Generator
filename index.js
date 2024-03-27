// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
  // {
  //   type: 'input',
  //   name: 'tocQuestion',
  //   message: 'Enter table of content',
  // },
  // {
  //   type: 'checkbox',
  //   name: 'toc',
  //   message: 'Do you have the following items?',
  //   choices: ['Description', 'Installation', 'Usage', 'License', 'Contribute', 'Test'], // how to ask for more and when no go to next question   // [Installation](#installation)
  // },
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
    choices: ['Apache', 'GNU', 'MIT', 'ISC', 'OpenBSD', 'Joomla'],
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What are the guidelines how developers can contribute.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can others test your application.', // test maybe add a question if theyd like to write a test section
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

console.log('question: ', questions[0]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => (error ? console.error(error) : console.log(data)));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    if (response.title === '') {
      console.log('Title required to continue');
      return;
    }
    writeToFile('README.md', generateMarkdown(response));
  });
}

// Function call to initialize app
init();
