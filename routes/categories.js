import { Router } from 'express'
import { validateCategories } from '../validators/categories.validator.js'
import { getCategories, getCategory, postCategory } from '../controllers/categories.js'

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', validateCategories, postCategory)

export { router }
