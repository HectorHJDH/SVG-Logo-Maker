const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

// SVG generator function that takes in the user input and returns the logo.svg
function generateSVG(text, textColor, shape, shapeColor) {
  let shapeEl;

  // Determines the shape based on the user input
  if (shape === 'circle') {
    // Calls the generateCircle function from the shapes.js file
    shapeEl = shapes.generateCircle(shapeColor);
  } else if (shape === 'triangle') {
    // Calls the generateTriangle function from the shapes.js file
    shapeEl = shapes.generateTriangle(shapeColor);
  } else if (shape === 'square') {
    // Calls the generateSquare function from the shapes.js file
    shapeEl = shapes.generateSquare(shapeColor);
  } 

  // SVG code generation with the chosen shape and dimensions
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    ${shapeEl}
    <text x="50%" y="50%" font-size="46" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
    </svg>`;

  return svg;
}

// Prompts the user for input using inquirer
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