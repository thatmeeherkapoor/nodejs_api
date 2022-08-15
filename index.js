//Important libraries. 
import express from "express";
import mongoose from "mongoose";
//Importing the database model. 
import { UserData } from "./models/user.js";

//Create the auth string responsible for connecting to the database. 
const uri = "mongodb+srv://nodejs-server-trial-m:meeher23@cluster0.8rwavg2.mongodb.net/?retryWrites=true&w=majority";

//Initial configuration of the server.
const app = express(); 

//Connect to the database using the uri link. 
mongoose.connect(uri)
        .then((res) => console.log("connected to mongo"))
        .catch((error) => console.log(error));

/**
 * The application can send a request and get a response on the /user endpoint.
 * The res - is the response item and the req is the request item. 
 * res - what you are getting on the webserver.
 * req - what you are sending on the webserver. 
*/
app.get("/user", (req, res) => { 
    //The response sends a HTML header tag showing hello world, when accessed in the browser using the /user endpoint. 
    res.send("<h1>Hello World !!! (:</h1>");
});

/**
 * The endpoint is responsible for adding a particular database entry into the mongoDB database. 
 * Create a user object and then set the various DB schema parameters. 
 * The save function then manages to save it into the DB. 
 * The res param (the response) can send the result as a confirmation that the instance was added. 
 */
app.get("/addUser", (req, res) => {
    const user = new UserData({
        name: "John Doe", 
        age: 22, 
        profession: "Bartender", 
        nationality: "American"
    });


    user.save().then((result) => {
        res.send(result);
    })
    .catch((error) => {
        console.log(error);
    })
});

//Opening a listening connection via express on port 5000.
app.listen(8080, () => {
    console.log("server started on port 8080.") //Callback displays message on console about server status. 
});



