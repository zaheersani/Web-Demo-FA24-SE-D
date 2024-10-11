const express = require("express")
const app = express()
// importing users
// const users = require('./users')
// const users = require('./users.json')

app.use(express.json())

const userRouter = require('./usersRouter')
app.use('/users', userRouter)

app.get('/', (req, res) => {
    // res.send('Hello World from Root')
    // JavaScript Object Notation
    const json = '{"name":"John", "age":35}';
    
    const user = {
        name: 'John',
        age: 30
    }
    // if(typeof user !== 'object') res.send(json)

    // res.status(200).send('User has been Added')
    res.redirect('/users')
    
    // res.end('Invalid Operation')
})

// const users = [{
//     id: 1,
//     name: 'John'
// }, {
//     id: 2,
//     name: 'Jane'
// }]

// app.post('/users', (req, res) => {
//     const user = req.body
//     // console.log(req.body)
//     users.push({
//         id: users.length + 1,
//         name: req.body.name
//     })
//     console.log(users)
//     res.status(201).send(user)
// })

// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.get('/users/:id', (req, res) => {
    const {id:myid} = req.params
    res.send('Responding from /users' + myid)
})

app.listen(3000, () => {
    console.log('Listening on Port: 3000')
})