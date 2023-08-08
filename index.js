const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require("./lib/Circle"); // Import the Circle class
const Square = require("./lib/Square"); // Import the Square class
const Triangle = require("./lib/Triangle"); // Import the Triangle class

// SVG generator function that takes in the user input and returns the logo.svg
function generateSVG(text, textColor, shapeInstance) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      ${shapeInstance.render()} <!-- Use the render method of the shape instance -->
      <text x="50%" y="50%" font-size="46" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

// Prompts the user for input using inquirer
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text (up to three characters): ",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color keyword (OR a hexadecimal number): ",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape: ",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color keyword (OR a hexadecimal number): ",
    },
  ])
  .then((answers) => {
    // Destructuring the answers object
    const { text, textColor, shape, shapeColor } = answers;

    // Create the shape instance based on user input
    let shapeInstance;
    if (shape === "circle") {
      shapeInstance = new Circle();
    } else if (shape === "triangle") {
      shapeInstance = new Triangle();
    } else if (shape === "square") {
      shapeInstance = new Square();
    }

    // Set the color and generate the SVG code
    shapeInstance.setColor(shapeColor);
    const svgCode = generateSVG(text, textColor, shapeInstance);

    // Write the SVG code to a file named 'logo.svg'
    fs.writeFile("logo.svg", svgCode, (err) => {
      if (err) {
        console.log("Error at generating the .SVG file:", err);
      } else {
        console.log("Success at generating the logo.svg file!");
      }
    });
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
