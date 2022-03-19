let r1 = 
			'As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos.\n' +
			'A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.\n' +
			'Algumas raças são mais numerosas ou têm papel predominante na história de Arton — humanos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen. O povo do continente está acostumado a ver membros dessas raças. Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso.\n' +
			'Mas essas não são as únicas raças de Arton. Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens, hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças. Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente. Um membro dessas raças pode atrair curiosidade, espanto ou até medo por onde passar. Em termos de jogo, essas raças extras possuem mecânicas mais avançadas e são indicadas para jogadores veteranos.\n\n' +
			'__Características das Raças__\n' +
			'**1. Modificadores de Atributo.** Sua raça modifica seus atributos, podendo aumentá-los acima de 18. Um modificador de raça nunca baixa um valor de atributo para menos de 3.\n' +
			'**2. Habilidades de Raça.** Você possui todas as habilidades de sua raça. Consulte a seção “Classes” para as regras de como usar habilidades.\n' +
				'**3. Tamanho & Deslocamento.** Sua raça define seu tamanho e deslocamento. A menos que especificado o contrário, seu tamanho é Médio e seu deslocamento é 9m. Veja mais sobre essas características em ~~t!tamanhos~~.'

module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
	
	if (args === '') {
	const r2 = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Raças do Tormenta20')
		.setDescription(
			"**Humano.** São exploradores e desbravadores ambiciosos, sempre buscando algo além.\n" +
			"**Anão.** Apesar de sua profunda paixão por forja e cerveja, pouca coisa é mais preciosa para um anão que cultivar uma barba longa e orgulhosa.\n" +
			"**Dahllan.** Parte humanas, parte fadas, as dahllan são uma raça de mulheres com a seiva de árvores correndo nas veias. Falam com os animais, controlam as plantas — mas também são ferozes em batalha, retorcendo madeira para formar armaduras.\n" +
			"**Elfo.** Um povo independente. Enquanto alguns veem a falta de uma divindade como uma tragédia, outros acreditam que, pela primeira vez na história, são livres.\n" +
			"**Goblin.** Onde o anão teimoso e o elfo empolado falham, o goblin pode dar um jeito. Porque ele não tem vergonha. Nem orgulho. Nem bom senso.\n" +
			"**Lefou.** Com a influência macabra da Tormenta permeando cada vez mais o mundo, surgiram os lefou. Estes meios-demônios de aparência grotesca passaram a nascer em famílias de outras raças, sendo logo sacrificados ou expulsos.\n" +
			"**Minotauro.** Após a morte de sua divindade e a decadência de seu Império, os minotauros lutam para recuperar a glória perdida ou encontrar um novo papel no mundo.\n" +
			"**Qareen.** Consideram-se abençoados pela Deusa da Magia, exibindo como evidência a marca de Wynna em seus corpos. Sua magia é mais poderosa quando usada para realizar desejos de outros.\n" +
			"**Golem.** Diz-se que estes seres são apenas construtos sem vida, criados não pelos deuses, mas por mortais.")
.setFooter({ text: 'Utilize t!raça <nome da raça>'})
	const r3 = new MessageEmbed()
		.setColor('#bc3626')
		.setTitle('Raças do Tormenta20')
		.setDescription(
			"**Hynne.** Também conhecidos como halflings ou “pequeninos”, os hynne são apreciadores de boa comida e casas aconchegantes, raras vezes escolhendo sair pelo mundo em aventuras perigosas.\n" +
			"**Kliren.** Seriam capazes de grandes feitos, talvez até dominar Arton, não fossem a impulsividade e imprudência que por vezes abreviam suas vidas...\n" +
			"**Medusa.** Ainda que estas criaturas reclusas sejam famosas por transformar suas vítimas em pedra com um simples olhar, apenas as mais antigas e poderosas o fazem.\n" +
			"**Osteon.** Esqueletos sempre foram temidos como monstros profanos, movidos por puro rancor pelos vivos.\n" +
			"**Sereia/Tritão.** Enquanto algumas sereias temem ou desprezam os humanos, outras enxergam Arton como um mundo misterioso, exótico, cheio de oportunidades e aventuras.\n" +
			"**Sílfide.** As mais numerosas fadas em Arton são estas criaturinhas (alguns diriam “pestes”) esvoaçantes, com suas delicadas asas de inseto e grandes olhos escuros.\n" +
			"**Suraggel.** Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos.\n" +
			"**Trog.** Trogloditas (ou “trogs”) são homens-lagarto primitivos e subterrâneos que odeiam todos os outros seres — especialmente os que sabem forjar aço, aquilo que mais cobiçam.")
.setFooter({ text: 'Utilize t!raça <nome da raça>'})
	const pages = [
		r2,
		r3
	]
pagination({
		channel: message.channel,
		embeds: pages,
	  time: timeout,
		button: buttons,
		author: message.author
	})
		
} else if (args) {
			let commands = client.commands.get(client.aliases.get(args));
if(commands.help.name === 'Humano') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Anão') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Dahllan') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Elfo') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Goblin') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Lefou') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Minotauro') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Qareen') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Golem') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Hynne') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Kliren') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Medusa') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Osteon') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Sereia/Tritão') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Sílfide') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Suraggel') {
message.reply({ embeds: [commands.help.raça] })
} else if(commands.help.name === 'Trog') {
message.reply({ embeds: [commands.help.raça] })
} else return err; 
}
}
module.exports.help = {
	name: "Raças",
	aliases: ["rs", "r", "raca", "racas"],
	description: 'Lista todas as raças oficias do T20.'
,
	usage: 't!raças ou t!raça <nome da raça>',
category: 'Listagem',
	exp: r1,
	raça: true
}