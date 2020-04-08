const execute = (bot,msg,args) => {
  
  console.log(args)
  let string = "====== *Comandos* ======\n\n"

  bot.commands.forEach(comando => {
    if(comando.help){
      string += `**${process.env.PREFIX}${comando.name}** ${comando.help}\n`
    }
  });

  string += "\n====== *Comandos* ======"
  return msg.channel.send(string);

  // return msg.reply("Mensagem de ajuda :D")
}


module.exports = {
  name: "help",
  execute
}