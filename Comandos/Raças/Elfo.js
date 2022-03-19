const aliases = ['elfo', 'elf']
const { MessageEmbed } = require('discord.js')
let elfo = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Elfo')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451322192506930/Elfo.png')
		.setDescription(
			"*Das maiores tragédias nascem os maiores aventureiros”, diz um ditado que circula nas tavernas de Malpetrim. Parece algo feito sob medida para os elfos de Arton.*\n*— Garibaldo Cachimbo Caído, hynne bardo*\n\n" +
			"**Inteligência +4, Destreza +2, Constituição –2.**\n" +
			"**Graça de Glórienn.** Seu deslocamento é 12m (em vez de 9m).\n" +
			"**Herança Feérica.** Você recebe +1 ponto de mana por nível.\n" +
			"**Sentidos Élficos.** Você recebe visão na penumbra e +2 em Misticismo e Percepção.\n") 
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Elfo",
	aliases: aliases,
	raça: elfo
}; 
