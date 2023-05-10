import { Router } from 'express'
import { getMovie, getMovies, getNewMovies, postMovie } from '../controllers/movies.js'

const router = Router()

router.get('/news', getNewMovies)
router.get('/:id', getMovie)
router.post('/', postMovie)
router.get('/', getMovies)

export default router
