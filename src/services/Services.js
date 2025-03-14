const database = require("../../database/models")

class Services{
    constructor(model){
        this.model = model
    }
    
    async findAll(){
        try {
            const find = await database[this.model].findAll()
            return find
        } catch (error) {
            throw new Error(error)
        }
    }

    async findById(id){
        try {
            const find = await database[this.model].findByPk(id)
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(body){
        try {
            const create = await database[this.model].create(body)
            return create
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(body, id){
        try {
            const update = await database[this.model].update(body, {where: {id}})
            return update
        } catch (error) {
            throw new Error(error)
        }
    }

    async removeById(id){
        try {
            const destroy = await database[this.model].destroy({where: {id}})
            return destroy
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = Services