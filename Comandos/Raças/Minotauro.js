const aliases = ['minotauro', 'mntr']
const { MessageEmbed } = require('discord.js')
let minotauro = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Minotauro')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451219100717066/Minotauro.png')
		.setDescription(
			'*Minotauros hoje se espalham por Arton para provar que seus princípios ainda são verdadeiros, mesmo que sua divindade não exista mais. São disciplinados, normalmente sisudos e determinados. Sua pelagem tem cores variadas, seus chifres são seu orgulho. Sua força é seu maior trunfo. Ter um minotauro como companheiro é contar com proteção constante e garantida.*\n' +
			'— Masaru Yudai, lefou monge feiticeiro\n\n' +
			'**Força +4, Constituição +2, Sabedoria –2.**\n' +
			'**Chifres.** Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.\n' +
			'**Couro Rígido.** Sua pele é dura como a de um touro. Você recebe +1 na Defesa.\n' +
			'**Faro.** Você tem olfato apurado. Você não fica desprevenido e sofre apenas camuflagem (em vez de camuflagem total) contra inimigos em alcance curto que não possa ver.\n' +
			'**Medo de Altura.** Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.')
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
	
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Minotauro",
	aliases: aliases,
	raça: minotauro
} 
