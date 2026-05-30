import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/signup', (req, res) => {
    res.send("signup")
})
app.get('/signin', (req, res) => {
    res.send("signin")
})
app.get('/chat', (req, res) => {
    res.send("chat")
})

app.listen('3001')