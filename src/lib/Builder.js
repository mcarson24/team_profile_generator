const fs = require('fs')

class Builder {
  constructor(employee) {
    this.template = employee.constructor.name.toLowerCase()
    this.employee = employee
  }

  renderTemplate() {
    let template = fs.readFileSync(`./templates/${this.template}.template.html`, { encoding: 'utf-8' })
    
    template = template.replace('{{ title }}', this.employee.constructor.name)
    for (const attribute in this.employee) {
      template = template.replace(new RegExp(`{{ ${attribute} }}`, 'g'), this.employee[attribute])
    }
    return template
  }
}

module.exports = Builder