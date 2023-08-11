const Square = require('../lib/Square');

describe('Square', () => {
  it('should render a green square', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
  });
});
