const execute = (bot,msg,args) => {

  // Sair do canal de voz
 if(!msg.member.voice.channel){
   return msg.reply("Você precisa estar em um canal de voz D:")
 }
 
 msg.member.voice.channel.leave()
}

module.exports = {
name: "leave",
help: `sair no canal de musica`,
execute
}