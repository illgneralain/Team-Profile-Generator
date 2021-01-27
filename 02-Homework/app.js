const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");


const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

let ourStr = '';
let ourArray = [];

async function main(){
    try {
        await prompt ()

        for (let i = 0; i < teamArray.length; i++) {
            teamstr = teamstr + html.generateCard(ourArray[i]);
        }
        let ourHTML = html.generateHTML(teamstr) 

        writeFileAsync("./index.html", ourHTML)
    } 
    catch (err) {
        return console.log(err);
    }
};

async function prompt(){
    let finalResponse = "";

    do {
        try {
            response = await inquirer.prompt([

                {
                    type: "input",
                    name: "name",
                    message: "Employee name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Employee id?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Employee email?"
                },
                {
                    type: "input",
                    name: "role",
                    message: "Role of employee?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = "";

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Input the employee's github username"
                }, ]);

                const engineer = new Engineer  
            }
        }
    }
}
