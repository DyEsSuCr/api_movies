import { Router } from 'express'
import { readdirSync } from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = Router()

const cleanFileName = (fileName) => path.parse(fileName).name

readdirSync(__dirname).filter(async (fileName) => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}.js`).then(moduleRoutes => {
      router.use(`/api/v1/${cleanName}`, moduleRoutes.router)
    })
  }
})

export { router }
