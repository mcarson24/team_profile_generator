const Manager = require('../lib/Manager.js')

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
  })
  describe('getRole', () => {
    it('should return a role of \'Manager\'', () => {
      expect(manager.getRole()).toEqual('Manager')
    })
  })
})