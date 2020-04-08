const execute =  (bot,msg,args) => {

console.log("cheguei")

  
  // Entrar no canal de voz
  if(!msg.member.voice.channel){
    return msg.reply("Você precisa estar em um canal de voz D:")
  }

  msg.member.voice.channel.join();
}

module.exports = {
  name: "join",
  help: `Entrar no canal de musica`,
  execute
}