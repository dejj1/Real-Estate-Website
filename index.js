const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const propertyController = require('./backend/controllers/propertyController')
const uploadController = require('./backend/controllers/uploadController')
const app = express()

//mongodb connect
mongoose.set('strictQuery', false)
// mongoose.connect(process.env.MONGO_URL)
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
    // function (err, res) {
    //     try {
    //         console.log('Connected to Database');
    //     } catch (err) {
    //         throw err;
    //     }
    );

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))

//template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//routes and middlewares
app.use(
    cors({
      origin: "http://localhost:3000",
    })
  )
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/property', propertyController )
app.use('/upload', uploadController)

//starting server
app.listen(process.env.PORT, ()=>console.log(`Server is running successfully`))
