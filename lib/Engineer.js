// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // if (!name) {
        //     throw new Error("You are missing the name.");
        //   }
        //   if (!id) {
        //     throw new Error("You are missing the id.");
        //   }
        //   if (!email) {
        //     throw new Error("You are missing the email.");
        //   }
        super(name, id, email);
        this.github = github
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer