const Triangle = require('../lib/Triangle');

describe('Triangle', () => {
  it('should render a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,20 50,170 250,170" fill="blue" />');
  });
});
