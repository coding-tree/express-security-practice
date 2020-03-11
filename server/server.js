// hostel (reverse proxy)https://github.com/typicode/hotel
// pm2 - alternative for hostel (process manager)
const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const port = process.env.PORT || 3000
dotenv.config()

const app = express()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// database mock
const sessions = [{ "token": "bearer abc", "name": "Andrzej" }]
// valid password kleszcz232
const users = [{ "name": "Andrzej2", "password": "$2b$10$96sk/L2XNNLuwi1iWTIcSOv42ArgH.IhYfTAOJsqt.MvYQydlVUW." }]

app.listen(port, () => console.log(`app listening on port ${port}!`))

// secured middleware
const secured = (req, res, next) => {
    let token
    if (req.headers.authorization) {
        token = req.headers.authorization
    } else {
        token = req.cookies.authorization
    }

    if (!token) {
        res.status(401).send('access denied, no token provided')
    } else {
        const session = sessions.find(session => session.token === token.replace('bearer ', ''))
        if (session) {
            next()
        } else {
            res.status(401).send("Invalid token")
        }
    }
}

app.get('/', (req, res) => res.send('witaj na stronie'))

app.get('/private', secured, (req, res) => {
    const token = req.cookies.authorization || req.headers.authorization
    res.json({ token })
})

app.post('/register', async (req, res) => {
    const { name, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = {
        name, password: hashedPassword
    }
    users.push(user)
    res.json({ user })
    console.log(user);
})

app.post('/login', async (req, res, next) => {
    let token = req.cookies.authorization || req.headers.authorization
    if (!token) {
        let newToken = (Math.floor(Math.random() * 1000000000000).toString(36))
        res.cookie('authorization', newToken, { maxAge: 900000, httpOnly: true });
        token = newToken
        res.set('authorization', token)
    }
    const { name, password } = req.body
    const user = users.find(user => user.name === name)
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).send('invalid password')
    sessions.push({ token, user })
    res.json({ token, user, message: "everything is ok from server" })
})

app.post('/logout', async (req, res) => {
    res.clearCookie('authorization')
    res.redirect('/')
})