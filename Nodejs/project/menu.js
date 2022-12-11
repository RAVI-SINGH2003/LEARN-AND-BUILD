const express = require("express");
const fs = require("fs");
const app = express();
const menuhtml = fs.readFileSync(__dirname +'/menu.html','utf-8');
const striphtml = fs.readFileSync(__dirname + '/strip.html','utf-8');
const menu_json = fs.readFileSync(__dirname +'/menu.json','utf-8');
const menu_obj = JSON.parse(menu_json);

app.use(express.static('public'))

const replaceItems = (singleStrip,item)=>{
    let newhtml = singleStrip.replace(/{%FOODNAME%}/g,item.FoodName);
    newhtml = newhtml.replace(/{%FROM%}/g,item.from);
    newhtml = newhtml.replace(/{%QUANTITY%}/g,item.quantity);
    newhtml = newhtml.replace(/{%PRICE%}/g,item.price);
    return newhtml;
    
}
app.get('/', function(req, res){

    const updatedhtml = menu_obj.reduce((totalhtml,currfood)=>{
        const newhtml = replaceItems(striphtml,currfood);
        return totalhtml+=newhtml;

    },"")


// const updatedhtml = menu_obj.map(element => replaceItems(striphtml,element));

// console.log(updatedhtml[0])
// console.log(updatedhtml)
const finalhtml = menuhtml.replace(/{%FOOD-ITEMS%}/g,updatedhtml)
res.send(finalhtml);

});


app.listen(8000);
