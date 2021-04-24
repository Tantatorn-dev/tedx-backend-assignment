const express = require('express')
const bodyParser = require('body-parser')
const { getAllAttendees, addNewAttendee, getAttendeeByID } = require('./controllers/attendee')
const { getAllSpeakers, addNewSpeaker, getSpeakerByID } = require('./controllers/speaker')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello TEDx Chareonkrung')
})

app.get('/attendees', (req, res) => {
    res.json(getAllAttendees(req.query))
})

app.get('/attendee/:id', (req, res) => {
    const attendee = getAttendeeByID(req.params.id)
    if (attendee != null) {
        res.json(attendee)
    } else {
        res.status(404)
        res.json({
            'message': 'attendee not found'
        })
    }
})

app.get('/speakers', (req, res) => {
    res.json(getAllSpeakers(req.query))
})

app.get('/speaker/:id', (req, res) => {
    const speaker = getSpeakerByID(req.params.id)
    if (speaker != null) {
        res.json(speaker)
    } else {
        res.status(404)
        res.json({
            'message': 'speaker not found'
        })
    }
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