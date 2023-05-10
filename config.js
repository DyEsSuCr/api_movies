import { config } from 'dotenv'

config()

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PWD
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT
const DB_HOST = process.env.DB_HOST

export const env = {
  DB_USER,
  DB_PWD,
  DB_NAME,
  DB_PORT,
  DB_HOST,
  PORT
}
