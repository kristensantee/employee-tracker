USE management_db;

-- SELECT employees.id, first_name, last_name, manager_id, roles.title, roles.salary, department.name
-- FROM employees
-- JOIN roles on employees.role_id = roles.id
-- JOIN department on department_id = department.id;

-- SELECT employees.id AS value, first_name AS name 
-- FROM roles 
-- JOIN employees on employees.role_id = roles.id;

SELECT first_name AS name, 
FROM employees
JOIN title on roles.id = employees.id
JOIN roles on employees.id = roles.id;

-- SELECT id AS value, name FROM department

-- SELECT department_id AS Department
-- FROM roles
-- JOIN department.id ON department_id = department_id;

-- SELECT * FROM employees;

-- INSERT INTO roles (title, salary, department_id) VALUES ('Mascot', 45000, 4);
-- SELECT * FROM roles;