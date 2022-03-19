const aliases = ['hynne', 'hyn']
const { MessageEmbed } = require('discord.js')
let hynne = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Hynne')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451154776875038/Hynne.png')
		.setDescription(
			"*Foram recentemente forçados a fugir de seu antigo reino natal, sendo então acolhidos pelas Repúblicas Livres de Sambúrdia, onde cultivam ervas e especiarias valiosas.*\n\n" +
			"**Destreza +4, Carisma +2, Força –2.**\n" +
			"**Arremessador.** Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.\n" +
			"**Pequeno e Rechonchudo.** Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Enganação e usa o modificador de Destreza para Atletismo (em vez de Força).\n" +
			"**Sorte Salvadora.** Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.\n")
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
	
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err; 
}
module.exports.help = {
	name: "Hynne",
	aliases: aliases,
	raça: hynne
}