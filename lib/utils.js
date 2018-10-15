const yaml = require('js-yaml')
const fs = require('fs')

module.exports.getConfig = function() {
  return yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'))
}