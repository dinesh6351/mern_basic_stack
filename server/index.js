const express =require("express")
const app =express()
const UserModel =require('./models/Users')
// mongoos connection
const mongoos =require('mongoose')
// api connect with react in front end use cors
const cors =require('cors')
app.use(express.json())
app.use(cors())

mongoos.connect("mongodb+srv://user123:password123tech@cluster0.4xgy4xd.mongodb.net/merntutorial?retryWrites=true&w=majority")
app.listen(3001,()=>{
    console.log("Server Runs perfectly!!!")
});

// req -> get information from front end
// res -> get informatin from back end to front end
app.get("/getUser",(req,res)=>{
UserModel.find({}, (err,result) =>{
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});

// async function
app.post("/createUser",async(req,res)=>{
    const user =req.body;
    const newUser =new UserModel(user);
    await newUser.save();

    res.json(user)
});