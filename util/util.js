const _ = require('lodash')

exports.queryObjects = (objArray, fields) => {
    if (fields != null) {

        if (fields != null) {
            fields = fields.split(',')
        }

        if (fields != null) {
            let partialObj = objArray.map(item => {
                return _.pick(item, fields)
            })
            return partialObj
        }
    }

    return objArray
}