// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");

const promptUser = () => {
    inquirer.prompt([
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
            message: 'Please describe your project. What is the purpose of this project? You can be as detailed as your want. Showcase your pride and joy to the world!'
        },
        {
            type: 'input',
            name: 'projectInstallation',
            message: 'Provide a step-by-step description of how to get the development environment running. What installations are required?',
        },
        {
            type: 'checkbox',
            name: 'projectLicense',
            message: 'If applicable, provide license that will let other developers know what they can and cannot do with your project',
            choices: ['None','Apache', 'Boost', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'Unlicensed'],
            default:'None'

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
        {
            type: "input",
            name: "username",
            message: "Enter Your Github Username"
          }
    ])
    .then(data =>{
        console.log("readme file ready!")
        writeToFile('./stored/README.md',generateMarkdown({...data}));
    })
};

promptUser();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // writing file and syncing it using path to join the current working directory using the fileName and user data.
    //Notes from online: fs.writeFileSync() creates a new file if the specified file does not exist.
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }



// TODO: Create a function to initialize app (commenting out, already initialized app with promptUser())
// function init() { }

// Function call to initialize app
// init();
