const aliases = ['dahllan', 'dhln']
const { MessageEmbed } = require('discord.js')
let dahllan = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Dahllan')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451463242764358/Dahllan.png')
		.setDescription(
			"*Por serem recém-chegadas a Arton, o tempo de vida dahllan é desconhecido. Talvez sejam tão longevas quanto os mais antigos carvalhos, ou mais. Talvez nunca envelheçam de fato, enquanto houver vida natural no mundo.*\n" +
			"*— Arasthoriel, elfo mago*\n\n" +
			"**Sabedoria +4, Destreza +2, Inteligência –2.**\n" +
			"**Amiga das Plantas.** Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. <:magica:908857794629877820>\n" +
			"**Armadura de Allihanna.** Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.\n" +
			"**Empatia Selvagem.** Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e pedir favores de animais (veja Diplomacia, ~~t!perícias~~). Caso receba esta habilidade novamente, recebe +2 em Adestramento.")
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
	
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
	return err;
}
module.exports.help = {
	name: "Dahllan",
	aliases: aliases,
	raça: dahllan
} 
