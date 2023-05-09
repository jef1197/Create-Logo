class Component {
  constructor(text, tColor, SColor) {
    this.text = text;
    this.tColor = tColor;
    this.SColor = SColor;
    this.reg= /^#([0-9a-f]{3}){1,2}$/i;
    // console.log(reg.test('#ABC')); //true
    // console.log(reg.test('#AABBCC')); //true
  }

  CheckHex() {
    console.log(this.reg.test(this.tColor))
  }

  render() {
    return new Error('Child class must implement a render() method.');
  }
}

module.exports = Component