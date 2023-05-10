import { Router } from 'express'
import { postSeenMovie } from '../controllers/seens.js'

const router = Router()

router.post('/', postSeenMovie)

export { router }
