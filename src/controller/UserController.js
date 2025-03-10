const Service = require("../services/Services")
const service = new Service("Users")

class UserController{
    static async findAllUsers(req,res,next){
        try {
            const find = await service.findAll()
            res.status(200).json({msg: "Todos os usuarios registrados.", results: find, status: 200})
        } catch (error) {
           next(error) 
        }
    }

    static async createNewUser(req,res,next){
        try {
            const {name, email, password, phone} = req.body
            const create = await service.create({name, email, password, phone})
            res.status(201).json({msg: "Usuario registrado com sucesso.", results: create, status: 201})
        } catch (error) {
            next(error)
        }
    }

    static async removeUser(req,res,next){
        try {
            const {id} = req.params
            const remove = await service.removeById(id)
            res.status(200).json({msg: "Usuario removido com sucesso.", results: true, status: 200})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController