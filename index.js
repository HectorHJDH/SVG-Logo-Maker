
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text (up to three characters): ',
    validate: (input) => input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color keyword (OR a hexadecimal number): ',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape: ',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color keyword (OR a hexadecimal number): ',
  },
]

