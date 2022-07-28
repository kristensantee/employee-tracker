// const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// const PORT = process.env.PORT || 3001;
// const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'management_db'
    },
    console.log('Connected to the management_db database.')
)

const init = () => {
    inquirer.prompt([
        {
            name: "start",
            message: "Welcome! Press Enter to begin.",
            type: "input",
        },
        {
            name: "task",
            message: "What would you like to do?",
            type: "list",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
        }
    ]).then(ans=> {
        if(ans.task==="View all departments"){
            viewDepartments();
        } else if (ans.task==="View all roles"){
            viewRoles();
        } else if (ans.task==="View all employees"){
            viewEmployees();
        } else if (ans.task==="Add a department"){
            addDepartment();
        } else if (ans.task==="Add a role"){
            addRole();
        } else if (ans.task==="Add an employee"){
            addEmployee();
        } else if (ans.task==="Update an employee role"){
            updateRole();
        } else {
            quitApp();
        }
    })
}

const viewDepartments = () => {
    db.query("SELECT * FROM department", (err,results)=>{
        if(err)
            throw err
        console.table('\n', results);
    })
    console.log('Press Enter to return to the task list');
    init();
}
const viewRoles = () => {
    db.query('SELECT * FROM roles', (err,results)=>{
        if(err)
            throw err
        console.table('\n', results);
    })
    init();
}
const viewEmployees = () => {
    db.query('SELECT * FROM employees', (err,results)=>{
        if(err)
            throw err
        console.table('\n', results);
    })
    init();
}
const addDepartment = () => {
    inquirer.prompt([
        {
            name: "addDept",
            message: "What department do you want to add?",
            type: "input",
        }
    ]).then(ans=>{
        console.log(ans)
        db.query('INSERT INTO department(name) VALUES(name)', ans.name, (err,results)=>{
            if(err)
                throw err
            db.query('SELECT * FROM department', (err,results)=>{
                if(err)
                    throw err
                console.table('\n', results);
            })
        })
    })
    // init();
}
const addRole = () => {
    console.log("adding role")
}
const addEmployee = () => {
    console.log("adding employee")
}
const updateRole = () => {
    console.log("updating role")
}
const quitApp = () => {
    console.log("Have a great day!")
}
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

init();
