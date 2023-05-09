import { prompt } from 'inquirer';
import { writeFile } from 'fs/promises';
import { circle } from './circle';
import { square } from './square';
import { triangle } from './triangle';


class CLI {
  constructor() {

  }

  run() {
    this.promptUser()
    .then(input => {
      console.log(input.shape)
      
    })
  }

  promptUser() {
    return prompt([
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

export default CLI;
