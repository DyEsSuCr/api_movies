import { Router } from 'express'
import { getUsers, getUser, postUser, getUserSeenMovie } from '../controllers/users.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', postUser)
router.get('/:id/movies', getUserSeenMovie)

export { router }
