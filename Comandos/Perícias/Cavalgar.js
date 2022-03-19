const { MessageEmbed } = require('discord.js')
let cavalgar = new MessageEmbed()
.setDescription("Você sabe conduzir animais de montaria, como cavalos, trobos e grifos. Ações simples não exigem testes — você pode encilhar, montar, cavalgar em terreno plano e desmontar automaticamente. Ações perigosas, entretanto, exigem testes da perícia.")
.addFields({ name: 'Conduzir', value: 'Cavalgar através de obstáculos exige testes de Cavalgar. A CD é 15 para terreno ruim e obstáculos pequenos (planície pedregosa, vala estreita) e 20 para terreno perigoso ou obstáculos grandes (encosta nevada, pântano traiçoeiro). Se você falhar, cai da montaria e sofre 1d6 pontos de dano. Conduzir é parte de seu movimento e não exige uma ação.' },
{ name: 'Galopar', value: 'Gaste uma ação completa e faça um teste de Cavalgar. Você avança o resultado do teste x 1,5m. Seu teste sofre um modificador de +/– 2 para cada 1,5m de deslocamento acima ou abaixo de 9m que você possua.' },
{ name: 'Montar Rapidamente (CD 20)', value: 'Você pode montar ou desmontar como uma ação livre (o normal é gastar uma ação de movimento). Se falhar por 5 ou mais, você cai no chão.\nAnimais não adequados para montaria, como touros, leões e avestruzes, impõem uma penalidade de –5 em testes de Cavalgar.' })
.setColor('#bc3626')
.setTitle('Cavalgar')

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Cavalgar",
	aliases: ['cavalgar'],
	perícia: cavalgar
		}