const mongoose=require("mongoose");
//Schema
const todoSchema=new mongoose.Schema({
    data:{
        type:String,
    }
   
}) ;
//we will create new collection
const Todo = new mongoose.model("TodoUser", todoSchema);
module.exports = Todo;