const fs = require('fs')
const _ = require('./helpers')

module.exports = function () {
  var config = fs.readFileSync('./.subgitrc', 'utf-8')
  config = JSON.parse(config)
  if (_.hasEssentialKeys(config, ['remote', 'branch', 'dir'])) {

  } else {
    console.log('hell')
  }
}
