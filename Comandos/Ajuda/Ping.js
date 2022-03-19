module.exports.run = async (MessageEmbed, client, message, args, pagination, buttons, timeout) => {
	if(!args) {
    let p1 = new MessageEmbed()
        .setColor('#bc3626')
        .setDescription('<:eye:950514161400574023>');
message.reply({ embeds: [p1] }).then(m => {
  
	let p2 = new MessageEmbed ()
	.setColor('#bc3626')
		.setTitle('Ping')
	.setDescription(`🤖 **|** Latência **${m.createdTimestamp - message.createdTimestamp}ms**
📡 **|** Latência da API **${Math.round(client.ws.ping)}ms**`)
	.setFooter({ text: 'Será que os goblins acertaram?'})
	m.edit({ embeds: [p2]})
})
} else return err;
}
module.exports.help = {
    name: 'Ping',
    aliases: ['png', 'pong', 'ping'],
	description: 'Mostra as latências.'
} 