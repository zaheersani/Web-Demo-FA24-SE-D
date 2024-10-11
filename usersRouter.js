const express = require('express')
const userRouter = express.Router()

const users = require('./users.json')

userRouter.get('/', (req, res) => {
    res.send(users)
})

userRouter.post('/', (req, res) => {
    const user = req.body
    // console.log(req.body)
    users.push({
        id: users.length + 1,
        name: req.body.name + " Router"
    })
    console.log(users)
    res.status(201).send(user)
})

module.exports = userRouter