// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// lib/Engineer.js

// Import the Employee class
const Employee = require("./Employee");

// Define the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);
        // Set the specific property for Engineer
        this.github = github;
    }

    // Method to get the engineer's GitHub username
    getGithub() {
        return this.github;
    }

    // Override the getRole() method to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

// Export the Engineer class
module.exports = Engineer;
