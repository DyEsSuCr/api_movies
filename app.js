// NOTE: Thirds
import express from 'express'
import cors from 'cors'

// NOTE: Local
import { env } from './config.js'
import userRoutes from './routes/users.js'
import moviesRoutes from './routes/movies.js'
import categoriesRoutes from './routes/categories.js'
import seensRoutes from './routes/seeds.js'

// NOTE: App Init
const app = express()

// NOTE: Settings
app.set('port', env.PORT)

// NOTE: MiddleWares
app.use(express.json())
app.use(cors())

// NOTE: Routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/movies', moviesRoutes)
app.use('/api/v1/categories', categoriesRoutes)
app.use('/api/v1/seens', seensRoutes)

app.use((req, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default app
