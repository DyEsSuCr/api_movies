import { findCategories, findCategory, insertCategory } from '../services/categories.js'
import { response, handleHttp } from '../utils/index.js'

export const getCategories = async (_, res) => {
  try {
    const categories = await findCategories()
    response(res, 200, categories)
  } catch (err) {
    handleHttp(res, 'getCategories', err)
  }
}

export const getCategory = async ({ params }, res) => {
  try {
    const category = await findCategory(params)
    response(res, 200, category)
  } catch (err) {
    handleHttp(res, 'getCategory', err)
  }
}

export const postCategory = async ({ body }, res) => {
  try {
    const category = await insertCategory(body)
    response(res, 201, category)
  } catch (err) {
    handleHttp(res, 'postCategory', err)
  }
}
