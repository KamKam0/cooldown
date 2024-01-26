const Cooldown = require("./cooldowns")
/**
 * @returns {string}
 */
exports.version = require("../package.json").version
/**
 * @returns {<Cooldown>}
 */
module.exports = Cooldown