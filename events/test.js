const client = require('../index')
const Embed = require('../../bot/code/utils/Embed')
const { Events, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
return
client.on('ready', async () => {
    const embed5 = new Embed(client, 'default')
        .setDescription(`서버에 입장을 위해 자신을 알려주세요!\n크리에이터 이시면 심사요청 버튼을 눌러주세요\n\n주의! 방송인은 유저 버튼을 누르시면 안됩니다!`)
    const ch = client.channels.cache.get('1052151110711902290');
    const role5 = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId("va1")
            .setLabel("방송인 심사요청")
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId("va2")
            .setLabel("유저")
            .setStyle(ButtonStyle.Success),
    );
    ch.send({ embeds: [embed5], components: [role5] })
})