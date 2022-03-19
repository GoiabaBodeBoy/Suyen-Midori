const { MessageEmbed } = require('discord.js')
let iniciativa = new MessageEmbed()
.setDescription('Esta perícia determina sua velocidade de reação em situações de perigo.')
.addFields({ name: 'Agir', value: 'Quando uma cena de ação começa, cada personagem envolvido faz um teste de Iniciativa. Eles agem em ordem decrescente dos resultados. Em caso de empate, o personagem com o maior bônus de Iniciativa age primeiro. Se o empate persistir, outra rolagem deve ser feita entre os empatados.'})
.setColor('#bc3626')
.setTitle('Iniciativa')

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Iniciativa",
	aliases: ['iniciativa'],
	perícia: iniciativa
	}