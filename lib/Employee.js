class Employee {
  constructor(name, id, email) {
    if (typeof id !== 'number' || id <= 0) {
      throw new Error('An unsigned integer id is required.')
    }
    
    if (typeof name !== 'string' || !name.trim().length) {
      throw new Error('A string name is required.')
    }

    if (typeof email !== 'string' || !email.trim().length) {
      throw new Error('A string email is required.')
    }

    this.id = id
    this.name = name
    this.email = email
  }
}

module.exports = Employee