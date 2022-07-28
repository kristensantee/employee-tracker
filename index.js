const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

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
            type: "input"
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
    console.log("viewing departments");
    app.get('/',(req,res)=>{
        db.query("SELECT * FROM department", (err,data)=>{
            res.json(results)
        })
    })
}
const viewRoles = () => {
    console.log("viewing roles")
}
const viewEmployees = () => {
    console.log("viewing employees")
}
const addDepartment = () => {
    console.log("adding department")
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
    console.log("quit")
}

init();