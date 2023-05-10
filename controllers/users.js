import { insertUser, findUser, findUsers, findMoviesSeen } from '../services/users.js'
import { response, handleHttp } from '../utils/index.js'

export const getUsers = async (_, res) => {
  try {
    const user = await findUsers()
    response(res, 200, user)
  } catch (err) {
    handleHttp(res, 'getUsers', err)
  }
}

export const getUser = async ({ params }, res) => {
  try {
    const user = await findUser(params)
    response(res, 200, user)
  } catch (err) {
    handleHttp(res, 'getUser', err)
  }
}

export const getUserSeenMovie = async ({ params }, res) => {
  try {
    const moviesSeen = await findMoviesSeen(params)
    response(res, 200, moviesSeen)
  } catch (err) {
    handleHttp(res, 'getUserSeenMovie', err)
  }
}

export const postUser = async ({ body }, res) => {
  try {
    const user = await insertUser(body)
    response(res, 201, user)
  } catch (err) {
    handleHttp(res, 'postUser', err)
  }
}
