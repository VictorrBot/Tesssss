
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastpolisi)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
     if (new Date - global.db.data.users[m.sender].lastpolisi > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
*👮Mengejar Pencuri...*
`

var dimas2 = `
*👮Menangkap Pencuri...*
`

var dimas3 = `
*🚔Membawa Ke Kantor Polisi*
`

var dimas4 = `
*💵Menerima Gaji...*
`

var hsl = `
*POLICE RESULTS ${name}*

💵 Uang ${zero4}
✨ Exp ${zero5}	 
`

var dimas5 = `
*Waktunya Misi Polisi Lagi Kak....*
`

global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5


setTimeout(() => {
                     setTimeout(() => {
                     m.reply(`${dimas5}`)
                      }, 79200000)

                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari Pelanggan.....')
                     }, 0) 
  user.lastpolisi = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu Sekitar\n🕔 ${timers}`, wm, [['INVENTORY', '.inv']], m )
}
handler.tags = ['rpg']
handler.help = ['polisi']
handler.command = /^(polisi)$/i
handler.register = true

export default handler


function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days* ', h, ' *Hours* ', m, ' *Minute* ', s, ' *Second* '].map(v => v.toString().padStart(2, 0)).join('')
}