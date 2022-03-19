const { MessageEmbed } = require('discord.js')
let guerra = new MessageEmbed()
.setDescription('Você foi educado em tática, estratégia e logística.')
.addFields(
	{ name: "Analisar Terreno (CD 20)", value: "Como uma ação de movimento, você pode observar o campo de batalha. Se passar, descobre uma vantagem, como cobertura, camuflagem ou terreno elevado, se houver." },
	{ name: "Tática (CD 20)", value: "Como uma ação padrão, você orienta um aliado em alcance médio. Se passar, fornece +5 na Iniciativa dele. Se isso fizer com que um aliado que ainda não tenha agido nesta rodada fique com uma Iniciativa maior do que a sua, ele age imediatamente após seu turno. Nas próximas rodadas, ele age de acordo com a nova ordem." })
.setColor('#bc3626')
.setTitle('Guerra')

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Guerra",
	aliases: ['guerra'],
	perícia: guerra
	}