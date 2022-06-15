/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Imports classes for Manager, Engineer, Intern

const  Manager = require('./lib/pseudo_Manager'); 
// import { Engineer } from './lib/pseudo_Engineer';
// import { Intern } from './lib/pseudo_Engineer.js';



// Imports external package 'inquirer'
const inquirer = require('inquirer');

// Imports 'path' from node library to be used to create output folder and file name
const path = require('path');
//    Hint: __dirname, process.cwd() or you can use relative path without using 'path' library function

// Imports 'fs' from node library
const fs = require('fs') //file system
// Imports page template function and assign the function to a variable
const generateHTML = require('./src/pseudo_page_template');
// Create variables for the output folder and the html file name
var output = './dist/pseudo_team.html';
// Create an empty array to store the team member objects
var teamMember = [];
// Create an empty array to store employee IDs to be used to check for the dupliates

var employeeIDs = [];

// **********************
// Main Pfocess
// **********************

// Call the starter function
init()
// starter function to start the program
function init(){
  createManager()
}
//
//  1a. call create manager function

function createManager() {
  const questions = [
    {
      type: "input",
      message: "What is the managers name",
      name: "name"
    },
    {
      type: "input",
      message: "What is the managers id",
      name: "id"
    },
    {
      type: "input",
      message: "What is the managers email",
      name: "email"
    },
    {
      type: "input",
      message: "What is the managers officenumber",
      name: "officeNumber"
    },
  ];

  inquirer.prompt(questions)
    .then((answers) => {
      // console.log(answers)
      const manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber)
      teamMember.push(manager)
      createTeam()
      addEngineer()
      addIntern()
    })
  }

   function createTeam(){
     inquirer.prompt([
       {
        type: "list",
        message: "Pick from the list",
        name: "input", 
        choices: ['Engineer','Intern','Exit']
       }
     ]).then((a) => {
      console.log(a)
     }) 
   }

   function addEngineer(){
    inquirer.prompt([
      {
       type: "input",
       message: "Enter the Engineers info",
       name: "info", 
       
      }
    ]).then((p) => {
     console.log(p)
    }) 
   }

   function addIntern(){
    inquirer.prompt([
      {
       type: "input",
       message: "Enter the interns information",
       name: "information", 
       
      }
    ]).then((p) => {
     console.log(p)
    }) 
   }

   function buildTeam(){
    
   }
 
//
//  1b. function to create manager
//      - inquire user to enter manager's name, id, email, and office number
//      - in .then callback, create manager object from the Manager class by initializing it with the properties in answer object
//      - push the manager object to the empty team memeber object array
//      - push the manager's id to the empty id array
//      - call create team function
//
//  2. function to create team (called from create manager, add engineer, add intern functions)
//      - inquire user to pick from the list of engineer, intern, or exit (done with adding employees)
//      - in .then callback, based on user's choice, call add engineer or add intern or, for the choice of exit, call build team function
//
//  3. function to add engineer
//      - inquire user to enter engineer's name, id, email, and github
//      - in .then callbackl create engineer object from the Engineer class by initializing it with the properties in answer object
//      - push the engineer object to the empty team member object array
//      - push the engineer's id to the empty id array
//      - call create team function
//
//  4. function to add intern
//      - inquire user to enter intern's name, id, email, and school
//      - in .then callback, create intern object from the intern class by initializing it with the properties in answer object
//      - push the intern object to the empty team member object array
//      - push the intern's id to the empty id array
//      - call create team function
//
//  5. function build team
//      - check if the output folder path already exists.
//      -   if not, create it
//      - call page template function passing the team member object array as input argument
//      - write the returned template function to the output
//
//      - Hint: fs.existsSync, fs.mkdirSync, and fs.writeFileSync


