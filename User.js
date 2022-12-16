class User{
    constructor(datas){
        this.ID = datas.id
        this.Date = datas.date
        this.Time = datas.time
        this.Command = datas.cmd ? datas.cmd : null
        this.Guild = datas.guild ? datas.guild : null
    }
    
    GetTime(){
        let def = String(this.Time - ((Date.now() - this.Date) / 1000))
        if(def.includes(".")) def = def.split(".")[0]
        if(def === "0") def = "0.5"
        def = Number(def)
        return def
    }
}

module.exports = User