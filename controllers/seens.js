import { insertSeenMovie } from '../services/seens.js'
import { response, handleHttp } from '../utils/index.js'

export const postSeenMovie = async ({ body }, res) => {
  try {
    const seenMovie = await insertSeenMovie(body)
    response(res, 200, seenMovie)
  } catch (err) {
    handleHttp(res, 'postSeenMovie', err)
  }
}
