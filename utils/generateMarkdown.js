// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.descMotivation} ${data.descBuild} ${data.descProblem} ${data.descLearn}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#how-to-contribute)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## How to Contribute

  ${data.contribute}

  ## Test

  ${data.test}

  ## Questions

  [GitHub](https://github.com/${data.questionsGitHub})
`;
}

module.exports = generateMarkdown;
