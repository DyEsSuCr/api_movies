import { config } from 'dotenv'

config()

export default {
  PORT: process.env.PORT || 3000,
  DB_USER: process.env.DB_USER || 'root',
  DB_PWD: process.env.DB_PWD || 'password',
  DB_NAME: process.env.DB_NAME || 'database',
  DB_PORT: process.env.DB_PORT || '3306',
  DB_HOST: process.env.DB_HOST || 'mysql'
}
