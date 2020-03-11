const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const axios = require('axios')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    const { name, password } = req.body
    axios.post('http://server.localhost/register', { name, password })
        .then((response) => {
            console.log(response)
            res.json({
                message: 'ok from register',
                response: response.data
            })
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})

app.post('/login', (req, res) => {
    const { name, password } = req.body
    axios.post('http://server.localhost/login', { name, password })
        .then(response => {
            console.log(response);
            res.json({
                message: 'everything is ok from client',
                response: response.data
            })
        }).catch(err => {
            res.status(400).send(err)
        })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))