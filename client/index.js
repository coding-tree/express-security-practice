const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const axios = require('axios')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    const { name, password } = req.body
    axios.post('http://localhost:3000/register', { name, password })
    res.end()
})

app.post('/login', (req, res) => {
    const { name, password } = req.body
    axios.post('http://localhost:3000/login', { name, password })
        .then(response => {
            console.log(response);
            res.json({
                message: 'everything is ok from client',
                response: response.data
            })
        })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))