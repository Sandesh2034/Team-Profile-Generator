// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// lib/Intern.js

// Import the Employee class
const Employee = require("./Employee");

// Define the Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);
        // Set the specific property for Intern
        this.school = school;
    }

    // Method to get the intern's school
    getSchool() {
        return this.school;
    }

    // Override the getRole() method to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

// Export the Intern class
module.exports = Intern;
