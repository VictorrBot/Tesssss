import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*Tidak Ada Yang Mendominasi*\n\n*_🔍 Ikuti Acara FWW1 Untuk Menjadi Raja Iblis_*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*Tidak Ada Yang Mendominasi*\n\n*_🔍 Ikuti Acara FWW1 Untuk Menjadi Raja Iblis_*`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `*Tidak Ada Yang Mendominasi*\n\n*_🔍 Ikuti Acara FWW1 Untuk Menjadi Raja Iblis_*`, fkontak,  m)
await conn.reply(m.chat, `*Tidak Ada Yang Mendominasi*\n\n*_🔍 Ikuti Acara FWW1 Untuk Menjadi Raja Iblis_*`, fkontak,  m)    
} catch {
await conn.reply(m.chat, `*Please Be Patient...*`, fkontak,  m)  
}}
handler.help = ['attack-maou']
handler.tags = ['rpg']
handler.command = ['attack-maou']
handler.limit = 1
export default handler