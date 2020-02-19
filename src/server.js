//Här ska vi definiera vår server
const express = require('express')
const app = express()
const port = 8080

//define a static folder, public
app.use('/public', express.static('public'))

//route till /
app.get('/', (req, res) => {
    const enSak = 'Hallå'
    res.status(200).render('gallery', { enSak })
})

module.exports = { app, port }