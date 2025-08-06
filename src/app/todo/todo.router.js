const todoRouter = require("express").Router()
const todoCtrl = require("./todo.controller")

todoRouter.get("/todo",todoCtrl.createTask)
todoRouter.post("/:id",todoCtrl.listAllTodoById)

module.exports= todoRouter