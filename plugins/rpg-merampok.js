
// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 200000))
let runee = (Math.floor(Math.random() * 50))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '*_Contoh: #merampok @Tag_*'
  if (typeof db.data.users[who] == 'undefined') throw '*Pengguna Tidak Ada Didalam Data Base*'
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (180000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 180000){
  if (200000 > users[who].money) throw '*Money Target Dibawah Batas Minimal*'
  if (100 < users[who].rune) throw '*Rune Target Melebihi Kapasitas Maksimal*'
  if (-500 > users[m.sender].rune) throw '*Rune Kamu Terlalu Rendah*'
  users[who].money -= dapat * 1
  users[who].rune += runee * 1
  users[m.sender].money += dapat * 1
  users[m.sender].rune -= runee * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  conn.reply(m.chat, `*Berhasil Merampok Money Target Sebesar ${dapat} Dan Rune Kamu Berkurang Sebesar ${runee}, Sementara Itu Rune Target Bertambah ${runee}*`, m)

}else conn.reply(m.chat, `*Anda Sudah Merampok Dan Berhasil Sembunyi , Tunggu ${timers} Untuk Merampok Lagi*`, m)
}
handler.help = ['merampok *@tag*']
handler.tags = ['rpg']
handler.command = /^merampok$/
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}