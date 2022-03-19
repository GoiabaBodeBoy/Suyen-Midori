let p1 = 
`Perícias são as habilidades mundanas do personagem, importantes para solucionar desafios físicos, mentais e sociais.
Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual ao seu bônus de Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe.
Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).

__Usando Perícias__
**Modificador de Perícia = Metade do Nível + Modificador do Atributo-chave**
**Modificador de Perícia Treinada = Metade do Nível + Modificador do Atributo-chave + 2*** 
**+4 a partir do 7º nível e +6 a partir do 15º nível*  

__Testes sem Treinamento__
Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela.

__Penalidade de Armadura__
Algumas perícias exigem liberdade de movimento. Quando a palavra “armadura” aparece após o nome da perícia, você sofrerá uma penalidade nos testes dela se estiver usando armadura ou escudo. `

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
if(args === '') {
	let p2 = new MessageEmbed()
.setDescription('**Acrobacia** *Des* | armadura \n**Adestramento** *Car* | treinada \n**Atletismo** *For*\n**Atuação** *Car*\n**Cavalgar** *Des* \n**Conhecimento** *Int* | treinada \n**Cura** *Sab* \n**Diplomacia** *Car*\n**Enganação** *Car*\n**Fortitude** *Con* \n**Furtividade** *Des* | armadura \n**Guerra** *Int* | treinada \n**Iniciativa** *Des*\n**Intimidação** *Car* ')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

let p3 = new MessageEmbed()
	.setDescription('**Intuição** *Sab*\n**Investigação** *Int*\n**Jogatina** *Car* | treinada \n**Ladinagem** *Des* | treinada • armadura \n**Luta** *For*\n**Misticismo** *Int* | treinada \n**Nobreza** *Int* | treinada \n**Ofício** *Int* | treinada \n**Percepção** *Sab*\n**Pilotagem** *Int* | treinada \n**Pontaria** *Des*\n**Reflexos** *Des*\n**Religião** *Sab* | treinada \n**Sobrevivência** *Sab*\n**Vontade**  *Sab*')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })
	const pages = [
		p2,
		p3
	]
pagination({
		channel: message.channel,
		embeds: pages,
	  time: timeout,
		button: buttons,
		author: message.author
	})
	
	} else if(args) {
		let command = client.commands.get(client.aliases.get(args));
	if(args === 'atributos')	{
let car = new MessageEmbed()
.setDescription('**Adestramento** *Car* | treinada\n**Atuação** *Car*\n**Diplomacia** *Car*\n**Enganação** *Car*\n**Intimidação** *Car*\n**Jogatina** *Car* | treinada\n')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20 | Carisma')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

let con = new MessageEmbed()
.setDescription('**Fortitude** *Con*\n')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20 | Constituição')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

let des = new MessageEmbed()
.setDescription('**Acrobacia** *Des* | armadura\n**Cavalgar** *Des*\n**Furtividade** *Des* | armadura\n**Iniciativa** *Des*\n**Ladinagem** *Des* | treinada • armadura\n**Pontaria** *Des*\n**Reflexos** *Des*\n')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20 | Destreza')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

let For = new MessageEmbed()
.setDescription('**Atletismo** *For*\n**Luta** *For*\n')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20 | Força')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

let int = new MessageEmbed()
.setDescription('**Conhecimento** *Int* | treinada\n**Guerra** *Int* | treinada\n**Investigação** *Int*\n**Misticismo** *Int* | treinada\n**Nobreza** *Int* | treinada \n**Ofício** *Int* | treinada\n**Pilotagem** *Int* | treinada\n')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20 | Inteligência')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

let sab = new MessageEmbed() 
.setDescription('**Cura** *Sab*\n**Intuição** *Sab*\n**Percepção** *Sab*\n**Religião** *Sab* | treinada \n**Sobrevivência** *Sab*\n**Vontade**  *Sab*')
.setColor('#bc3626')
.setTitle('Perícias do Tormenta20 | Sabedoria')
.setFooter({ text: 'Utilize t!perícia <nome da perícia>' })

		let pages = [
			car,
			con,
			des,
			For,
			int,
			sab
		]
pagination({
		channel: message.channel,
		embeds: pages,
	  time: timeout,
		button: buttons,
		author: message.author,
	  fastSkip: true
	})

  }  else if(command.help.name === 'Acrobacia') {
		message.reply({ embeds: [command.help.perícia] })
        } else if(command.help.name === 'Adestramento') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Atletismo') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Atuação') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Cavalgar') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Conhecimento') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Cura') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Diplomacia') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Enganação') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Fortitude') {
		 message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Furtividade') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Guerra') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Iniciativa') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Intimidação') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Intuição') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Investigação') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Jogatina') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Ladinagem') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Luta') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Misticismo') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Nobreza') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Ofício') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Percepção') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Pilotagem') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Pontaria') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Reflexos') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Religião') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Sobrevivência') {
		message.reply({ embeds: [command.help.perícia] })
		} else if(command.help.name === 'Vontade') {
		message.reply({ embeds: [command.help.perícia] })
		}
} else return err;
			}
module.exports.help = {
	name: 'Perícias',
	aliases: ['pcs', 'pc', 'pericia', 'pericias'],
	perícia: true,
	exp: p1,
	description: 'Lista todas as perícias oficiais do T20.',
	category: 'Listagem',
	usage: 't!perícias ou t!perícia <nome da perícia>'
}