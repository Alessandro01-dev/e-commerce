const express = require("express")
const PORT = 4545;
const cors = require("cors")
const startServer = require("./config/db")

// middleware imports
const errorHandler = require("./middlewares/errorHandler/errorHandler")

// routes imports
const authRoute = require('./modules/auth/auth.route')
const userRoute = require('./modules/user/user.route')
const productRoute = require('./modules/product/product.route')
const orderRoute = require('./modules/order/order.route')
const reviewRoute = require('./modules/review/review.route')

const app = express()

// global middlewares
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json())

// passport middlewares

// routes
app.use('/', authRoute)
app.use('/', userRoute)
app.use('/', productRoute)
app.use('/', orderRoute)
app.use('/', reviewRoute)

// error handler
app.use(errorHandler)

startServer(PORT, app)