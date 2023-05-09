import { Router } from 'express'
import { getMovie, getMovies, getNewMovies, postMovie } from '../controllers/movies.js'

const router = Router()

router.get('/', getMovies)
router.get('/:id', getMovie)
router.post('/', postMovie)
router.get('/news/news', getNewMovies)

export default router
