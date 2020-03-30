const { Marp } = require('@marp-team/marp-core')

// Add markdown-it to engine.
module.exports = (opts) => new Marp(opts).use(require('markdown-it-attrs'))
