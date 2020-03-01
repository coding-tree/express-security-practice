const express = require('express')
const cookieParser = require('cookie-parser');
const port = 3000
const app = express()
const password = 'tajnehaslo'

app.use(cookieParser());

const secured = (req, res, next) => {
    if (req.cookies['password'] === password) {
        next()
    } else {
        res.status(400).send('Access denied. Unauthorized.')
        next()
    }
}

app.get('/', (req, res) => res.send('witaj na stronie'))
app.get('/private', secured, (req, res) => {
    res.send('witaj na prywatnym roucie')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))