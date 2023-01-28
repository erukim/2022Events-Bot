const { Events, ChatInputCommandInteraction, TextInputBuilder, ActionRowBuilder, TextInputStyle, ModalBuilder } = require('discord.js')
const client = require('../index')
const Embed = require('../../bot/code/utils/Embed')
const fetch = require('node-fetch');

module.exports = {
    name: Events.InteractionCreate,
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async run(interaction) {
        if (interaction.customId !== 'Introduction') return
        await interaction.reply({
            embeds: [
                new Embed(client, 'info')
                    .setDescription(`지금 심사요청서를 전달하기 위해 작업중입니다!`)
            ], ephemeral: true
        })
        const modal1 = await interaction.fields.getTextInputValue('Introduction-1');
        const modal2 = await interaction.fields.getTextInputValue('Introduction-2');
        const modal3 = await interaction.fields.getTextInputValue('Introduction-3');
        const modal4 = await interaction.fields.getTextInputValue('Introduction-4');
        client.channels.cache.get('1052202256516264059').send({
            embeds: [
                new Embed(client, 'success')
                    .setTitle(`심사요청`)
                    .setDescription(`심사는 유저를 선택하여 앱을 통해 하거나 </심사승인:1052206937971896330> 명령어를 통해 진행해 주세요.`)
                    .setFields(
                        { name: `방송닉네임`, value: `\`${modal1}\`` },
                        { name: `나이`, value: `\`${modal2}\`` },
                        { name: `마크닉네임`, value: `${modal3}` },
                        { name: `방송인증링크`, value: `${modal4}` },
                        { name: `신청자정보`, value: `${interaction.user}( \`${interaction.user.id}\` | \`${interaction.user.tag}\` )`, inline: true }
                    )
            ]
        })
        const channel = await client.channels.cache.get('1051305083717025882')
        try {
            await fetch(`https://minecraft-api.com/api/uuid/${modal3}/json`, {
            }).then((res) => res.json()).then(async (json) => {
                channel.send({
                    embeds: [
                        new Embed(client, 'default')
                            .setFields(
                                { name: `수집된 유저`, value: `${interaction.user} (\` ${interaction.user.id} | ${interaction.user.tag} \`)` },
                                { name: `수집된 닉네임`, value: `${modal3}` },
                                { name: `닉네임 UUID`, value: `${json.uuid}` },
                            )
                    ]
                })
            })
        } catch (err) {
            channel.send({
                embeds: [
                    new Embed(client, 'default')
                        .setFields(
                            { name: `수집된 유저`, value: `${interaction.user} (\` ${interaction.user.id} | ${interaction.user.tag} \`)` },
                            { name: `수집된 닉네임`, value: `${modal3}` },
                            { name: `닉네임 UUID`, value: `조회 불가능` },
                        )
                ]
            })
        }
        await interaction.editReply(
            {
                embeds: [
                    new Embed(client, 'success')
                        .setTitle(`방송인 심사`)
                        .setDescription(`유저님의 심사 요청서가 전달되었습니다.\n승인여부는 개인 DM으로 전송됩니다.`)
                ]
            }
        )

    }
}