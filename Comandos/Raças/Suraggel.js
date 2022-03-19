const aliases = ['suraggel', 'srgl', 'aggelus', 'sulfure']
const { MessageEmbed } = require('discord.js')

	let suraggel = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Suraggel')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947450750135595048/Suraggel.png')
		.setDescription(
			'*Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure.*\n\n' +
			'**Sabedoria +4, Carisma +2 (Aggelus); Destreza +4, Inteligência +2 (Sulfure).**\n' +
			'**Herança Divina.** Você é uma criatura do tipo espírito e recebe visão no escuro.\n' +
			'**Luz Sagrada (Aggelus).** Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma). Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM. <:magico:942991854759198812>\n' +
			'**Sombras Profanas (Sulfure).** Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM. <:magico:942991854759198812>\n')
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: 'Suraggel',
	aliases: aliases,
	raça: suraggel
}   
