let handler = async (m, { conn, text, participants }) => {
    try {
        let member = participants.map(u => u.jid)
        let siapa = member[Math.floor(Math.random() * member.length)] 
        let jawab = `
Pertanyaan : *${m.text}*
Jawaban : *@${siapa.replace(/@.+/, '')}*
 `.trim()
        conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid : [siapa]}}) 
      } catch (e) {
              console.log(e)
              m.reply('Error')
              conn.sendMessage('60199782326@s.whatsapp.net', {text : 'Use error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*'})
      }
}
handler.help = ['', 'kah'].map(v => 'siapa' + v + ' <text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^siapa(kah)?$/i
handler.group = true

handler.fail = null
 
module.exports = handler
