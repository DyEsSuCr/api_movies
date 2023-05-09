import { Sequelize } from 'sequelize'
import { env } from '../config.js'

export const conectionSequelize = new Sequelize(env.DB, env.USER, env.PWD, {
  dialect: 'mysql',
  database: env.DB
})
