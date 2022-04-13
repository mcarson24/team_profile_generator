const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./src/questions.js')
const Manager = require('./src/lib/Manager.js')
const Engineer = require('./src/lib/Engineer.js')
const Intern = require('./src/lib/Intern.js')
const Builder = require('./src/lib/Builder.js')


inquirer.prompt(questions)
  .then(answers => {
    const team_members = []
    // Create the manager
    const {name, id, email, office} = answers.manager
    team_members.push(new Manager(name, id, email, office))
    // Create the engineer(s)
    if (answers.employees.includes('Engineer')) {
      answers.engineers.forEach(engineer => {
        const {name, id, email, github} = engineer
        team_members.push(new Engineer(name, id, email, github))
      });
    }
    // Create the intern(s)
    if (answers.employees.includes('Intern')) {
      answers.interns.forEach(intern => {
        const {name, id, email, school} = intern
        team_members.push(new Intern(name, id, email, school))
      })
    }
    // TODO: Render each card
    let template = ''
    team_members.forEach(employee => {
      const builder = new Builder(employee)
      template += builder.renderTemplate()
    })
    // TODO: Render each card onto page
    let indexTemplate = fs.readFileSync('./templates/index.template.html', { encoding: 'utf-8'})
    indexTemplate = indexTemplate.replace('{{ cards }}', template)

    fs.writeFileSync('./dist/team_profile.html', indexTemplate)
  })
  .catch(err => console.error(err))
  