import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Movie = conectionSequelize.define('movies', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: false
  },
  premiere: {
    type: DataTypes.DATEONLY(),
    allowNull: false,
    unique: false
  }
})
