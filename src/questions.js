const inquirer = require('inquirer')
const recursive = require('inquirer-recursive')

inquirer.registerPrompt('recursive', recursive)

const questions = [
  // {
  //   name: 'manager.name',
  //   message: 'Enter the manager\'s name',
  // },
  // {
  //   name: 'manager.id',
  //   message: 'Enter the manager\'s id',
  // },
  // {
  //   name: 'manager.email',
  //   message: 'Enter the manager\'s email address',
  // },
  // {
  //   name: 'manager.office',
  //   message: 'Enter the manager\'s office number'
  // },
  {
    name: 'employees',
    type: 'checkbox',
    message: 'Which type of employees does your team have?',
    choices: ['Engineer', 'Intern']
  },
  {
    type: 'recursive',
    name: 'engineers',
    message: 'Add an engineer?',
    prompts: [
      {
        name: `name`, 
        message: `Enter engineer's name`,
      },
      {
        name: `id`, 
        message: `Enter engineer's id`,
      },
      {
        name: `email`, 
        message: `Enter engineer's email address`,
      },
      {
        name: `github`, 
        message: `Enter engineer's github username`,
      },
    ],
    when: answers => answers.employees.includes('Engineer'),
  },
  {
    type: 'recursive',
    name: 'interns',
    message: 'Add an intern?',
    prompts: [
      {
        name: `name`, 
        message: `Enter interns's name`,
      },
      {
        name: `id`, 
        message: `Enter intern's id`,
      },
      {
        name: `email`, 
        message: `Enter intern's email address`,
      },
      {
        name: `school`, 
        message: `Enter intern's school`,
      },
    ],
    when: answers => answers.employees.includes('Intern'),
  }
]

module.exports = questions