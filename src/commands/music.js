const execute = (bot,msg,args) => {

  const Ytdl = require('ytdl-core')

  if(Ytdl.validateURL(args)){
    console.log('Link validado')
    msg.member.voice.connection.player(Ytdl(args))
  }
}


module.exports = {
  name: "play",
  help: `Comando para tocar musica **Obs: Não funcionando**`,
  execute
}