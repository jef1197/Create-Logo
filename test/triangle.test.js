const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
  test('should set color to green', () => {
    const triangle = new Triangle();
    triangle.setColor('green')
    expect(triangle.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill='green' />`);
  });
});

