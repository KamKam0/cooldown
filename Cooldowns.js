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
    }

    DeleteCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.cooldowns_names.includes(name)) return null
        this.cooldowns_names.splice(this.cooldowns_names[this.cooldowns_names.indexOf(this.cooldowns_names.find(e => e === name))], 1)
        this.cooldowns.splice(this.cooldowns[this.cooldowns.indexOf(this.cooldowns.find(e => e.name === name))], 1)
    }

    GetCooldown(name){
        if(!name || typeof name !== "string") return null
        if(!this.cooldowns_names.includes(name)) return null
        return this.cooldowns.find(c => c.name === name)
    }

    Deploy(){
        ["global", "commands", "verif", "mention"].forEach(name => {
            this.AddCooldown(name)
        })
    }
}

module.exports = Cooldowns