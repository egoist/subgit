const _ = module.exports = {}

_.hasEssentialKeys = function hasEssentialKeys(obj, keys) {
  keys = keys || []
  var has = true
  if (keys && keys.length > 0) {
    keys.forEach(k => {
      if (!obj[k]) {
        has = false
        return
      }
    })
  }
  return has
}
