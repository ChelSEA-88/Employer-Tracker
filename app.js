const inquirer = require("inquirer");
const db = require("./db");
require("console.table");


//initial start function
function start() {
    inquirer.prompt([
      {
        name: "options",
        type: "list",
        message: "What would you like to do?",
        choices: [
        "View All Employees",
        "View Departments",
        "View Roles",
        "Add Employee", 
        "Update Employee Role",
        "Add Department",
        "Add Roles",
        "Exit"]
      }
    ]).then(res => {

        //switch case to initiate functions 
        switch(res.options){
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "Add Employee":
              addEmployee();
              break;
            case "Update Employee Roll":
              updateRoll();
              break;
            case "Add Roles":
              addRoles();
              break;
            default:
            process.exit();
        }
    })
}

//table view functions//
async function viewAllEmployees() {
    // console.log(db.findAllEmployees)
    const employees =  await db.findAllEmployees();
    console.table(employees);
    
    start();
}

async function viewRoles() {
    const roles = await db.findAllRoles();
    console.log("\n");
    console.table(roles);

    start();
}

async function viewDepartments() {
    const department = await db.findAllDepartments();
    console.log("\n");
    console.table(department);

    start();
}

async function addEmployee() {
    inquirer.prompt([
   
      {
        type: "input",
        message: "What's the employee's first name?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What's the employee's last name?",
        name: "last_name"
      },
      {
        type: "input",
        message: "What's the employee's title (roles_id)?",
        name: "titleID"
      }
    ]).then(insertEmployee());
    start();
}
     

start();