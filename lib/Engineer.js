const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineee";
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.export = Engineer;
