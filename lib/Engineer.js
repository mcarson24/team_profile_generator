const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (!github || !github.trim().length) throw new Error('A Github username of type string is required.')
    
    super(name, id, email)

    this.github = github
  }

  getGithub() {
    return this.github
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer