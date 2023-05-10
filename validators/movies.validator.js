import { check, validationResult } from 'express-validator'
import { Category } from '../models/Categories.js'

export const validateMovies = [
  check('name')
    .exists()
    .not()
    .withMessage('El nombre es requerido')
    .notEmpty()
    .withMessage('El nombre no puede estar vacio'),

  check('premiere')
    .exists()
    .not()
    .withMessage('La fehca es requerida')
    .notEmpty()
    .withMessage('La fecha no puede estar vacia')
    .custom(async (value) => {
      if (!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(value)) throw new Error('Formato de fecha no valida')
      return true
    }),

  check('categoryId')
    .exists()
    .not()
    .withMessage('La categoria es requerida')
    .notEmpty()
    .withMessage('La categoria no puede estar vacia')
    .custom(async (value) => {
      const category = await Category.findByPk(value)
      if (!category) throw new Error('Categoria no encontrada o invalida')
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
