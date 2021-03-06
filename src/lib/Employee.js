class Employee {
  constructor(name, id, email) {
    // if (typeof id !== 'number' || id <= 0) {
    //   throw new Error('An unsigned integer id is required.')
    // }
    
    if (typeof name !== 'string' || !name.trim().length) {
      throw new Error('A string name is required.')
    }

    if (typeof email !== 'string' || !email.trim().length) {
      throw new Error('A string email is required.')
    }

    this.id = parseInt(id)
    this.name = name
    this.email = email
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return 'Employee'
  }
}

module.exports = Employee