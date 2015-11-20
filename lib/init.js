const fs = require('fs')

module.exports = function (location) {
  var content = {
    remote: null,
    branch: 'gh-pages',
    dir: null
  }
  content = JSON.stringify(content, null, 2)
  fs.writeFileSync(location, content, 'utf-8')
}
