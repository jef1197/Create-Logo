const Square = require('../lib/square.js');

describe('Square', () => {
  test('should set color to red', () => {
    const square = new Square();
    square.setColor('red')
    expect(square.render()).toEqual(`<rect x="62.5" y="10" width="175" height="175" fill='red' />`);
  });
});

