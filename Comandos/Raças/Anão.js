const aliases = ['anao', 'an']
const { MessageEmbed } = require('discord.js');
	let anão = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Anão')
.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451363669999636/Anao.png')
		.setDescription(
			"*O subterrâneo é ameaçado pelos finntroll, inimigos jurados dos anões. Mesmo assim, muitos deles abandonam Doherimm e partem para a aventura na superfície. Não viajam só em busca de riquezas, mas também para dar uma amostra de sua honra e tradição ao resto do mundo.*\n*— Dynx, goblin paladino de Allihanna*\n\n" +
			"**Constituição +4, Sabedoria +2, Destreza –2.**\n" +
			"**Conhecimento das Rochas.** Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.\n" +
			"**Devagar e Sempre.** Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.\n" +
			"**Duro como Pedra.** Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.\n" +
			"**Tradição de Heredrimm.** Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.\n")
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })


module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Anão",
	aliases: aliases,
	raça: anão
		}