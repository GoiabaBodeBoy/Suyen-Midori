const aliases = ['osteon', 'ostn']
const { MessageEmbed } = require('discord.js')
let osteon = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Osteon')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947450877604671558/Osteon.png')
		.setDescription(
			'*Alguns atribuem seu surgimento à queda de Ragnar, antigo Deus da Morte; outros dizem ser consequência da ascensão de Ferren Asloth como um poderoso lich, transformando a nação de Aslothia em um reino necromante.*\n\n' +
			'**+2 em Três Atributos Diferentes (exceto Constituição), Constituição –2.**\n' +
			'**Armadura Óssea.** Você recebe resistência a corte, frio e perfuração 5.\n' +
			'**Memória Póstuma.** Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um osteon de outra raça humanoide que não humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho. Natureza Esquelética. Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, habilidades mágicas de cura causam dano a você e você não se beneficia de itens ingeríveis (comidas, poções etc.), mas dano de trevas recupera seus PV.\n' +
			'**Preço da Não Vida.** Você precisa passar oito horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais (osteon não são afetados por condições boas ou ruins de descanso). Caso contrário, sofre os efeitos de fome.')
		.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
	
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: 'Osteon',
	aliases: aliases,
	raça: osteon
} 
