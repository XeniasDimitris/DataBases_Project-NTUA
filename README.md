# DataBases Project NTUA

  This is a project under the course of "Database Systems" in National Technical University of Athens in the 6th Semester.
  
  It aims to learn how to build a Database and use it for a Web Application, beggining with the E-R Model, convert it into a Relational Schema and finally built the Database in SQL.
  
  ## Getting Started
  In order to run the application, you must type (at cwd on bash) : `$ npm install` so as to sychronize the modules from the json.package.
  Then you should open Xampp and start the servers (or start the local MySQL service in your computer) and then type: `$ nodemon` or  `$ node app.js`. \
  >**IMPORTANT!!** \
  You must check that in MySQL service (either on Xampp or locally) your credentials are **user=root** and **password=root**.     Otherwise edit the *./configuration/database.js* and put your credentials for the right connection.
  
  
  Now everything is ready! Type in your browser <http://localhost:3000> and the app is up!
  
  ## About the App
  The app is a Library's System to see information about all the books, see who has borrowed a book and if this borrow has been expired and many other similar informations for a full-fuctional library.\
  This project intends to built the database and handle complicated quiries so as to give the requested of the excercise. So less attention has been given to the front-end.
  
 ## Relational-Physical Diagram
 ![](https://raw.githubusercontent.com/XeniasDimitris/DataBases/master/Physical_Relational_Model.png?token=AKROCQG5NEFNZS6V7ECLBDC52M4AA)
 ## Relational Model-Schema
 ![Logo](https://raw.githubusercontent.com/XeniasDimitris/DataBases/master/Relation-Model.png?token=AKROCQEJYYMKKANUC6KHJ6C52M3SS)
    
