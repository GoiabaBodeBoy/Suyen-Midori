const { MessageEmbed } = require('discord.js')
let pontaria = new MessageEmbed()
.setDescription('Esta perícia mede sua capacidade de mira, seja com armas de arremesso, seja com armas de disparo.')
.addFields({ name: 'Ataque à Distância', value: 'Para fazer um ataque à distância você faz um teste de Pontaria. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada.'})
//Veja o Capítulo 5: Jogandopara os modificadores aplicáveis a testes de ataque.
.setColor('#bc3626')
.setTitle('Pontaria')

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {	
return err;
}
module.exports.help = {
	name: "Pontaria",
	aliases: ['pontaria'],
	perícia: pontaria
	}