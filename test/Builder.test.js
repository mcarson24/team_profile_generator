const Builder = require('../src/lib/Builder.js')
const fs = require('fs')
const Engineer = require('../src/lib/Engineer.js')
const Intern = require('../src/lib/Intern.js')

describe('Builder', () => {
  describe('Initialization', () => {
    it('should be initialized with an object of type employee', () => {
      const engineer = new Engineer('Taylor Test', 22, 'taylor.test@test.com', 'testytaylor')
      const builder = new Builder(engineer)

      expect('template' in builder).toBe(true)
      expect(builder.template).toEqual('engineer')

      expect('employee' in builder).toBe(true)
      expect(builder.employee).toEqual(engineer)
    }) 
  })
  describe('renderTemplate', () => {
    const intern = new Intern('Taylor Test', 22, 'taylor.test@test.com', 'Test University')
    const builder = new Builder(intern)
    it('should render the correct template', () => {
      expect(builder.renderTemplate()).toEqual(expect.stringContaining('interns'))
    })
    it('should insert the correct values into the template', () => {
      expect(builder.renderTemplate()).toEqual(expect.stringContaining('Taylor Test'))
      expect(builder.renderTemplate()).toEqual(expect.stringContaining('Intern'))
      expect(builder.renderTemplate()).toEqual(expect.stringContaining('taylor.test@test.com'))
      expect(builder.renderTemplate()).toEqual(expect.stringContaining('Test University'))
    })
  })
})