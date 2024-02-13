# Team Profile Generator

## Description
As a manager, I often need to quickly generate a webpage that displays my team's basic information, such as their emails and GitHub profiles. This Team Profile Generator helps me accomplish that task efficiently. It's a command-line application built with Node.js that prompts me to input information about the members of my software engineering team and generates an HTML webpage with summaries for each person.

## Features
- Prompts user input for team member information, including name, employee ID, email address, and additional details specific to their role (e.g., office number for managers, GitHub username for engineers, school for interns).
- Supports adding multiple team members, including managers, engineers, and interns.
- Automatically generates an HTML webpage with formatted summaries for each team member.
- Uses validation to ensure user input is in the proper format.
- Easy to use and saves time by automating the process of creating team profiles.

## Installation
1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Open your terminal and navigate to the project directory.
4. Run `npm install` to install the required dependencies.

## Usage
1. Open your terminal and navigate to the project directory.
2. Run `node index.js` to start the application.
3. Follow the prompts to enter information about the team members.
4. Choose to add additional team members or finish building the team when you're done.
5. Once finished, the application will generate an HTML file named `team.html` in the `output` directory.

## Example
1. $ node index.js
2. Enter the manager's name: John Doe
3. Enter the manager's employee ID: 123
4. Enter the manager's email address: john@example.com
5. Enter the manager's office number: 101
6. Choose the team member's role: Engineer
7. Enter the engineer's name: Alice Smith
8.  Enter the engineer's employee ID: 456
9.  Enter the engineer's email address: alice@example.com
10. Enter the engineer's GitHub username: alice_github
11. Choose the team member's role: Finish building the team
12. HTML file generated successfully!


## Credits
This project was created by Sandesh Gurung as part of a coding assignment.

## License
This project is licensed under the [MIT License](LICENSE).
