const aliases = ['medusa', 'mds']
const { MessageEmbed } = require('discord.js')
	let medusa = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Medusa')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451087336644679/Medusa.png')
		.setDescription(
			"*Conseguem se fazer passar por mulheres humanas, quando escondem o cabelo feito de serpentes. O único povo que não teme medusas são os anões, que as consideram belas musas.*\n\n" +
			"**Destreza +4, Carisma +2.**\n" +
			"**Cria de Megalokk.** Você é uma criatura do tipo monstro e recebe visão no escuro.\n" +
			"**Natureza Venenosa.** Você recebe resistência a veneno 5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja empunhando. A arma causa +1d12 pontos de dano de veneno. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro).\n" +
			"**Olhar Atordoante.** Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por 1 rodada. Se passar, fica imune a esta habilidade por um dia.\n")
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
	
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Medusa",
	aliases: aliases,
	raça: medusa
}; 
