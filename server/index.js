const express = require("express")
const cors = require('cors')
require( "./src/config/db.js");
const bodyParser= require('body-parser')


const app=express();
app.use(cors())
const router=require( "./src/router/todorouter.js");

const PORT=9000;
app.use(bodyParser.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(router)

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})


