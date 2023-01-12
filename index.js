const Cooldown = require("./Cooldowns")
/**
 * @returns {string}
 */
exports.version = require("./package.json").version
/**
 * @returns {<Cooldown>}
 */
module.exports = Cooldown