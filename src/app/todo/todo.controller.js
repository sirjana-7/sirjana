class todoController{
    createTask(req,res,next){
        res.json({
            data:"null",
            message:"Create TODO",
            status:"OK"
        })
    }

    listAllTodoById(req,res,next){
        const params = req.params
        res.json({
            data:params,
            message:"List all task "+params.id,
            status:"OK"
        })
    }
}

const todoCtrl = new todoController()

module.exports = todoCtrl
