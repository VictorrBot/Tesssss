import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa'
         let caption = `╭━━━━「 *SEWA* 」
┊ 3 Hari: 3K/Grup
┊ 7 Hari: 8K/Grup
┊ 15 Hari: 13K/Grup
┊ 30 Hari: 17K/Grup
┊ 90 Hari: 38K/Grup
┝━━━━「 *PREMIUM* 」
┊3 Hari:  4K/User
┊7 Hari:  7K/User
┊15 Hari:  11K/User
┊30 Hari:  16K/User                             
┊90 Hari:  33K/User
╰━━━━━━━━━━⬣

*PAYMENT:*
*Dana, OVO & Gopay*

Ingin Sewa Bot / Premium? Hub.
*wa.me/18459214155*

*_#Real100%_*
*_#Mahal?Ditawar_*
`
         await conn.sendButtonDoc(m.chat, caption, wm, '𝗢𝗪𝗡𝗘𝗥', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: '𝗠𝘆 𝗚𝗿𝗼𝘂𝗽 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹', 
               body: '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['sewa','sewagc','sewapremium','sewagrup','sewabot']
handler.tags = ['info']
handler.command = /^sewabot|sewa|sewapremium|sewagrup|sewagc$/i
export default handler