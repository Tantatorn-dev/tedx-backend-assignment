const express = require('express')
const bodyParser = require('body-parser')
const { getAllAttendees, addNewAttendee, getAttendeeByID } = require('./controllers/attendee')
const { getAllSpeakers, addNewSpeaker } = require('./controllers/speaker')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello TEDx Chareonkrung')
})

app.get('/attendees', (req, res) => {
    res.json(getAllAttendees())
})

app.get('/attendee/:id', (req, res) => {
    res.json(getAttendeeByID(req.params.id))
})

app.get('/speakers', (req, res) => {
    res.json(getAllSpeakers())
})

app.post('/attendee', (req, res) => {
    res.json(addNewAttendee(req.body))
})

app.post('/speaker', (req, res) => {
    res.json(addNewSpeaker(req.body))
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})