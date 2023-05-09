import { findMovie, findMovies, findNewMovies, insertMovie } from '../services/movies.js'
import { response, handleHttp } from '../utils/index.js'

export const getMovies = async ({ query }, res) => {
  try {
    const movies = await findMovies(query)
    response(res, 200, movies)
  } catch (err) {
    handleHttp(res, 'getMovies', err)
  }
}

export const getMovie = async ({ params }, res) => {
  try {
    const movie = await findMovie(params)
    response(res, 200, movie)
  } catch (err) {
    handleHttp(res, 'getMovie', err)
  }
}

export const getNewMovies = async (_, res) => {
  try {
    const movies = await findNewMovies()

    response(res, 200, movies)
  } catch (err) {
    handleHttp(res, 'getNewMovies', err)
  }
}

export const postMovie = async ({ body }, res) => {
  try {
    const movie = await insertMovie(body)
    response(res, 200, movie)
  } catch (err) {
    handleHttp(res, 'postMovie', err)
  }
}
