/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Imports classes for Manager, Engineer, Intern

const  Manager = require('./lib/pseudo_Manager'); 
const  Engineer = require ('./lib/pseudo_Engineer');
const  Intern = require ('./lib/pseudo_Intern');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'pseudo_team.html')

// Imports external package 'inquirer'
const inquirer = require('inquirer');

// Imports 'path' from node library to be used to create output folder and file name
//    Hint: __dirname, process.cwd() or you can use relative path without using 'path' library function

// Imports 'fs' from node library
const fs = require('fs') //file system
// Imports page template function and assign the function to a variable
const generateHTML = require('./src/pseudo_page_template');
// Create variables for the output folder and the html file name
const output = './dist/pseudo_team.html';
// Create an empty array to store the team member objects
const teamMember = [];
// Create an empty array to store employee IDs to be used to check for the dupliates

const employeeIDs = [];

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
     ]).then((selection) => {
    
      if ('Engineer' === selection.input) {
      console.log('You selected Engineer')
      createEngineer()
      } else if('Intern' === selection.input){
        createIntern()
        console.log("You have selected Intern")
      } else {
        console.log('Exited')
        buildTeam()
      }

     }) 
   }

   function createEngineer(){
    inquirer.prompt([
      {
       type: "input",
       message: "What is the Engineer's email",
       name: "email", 
      },
      {
        type: "input",
        message: "What is the Engineer's id",
        name: "id", 
        
       },
       {
        type: "input",
        message: "What is the Engineer's name",
        name: "name", 
        
       },
       {
        type: "input",
        message: "What is the Engineer's github",
        name: "github", 
        
       }
    ]) .then((answers) => {
      // console.log(answers)
      const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github)
      teamMember.push(engineer)
      createTeam();
    }) 
   }

   function createIntern(){
    inquirer.prompt([
      {
       type: "input",
       message: "What is the interns school",
       name: "school", 
       
      },
      {
        type: "input",
        message: "What is the interns id",
        name: "id", 
        
       },
       {
        type: "input",
        message: "What is the interns email",
        name: "email", 
        
       },
       {
       type:"input",
       message: "What is the interns name?",
       name: "name",
       }

    ]).then((answers) => {
      // console.log(answers)
      const intern = new Intern(answers.id, answers.name, answers.email, answers.school)
      teamMember.push(intern)
      createTeam();
    }) 
   }

  function buildTeam(){
    
    // fs.existsSync(DIST_DIR)
    // generateHTML(teamMember);
    fs.writeFile(distPath, generateHTML(teamMember),function(err, result) {
      if(err) console.log('error', err);
    })
   }
 //  5. function build team
//      - check if the output folder path already exists.
//      -   if not, create it
//      - call page template function passing the team member object array as input argument
//      - write the returned template function to the output
//
//      - Hint: fs.existsSync, fs.mkdirSync, and fs.writeFileSync

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


