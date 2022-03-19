const {readdirSync} = require("fs");
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
const user = client.users.cache.get('346729222968180737');
let command = client.commands.get(args.toLowerCase()) || client.commands.find((c) => c.help.aliases && c.help.aliases.includes(args.toLowerCase()));    
if (!args[0]) {
let CommandsList = [];
readdirSync(`./Comandos/Ajuda`).forEach((file) => {
let filen = require(`../../Comandos/Ajuda/${file}`);
CommandsList.push({ name: `${filen.help.name} [${filen.help.aliases[0]}, ${filen.help.aliases[1]}]`, value: filen.help.description, inline: true })
})
let helpEmbed = new MessageEmbed()
.setTitle(`${client.user.username} Help`)
.setDescription('batata')
.addFields(CommandsList)
.setColor('#bc3626')
.setFooter({ text: `Desenvolvido por: ${user.username}#${user.discriminator}`, iconURL: user.avatarURL()})
message.reply({embeds: [helpEmbed]});
} else {
if (!command) {
let nocmd = new MessageEmbed()
.setTitle('Erro')
.setDescription(`O comando \`${args}\` não existe! Utilize \`t!help\` para verificar os comandos disponíveis.`)
.setColor('#bc3626')
message.reply({ embeds: [nocmd] })
} else { 
let helpCmdEmbed = new MessageEmbed()
.setTitle(`${client.user.username} Help | ${command.help.name}`)
.setDescription(command.help.exp || " ")
.addFields(
{ name: "Descrição", value: `${command.help.description || "Sem descrição!"}`},
{ name: "Uso", value: `${command.help.usage || "Sem uso definido!"}` },
{ name: "Aliases", value: `${command.help.aliases.join(' ') || "Sem aliases!"}` },
{ name: 'Categoria', value: `${command.help.category || "Sem categoria!"}` })
.setColor('#bc3626')
.setFooter({ text: `Desenvolvido por: ${user.username}#${user.discriminator}`, iconURL: user.avatarURL()}) 
message.reply({embeds: [helpCmdEmbed]});
}
}
} 
module.exports.help = {
name: 'Help',
aliases: ['hlp', 'ajd', 'help', 'ajuda'],
description: 'Mostra comandos de listagem do bot.',
category: 'Ajuda',
usage: 't!help [nome do comando]'
}     