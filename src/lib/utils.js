const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const configPath = path.join(__dirname, '../../config.yml')

module.exports.getConfig = function() {
  return yaml.safeLoad(fs.readFileSync(configPath, 'utf8'))
}