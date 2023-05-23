// Circle shape generator
exports.generateCircle = function(color) {
  return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
}

// Triangle shape generator
exports.generateTriangle = function(color) {
  return `<polygon points="150,20 50,170 250,170" fill="${color}" />`;
}

// Square shape generator
exports.generateSquare = function(color) {
  return `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
}
