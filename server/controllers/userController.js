const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {id: id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}
class UserController {
  async registration(req, res, next) {
    try {
      const {email, password, role} = req.body

      if (!email || !password) {
        return next(ApiError.badRequest('Некорректный логин или пароль'))
      }

      const candidate = await User.findOne({where: {email}})

      if (candidate) {
        return next(ApiError.badRequest('Данный пользователь существует'))
      }

      const hashPassword = await bcrypt.hash(password, 5)
      const user = await User.create({email, role, password: hashPassword})
      const basket = await Basket.create({userId: user.id})
      const token = generateJwt(user.id, user.email, user.role)

      return res.json({token})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async login(req, res) {
  }

  async check(req, res, next) {
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
  }
}

module.exports = new UserController()