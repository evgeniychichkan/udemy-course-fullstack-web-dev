// key.js - figure out what set of credentials to return

if ('production' === process.env.NODE_ENV) {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}