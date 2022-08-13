import mongoose from "mongoose";
import promptSync from 'prompt-sync'; 

const prompt = promptSync(); 
const password = prompt("what is the database password?");

const uri = "mongodb+srv://nodejs-server-trial-m:" + password + "@cluster0.8rwavg2.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
 }

 connect();