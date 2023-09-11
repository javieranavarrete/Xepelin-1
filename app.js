const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const server = http.createServer(app)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (_, res) => {
    res.sendFile(__dirname, './public/index.html')
})

app.get('/login', (req, res) => {
    const user = "Test"
    const pass = "1234"
    if (req.query.password == pass && req.query.username == user) {
        res.sendFile(path.join(__dirname, './public/thing.html'))
    } else {
        res.sendFile(path.join(__dirname, './public/index.html'))
    }
})

server.listen(8080, function() {
    console.log("Server running in port 8080")
})
