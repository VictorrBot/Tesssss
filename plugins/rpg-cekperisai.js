let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  if (user.lastperisai == 0) {
    conn.reply(m.chat, `Anda tidak sedang menggunakan perisai.`, m)
    return
  }
  let waktuSekarang = new Date() * 1
  let durasi = (user.lastperisai - waktuSekarang) / 1000
  let durasiText = clockString((user.lastperisai - waktuSekarang))
  conn.reply(m.chat, `Perisai anda akan berakhir dalam ${durasiText}.`, m)
}
handler.help = ['cekperisai']
handler.tags = ['rpg']
handler.command = /^cekperisai$/

export default handler