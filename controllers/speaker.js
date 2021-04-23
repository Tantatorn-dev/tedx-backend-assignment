const { speakers } = require('../models/speaker')

exports.getAllSpeakers = () => {
    return speakers
}

exports.getSpeakerByID = (id) => {
    for(let i=0;i<speakers.length;i++){
        if (id == speakers[i].id.toString()) {
            return speakers[i]
        }
    }
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
