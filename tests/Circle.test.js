const Circle = require('../lib/Circle');

describe('Circle', () => {
  it('should render a red circle', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});
