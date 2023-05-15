const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor(SColor) {
    super(SColor);
  }
  render() {
    return `<polygon points="0,200 300,200 150,0" fill='${this.SColor}' />`;
  }
}

module.exports = Triangle;
