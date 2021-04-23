const { attendees } = require('../models/attendee')

exports.getAllAttendees = () => {
    return attendees
}
