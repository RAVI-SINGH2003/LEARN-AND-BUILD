const express = require("express");
// const request = require("request")
const requests = require("requests");
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.post('/',(req,res)=>{
    const currCode1 = req.body.exchange_from;
    const currCode2 = req.body.exchange_to;
    const amount = req.body.amt;
    // console.log(currCode1,currCode2);
    const baseURL = 'https://v6.exchangerate-api.com/v6/aa850fe0ec76542b33e022e6/pair/';
    const finalURL = `${baseURL}/${currCode1}/${currCode2}`;
    request(finalURL ,(error,response,body)=>{
        console.log(body);
        const currObject  = JSON.parse(body);
        const result = `${amount} ${currCode1} is equivalent to ${currObject.conversion_rate * amount}${currCode2}`;
        res.send(result);
    })

    
})
app.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to port 8000")
});

// https://v6.exchangerate-api.com/v6/aa850fe0ec76542b33e022e6/pair/Eur/GBP