const express =  require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({extended : false}))
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/TaskDb")
.then(()=>{
    console.log('mongodb connected successfully');
})
.catch((err)=>{
    console.log(err);
})
const task_schema = new mongoose.Schema({
    name :String
})
const Tasks = mongoose.model('Tasks',task_schema);

app.get('/',async(req,res)=>{
    const thisday = new Date()
    let options = {
        day: "numeric",
        month : "long",
        weekday : "long"
    }
    const today = thisday.toLocaleDateString("hi-IN",options);
    console.log("again");
    let tasks = await Tasks.find();
    res.render("index",{now:today,myList:tasks});
})
app.post('/',async(req,res)=>{
    let item =req.body.inpt1;
    const task = await Tasks.create({
        name : item
    })
     res.redirect('/')
})

app.listen(8000);