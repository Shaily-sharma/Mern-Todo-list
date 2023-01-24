const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/addtodo",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection established");
}).catch(()=>{
    console.log("connection failed");
})







