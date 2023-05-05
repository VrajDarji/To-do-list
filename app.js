const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const date=require('./date.js')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.listen(3000,function(){
    console.log('live on localhost:3000');
})
var b=[];
var c=[];
app.get('/',function(req,res){
   var day=date();
    res.render('list',{Key:day,newitem:b,route:"/"});
})
app.get('/work',function(req,res){
    res.render('list',{Key:"Work List",newitem:c,route:"/work"})
})
app.post('/work',function(req,res){
    var d=req.body.item;
    c.push(d);
    res.redirect('/work');
})
app.post('/',function(req,res){
    var a=req.body.item;
    b.push(a);
    res.redirect('/');
})