const Circle = require('../lib/circle.js');

describe('Circle', () => {
  test('should set color to blue', () => {
    const circle = new Circle();
    circle.setColor('blue')
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill='blue' />`);
  });
});

