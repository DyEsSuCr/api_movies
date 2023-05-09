import { User, Category, Movie, Seen } from './index.js'

// note: 1-m
Category.hasMany(Movie)
Movie.belongsTo(Category, { foreignKey: 'categoryId' })

// note: 1-1
User.hasOne(Seen)
Seen.belongsTo(User)

// note: 1-m
Movie.hasMany(Seen, { foreignKey: 'movieId', sourceKey: 'id' })
Seen.belongsTo(Movie, { foreignKey: 'movieId', targetKey: 'id' })
