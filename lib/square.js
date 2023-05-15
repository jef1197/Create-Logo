const Shape = require('./shape.js');

class Square extends Shape {
  constructor(SColor) {
    super(SColor);
  }
  
  render() {
    return `<rect x="62.5" y="10" width="175" height="175" fill='${this.SColor}' />`;
  }
}

module.exports = Square;
