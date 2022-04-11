const Employee = require('../lib/Employee.js')

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
})