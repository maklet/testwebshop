// härifrån startar vi upp vår webshop
const mongoose = require('mongoose')
const config = require('./config/config')
const sassMiddleware = require('node-sass-middleware')

const { app, port } = require('./src/server')
const path = require('path')
app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}))
app.set('view engine', 'ejs')

// kicka igång servern
const options = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(config.databaseURL, options).then(() => {
    app.listen(port, () => console.log('Live on port 8080'))
})
