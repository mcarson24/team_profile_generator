const inquirer = require('inquirer')
const questions = require('./src/questions.js')


inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    // TODO: Create the manager
    // TODO: Create the engineer(s)
    // TODO: Create the intern(s)

    // TODO: Render each card
    // TODO: Render each card onto page
  })
  .catch(err => console.error(err))
  