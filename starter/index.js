const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Function to prompt user for team manager's information
function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:"
        }
    ]);
}

// Function to prompt user for additional team members
function promptTeamMember() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose the team member's role:",
            choices: ["Engineer", "Intern", "Finish building the team"]
        }
    ]);
}

// Function to prompt user for engineer's information
function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:"
        }
    ]);
}

// Function to prompt user for intern's information
function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:"
        }
    ]);
}

// Function to initialize the application
async function init() {
    try {
        const managerData = await promptManager();
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        const teamMembers = [manager];

        let addTeamMember = true;
        while (addTeamMember) {
            const { role } = await promptTeamMember();
            switch (role) {
                case "Engineer":
                    const engineerData = await promptEngineer();
                    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                    teamMembers.push(engineer);
                    break;
                case "Intern":
                    const internData = await promptIntern();
                    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                    teamMembers.push(intern);
                    break;
                case "Finish building the team":
                    addTeamMember = false;
                    break;
            }
        }

        const html = render(teamMembers);
        fs.writeFileSync(outputPath, html);
        console.log("HTML file generated successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Initialize the application
init();