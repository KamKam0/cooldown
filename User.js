class User{
    constructor(datas){
        this.ID = datas.id
        this.Date = datas.date
        this.Time = datas.time
        this.Properties = datas.properties || []
    }
    
    GetTime(){
        let def = String(this.Time - ((Date.now() - this.Date) / 1000))
        if(def.includes(".")) def = def.split(".")[0]
        if(def === "0") def = "0.5"
        def = Number(def)
        return def
    }

    CompareProperties(props){
        if(!props) return null
        if(!Array.isArray(props)) return null
        if(!props[0]) return null
        if(this.Properties.filter(e => props.find(b => Object.keys(e)[0] === Object.keys(b)[0] && Object.keys(e)[0] === Object.keys(b)[0])).length !== this.Properties.length) return null
        return true
    }

    IncludeProperty(prop){
        if(!property || typeof property !== "object") return null
        if(typeof Object.values(property)[0] !== "string") return null
        if(!this.Properties.find(b => Object.keys(prop)[0] === Object.keys(b)[0] && Object.keys(prop)[0] === Object.keys(b)[0])) return null
        return true
    }
}

module.exports = User