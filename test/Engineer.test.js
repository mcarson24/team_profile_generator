const Engineer = require('../lib/Engineer.js')

const engineer = new Engineer('Brittany Test', 20, 'brittany.test@example.com', 'brittytesty')
describe('Engineer', () => {
  describe('initialization', () => {
    it('should be initialized with a name, id, email, and also a github username', () => {
      expect('github' in engineer).toBe(true)
      expect(engineer.github).toEqual('brittytesty')
    })
    it('should throw an error if the github username is missing or is not a string', () => {
      expect(() => new Engineer('Ashley Test', 11, 'ashley.test@example.com')).toThrow(new Error('A Github username of type string is required.'))
      expect(() => new Engineer('Ashley Test', 11, 'ashley.test@example.com', '   ')).toThrow(new Error('A Github username of type string is required.'))
      expect(() => new Engineer('Ashley Test', 11, 'ashley.test@example.com', false)).toThrow(new Error('A Github username of type string is required.'))
    })
  })
  describe('getGithub', () => {
    it('should return an employee\'s github username', () => {
      expect(engineer.getGithub()).toEqual('brittytesty')
    })
  })

  describe('getRole', () => {
    it('should return \'Engineer\' as the employee\'s role', () => {
      expect(engineer.getRole()).toEqual('Engineer')
    })
  })
})