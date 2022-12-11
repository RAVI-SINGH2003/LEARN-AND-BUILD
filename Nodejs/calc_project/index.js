const express = require("express");
const app = express();
const fs  = require("fs");

// const jsonData = fs.readFileSync(__dirname + '/package.json','utf-8');


app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    
    res.sendFile(__dirname+'/index.html');
})
app.post('/',function(req,res){

   console.log(req.body)
   const value1 = +req.body.number1;
   const value2 = +req.body.number2;
   const result = value1 + value2;
   res.send("Total is "+result)

});

//------------------------------------------------------------
// const jsonData = fs.readFileSync(__dirname + '/package.json','utf-8');
// app.get('/packagejson',(req,res)=>{
//     const jsonObj = JSON.parse(jsonData);
//     console.log(typeof jsonObj);
//     res.json(jsonObj.name);
// })


// app.use((req,res,next)=> res.sendStatus(404).send("cannot find"));
app.listen(8000,()=>{
    console.log("listening at 8000");
});


