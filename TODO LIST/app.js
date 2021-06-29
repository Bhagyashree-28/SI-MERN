const express=require('express');
const bodyParser=require("body-parser");
const app=express();
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

var i_arr=[];
app.get('/',(req,res,next)=>{
   res.render("list",{newListItem:i_arr});
});
app.post('/',(req,res,next)=>{
 i=req.body.task;
 i_arr.push(i);
 res.redirect("/");
     
 });

app.listen(3000);