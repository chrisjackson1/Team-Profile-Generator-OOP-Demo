

// Imports classes for Manager, Engineer, Intern

const  Manager = require('./lib/Manager'); 
const  Engineer = require ('./lib/Engineer');
const  Intern = require ('./lib/Intern');
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


