const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://dejioyelakin:sVZ0cs148GLdU8H4@cluster0.0gw903r.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Database connection established!')
})

db.on('error', ()=>{
    console.log('Mongo connection error')
})

module.exports = mongoose