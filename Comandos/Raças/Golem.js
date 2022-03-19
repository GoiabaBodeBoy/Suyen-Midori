const aliases = ['golem', 'glm']
const { MessageEmbed } = require('discord.js')
let golem = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Golem')
		.setThumbnail('https://cdn.discordapp.com/attachments/939647955177177119/947451124024221776/Golem.png')
		.setDescription(
			"*Podem fazer tudo que outras raças fazem, até mesmo conjurar magias arcanas ou divinas. Será que têm alma? Será que encontrarão os deuses quando chegar sua hora?*\n\n" +
			"**Força +4, Constituição +2, Carisma –2.**\n" +
			"**Canalizar Reparos.** Como uma ação completa, você pode gastar pontos de mana para recuperar pontos de vida, à taxa de 5 PV por PM.\n" +
			"**Chassi.** Seu corpo artificial é resistente, mas rígido. Você recebe +2 na Defesa, mas possui penalidade de armadura –2 e seu deslocamento é 6m. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi).\n" +
			"**Criatura Artificial.** Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, não recupera pontos de vida por descanso e não se beneficia de habilidades de cura e itens ingeríveis (comidas, poções etc.). Você precisa ficar inerte por oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso).\n" + 
			"**Espírito Elemental.** Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano causado por essa energia. Se fosse sofrer dano mágico dessa energia, em vez disso cura PV em quantidade igual à metade do dano. Por exemplo, se um golem com espírito elemental do fogo é atingido por uma Bola de Fogo que causa 30 pontos de dano, em vez de sofrer esse dano, ele recupera 15 PV.\n" +

			"**Sem Origem.** Como uma criatura artificial, você já foi construído “pronto”. Não teve uma infância — portanto, não tem direito a escolher uma origem e receber benefícios por ela.\n")
.setFooter({ text: `Tente usar também: ${aliases.slice(1).join(', ')}` })
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
return err;
}
module.exports.help = {
	name: "Golem",
	aliases: aliases,
	raça: golem
} 
