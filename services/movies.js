import { Op } from 'sequelize'
import { Movie, Category } from '../models/index.js'

export const findMovies = async ({ name, category, order, limit = 2, page = 1 }) => {
  order = order ? 'DESC' : 'ASC'

  const options = {
    where: {},
    include: [],
    order: [
      ['premiere', order]
    ],
    attributes: {
      exclude: ['categoryId']
    },
    offset: limit * (page - 1)
  }

  if (name) {
    options.where.name = {
      [Op.like]: `%${name}%`
    }
  }

  if (category) {
    options.include.push({
      model: Category,
      where: {
        name: {
          [Op.eq]: category
        }
      }
    })
  }

  const { rows, count } = await Movie.findAndCountAll({
    ...options,
    limit
  })

  const totalPages = Math.ceil(count / limit)

  return {
    movies: rows,
    totalMovies: count,
    currentPage: page,
    totalPages
  }
}

export const findNewMovies = async () => {
  const now = new Date()
  // 1814400000 = 3 semanas en milisegundos
  const threeWeeksAgo = new Date(now.getTime() - 1814400000)

  return await Movie.findAll({
    where: {
      premiere: {
        [Op.gte]: threeWeeksAgo,
        [Op.lte]: now
      }
    },
    attributes: {
      exclude: ['categoryId']
    },
    include: Category,
    order: [
      ['premiere', 'DESC']
    ]
  })
}

export const findMovie = async ({ id }) => await Movie.findByPk(id, {
  attributes: {
    exclude: ['categoryId']
  },
  include: {
    model: Category
  }
})

export const insertMovie = async ({ name, premiere, categoryId }) => await Movie.create({ name, premiere, categoryId })
