import { Router } from 'express'
import { getCategories, getCategory, postCategory } from '../controllers/categories.js'

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', postCategory)

export { router }
