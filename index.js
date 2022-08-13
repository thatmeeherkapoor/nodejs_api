//Important libraries. 
import express from "express";
import mongoose from "mongoose";

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

//Opening a listening connection via express on port 5000.
app.listen(8080, () => {
    console.log("server started on port 8080.") //Callback displays message on console about server status. 
});



