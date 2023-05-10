import { Router } from 'express'
import { validateMovies } from '../validators/movies.validator.js'
import { getMovie, getMovies, getNewMovies, postMovie } from '../controllers/movies.js'

const router = Router()

router.get('/news', getNewMovies)
router.get('/:id', getMovie)
router.post('/', validateMovies, postMovie)
router.get('/', getMovies)

export { router }
