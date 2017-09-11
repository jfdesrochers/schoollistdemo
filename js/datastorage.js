// Since this is only a demo, the schools are preloaded in a json file and this becomes only an interface to it to avoid breaking existing code.
const schools = require('./schools.json')

let dataCache = {schools: schools, stats: {}}

const DataStorage = {

    loadDBs: function() {
        return Promise.resolve()
    },

    update: function() {
        return Promise.resolve()
    },

    replace: function() {
        return Promise.resolve()
    },

    getAllData: function(whichDB) {
        return dataCache[whichDB]
    },

    getSchoolClasses: function(schoolName) {
        let result = dataCache['schools'].find((o) => o.name === schoolName)
        if (result) {
            return result['classes']
        } else {
            return []
        }
    }

}

module.exports = DataStorage