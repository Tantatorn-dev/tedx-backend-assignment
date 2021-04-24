const { speakers } = require('../models/speaker')
const _ = require('lodash')

exports.getAllSpeakers = (queryParams) => {
    if (queryParams != null) {

        // fields query
        let fields = queryParams.fields
        if (fields != null) {
            fields = fields.split(',')
        }

        if (fields != null) {
            let partialSpeakers = speakers.map(item => {
                return _.pick(item, fields)
            })
            return partialSpeakers
        }
    }
    return speakers
}

exports.getSpeakerByID = (id) => {
    for(let i=0;i<speakers.length;i++){
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
