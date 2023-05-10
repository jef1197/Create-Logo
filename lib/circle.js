const Component = require('./component.js');

class Circle extends Component {
  constructor(SColor) {
    super(SColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill='${this.SColor}' />`;
  }
}

module.exports = Circle;
