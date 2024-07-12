const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aniketyadav29398:Aniket%40321@aniket.5vvapui.mongodb.net/todos").then(console.log("connected"))
const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})
const todo=mongoose.model("todos",todoSchema);

module.exports={todo}