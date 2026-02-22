const express = require('express')
const TodoRoute = express.Router()
const  { getTodos_con, createTodo_con,updateTodo_con,deleteTodo_con } = require("../controllers/todo.controller");
const authMiddleware = require("../Middleware/authMiddleware")

TodoRoute.get("/",authMiddleware,getTodos_con);
TodoRoute.post("/",authMiddleware,createTodo_con);
TodoRoute.put("/:idTodo",authMiddleware,updateTodo_con);
TodoRoute.delete("/:idTodo",authMiddleware,deleteTodo_con);



module.exports = TodoRoute