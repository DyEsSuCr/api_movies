import { Seen } from '../models/index.js'

export const insertSeenMovie = async ({ userId, movieId }) => await Seen.create({ userId, movieId })
