const { speakers } = require('../models/speaker')

exports.getAllSpeakers = () => {
    return speakers
}