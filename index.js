'use strict'
require('shelljs/global')
const pathExists = require('path-exists')
const init = require('./lib/init')
const push = require('./lib/push')
const path = require('path')

class Subgit {
  constructor (options) {
    options = options || {}
    this.location = options.location || path.join(process.cwd(), '.subgitrc')
  }
  init () {
    init(this.location)
  }
  push () {
    if (!this.rcExists()) {
      return
    }
    push()
  }
  rcExists () {
    return pathExists.sync(this.location)
  }
}

module.exports = function (options) {
  return new Subgit(options)
}
