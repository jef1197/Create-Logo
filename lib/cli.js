const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svg')
const Circle = require ('./circle');
const Square = require ('./square');
const Triangle = require ('./triangle');



class CLI {
  constructor() {
    this.text = '';
    this.tColor = '';
  }

  run() {
    this.promptUser()
    .then(input => {
      this.text = input.text;
      this.tColor = input.colorText;
      switch (input.shape ) {
        case 'Square':
        return new Square(input.color).render();
        case 'Circle':
        return new Circle(input.color).render();
        case 'Triangle':
        return new Triangle(input.color).render();
        default :
        return console.log(input.shape);
      }
    })
    .then(shape => {
      return writeFile(
        join(__dirname, '..', 'output', 'logo.svg'),
        createSVG(this.text, this.tColor, shape)
      )
    })
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => {
      console.log(err);
      console.log('Oops. Something went wrong.');
    })
  }

  promptUser() {
    return inquirer.
    prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Logo Name: ',
      },
      {
        type: 'input',
        name: 'colorText',
        message: 'Color of Text (text or hexidecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Enter Shape:',
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
        type: 'input',
        name: 'color',
        message: 'Color of Shape (text or hexidecimal):',
      },
    ])
  }
}

module.exports = CLI;