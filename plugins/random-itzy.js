import axios from 'axios'

let handler = async(m, { conn, args, usedPrefix, command }) => {
  let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/itzy.json`)).data  
  let mystic = await res[Math.floor(res.length * Math.random())]
  await delay(5000)
  conn.sendFile(m.chat, mystic, 'itzy.jpg', `Results From ${command}\n\nAuthor: ${author}`)
}

handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
