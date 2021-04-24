const { speakers } = require('../models/speaker')
const { queryObjects } = require('../util/util')

exports.getAllSpeakers = (queryParams) => {
    return queryObjects(speakers, queryParams)
}

exports.getSpeakerByID = (id) => {
    for (let i = 0; i < speakers.length; i++) {
        if (id == speakers[i].id.toString()) {
            return speakers[i]
        }
    }

    // if no speaker was found
    return null
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
