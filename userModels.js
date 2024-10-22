import mongoose from "mongoose";

const user = new mongoose.Schema({
    fastName:{type:String},
    lastName:{type:String},
    email:{type:String},
    address:{type:String},
    phone:{type:String},
}, {timestamps: true});

const userModel = mongoose.model("users", user);
export default userModel;