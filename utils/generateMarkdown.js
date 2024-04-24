// Function returns a license badge based on which license is passed by user input
function renderLicenseBadge(license) {
  const licenseBadges = {
    Apache: '![Apache Badge](https://img.shields.io/pypi/l/giteo)',
    GNU: '![GNU Badge](https://img.shields.io/badge/license-GPLv3-blue)',
    MIT: '![MIT Badge](https://img.shields.io/badge/license-MIT-blue)',
    ISC: '![ISC Badge](https://img.shields.io/pypi/l/xpanse)',
    OpenBSD: '![OpenBSD Badge](https://img.shields.io/pypi/l/cobras)',
    None: '',
  };
  return licenseBadges[license];
}

// Function returns the license link
function renderLicenseLink(license) {
  const licenseLinks = {
    Apache: '[Apache](https://www.apache.org/licenses/LICENSE-2.0)',
    GNU: '[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)',
    MIT: '[MIT](https://opensource.org/license/mit)',
    ISC: '[ISC](https://opensource.org/license/isc-license-txt)',
    OpenBSD: '[OpenBSD](https://www.openbsd.org/policy.html)',
    None: '',
  };
  return licenseLinks[license];
}

// Function returns the license section of README
function renderLicenseSection(license) {
  const licenseSections = {
    Apache: 'Apache License Version 2.0, January 2004',
    GNU: 'The GNU General Public License is a free, copyleft license for software and other kinds of works.',
    MIT: 'MIT License',
    ISC: 'ISC License',
    OpenBSD: 'Berkeley Software Distribution License',
    None: '',
  };
  return licenseSections[license];
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

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

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## How to Contribute

  ${data.contribute}

  ## Test

  ${data.test}

  ## Questions

  [GitHub](https://github.com/${data.questionGitHub})

  [Email](mailto:${data.questionEmail})
`;
}

module.exports = generateMarkdown;
