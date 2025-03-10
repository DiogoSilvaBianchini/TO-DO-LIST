const bcrypt = require("bcryptjs")

const encryptPassword = async (req,res,next) => {
    try {
        const {password} = req.body

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        req.body.password = hash
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    encryptPassword
}