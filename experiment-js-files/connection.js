import mongoose from "mongoose";

//Auth string that is used to connect to the database. 
const uri = "mongodb+srv://nodejs-server-trial-m:meeher23@cluster0.8rwavg2.mongodb.net/?retryWrites=true&w=majority";

//Async function -> Allows us to run other things while the connect function runs. 
async function connect() {
    try {
        //If connected, output.
        await mongoose.connect(uri);
        console.log("connected to mongodb")
    } catch (error) {
        //Else display the error.
        console.log(error)
    }
 }

//Call the connect method. 
 connect();