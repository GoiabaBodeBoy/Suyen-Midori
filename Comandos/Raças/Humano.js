const aliases = ['humano', 'hmn']
const { MessageEmbed } = require('discord.js')
	let humano = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Humano')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451406007287858/Humano.png')
		.setDescription(
			"*Ser humano é ter a liberdade e a conveniência de se tornar o que quiser, mesmo sem nem sempre compreender as responsabilidades que isso carrega. É ter o instinto aventureiro correndo no sangue.*\n*— Broktar Hellpipes, anão bardo*\n\n" +
			"**+2 em Três Atributos Diferentes.** Filhos de Valkaria, Deusa da Ambição, humanos podem se destacar em qualquer caminho que escolherem.\n" +
			"**Versátil.** Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.\n")
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}

module.exports.help = {
	name: "Humano",
	aliases: aliases,
	raça: humano
} 
