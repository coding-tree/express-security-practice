const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const port = 3000
dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const sessions = [{ "token": "bearer abc", "name": "Andrzej" }]
const users = [{ "name": "Andrzej", "password": "kleszcz23" }]

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.get('/', (req, res) => res.send('witaj na stronie'))

const secured = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).send('access denied, no token');
    } else {
        const session = sessions.find(session => session.token === token)
        if (session) {
            next()
        } else {
            res.status(401).send("Invalid token")
        }
    }
}

app.get('/private', secured, (req, res) => {
    const token = req.header('Authorization');
    res.json({ token })
})

app.post('/register', (req, res) => {
    const { name, password } = req.body
    const user = {
        name, password
    }
    users.push(user);
    res.send("zarejestrowałeś się")
})

app.post('/login', (req, res) => {
    const token = "bearer " + Math.floor((Math.random() * 1000000000)).toString(36)
    const { name, password } = req.body
    const user = users.find(user => user.name === name)
    if (user.password === password) {
        sessions.push({ token, user })
        res.json({ token })
    } else {
        res.status(401).send('unauthorized')
    }
})
