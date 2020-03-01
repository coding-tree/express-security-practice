const express = require('express')
const port = 3000
const app = express()

const secured = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).send("Nie podałeś jakiegokolwiek authorization. Nie wbijasz.");
    }
    next();
}

app.get('/', (req, res) => res.send('witaj na stronie'))
app.get('/private', secured, (req, res) => {
    res.send('witaj na prywatnym roucie')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))