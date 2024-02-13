// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// lib/Manager.js

// Import the Employee class
const Employee = require("./Employee");

// Define the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call the constructor of the parent class (Employee)
        super(name, id, email);
        // Set the specific property for Manager
        this.officeNumber = officeNumber;
    }

    // Method to get the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the getRole() method to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

// Export the Manager class
module.exports = Manager;
