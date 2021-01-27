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

async function prompt(){
    let finalResponse = "";

    do {
        try {
            response = await inquirer.prompt([

                {
                    type: "input",
                    name: "name",
                    message: "Employee name?"
                }
            ])
        }
    }
}
