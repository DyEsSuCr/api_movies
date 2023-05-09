import { config } from 'dotenv'

config()

const USER = process.env.USER
const PWD = process.env.PWD
const DB = process.env.DB
const PORT = process.env.PORT
const HOST = process.env.HOST

export const env = {
  USER,
  PWD,
  DB,
  PORT,
  HOST
}
