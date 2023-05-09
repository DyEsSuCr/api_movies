import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Seen = conectionSequelize.define('seens', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  }
})
