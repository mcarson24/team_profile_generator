const Intern = require('../lib/Intern.js')

const intern = new Intern('Scott Test', 37, 'scott.test@example.com', 'University of Test')

describe('Intern', () => {
  describe('Initialization', () => {
    it('should be initialized with a name, id, email, and also a school', () => {
      const intern = new Intern('Joey Test', 37, 'joey.test@example.com', 'Test University')

      expect('school' in intern).toBe(true)
      expect(intern.school).toEqual('Test University')
    })

    it('should not be initialized with an office number', () => {
      const intern = new Intern('Joey Test', 37, 'joey.test@example.com', 'Test University', 223)

      expect('office' in intern).toBe(false)
      expect(intern.office).toBe(undefined)
    })

    it('should throw an error if the school name is missing or is not a string', () => {
      expect(() => new Intern('Bill Test', 45, 'bill.test@example.com')).toThrow(new Error('A school name of type string is required.'))
      // expect(() => new Intern('Bill Test', 45, 'bill.test@example.com', '   ')).toThrow(new Error('A school name of type string is required.'))
      expect(() => new Intern('Bill Test', 45, 'bill.test@example.com', false)).toThrow(new Error('A school name of type string is required.'))
    })
  })
  describe('getSchool', () => {
    it('should return the name of the intern\'s school', () => {
      expect(intern.getSchool()).toEqual('University of Test')
    })
  })

  describe('getRole', () => {
    it('should return \'Intern\' as the employee\'s role', () => {
      expect(intern.getRole()).toEqual('Intern')
    })
  })
})