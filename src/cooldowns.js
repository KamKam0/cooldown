const Cooldown = require("./cooldown")
class Cooldowns{
    #cooldownsNames;
    #cooldowns;
    constructor(){
        /**
         * @private
         * @type {object[].<string>}
         */
        this.#cooldownsNames = []
        /**
         * @private
         * @type {object[].<Cooldown>}
         */
        this.#cooldowns = []
    }

    /**
     * 
     * @param {string} name
     * @returns {(Cooldown|null)}
     */
    addCooldown(name){
        if(!name || typeof name !== "string" || name.length > 50) return null
        if(this.#cooldownsNames.includes(name)) return null
        const vc = new Cooldown(name)
        this.#cooldownsNames.push(name)
        this.#cooldowns.push(vc)
        return vc
    }

    /**
     * 
     * @param {(null|boolean)} name 
     * @returns {(Cooldown|null)}
     */
    deleteCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.#cooldownsNames.includes(name)) return null
        this.#cooldownsNames.splice(this.#cooldownsNames[this.#cooldownsNames.indexOf(this.#cooldownsNames.find(e => e === name))], 1)
        this.#cooldowns.splice(this.#cooldowns[this.#cooldowns.indexOf(this.#cooldowns.find(e => e.name === name))], 1)
        return true
    }

    /**
     * 
     * @param {string} name
     * @returns {(Cooldown|null)}
     */
    getCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.#cooldownsNames.includes(name)) return null
        return this.#cooldowns.find(c => c.name === name)
    }

    /**
     * 
     * @param {(null|boolean)} name 
     * @returns {(Cooldown|null)}
     */
    deploy(elements){
        if(!elements || !Array.isArray(elements)) return null
        elements.filter(pro => typeof pro === "string").forEach(name => this.addCooldown(name))
        return true
    }
}

module.exports = Cooldowns