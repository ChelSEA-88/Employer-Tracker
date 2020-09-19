const connection = require("./sqlConnect");

class DB {
    //keep a reference of mysql connection
    constructor(connection){
        this.connection = connection;
    }

    //find all employees, join with roles+departments
    findAllEmployees(){
        return this.connection.query(
            "SELECT employees.id, employees.first_name, employees.last_name, roles.title AS \"role\", managers.first_name AS \"manager\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP BY employees.id"
        )
    }
    //find all roles
    findAllRoles(){
        return this.connection.query(
            "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id;"
        )
    }

    //find all departments

    findAllDepartments(){
        return this.connection.query(
            "SELECT * FROM department"
        );
    }

    //add departments

    // insertEmployee(){
    //     return this.connection.query(
    //         "INSERT INTO employees SET ?",
    //         {
    //           first_name: answer.first_name,
    //           last_name: answer.last_name,
    //           roles_id: answer.titleID,
    //         }
    //     );
    // }

    //add roles

    //add employee

    //update employee
}

module.exports = new DB(connection);
