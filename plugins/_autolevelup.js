import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
    
        m.reply(`
*Selamat Sayangku, Kamu Naik Level*

*📊 Kamu Telah Naik Level*
*${before}* ➣ *${user.level}*
*• Role: ${user.role}*

*.cekrank - Untuk Lihat Progress*
*.lb - Untuk Melihat Leaderboard*

⭐ Tips:
*"Mainkan Fitur RPG Untuk Naik Level"*`.trim())
    }
    
   /* let looh = `*${before}* -> *${user.level}*`
      conn.send3ButtonImg(m.chat, pp, `Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ, Aɴᴅᴀ Tᴇʟᴀʜ Nᴀɪᴋ Lᴇᴠᴇʟ!!`, looh, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/_b4c00t4an_s3l3b',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./media/ok.jpg'),
    sourceUrl: sgc
   }}})*/
}
export const disabled = false