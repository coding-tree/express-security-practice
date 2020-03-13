const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const dotenv = require('dotenv').config()
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
    axios.post('http://server.localhost/register', { name, password })
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
    axios.post('http://server.localhost/login', { name, password, token })
        .then(response => {
            res.json(response.data)
        }).catch(err => {
            res.status(400).send(err)
        })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))