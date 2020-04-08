const Discord = require('discord.js');
const bot = new Discord.Client()
const fs = require('fs')
const path = require('path')



const dotenv = require('dotenv');
dotenv.config()

bot.commands = new Discord.Collection();

//Vai pegar os arquivos que terminam com .js de dentro da pasta commands
const commandsFile = fs.
readdirSync(path.join(__dirname, 'commands'))
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



    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift()

    // console.log(args)
      try {
        return bot.commands.get(command).execute(bot,msg,args)  
      } catch (error) {
        return msg.reply(`Sinto muito ${msg.author.username}, eu não reconheço esse comando`)      
      }
    
  }
})


bot.login(process.env.TOKEN)


    // Manda a msg
    // return msg.channel.send("Mensagem enviada :D")
    // Dá replay
    // return msg.reply("Mensagem respondida :D")