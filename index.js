//Initial configuration of the server.
const express = require("express");
const app = express(); 

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


