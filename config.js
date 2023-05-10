import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 3000
const DB_USER = process.env.DB_USER || 'root'
const DB_PWD = process.env.DB_PWD || 'password'
const DB_NAME = process.env.DB_NAME || 'database'
const DB_PORT = process.env.DB_PORT || '3306'
const DB_HOST = process.env.DB_HOST || 'mysql'

export const env = {
  DB_USER,
  DB_PWD,
  DB_NAME,
  DB_PORT,
  DB_HOST,
  PORT
}
