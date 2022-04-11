const Employee = require('./Employee.js')

class Manager extends Employee {
  constructor(name, id, email, office) {
    if (!office || Number.isNaN(parseInt(office)) || office <= 0) throw new Error('An office number of type integer is required.')

    super(name, id, email)
    
    this.office = office
  }

  getRole() {
    return 'Manager'
  }
}

module.exports = Manager