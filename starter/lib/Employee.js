// TODO: Write code to define and export the Employee class
// lib/Employee.js

// Define the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method to get the employee's name
    getName() {
        return this.name;
    }

    // Method to get the employee's ID
    getId() {
        return this.id;
    }

    // Method to get the employee's email
    getEmail() {
        return this.email;
    }

    // Method to get the employee's role (this method will be overridden by subclasses)
    getRole() {
        return 'Employee';
    }
}

// Export the Employee class
module.exports = Employee;
