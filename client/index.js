require('dotenv').config()

const express = require('express')
const app = express()
const serverUrl = process.env.SERVER_URL || "http://server.localhost"
const port = process.env.PORT || 3001
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    const { name, password } = req.body
    axios.post(`${serverUrl}/register`, { name, password })
        .then((response) => {
            res.json(response.data.user)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})

app.post('/login', (req, res) => {
    const { name, password } = req.body
    const token = req.headers.authorization
    console.log(req.headers);
    axios.post(`${serverUrl}/login`, { name, password, token })
        .then(response => {
            res.json(response.data)
        }).catch(err => {
            res.status(400).send(err)
        })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))