const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(SColor) {
    super(SColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill='${this.SColor}' />`;
  }
}

module.exports = Circle;
