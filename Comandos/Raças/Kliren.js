const aliases = ['kliren', 'klrn']
const { MessageEmbed } = require('discord.js')
	let kliren = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Kliren')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451056256864317/Kliren.png')
		.setDescription(
			"*Os kliren somam a alta inteligência gnômica e a curiosidade humana, resultando em seres de extrema engenhosidade, criatividade e talento com aparatos mecânicos.*\n\n" +
			"**Inteligência +4, Carisma +2, Força –2.**\n" +
			"**Híbrido.** Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe).\n" +
			"**Lógica Gnômica.** Quando faz um teste de atributo ou perícia, você pode gastar 2 PM para substituir o modificador de atributo utilizado por Inteligência. Por exemplo, ao fazer um teste de Atletismo você pode gastar 2 PM para usar seu modificador de Inteligência em vez do modificador de Força.\n" +
			"**Ossos Frágeis.** Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.\n" +
			"**Vanguardista.** Você recebe proficiência em armas de fogo e +2 em testes de Ofício (um qualquer, a sua escolha).\n")
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Kliren",
	aliases: aliases,
	raça: kliren
} 
