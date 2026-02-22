// services/todo.service.js
const Todo = require("../models/Todo")


// const getTodos = (userId) => {
//     return Todo.find({ userId })
// }

// pagination todo
const getTodos = (userId, page = 1, limit = 10) => {
    const skip = (page - 1) * limit


    return Todo.find({ userId })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
}


const createTodo = (userId, title) => {
    return Todo.create({ title, userId })
}


const updateTodo = async (userId, todoId, data) => {
    const todo = await Todo.findOne({ _id: todoId, userId })
    if (!todo) throw new Error("Not allowed")


    Object.assign(todo, data)
    return todo.save()
}


const deleteTodo = async (userId, todoId) => {
    const todo = await Todo.findOneAndDelete({ _id: todoId, userId })
    if (!todo) throw new Error("Not allowed")
}


module.exports = { getTodos, createTodo, updateTodo, deleteTodo }