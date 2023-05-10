import { check, validationResult } from 'express-validator'
import { Movie, User } from '../models/index.js'

export const validateSeens = [
  check('userId')
    .exists()
    .not()
    .withMessage('Id usuario requerido')
    .notEmpty()
    .withMessage('Id usuario no puede estar vacio')
    .custom(async (value) => {
      const user = await User.findByPk(value)
      if (!user) throw new Error('Usuario no encontrada o invalido')
      return true
    }),

  check('movieId')
    .exists()
    .not()
    .withMessage('Id pelicula requerida')
    .notEmpty()
    .withMessage('Id pelicula no puede estar vacio')
    .custom(async (value) => {
      const movie = await Movie.findByPk(value)
      if (!movie) throw new Error('Pelicula no encontrada o invalida')
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
