import { check, validationResult } from 'express-validator'
import { Category } from '../models/Categories.js'

export const validateCategories = [
  check('name')
    .exists()
    .not()
    .withMessage('El nombre es requerido')
    .notEmpty()
    .withMessage('El nombre no puede estar vacio')
    .custom(async (value) => {
      const category = await Category.findOne({ where: { name: value } })
      if (category) throw new Error('Categoria ya existente')
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
