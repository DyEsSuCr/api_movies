import { Movie, User, Seen } from '../models/index.js'

export const findUsers = async () => await User.findAll()

export const findUser = async ({ id }) => await User.findByPk(id)

export const findMoviesSeen = async ({ id }) => {
  const seens = await Seen.findAll({ where: { userId: id } })

  const userMovies = seens.map(movie => movie.movieId)

  return await Movie.findAll({ where: { id: userMovies } })
}

export const insertUser = async ({ name }) => await User.create({ name })
