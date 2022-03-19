const aliases = ['trog', 'trg']
const { MessageEmbed } = require('discord.js')

	let trog = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Trog')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947450834545967124/Trog.png')
		.setDescription(
			'*Poucos divergem da crueldade e selvageria inerentes à raça. Abandonam a tribo ou são expulsos. Escolhem caminhos surpreendentes, inesperados; tornam-se druidas, ou clérigos, ou bucaneiros, ou sabe-se lá o que mais.*\n\n' +
			'**Constituição +4, Força +2, Inteligência –2.**\n' +
			'**Mau Cheiro.** Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia.\n' +
			'**Mordida.** Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.\n' +
			'**Reptiliano.** Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.\n' +
			'**Sangue Frio.** Você sofre 1 ponto de dano adicional por dado de dano de frio.')
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: 'Trog',
	aliases: aliases,
	raça: trog
}  
