import { Router } from 'express'
import { validateUsers } from '../validators/users.validator.js'
import { getUsers, getUser, postUser, getUserSeenMovie } from '../controllers/users.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', validateUsers, postUser)
router.get('/:id/movies', getUserSeenMovie)

export { router }
