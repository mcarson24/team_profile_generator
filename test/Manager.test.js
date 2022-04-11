const Manager = require('../src/lib/Manager.js')

const manager = new Manager('Steve Test', 22, 'steve.test@example.com', 221)

describe('Manager', () => {
  describe('Initialization', () => {
    it('should be initialized with a name, id, email, and also an office number', () => {
      expect('office' in manager).toBe(true)
      expect(manager.office).toEqual(221)
      expect(manager.name).toEqual('Steve Test')
      expect(manager.id).toEqual(22)
      expect(manager.email).toEqual('steve.test@example.com')
    })

    it('should throw an error if the office number is missing or is not of type integer', () => {
      expect(() => new Manager('Manny Manager', 33, 'manny.manager@example.com')).toThrow(new Error('An office number of type integer is required.'))
      expect(() => new Manager('Manny Manager', 33, 'manny.manager@example.com', '    ')).toThrow(new Error('An office number of type integer is required.'))
      expect(() => new Manager('Manny Manager', 33, 'manny.manager@example.com', -22)).toThrow(new Error('An office number of type integer is required.'))
    })
  })
  describe('getRole', () => {
    it('should return a role of \'Manager\'', () => {
      expect(manager.getRole()).toEqual('Manager')
    })
  })
})