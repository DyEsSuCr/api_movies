import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Category = conectionSequelize.define('categories', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  }
})
