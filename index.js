const express = require("express");
const {createTodo,updateTodo}=require("./types");
const { todo } = require("./db");
const app=express();
app.use(express.json());

app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong Inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json("todo created")
})

app.get("/todos",function(req,res){
    
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong Inputs"
        })
        return;
    }

    await todo.update({
        id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"updated"
    })
    
})

app.listen(3000);