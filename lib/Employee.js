/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/


class Employee {

    constructor(id, name, email ){
      this.id = id;
      this.name = name;
      this.email = email;
    }
   

    getName() {
      return this.name
    }

    getID(){
      return this.id
    }

    getEmail(){
      return this.email
    }

    getRole(){
      return 'Employee'
    }
}

  module.exports = Employee;


