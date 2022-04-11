const Employee = require('../lib/Employee.js')

const employee = new Employee('Jane Test', 12, 'jane.test@example.com')

describe('Employee', () => {
  describe('Initialization', () => {
    it('should be initialized with a name, id, and email attribute', () => {
      const employee = new Employee('John Test', 12, 'john.test@example.com')
      
      expect('name' in employee).toBe(true)
      expect(employee.name).toEqual('John Test')

      expect('id' in employee).toBe(true)
      expect(employee.id).toEqual(12)

      expect('email' in employee).toBe(true)
      expect(employee.email).toEqual('john.test@example.com')
    })
    
    it('should thow an error if any of the required arguments are missing or are of the incorrect type', () => {
      expect(() => new Employee('', 12, 'john.test@example.com')).toThrow(new Error('A string name is required.'))
      expect(() => new Employee(true, 12, 'john.test@example.com')).toThrow(new Error('A string name is required.'))
      
      expect(() => new Employee('John Test', '12', 'john.test@example.com')).toThrow(new Error('An unsigned integer id is required.'))
      expect(() => new Employee('John Test', -4, 'john.test@example.com')).toThrow(new Error('An unsigned integer id is required.'))
      
      expect(() => new Employee('John Test', 12, '')).toThrow(new Error('A string email is required.'))
      expect(() => new Employee('John Test', 12, 24)).toThrow(new Error('A string email is required.'))
    })
  })
  describe('getId', () => {
    it('should return the employee\'s id', () => {
      expect(employee.getId()).toEqual(12)
    })
  })
  describe('getName', () => {
    it('should return the employee\'s name', () => {
      expect(employee.getName()).toEqual('Jane Test')
    })
  })
  describe('getEmail', () => {
    it('should return the employee\'s email address', () => {
      expect(employee.getEmail()).toEqual('jane.test@example.com')
    })
  })
  describe('getRole', () => {
    it('should return a role of \'Employee\'', () => {
      expect(employee.getRole()).toEqual('Employee')
    })
  })
})