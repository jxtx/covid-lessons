const { Marp } = require('@marp-team/marp-core')

module.exports = opts => new Marp(opts).use( require('markdown-it-attrs') )