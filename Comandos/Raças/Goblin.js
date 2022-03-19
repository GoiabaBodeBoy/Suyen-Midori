const aliases = ['goblin', 'gbln']
const { MessageEmbed } = require('discord.js')
	let goblin = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Goblin')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451292861730826/Goblin.png')
		.setDescription(
			"*Se você não se importar com servir de cobaia para alguns inventos...*\n*— Leona Steelblade, humana cavaleira arcana*\n\n" +
			"**Destreza +4, Inteligência +2, Carisma –2.**\n" +
			"**Engenhoso.** Você não sofre penalidades em testes de perícia por não usar kits. Se usar o kit, recebe +2 no teste de perícia.\n" +
			"**Espelunqueiro.** Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.\n" +
			"**Peste Esguia.** Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.\n" +
			"**Rato das Ruas.** Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.\n")
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Goblin",
	aliases: aliases,
	raça: goblin
} 
