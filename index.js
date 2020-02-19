// härifrån startar vi upp vår webshop
const { app, port } = require('./src/server')

const server = app.listen(port, () => console.log('Live on port 8080'))

module.exports = server