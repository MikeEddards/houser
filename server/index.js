require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Data doing stuff')
})

app.get('/api/homes', controller.allHomes)
app.delete('/api/homes/:id', controller.delete)







app.listen(SERVER_PORT, () => console.log(`Wizards at work on port ${SERVER_PORT}`))