USE management_db;

INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 4),
        ('Salesperson', 80000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Account Manager', 160000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('George', 'Bluth', 4, 1),
        ('Lucille', 'Bluth', 3, 1),
        ('Oscar', 'Bluth', 2, 1),
        ('Michael', 'Bluth', 3, 1),
        ('GOB', 'Bluth', 2, 2),
        ('Lindsay', 'Bluth', 1, 2),
        ('Tobias', 'Funke', 1, 1),
        ('George Michael', 'Bluth', 1, 4),
        ('Buster', 'Bluth', 2, 2),
        ('Maebe', 'Funke', 4, 1);
