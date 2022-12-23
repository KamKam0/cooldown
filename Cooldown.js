const User = require("./User")
class Cooldown{
    constructor(name){
        this.name = name
        this.ar = []
    }

    GetAll(){
        return this.ar
    }

    AddUser(datas){
        if(!datas || typeof datas !== "object") return null
        if(!datas.id || !["number", "string"].includes(typeof datas.id)) return null
        if(!datas.time || typeof datas.time !== "number") return null
        if(datas.properties && !Array.isArray(datas.properties)) return null
        if(datas.properties && datas.properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string" && !Object.entries(pro)[1]).length !== datas.properties.length) return null
        if(this.GetUser(datas.id, datas.properties)) return null
        let toretrun = new User({ID: datas.id, Time: datas.time, Date: Date.now(), Properties: datas.properties})
        this.ar.push(toretrun)
        setTimeout(() => this.RemoveUser(datas.id, datas.properties), datas.time * 1000)
        return toretrun
    }

    RemoveUsersByID(id){
        if(!id || !["number", "string"].includes(typeof id)) return null
        if(!this.ar.filter(e => e.ID === id)[0]) return null
        this.ar = this.ar.filter(e => e.ID !== id)
        return true
    }

    RemoveUsersByProperties(properties){
        if(!properties || !Array.isArray(properties)) return null
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return null
        if(!this.ar.filter(e => e.CompareProperties(properties))[0]) return null
        this.ar = this.ar.filter(e => !e.CompareProperties(properties))
        return true
    }

    RemoveUsersByProperty(property){
        if(!property || typeof property !== "object") return null
        if(typeof Object.values(property)[0] !== "string") return null
        if(!this.ar.filter(e => e.IncludeProperty(property))[0]) return null
        this.ar = this.ar.filter(e => !e.IncludeProperty(property))
        return true
    }

    RemoveUser(id, properties){
        if(!id || !["number", "string"].includes(typeof id)) return null
        if(!properties || !Array.isArray(properties)) return null
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return null
        let user = this.ar.find(e => e.ID === id && e.CompareProperties(properties))
        if(!user) return null
        this.ar.splice(this.ar.indexOf(user), 1)
        return true
    }

    GetUsersByID(id){
        if(!id || !["number", "string"].includes(typeof id)) return null
        let users = this.ar.filter(e => e.ID === id)
        if(!users[0]) return null
        return users
    }

    GetUsersByProperties(properties){
        if(!properties || !Array.isArray(properties)) return null
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return null
        let users = this.ar.filter(e => e.CompareProperties(properties))
        if(!users[0]) return null
        return users
    }

    GetUsersByProperty(property){
        if(!property || typeof property !== "object") return null
        if(typeof Object.values(property)[0] !== "string") return null
        let users = this.ar.filter(e => e.IncludeProperty(property))
        if(!users[0]) return null
        return users
    }

    GetUser(id, properties){
        if(!id || !["number", "string"].includes(typeof id)) return null
        if(!properties || !Array.isArray(properties)) return null
        if(properties.filter(pro => typeof pro === "object" && typeof Object.values(pro)[0] === "string").length !== properties.length) return null
        let user = this.ar.find(e => e.ID === id && e.CompareProperties(properties))
        if(!user) return null
        return user
    }
}

module.exports = Cooldown