const Discord = require('discord.js');
const bot = new Discord.Client()
const fs = require('fs')
const path = require('path')

const dotenv = require('dotenv');
dotenv.config()
bot.login(process.env.TOKEN)

bot.commands = new Discord.Collection();

//Vai pegar os arquivos que terminam com .js de dentro da pasta commands
const commandsFile = fs.
readdirSync(path.resolve(__dirname, 'commands'))
.filter(filename => filename.endsWith('.js'))


for(let filename of commandsFile){
  const command = require(`./commands/${filename}`)

  bot.commands.set(command.name,command)
}

console.log(bot.commands)

bot.on('ready',()=>{
  console.log(`Olá, eu sou ${bot.user.username}`)
})


bot.on('message',(msg) => {
  if((!msg.author.bot) && (msg.content.startsWith(process.env.PREFIX))){

    const args = msg.content.slice(process.env.PREFIX).split(" ");
    const command = args.shift()

    bot.commands.get(command).execute(bot,msg,args)
  }
})


    // Manda a msg
    // return msg.channel.send("Mensagem enviada :D")
    // Dá replay
    // return msg.replay("Mensagem respondida :D")