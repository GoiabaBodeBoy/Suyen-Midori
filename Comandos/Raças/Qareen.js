const aliases = ['qareen', 'qrn']
const { MessageEmbed } = require('discord.js')
	let qareen = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Qareen')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451182614478928/Qareen.png')
		.setDescription(
			'*E, se você não acredita em receber um desejo sem dar algo em troca, é porque ainda não teve a felicidade de conhecer um qareen.*\n' +
			'— Nagard Wyrmslayer, humano guardião da realidade\n\n' +
			'**Carisma +4, Inteligência +2, Sabedoria –2.**\n' +
			'**Desejos.** Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.\n' +
			'**Resistência Elemental.** Conforme sua ascendência, você recebe resistência 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).\n' +
			'**Tatuagem Mística.** Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. <<:magico:942991854759198812>942991854759198812>') 
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Qareen",
	aliases: aliases,
	raça: qareen
} 
