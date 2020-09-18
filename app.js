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
                viewDept();
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

async function viewAllEmployees() {
    console.log(db.findAllEmployees)
    const employees =  await db.findAllEmployees();
    console.table(employees);
}

function viewRoles() {
    const roles = db.findAllRoles();
  
    console.log("\n");
    console.table(roles);
  

}

start();