import express from 'express'
import statusRoute from './routes/status.route'
import userRoute from './routes/users.route'

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRoute)
app.use(statusRoute)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
