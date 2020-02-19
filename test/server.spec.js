const supertest = require('supertest')
const { app, port } = require('../src/server')

describe('Simple test, does it work?', () => {
    let server

    beforeEach(() => {
        server = app.listen(port, () => console.log('Testing server is up'))
    })

    it('Should respond to /', (done) => {

        supertest(server).get('/').expect(200, done);
    })

    afterEach((done) => {
        server.close(done)
    })

})