const { attendees } = require('../models/attendee')

exports.getAllAttendees = () => {
    return attendees
}

exports.addNewAttendee = (attendee) => {
    attendee.id = (attendees.length + 1).toString()
    attendees.push({
        "id": attendee.id,
        "firstName": attendee.firstName,
        "lastName": attendee.lastName,
        "email": attendee.email,
    })
    return attendees
}
