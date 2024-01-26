const index = require('./src/index')

const cooldowns = new index()
cooldowns.addCooldown('test')
console.log(`cooldown get verification: ${cooldowns.getCooldown('test') ? 'true' : 'false'}`)
cooldowns.deleteCooldown('test')
console.log(`cooldown get verification: ${cooldowns.getCooldown('test') ? 'false' : 'true'}`)

cooldowns.addCooldown('realtest')
let cooldown = cooldowns.getCooldown('realtest')

cooldown.addUser({ id: 1, date: Date.now(), time: 60, properties: [{color: 'Blue'}, {server: 'test'}, {phone: '06060606'}] })

console.log(`cooldown getUsersByID verification: ${cooldown.getUsersByID(1).length === 1 ? 'true' : 'false'}`)
console.log(`cooldown getAll verification: ${cooldown.getAll().length === 1 ? 'true' : 'false'}`)
console.log(`cooldown getUsersByProperties verification: ${cooldown.getUsersByProperties([{color: 'Blue'}]).length === 1 ? 'true' : 'false'}`)
console.log(`cooldown getUsersByProperty verification: ${cooldown.getUsersByProperty({color: 'Blue'}).length === 1 ? 'true' : 'false'}`)
console.log(`cooldown getUser verification: ${cooldown.getUser(1, [{server: 'test'}]) ? 'true' : 'false'}`)


cooldown.addUser({ id: 2, date: Date.now(), time: 60, properties: [{color: 'Blue'}] })
cooldown.addUser({ id: 3, date: Date.now(), time: 60, properties: [{server: 'test'}, {phone: '06060606'}] })
cooldown.addUser({ id: 4, date: Date.now(), time: 60, properties: [{phone: '06060606'}] })
cooldown.addUser({ id: 5, date: Date.now(), time: 5, properties: [] })
setTimeout(() => {
    console.log(`cooldown setTimeout verification: ${cooldown.getAll().length === 0 ? 'true' : 'false'}`)
}, 7000)

cooldown.removeUsersByID(1)
console.log(`cooldown removeUsersByID verification: ${cooldown.getAll().length === 4 ? 'true' : 'false'}`)
cooldown.removeUsersByProperties([{server: 'test'}, {phone: '06060606'}])
console.log(`cooldown removeUsersByProperties verification: ${cooldown.getAll().length === 3 ? 'true' : 'false'}`)
cooldown.removeUsersByProperty({color: 'Blue'})
console.log(`cooldown removeUsersByProperty verification: ${cooldown.getAll().length === 2 ? 'true' : 'false'}`)
cooldown.removeUser(4, [{phone: '06060606'}])
console.log(`cooldown removeUser verification: ${cooldown.getAll().length === 1 ? 'true' : 'false'}`)