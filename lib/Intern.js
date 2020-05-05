// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name, id, email, school) {
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
        this.school = school
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }

}

module.exports = Intern