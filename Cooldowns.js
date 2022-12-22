class Cooldowns{
    constructor(){
        this.cooldowns_names = []
        this.cooldowns = []
    }

    AddCooldown(name){
        if(!name || typeof name !== "string" || name.length > 50) return null
        if(this.cooldowns_names.includes(name)) return null
        const Cooldown = require("./Cooldown")
        const vc = new Cooldown(name)
        let datas = vc.GetAll()
        this.cooldowns_names.push(datas.name)
        this.cooldowns.push(datas.to_push)
        return true
    }

    DeleteCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.cooldowns_names.includes(name)) return null
        this.cooldowns_names.splice(this.cooldowns_names[this.cooldowns_names.indexOf(this.cooldowns_names.find(e => e === name))], 1)
        this.cooldowns.splice(this.cooldowns[this.cooldowns.indexOf(this.cooldowns.find(e => e.name === name))], 1)
        return true
    }

    GetCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.cooldowns_names.includes(name)) return null
        return this.cooldowns.find(c => c.name === name)
    }

    Deploy(elements){
        if(!elements || !Array.isArray(elements)) return null
        elements.filter(pro => typeof pro === "string").forEach(name => this.AddCooldown(name))
        return true
    }
}

module.exports = Cooldowns