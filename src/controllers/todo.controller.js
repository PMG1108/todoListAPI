// controllers/todo.controller.js
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../services/todo.service")


// const getTodos_con = async (req, res, next) => {
//     try {
//         const todos = await getTodos(req.user.userId)
//         res.json(todos)
//     } catch (err) {
//         next(err)
//     }
// }
const getTodos_con = async (req,res,next) => {
    try {
        const {page = 1, limit = 10} = req.query;
        let result = await getTodos(req.user.userId,Number(page),Number(limit))
        res.status(200).json({
            result: result,
            message:"get todo pagination success"
        })
    } catch (error) {
        next(error)
    }
}


const createTodo_con = async (req, res, next) => {
    try {
        const todo = await createTodo(req.user.userId, req.body.title)
        res.status(201).json(todo)
    } catch (err) {
        next(err)
    }
}

const updateTodo_con = async (req, res, next) => {
    try {
        const result = await updateTodo(req.user.userId, req.params.idTodo, req.body);
        res.status(200).json({
            result: result,
            message: "update success"
        }
        )
    } catch (error) {
        next(error)
    }
}
const deleteTodo_con = async (req, res, next) => {
    try {
        const result = await deleteTodo(req.user.userId, req.params.idTodo,);
        res.status(200).json({
            result: result,
            message: "delete success"
        }
        )
    } catch (error) {
        next(error)
    }
}


module.exports = { getTodos_con, createTodo_con, updateTodo_con, deleteTodo_con }