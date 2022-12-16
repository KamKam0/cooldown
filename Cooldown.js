class Cooldown{
    constructor(name){
        this.name = name
        this.ar = []
    }

    GetAll(){
        return {name: this.name, to_push: this}
    }

    AddUser(datas){
        if(!datas || typeof datas !== "object" || !datas.id || !datas.date || isNaN(datas.id) || String(datas.id).length !== 18 || typeof datas.date !== "number" || !datas.time || typeof datas.time !== "number") return null
        const user = {ID: datas.id, Time: datas.time, Date: datas.date, Guild: datas.guild, Command: datas.cmd}
        this.ar.push(user)
        setTimeout(() => this.RemoveUser(user), user.Time * 1000)
    }

    RemoveUser(datas){
        if(!datas || typeof datas !== "object" || !datas.ID || !datas.Date || isNaN(datas.ID) || String(datas.ID).length !== 18 || typeof datas.Date !== "number" || !datas.Time || typeof datas.Time !== "number") return null
        this.ar.splice(this.ar[this.ar.indexOf(this.ar.find(e => e.ID === datas.ID && datas.Command === e.Command && datas.Date === e.Date && datas.Guild === e.Guild))], 1)
    }

    GetUser(ID){
        if(!ID || isNaN(ID) || String(ID).length !== 18) return null
        if(!this.ar.find(e => e.ID === ID)) return null
        else return this.ar.filter(e => e.ID === ID)
    }

    GetCommand(name){
        if(!name || typeof name !== "string") return null
        if(!this.ar.find(e => e.Command === name)) return null
        else return this.ar.filter(e => e.Command === name)
    }

    GetGuild(ID){
        if(!ID || isNaN(ID) || String(ID).length !== 18) return null
        if(!this.ar.find(e => e.Guild === ID)) return null
        else return this.ar.filter(e => e.Guild === ID)
    }


    Get(datas){
        if(!datas || typeof datas !== "object" || !datas.id || isNaN(datas.id) || String(datas.id).length !== 18) return null
        let vd = {ID: datas.id, Guild: null, Command: null}
        if(datas.guild) if(!isNaN(datas.guild) && String(datas.guild).length === 18) vd.Guild = datas.guild
        if(datas.cmd) if(typeof datas.cmd === "string") vd.Command = datas.cmd
        if(!this.ar.find(e => e.ID === vd.ID && e.Command === vd.Command && e.Guild === vd.Guild)) return null
        else return this.ar.find(e => e.ID === vd.ID && e.Command === vd.Command && e.Guild === vd.Guild)
    }
}

module.exports = Cooldown