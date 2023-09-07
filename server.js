const express = require('express')
require('dotenv').config()
const jsxEngine = require('jsx-view-engine')
const databaseConnection = require('./config/database')
const methodOverride = require('method-override')

const app = express()
const port = 3000

//* app config
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine()) 

//* Middleware
app.use((req, res, next) => {
    //console.log('from middleware', req.method, req.url)
    next();
})
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
    res.send('Captains log App.')
})

app.get('/new', (req, res) => {
    res.render('New')
})

//* Database connection
databaseConnection()

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})