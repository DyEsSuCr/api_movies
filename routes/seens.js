import { Router } from 'express'
import { validateSeens } from '../validators/seens.validator.js'
import { postSeenMovie } from '../controllers/seens.js'

const router = Router()

router.post('/', validateSeens, postSeenMovie)

export { router }
