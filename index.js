// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");
// const generateReadme = require('./utils/generateReadme');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter Your Github Username",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid github username!');
                    return false;
                }
            }
          },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe your project. What is the purpose of this project? You can be as detailed as your want. Showcase your pride and joy to the world!',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter a valid description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectInsallation',
            message: 'Provide a step-by-step description of how to get the development environment running. What installations are required?',
        },
        {
            type: 'checkbox',
            name: 'projectLicense',
            message: 'If applicable, provide licensse that will let other developers know what they can and cannot do with your project',
            choices: ['Apache', 'Boost', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'Unlicensed']

        },
        {
            type: 'checkbox',
            name: 'projectLanguages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'python', 'c++']
        },
        {
            type: 'input',
            name: 'projectContributors',
            message: 'Are there any contributors you would like to give a shoutout to? GIVE THEM CREDIT'
        },
    ])
    .then(data =>{
        console.log("generating markdown...")
        writeToFile('./stored/README.md',generateMarkdown({...data}));
    })
};

promptUser();
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    // writing file and syncing it using path to join the current working directory using the fileName and user data.
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
};



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
