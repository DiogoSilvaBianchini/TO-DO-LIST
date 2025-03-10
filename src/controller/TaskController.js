const Service = require("../services/Services")
const service = new Service("Tasks")

class TaskController{
    static async findAllTasks(req,res,next){
        try {
            const find = await service.findAll()
            res.status(200).json({msg: "Todas as tasks registradas.", results: find, status: 200})
        } catch (error) {
            next(error)
        }
    }

    static async createNewTask(req,res,next){
        try {
            const {title, tasks, author_id} = req.body
            await service.create({title, tasks, author_id})
            return res.status(200).json({msg: "Atividade criada com sucess.", results: true, status: 200})
        } catch (error) {
            next(error)
        }
    }

    static async removeTask(req,res,next){
        try {
            const {id} = req.params
            await service.removeById(id)
            return res.status(201).json({msg: "Atividade removida com sucess.", results: true, status: 201})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController