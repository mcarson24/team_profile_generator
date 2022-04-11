const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, email, school) {
    if (!school || !school.trim().length) throw new Error('A school name of type string is required.')
    
    super(name, id, email)

    this.school = school
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern