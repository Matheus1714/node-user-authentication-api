import express from 'express'
import statusRoute from './routes/status.route'
import userRoute from './routes/users.route'
import dotenv from 'dotenv'
import db from './db'
import errorHandler from './middlewares/error-handler.middleware'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRoute)
app.use(statusRoute)

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
