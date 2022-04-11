const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./src/questions.js')
const Manager = require('./src/lib/Manager.js')
const Engineer = require('./src/lib/Engineer.js')
const Intern = require('./src/lib/Intern.js')


inquirer.prompt(questions)
  .then(answers => {
    // Create the manager
    // const {name, id, email, office} = answers.manager
    // const manager = new Manager(name, id, email, office)
    // // Create the engineer(s)
    // if (answers.employees.includes('engineers')) {
    //   answers.engineers.forEach(engineer => {
    //     const {name, id, email, github} = engineer
    //     const engineerObj = new Engineer(name, id, email, github)
    //   });
    // }
    // // Create the intern(s)
    // if (answers.employees.includes('Intern')) {
    //   answers.interns.forEach(intern => {
    //     const {name, id, email, school} = intern
    //     const internObj = new Intern(name, id, email, school)
    //   })
    // }
    // TODO: Render each card
    answers.employees.forEach(employeeType => {
      const template = fs.readFileSync(`./templates/${employeeType}.template.html`, {
        encoding: 'utf-8'
      })
      console.log(template)
    })
    // TODO: Render each card onto page
  })
  .catch(err => console.error(err))
  