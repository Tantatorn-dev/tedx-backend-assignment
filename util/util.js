const _ = require('lodash')

exports.queryObjects = (objArray, queryParams) => {
    let fields = queryParams.fields
    let sortByAsc = queryParams.sortByAsc
    let sortByDesc = queryParams.sortByDesc

    if (sortByAsc != null) {
        objArray = _.sortBy(objArray, sortByAsc)
    }

    if (sortByDesc != null) {
        objArray = _.sortBy(objArray, sortByDesc).reverse()
    }

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

const sortObjArray = (objArray, field) => {

}