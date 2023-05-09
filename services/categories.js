import { Category } from '../models/Categories.js'

export const findCategories = async () => await Category.findAll()

export const findCategory = async ({ id }) => await Category.findByPk(id)

export const insertCategory = async ({ name }) => await Category.create({ name })
