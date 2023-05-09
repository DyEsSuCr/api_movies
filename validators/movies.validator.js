import { check, validationResult } from 'express-validator'
import { Movie } from '../models/Movies.js'

export const validateMovies = [
  check('name')
    .exists()
    .not()
    .notEmpty()
    .custom(async (value, { req }) => {
      return true
    }),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      res.status(403).json({ error: err.array() })
    }
  }
]
