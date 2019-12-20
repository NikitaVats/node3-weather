const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('Hello Express!')
})
app.get('/help',(req,res)=>{
    res.send('<h1>Help Express</h1>')
})
app.get('/about',(req,res)=>{
    res.send('About Express!')
})
//app.com
//app.com/help
//app.get/about
app.listen(3030,()=>{
    console.log('Server is up on port 3000');
})
