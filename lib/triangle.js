import Component from './component.js';

class Triangle extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `triangle`;
  }
}

export default Triangle;
