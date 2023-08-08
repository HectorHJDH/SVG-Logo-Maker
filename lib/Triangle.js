const Shape = require('../Shape');

class Triangle extends Shape {
  render() {
    return `<polygon points="150,20 50,170 250,170" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
