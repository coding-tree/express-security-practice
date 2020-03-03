const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const port = 3000
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// database mock
const sessions = [{ "token": "bearer abc", "name": "Andrzej" }]
// valid password kleszcz232
const users = [{ "name": "Andrzej2", "password": "$2b$10$96sk/L2XNNLuwi1iWTIcSOv42ArgH.IhYfTAOJsqt.MvYQydlVUW." }]

app.listen(port, () => console.log(`app listening on port ${port}!`))

// secured middleware
const secured = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).send('access denied, invalid token');
    } else {
        const session = sessions.find(session => session.token === token)
        if (session) {
            next()
        } else {
            res.status(401).send("Invalid token")
        }
    }
}

app.get('/', (req, res) => res.send('witaj na stronie'))

app.get('/private', secured, (req, res) => {
    const token = req.header('Authorization')
    res.json({ token })
})

app.post('/register', async (req, res) => {
    const { name, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = {
        name, password: hashedPassword
    }
    users.push(user);
    res.json({ user })
})

app.post('/login', async (req, res) => {
    const token = "bearer " + Math.floor((Math.random() * 1000000000)).toString(36)
    const { name, password } = req.body
    const user = users.find(user => user.name === name)
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('invalid password');
    sessions.push({ token, user })
    res.json({ token, user })
})
