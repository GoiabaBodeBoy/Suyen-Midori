const { MessageEmbed } = require('discord.js')
let vontade = new MessageEmbed()
	.setColor('#bc3626')
	.setTitle('Vontade')
	.setDescription('Esta perícia envolve sua concentração e força de vontade.')
	.addFields(
		{ name: 'Concentração', value: 'Quando lança uma magia em condições adversas, ou quando sofre dano durante a execução de uma magia, você precisa fazer um teste de Vontade.' },
		{ name: 'Resistência', value: 'Você usa Vontade para resistir a efeitos mentais, como encantamentos e ilusões. A CD é determinada pelo efeito.' })

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
	return err;
}
module.exports.help = {
	name: 'Vontade',
	aliases: ['vontade'],
	perícia: vontade
}
