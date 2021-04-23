const express = require('express')
const { getAllAttendees } = require('./controllers/attendee')
const { getAllSpeakers } = require('./controllers/speaker')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello TEDx Chareonkrung')
})

app.get('/attendees', (req, res) => {
    res.json(getAllAttendees())
})

app.get('/speakers', (req, res) => {
    res.json(getAllSpeakers())
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})