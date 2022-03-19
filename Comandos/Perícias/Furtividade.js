const { MessageEmbed } = require('discord.js')
let furtividade = new MessageEmbed()
.setDescription('Você pode se esconder nas sombras, andar sem fazer barulho, seguir alguém sem ser notado etc.')
.addFields(
	{ name: 'Esconder-se', value: 'Faça um teste de Furtividade oposto pelos testes de Percepção de qualquer um que possa notá-lo. Criaturas que falharem não conseguem percebê-lo (você tem camuflagem total contra elas). Esconder-se é uma ação livre, mas você precisa terminar seu turno com cobertura ou camuflagem — escuridão, folhagens, outras pessoas com as quais consiga se misturar etc. Você pode se mover à metade de seu deslocamento sem penalidades ou ao seu deslocamento normal sofrendo –5 no teste (se estiver se escondendo em uma multidão, pode se mover ao deslocamento dela sem sofrer penalidade). Se atacar, lançar uma magia ou fizer outra ação chamativa, sofre uma penalidade de –20 (e, se já estava escondido, deve refazer o teste com esta penalidade).' },
	{ name: 'Seguir', value: 'Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre uma penalidade de –5 se estiver em um lugar sem movimento ou sem esconderijos, como um descampado, uma rua deserta etc. A vítima recebe +5 em seu teste de Percepção se tiver motivo para achar que está sendo seguida e estiver tomando precauções (como olhar para trás de vez em quando). Se você passar, segue a pessoa até ela chegar a seu destino. Se falhar, a pessoa percebe-o na metade do caminho.' })
.setColor('#bc3626')
.setTitle('Furtividade')

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Furtividade",
	aliases: ['furtividade'],
	perícia: furtividade
}