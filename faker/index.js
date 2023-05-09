import { Category } from '../models/Categories.js'

const categorys = [
  {
    id: 1,
    name: 'terror'
  },
  {
    id: 2,
    name: 'suspendo'
  },
  {
    id: 3,
    name: 'drama'
  },
  {
    id: 4,
    name: 'comedia'
  }
]

export const fakeData = async () => {
  categorys.forEach(async category => {
    await Category.create(category)
  })
}
