const execute = (bot,msg,args) => {
  return msg.reply(`Mensagem inicial :D`)
}


module.exports = {
  name: "hello",
  help: "Hello Word",
  execute
}