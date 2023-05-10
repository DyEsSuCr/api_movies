import { Sequelize } from 'sequelize'
import { env } from '../config.js'

export const conectionSequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PWD, {
  dialect: 'mysql',
  port: env.DB_PORT,
  host: env.DB_HOST
})
