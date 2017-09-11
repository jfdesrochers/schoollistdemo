// Greatly reduced to remove everything not pertinent to the demo
const m = require('mithril')

const tutWindow = function (stepno, stepcount, title, body, footer, darken) {
    return m('div.tut-container' + (darken ? '.darken' : ''), m('div.tut-panel', m('div.tut-content', [
        m('div.tut-header', m('h3.tut-title', title)),
        m('div.tut-body', body),
        footer ? m('div.tut-footer', footer) : '',
        stepcount > 0 ? m('div.progress.no-margin', [
            m('div.progress-bar', {style: `width: ${Math.floor(stepno/stepcount*100)}%;`})
        ]) : ''
    ])))
}

module.exports.tutWindow = tutWindow