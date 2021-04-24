const { attendees } = require('../models/attendee')
const { queryObjects } = require('../util/util')

exports.getAllAttendees = (queryParams) => {
    return queryObjects(attendees, queryParams)
}

exports.getAttendeeByID = (id) => {
    for (let i = 0; i < attendees.length; i++) {
        if (id == attendees[i].id.toString()) {
            return attendees[i]
        }
    }

    // if no attendee was found
    return null
}

exports.addNewAttendee = (attendee) => {
    attendee.id = (attendees.length + 1).toString()
    attendees.push({
        'id': attendee.id,
        'firstName': attendee.firstName,
        'lastName': attendee.lastName,
        'email': attendee.email,
    })
    return attendees
}
