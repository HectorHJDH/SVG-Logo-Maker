const { generateTriangle } = require('./shapes.js');

// Triangle test case
describe('generateTriangle', () => {
  it('should generate a triangle SVG element with the specified color', () => {
    const color = 'blue';
    const expected = '<polygon points="150,20 50,170 250,170" fill="blue" />';
    const result = generateTriangle(color);
    expect(result).toEqual(expected);
  });
});
