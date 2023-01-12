const Cooldown = require("./Cooldown")
class Cooldowns{
    #cooldowns_names;
    #cooldowns;
    constructor(){
        /**
         * @private
         * @type {object[].<string>}
         */
        this.#cooldowns_names = []
        /**
         * @private
         * @type {object[].<Cooldown>}
         */
        this.#cooldowns = []
    }

    /**
     * 
     * @param {(null|Cooldown)} name 
     * @returns 
     */
    AddCooldown(name){
        if(!name || typeof name !== "string" || name.length > 50) return null
        if(this.#cooldowns_names.includes(name)) return null
        const vc = new Cooldown(name)
        this.#cooldowns_names.push(name)
        this.#cooldowns.push(vc)
        return vc
    }

    /**
     * 
     * @param {(null|boolean)} name 
     * @returns 
     */
    DeleteCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.#cooldowns_names.includes(name)) return null
        this.#cooldowns_names.splice(this.#cooldowns_names[this.#cooldowns_names.indexOf(this.#cooldowns_names.find(e => e === name))], 1)
        this.#cooldowns.splice(this.#cooldowns[this.#cooldowns.indexOf(this.#cooldowns.find(e => e.name === name))], 1)
        return true
    }

    /**
     * 
     * @param {(null|Cooldown)} name 
     * @returns 
     */
    GetCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.#cooldowns_names.includes(name)) return null
        return this.#cooldowns.find(c => c.name === name)
    }

    /**
     * 
     * @param {(null|boolean)} name 
     * @returns 
     */
    Deploy(elements){
        if(!elements || !Array.isArray(elements)) return null
        elements.filter(pro => typeof pro === "string").forEach(name => this.AddCooldown(name))
        return true
    }
}

module.exports = Cooldowns