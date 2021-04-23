const express = require('express')
const { getAllAttendees } = require('./controllers/attendee')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello TEDx')
})

app.get('/attendees', (req, res) => {
    res.json(getAllAttendees())
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})