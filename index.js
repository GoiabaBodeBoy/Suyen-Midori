const express = require('express');
const app = express();
const path = require('path');
app.get('/', (req, res) => {	
res.sendFile(path.join(__dirname+'/index.html'))
})
app.listen(process.env.TOKEN);

const { MessageEmbed, Client, MessageButton, Collection, Intents } = require("discord.js");
const intents = new Intents(1991);
const client = new Client({ intents });
client.commands = new Collection();
client.cooldowns = new Collection();
const ms = require('ms');
const fs = require('fs');
const prefix = ("t!");
const { pagination } = require('reconlx')
client.aliases = new Collection();

fs.readdirSync('./Comandos/').forEach(dir => {
	fs.readdir(`./Comandos/${dir}`, (err, files) => {
		if (err) throw err;
		var jsFiles = files.filter(f => f.split(".").pop() === "js");
		if (jsFiles.length <= 0) {
			//console.log("Não foi possível encontrar nenhum comando");
			return;
		}
		jsFiles.forEach(file => {
			var fileGet = require(`./Comandos/${dir}/${file}`);
			//console.log(`O arquivo ${file} foi carregado com sucesso!`)
			try {
				client.commands.set(fileGet.help.name, fileGet);
				//Pesquisa na pasta de comandos por um alias
				fileGet.help.aliases.forEach(alias => {
					client.aliases.set(alias, fileGet.help.name);
				})
			} catch (err) {
				return console.log(err);
			}
		});
	});
})

client.on('ready', () => {
console.log(`${client.user.username}#${client.user.discriminator} está online!`)
client.user.setActivity("Tormenta20", { type: "PLAYING" })
});

client.on("messageCreate", async message => {
	if (!message.content.startsWith(prefix)) return;
	let timeout = 10000000
	let back = {
		style: 'SECONDARY',
	  name: 'previous'
	}
	let next = {
		style: 'SECONDARY',
		name: 'next',
	}
	buttons = [
		back,
		next
	];
	let messageArray = message.content.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
	input = messageArray.slice(2).trim();
	[, command, args] = input.match(/(\w+)\s*([\s\S]*)/);
	let cmd = messageArray.split(" ")[0]
	let commands = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commands) {
commands.help.cooldowns = 3000
 try { 
      if(client.cooldowns.has(`${commands.help.name}${message.author.id}`)) {
         let cooldown_embed = new MessageEmbed()
            .setTitle("Cooldown")
            .setDescription(`Você precisa esperar \`${ms(        client.cooldowns.get(`${commands.help.name}${message.author.id}`) -                  Date.now(), { long: false })}\` para usar \`t!${commands.help.name.toLowerCase()}\` denovo!`
            )
            .setColor("#bc3626")
         return message.reply({ embeds: [cooldown_embed] });
}
      client.cooldowns.set(        `${commands.help.name}${message.author.id}`, Date.now() + commands.help.cooldowns);
      setTimeout(() => {
         client.cooldowns.delete(`${commands.help.name}${message.author.id}`);
      }, commands.help.cooldowns);
await commands.run(MessageEmbed, client, message, args, pagination, buttons, timeout);
	} catch (err) {
	 if(commands.help.raça) {
		let erro = new MessageEmbed()
		.setTitle('Erro')
		.setColor('#bc3626')
		.setDescription(`O comando **${message.content}** não existe! Tente **t!raças** ou utilize **t!help** para obter ajuda.`)
		message.reply({ embeds: [erro]})
	} else if(commands.help.perícia) {
		 let erro = new MessageEmbed()
		.setTitle('Erro')
		.setColor('#bc3626')
		.setDescription(`O comando **${message.content}** não existe! Tente **t!perícias** ou utilize **t!help** para obter ajuda.`)
		message.reply({ embeds: [erro]})
				}
		}
} else {
			let erro = new MessageEmbed()
		.setTitle('Erro')
		.setColor('#bc3626')
		.setDescription(`O comando **${message.content}** não existe! Utilize **t!help** para obter ajuda.`)
	message.reply({ embeds: [erro]})
}
})

client.on('messageCreate', (message) => {
	if (message.channel.id === '947539742017331210' && !message.author.bot) {
		let yes = '<a:yes:947545215655350292>'
		let no = '<a:no:947545150308118558>'
		message.react(yes)
		message.react(no)
	}
})

client.login(process.env['token']);