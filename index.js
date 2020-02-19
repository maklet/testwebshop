// härifrån startar vi upp vår webshop
const mongoose = require('mongoose')
const { app, port } = require('./src/server')
const config = require('./config/config')

// kicka igång servern
const options = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(config.databaseURL, options).then(() => {
    app.listen(port, () => console.log('Live on port 8080'))
})
