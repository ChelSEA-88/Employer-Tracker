const connection = require("./sqlConnect");

class DB {
    //keep a reference of mysql connection
    constructor(connection){
        this.connection = connection;
    }

    //find all employees, join with roles+departments
    findAllEmployees(){
        return this.connection.query(
            "SELECT employees.first_name, employees.last_name, roles.title AS \"role\", managers.first_name AS \"manager\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP BY employees.id"
        )
    }
    //find all roles
    findAllRoles(){
        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    //find all departments

    findAllDepartments(){
        return this.connection.query(
            ""
        );
    }

    //add departments

    addDepartment(){
        return this.connection.query(
            ""
        );
    }

    //add roles

    //add employee

    //update employee
}

module.exports = new DB(connection);
