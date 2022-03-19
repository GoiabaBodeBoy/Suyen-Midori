const aliases = ['silfide', 'slfd']
const { MessageEmbed } = require('discord.js')
let sílfide = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Sílfide')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451007317717042/Silfide.png')
		.setDescription(
			'*Pensando bem, ninguém até hoje encontrou um bom motivo para aceitar uma sílfide em um grupo de aventureiros...*\n\n' +
			'**Carisma +4, Destreza +2, Força –4.**\n' +
			'**Asas de Borboleta.** Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.\n' +
			'**Espírito da Natureza.** Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.\n' +
			'**Magia das Fadas.** Você pode lançar duas das magias a seguir (todas atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM. <:magico:942991854759198812>')
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: 'Sílfide',
	aliases: aliases,
	raça: sílfide
}   
