import { check, validationResult } from 'express-validator'
import { User } from '../models/Users.js'

export const validateUsers = [
  check('name')
    .exists()
    .not()
    .withMessage('El nombre es requerido')
    .notEmpty()
    .withMessage('El nombre no puede estar vacio')
    .custom(async (value) => {
      const user = await User.findOne({ where: { name: value } })
      if (user) throw new Error('Usuario invalido')
      return true
    }),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      const { msg } = err.array()[0]
      res.status(403).json(msg)
    }
  }
]
