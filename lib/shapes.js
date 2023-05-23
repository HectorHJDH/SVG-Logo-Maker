// Circle shape generator
export function generateCircle(color) {
  return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
}

// Triangle shape generator
export function generateTriangle(color) {
  return `<polygon points="150,20 50,180 250,180" fill="${color}" />`;
}

// Square shape generator
export function generateSquare(color) {
  return `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
}
