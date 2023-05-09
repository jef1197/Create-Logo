import Component from './component.js';

class Circle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `circle`;
  }
}

export default Circle;
