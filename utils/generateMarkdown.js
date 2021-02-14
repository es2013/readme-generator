//To Whom It May Concern - I apologize but these licensebadge instructions slightly confused me, I decided to leave this commented out. sorry.

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
 // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  =================

## Description
${data.projectDescription}
## Installation
${data.projectInstallation}
## License
${data.projectLicense}
## Languages
${data.projectLanguages}
## Project Contributors
${data.projectContributors}
### Author/Contact profile
[${data.username}](https://github.com/${data.username})
`;
}


module.exports = generateMarkdown;
