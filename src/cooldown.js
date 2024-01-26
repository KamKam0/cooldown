const User = require("./user")
class Cooldown{
    #ar;
    /**
     * @param {string} name
     */
    constructor(name){
        /**
         * @public
         * @param {string}
         */
        this.name = name
        /**
         * @private
         * @param {object[].<User>}
         */
        this.#ar = []
    }

    /**
     * 
     * @returns {object[].<User>}
     */
    getAll(){
        return this.#ar
    }

    /**
     * 
     * @param {object} data
     * @param {string} data.id
     * @param {number} data.date
     * @param {number} data.time
     * @param {object[]} [data.properties=[]]
     * @returns {User|null}
     */
    addUser(data){
        if(!data || typeof data !== "object") return null
        if(!data.id || !["number", "string"].includes(typeof data.id)) return null
        if(!data.time || typeof data.time !== "number") return null
        if(data.properties && !Array.isArray(data.properties)) return null
        if(data.properties && data.properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string" && !Object.entries(pro)[1]).length !== data.properties.length) return null
        if(this.getUser(data.id, data.properties)) return null
        let toretrun = new User({id: data.id, time: data.time, date: Date.now(), properties: data.properties, _timeout: setTimeout(() => this.removeUser(data.id, data.properties), data.time * 1000)})
        this.#ar.push(toretrun)
        return toretrun
    }

    /**
     * 
     * @param {string} id 
     * @returns {boolean}
     */
    removeUsersByID(id){
        if(!id || !["number", "string"].includes(typeof id)) return false
        if(!this.#ar.filter(e => e.id === id)[0]) return false
        this.#ar = this.#ar.filter(user => {
            if (user.id !== id) {
                return true
            }

            clearTimeout(user._timeout)
            return false
        })
        return true
    }

    /**
     * 
     * @param {object[]} properties 
     * @returns {boolean}
     */
    removeUsersByProperties(properties){
        if(!properties || !Array.isArray(properties)) return false
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return false
        this.#ar = this.#ar.filter(user => {
            if (!user.compareProperties(properties)) {
                return true
            }

            clearTimeout(user._timeout)
            return false
        })
        return true
    }


    /**
     * 
     * @param {object} property 
     * @returns {boolean}
     */
    removeUsersByProperty(property){
        if(!property || typeof property !== "object") return false
        if(typeof Object.values(property)[0] !== "string") return false
        this.#ar = this.#ar.filter(user => {
            if (!user.includeProperty(property)) {
                return true
            }

            clearTimeout(user._timeout)
            return false
        })
        return true
    }

    /**
     * @param {string} id
     * @param {object[]} properties 
     * @returns {boolean}
     */
    removeUser(id, properties){
        if(!id || !["number", "string"].includes(typeof id)) return false
        if(!properties || !Array.isArray(properties)) return false
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return false
        let user = this.#ar.find(user => user.id === id && (properties?.length ? user.compareProperties(properties) : true))
        if(!user) return false
        clearTimeout(user._timeout)
        this.#ar.splice(this.#ar.indexOf(user), 1)
        return true
    }

    /**
     * 
     * @param {string} id 
     * @returns {(object[].<User>|null)}
     */
    getUsersByID(id){
        if(!id || !["number", "string"].includes(typeof id)) return null
        return this.#ar.filter(e => e.id === id)
    }

    /**
     * 
     * @param {object[]} properties 
     * @returns {(object[].<User>|null)}
     */
    getUsersByProperties(properties){
        if(!properties || !Array.isArray(properties)) return null
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return null
        return this.#ar.filter(e => e.compareProperties(properties))
    }

    /**
     * 
     * @param {object} property 
     * @returns {(object[].<User>|null)}
     */
    getUsersByProperty(property){
        if(!property || typeof property !== "object") return null
        if(typeof Object.values(property)[0] !== "string") return null
        return this.#ar.filter(e => e.includeProperty(property))
    }

    /**
     * @param {string} id
     * @param {object[]} properties 
     * @returns {(User|null)}
     */
    getUser(id, properties){
        if(!id || !["number", "string"].includes(typeof id)) return null
        if(!properties || !Array.isArray(properties)) return null
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return null
        return this.#ar.find(user => user.id === id && (properties?.length ? user.compareProperties(properties) : true))
    }
}

module.exports = Cooldown