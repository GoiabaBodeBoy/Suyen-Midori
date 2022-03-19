const { MessageEmbed } = require('discord.js')
let misticismo = new MessageEmbed()
.setDescription('Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.')
.addFields({ name: 'Detectar Magia (CD 15)', value: 'Como uma ação completa, você detecta a presença e intensidade de auras mágicas (magias ativas e itens mágicos) em alcance curto. A intensidade de uma aura mágica depende do círculo da magia ou categoria do item mágico. Magias de 1º e 2º círculos e itens mágicos menores geram uma aura tênue, magias de 3º e 4º círculos e itens mágicos médios geram uma aura moderada e magias de 5º círculo e itens mágicos maiores geram uma aura poderosa. Magias lançadas por um deus maior e artefatos geram uma aura avassaladora. Caso a aura mágica esteja atrás de uma barreira física, você sofre uma penalidade em seu teste (–5 para madeira ou pedra, –10 para ferro ou chumbo).' },
{ name: 'Identificar Criatura (CD 15 + ND da Criatura)', value: 'Com uma ação completa, você pode identificar uma criatura mágica (construtos, dragões, fadas, mortos-vivos etc.), assim como seus poderes e fraquezas. Se passar, lembra uma característica da criatura, como um poder ou vulnerabilidade. Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acreditar que uma criatura é vulnerável a fogo, quando na verdade é vulnerável a frio).' },
{ name: 'Identificar Item Mágico', value: 'Você pode gastar uma hora para estudar um item mágico e identificar seus poderes, incluindo como ativá-lo e quantos PM restam (se for o caso). A CD é 20 para itens mágicos menores, 25 para médios e 30 para itens mágicos maiores. Você pode sofrer uma penalidade de –10 no teste para diminuir o tempo para uma ação completa.' },
{ name: 'Identificar Magia (CD 15 + Custo em PM da Magia)', value: 'Quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras. Este uso é uma reação.' },
{ name: 'Informação', value: 'Você pode responder dúvidas relativas a magias, itens mágicos, fenômenos sobrenaturais, runas, profecias, planos de existência etc. A CD é 10 para questões simples, 20 para questões complexas e 30 para mistérios e enigmas.' },
{ name: 'Lançar Magia de Armadura (CD 20 + Custo em PM da Magia)', value: 'Lançar uma magia arcana usando armadura exige um teste. Esse teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta pontos de mana mesmo assim.'})
.setColor('#bc3626')
.setTitle('Misticismo')
module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Misticismo",
	aliases: ['misticismo'],
	perícia: misticismo
}