const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

// Prompt the user for input using inquirer
inquirer
  .prompt([
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
  ])
  .then((answers) => {
    // Destructuring the answers object
    const { text, textColor, shape, shapeColor } = answers;

    // Generates the SVG code
    const svgCode = generateSVG(text, textColor, shape, shapeColor);

    // Write the SVG code to a file named 'logo.svg'
    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) {
        console.log('Error at generating the .SVG file:', err);
      } else {
        console.log('Success at generating the logo.svg file!');
      }
    });
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });