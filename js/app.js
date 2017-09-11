const m = require('mithril')
const t = require('jfdcomponents').Translator

const conf = require('./configstorage.js')

const DataStorage = require('./datastorage.js')
const MainScreen = require('./ui/mainscreen.js')

const Startup = {}

Startup.oncreate = function () {
    setTimeout(() => {
        t.loadLang({
            'en': 'messages/en.yaml',
            'fr': 'messages/fr.yaml'
        }).then(() => DataStorage.loadDBs(['schools', 'stats'])).then(() => {
            t.setLang(conf.get('defaultlanguage'))
            m.route.set('/mainscreen')
        })
    }, 2000) // Wait until the fadein has stopped.
}

Startup.view = function () {
    return [
        m('h1.maintitle.fadein.white', 'Bienvenue'),
        m('h1.maintitle.secondary.fadein', 'Welcome'),
        m('h1.mainsubtitle.fadein.white', 'Chargement en cours... '),
        m('h1.mainsubtitle.secondary.fadein', 'Now loading...')
    ]
}

location.hash = ''

m.route(document.getElementById('shcontents'), '/', {
    '/': Startup,
    '/mainscreen': MainScreen
})