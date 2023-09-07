const express = require('express')
require('dotenv').config()
const jsxEngine = require('jsx-view-engine')
const databaseConnection = require('./config/database')
const methodOverride = require('method-override')
const Log = require('./models/logs')

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

app.get('/logs', (req, res) => {
    res.render('New')
})
app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken == 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const newLog = await Log.create(req.body)
        res.render('Show')
    } catch (error) {
        console.log(error, 'log not created')
    }
    res.send(req.body)
})
//* Database connection
databaseConnection()

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})