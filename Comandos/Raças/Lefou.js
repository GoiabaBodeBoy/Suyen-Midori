const aliases = ['lefou', 'lf']
const { MessageEmbed } = require('discord.js')
let lefou = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Lefou')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451244417544282/Lefou.png')
		.setDescription(
			'*E o que é melhor do que ter ao seu lado alguém que conhece tão intimamente o inimigo?*\n' +
			'— Sir Porti, moreau do cão paladino de Thyatis\n\n' +
			'**+2 em Três Atributos Diferentes (exceto Carisma), Carisma -2.**\n' + '**Cria da Tormenta.** Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.\n' +
			'**Deformidade.** Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta. Você pode trocar um desses bônus por um poder da Tormenta a sua escolha. Esta habilidade não causa perda de Carisma.')
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Lefou",
	aliases: aliases,
	raça: lefou
} 
