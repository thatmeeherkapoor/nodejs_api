import mongoose from "mongoose";

//Create the Schema object from mongoose. 
const Schema = mongoose.Schema;

//Create the template of how the user data is going to be stored.
const userData = new Schema({
    //Add the various fields that are needed in the db. 
    name: {
        //Type indicates data type and required indicates whether it is important or not. 
        type: String, 
        required: true
    }, 
    age: {
        type: Number, 
        required: true
    }, 
    profession: {
        type: String, 
        required: true
    }, 
    nationality: {
        type: String, 
        required: false
    }
}, {timestamps: true});

//Transport the schema into UserData to be used as a model. 
const UserData = mongoose.model("UserData", userData);
//Export model. 
export {UserData};