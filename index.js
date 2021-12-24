const express = require('express')
const app = express()
require('./models/config')
const postRoutes=require('./controllers/postController')
const bodyParser=require('body-parser')

app.use(bodyParser.json()) 
app.use('/posts',postRoutes)


app.listen( 5500, ()=> console.log('conected to port 5500'))
