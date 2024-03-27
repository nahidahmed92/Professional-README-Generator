// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'desc',
    message: 'Provide a short description',
    choices: ['Yes', 'No'],
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
    name: 'toc',
    message: 'Enter table of content',
    choices: ['Yes', 'No'], // how to ask for more and when no go to next question   // [Installation](#installation)
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: [
      'Apache',
      'Cloud Native Computing Foundation',
      'GNU',
      'MIT',
      'ISC',
      'OpenBSD',
      'Rust',
      'Wordpress',
      'Joomla',
    ],
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
];

console.log('question: ', questions[0]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    fileName,
    `
  # ${data.title}
  `,
    (error) => (error ? console.error(error) : console.log(data))
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    if (response.title === '') {
      console.log('Title required to continue');
      return;
    }
    writeToFile('README.md', response);
  });
}

// Function call to initialize app
init();
