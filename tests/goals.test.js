const mongoose = require('mongoose')
const app = require ('../app')
const {MongoMemoryServer} = require('mongodb-memory-server')
const request = require('supertest')
const server = app.listen('8080', () => console.log('lets test'))
const Goal = require('../models/goals')
const User = require('../models/user')
let mongoServer

beforeAll(async() => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async() => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})



describe('Testing Goal Endpoint For A RESTFUL JSON API', () => {
    test('It should diaplay a list of goals', async () => {
        const goal = new Goal ({ category: 'Projects', objective: 'start project 2', status: 'new'})
        await goal.save()

        const response = await request (app).get('/goals')

        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBeTruthy()
        for(let i = 0; i < response.body.length; i++) {
            expect(response.body[i]).toHaveProperty('category')
            expect(response.body[i]).toHaveProperty('objective')
            expect(response.body[i]).toHaveProperty('status')
        }
    })


    test('It should create a new goal', async () => {
        const user = new User ({name:"Teo",email: "teoiscool@hi.com", password:"12345"})
       const token = await user.generateAuthToken()
       await user.save()
        const response = await request (app).post('/goals').set('Authorization', `Bearer ${token}`)
        .send({
            category: 'my goal',
            objective: 'finish goal',
            status: 'new'
        })
        expect(response.body.category).toEqual('my goal')
        expect(response.body.objective).toEqual('finish goal')
        expect(response.body.status).toEqual('new')
    })

    test('given a vaild body it should update an exsiting goal and return it', async () => {
        const user = new User ({name:"Teo",email: "teoiscool@hi.com", password:"12345"})
        const token = await user.generateAuthToken()
        await user.save()
        const goal = new Goal( {category: 'Projects', objective: 'start project 2', status: 'new'})
        await goal.save()

        const response = await request(app).put(`/goals/${goal._id}`).set('Authorization', `Bearer ${token}`)
        .send({
            objective: 'done with goal'
        })
        console.log(response.body)
        expect(response.statusCode).toBe(200)
        expect(response.body.objective).toEqual('done with goal')
    })

    test('It should delete a pre-existing todo given a valid goal id', async () => {
        const user = new User ({name:"Teo",email: "teoiscool@hi.com", password:"12345"})
        const token = await user.generateAuthToken()
        await user.save()
        const goal = new Goal( {category: 'Projects', objective: 'start project 2', status: 'new'})
        await goal.save()

        const response = await request(app).delete(`/goals/${goal._id}`).set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.msg).toEqual(`Deleted Goal`)
    })




})