const todoRouter = require("../app/todo/todo.router");

const router = require("express").Router();

router.use('/todo',todoRouter)
module.exports=router
