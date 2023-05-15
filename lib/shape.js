class Shape {
  constructor(SColor) {
    this.SColor = SColor;
    this.reg= /^#([0-9a-f]{3}){1,2}$/i;
  }

  setColor(color) {
    this.SColor = color;
  }

  render() {
    throw new Error('Child class must implement a render() method.');
  }
}

module.exports = Shape