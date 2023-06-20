/*
require:
-request (supertest) (run HTTP requests)
- {MongoMemoryServer} (local DB)
-mongoose (controlling local DB)
- app (from app.js)
- models (from models)

create:
-server (new temp server for tests)
-mongoServer variable (control local DB)

*/

/*
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8080, () => console.log('Testing on PORT 8080'))

const User = require('../models/user')
let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })
    afterAll(async ()=>{
    await mongoose.connection.close() // programmatic ctrl+c
    mongoServer.stop() //getting rid of our MongoDB instance itself
    server.close()
})
*/