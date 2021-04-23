const { speakers } = require('../models/speaker')

exports.getAllSpeakers = () => {
    return speakers
}

exports.addNewSpeaker = (speaker) => {
    speaker.id = (speakers.length + 1).toString()
    speakers.push({
        'id': speaker.id,
        'firstName': speaker.firstName,
        'lastName': speaker.lastName,
        'topic': speaker.topic,
    })
    return speakers
}
