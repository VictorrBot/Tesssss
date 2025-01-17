let allowedGroups = ['120363046165499857@g.us']; // daftar grup yang diizinkan

let handler = async (m, { conn, command, args }) => {
  // pengecekan apakah grup tempat pesan dikirimkan termasuk dalam grup yang diizinkan
  if (!allowedGroups.includes(m.chat)) {
    return conn.reply(m.chat, 'Gomennne oneechan, fitur ini hanya dapat diakses di Negara Utama', m);
  }

  let user = global.db.data.users[m.sender];
  
  // mendapatkan jumlah uang yang akan ditabungkan
  let count = command.replace(/^nabung/i, '');
  count = count ? /all/i.test(count) ? Math.floor(user.money) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  
  // pengecekan apakah pengguna memiliki ATM dan apakah ATM telah mencapai batas maksimum
  if (user.atm == 0) {
    return conn.reply(m.chat, `Kamu belum memiliki ATM\n\nDapatkan ATM di #craft`, m);
  }
  if (user.bank >= user.fullatm) {
    return conn.reply(m.chat, `ATM kamu sudah mencapai batas maksimum\n\nTingkatkan ATM agar batas menjadi lebih besar`, m);
  }
  
  // pengecekan apakah jumlah yang ingin ditabung melebihi batas maksimum di bank
  if (count > user.fullatm - user.bank) {
    return conn.reply(m.chat, `Jumlah yang ingin kamu tabungkan melebihi batas maksimum di bank kamu\n\nATM kamu memiliki batas maksimum ${user.fullatm} Money 💵`, m);
  }
  
  // pengecekan apakah pengguna memiliki uang yang cukup untuk ditabungkan
  if (user.money < count) {
    return conn.reply(m.chat, `Uang kamu tidak cukup\n\nJumlah yang ingin kamu tabungkan adalah ${count} Money 💵`, m);
  }
  
  // jika semua pengecekan berhasil, tabungkan uang ke bank dan kurangi uang di dompet
  user.money -= count;
  user.bank += count;
  
  conn.reply(m.chat, `MENABUNG 🏦\n\n📡 Status: Sukses\n💱 Menabung: ${count} Money 💵\n🏧 Total di Bank: ${user.bank} Money 💵\n📝 Catatan: Terima kasih sudah menabung\n\n*${global.bottime}*`, m);
};

handler.help = ['nabung <jumlah>', 'nabungall'];
handler.tags = ['rpg'];
handler.command = /^nabung(?:([0-9]+)|all)?$/i;
handler.limit = 1;

export default handler;
