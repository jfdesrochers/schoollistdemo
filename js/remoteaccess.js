// We kill any and all remote functionality in this demo.
const RemoteAccess = {
    
    netTest: function () {
        return Promise.resolve(true)
    },

    sendStoreData: function () {
        return Promise.resolve()
    },

    sendFeedBack: function () {
        return Promise.resolve()
    }

}

module.exports = RemoteAccess