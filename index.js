const express=require('express');
const cors=require('cors')
const app =express();
const port=process.env.PORT || 5000;
const users=[
    {id:1,name:"sakib",job:"player"},
    {id:2,name:"sakibul",job:"player"},
    {id:3,name:"sakibulah",job:"player"},
    {id:4,name:"sakikan",job:"player"},
]
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hi this is ajoy biswas')
})
app.post('/users',(req,res)=>{
    console.log("success",req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user);
})
app.get('/users/:userid',(req,res)=>{
     console.log(req.params);
     const id= parseInt(req.params.userid);
     const user=users.find(u=>u.id===id)
    res.send(user)
})
app.get('/users/',(req,res)=>{
    res.send(users)
})
app.listen(port,()=>{
    console.log(`'done'${port}`)
})