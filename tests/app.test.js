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

describe('Test all user endpoints', ()=>{
    
    test('create a new todo', async ()=>{
        const response = await request(app)
        .post('/users/todos')
        .send({title:'testTitle', description:'testDescription',completed:true})

        expect(response.body.createdTodo.title).toEqual('testTitle')
        expect(response.body.createdTodo.description).toEqual('testDescription')
        expect(response.body.createdTodo.completed).toEqual(true)
        expect(response.statusCode).toBe(200)
        expect(response.body.createdTodo).toHaveProperty('created_at')
    })

In package.json, in the scripts object, in the test key add "jest" as its value
Then npm run test to execute testing
*/