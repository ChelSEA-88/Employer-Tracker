USE tracker_DB;

INSERT INTO department (name) values
("Human Resources"),
("Sales"),
("Technology"),
("Operations"),
("Marketing");

INSERT INTO roles (title, salary, department_id) values
("IT PROJECT MANAGER", 85000, 3),
("FRONT-END WEB DEVELOPER", 70000, 5),
("HUMAN RESOURCES MANAGER", 90000, 1),
("BACK-END SOFTWARE DEVELOPER", 120000, 3),
("MARKETING ASSISTANT", 50000, 5),
("SALES ASSOCIATE", 60000, 2),
("CHIEF OPERATIONS OFFICER", 160000, 4),
("FULL STACK WEB DEVELOPER", 70000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) values
("ALFRED", "MONSITO", 1, NULL),
("HENRIETTA", "STACK", 2, NULL),
("JULIA", "JONES", 4, NULL),
("SEAMUS", "MCKIERNAN", 5, NULL),
("HARRY", "ANNABELLE", 6, NULL),
("GUSTAVO", "ALMEDA", 7, NULL),
("JAVON", "JACKSON", 8, NULL),
("TRIXY", "LIGHT-FOOT", 3, NULL);