const express =require("express")
const app=express()
const cors =require("cors")
const pool = require("./db")



//middleware

app.use(cors())
app.use(express.json())

//routes
 app.post("/todos",async(req,res)=>{

    try {
        const {description} = req.body
        const newtodo= await pool.query("INSERT INTO todo1 (description) VALUES($1) RETURNING * ",[description])
        res.json(newtodo.rows[0])
        
    } catch (err) {
        console.error(err.message)
        
    }
 })

//get all todos
 app.get("/todos", async (req,res) => {
    try {
        const alltodo = await pool.query("SELECT * FROM todo1 ")
        res.json(alltodo.rows)

    } catch (err) {
        console.error(err.message)  
    }
 })

//get 1 todo
 app.get("/todos/:id", async (req,res)=>{
    try {
    const { id }= req.params
    const todo =await pool.query("SELECT * FROM todo1 WHERE todo_id=$1",[id])
    res.json(todo.rows[0])
        
    } catch (err) {
        console.error(err.message)
        
    }
    
 })

//update todo
 app.put("/todos/:id", async (req,res)=>{
    try {
        const { id } = req.params
        const {description} = req.body
        const update_todo =await pool.query("UPDATE todo1 SET description =$1 WHERE todo_id =$2 ", [description], [id])
        res.json("Todo list updated!!!!!!")
    }
    catch(err){
        console.error(err.message) 
    }
})

//delete todo
app.delete("/todos/:id", async (req,res)=>{
try {
    const { id } = req.params
    const deletetodo =await pool.query("DELETE FROM todo1 WHERE todo_id =$1",[id])
    
} catch (err) {
    console.error(err.message)  
}
})




app.listen(5000,() => {
    console.log("server start on port 5000")
})