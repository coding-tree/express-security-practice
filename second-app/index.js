const express = require('express')
const app = express()
const port = 3001
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
    res.end()
})
app.listen(port, () => console.log(`app listening on port ${port}!`))