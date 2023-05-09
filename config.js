import { config } from 'dotenv'

config()

const USER = process.env.USER
const PWD = process.env.PWD
const DB = process.env.DB
const PORT = process.env.PORT

export const env = {
  USER,
  PWD,
  DB,
  PORT
}
