class User{
    /**
     * 
     * @param {object} data
     * @param {string} data.id
     * @param {number} data.date
     * @param {number} data.time
     * @param {object[]} [data.properties=[]]
     */
    constructor(data){
        this.id = data.id
        this.date = data.date
        this.time = data.time
        this.properties = data.properties || []
        this._timeout = data._timeout
    }
    
    /**
     * 
     * @returns {number}
     */
    getTime(){
        let def = String(this.time - ((Date.now() - this.date) / 1000))
        if(def.includes(".")) def = def.split(".")[0]
        if(def === "0") def = "0.5"
        def = Number(def)
        return def
    }

    /**
     * 
     * @param {object[]} props 
     * @returns {(boolean|null)}
     */
    compareProperties(props){
        if(!props) return null
        if(!Array.isArray(props)) return null
        if(!props[0]) return null
        if(props.filter(property => this.includeProperty(property)).length !== props.length) return null
        return true
    }

    /**
     * 
     * @param {object} props 
     * @returns {(boolean|null)}
     */
    includeProperty(prop){
        if(!prop || typeof prop !== "object") return null
        if(typeof Object.values(prop)[0] !== "string") return null
        if(!this.properties.find(b => Object.keys(prop)[0] === Object.keys(b)[0] && Object.values(prop)[0] === Object.values(b)[0])) return null
        return true
    }
}

module.exports = User