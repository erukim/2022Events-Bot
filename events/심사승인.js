const { Events, ChatInputCommandInteraction, GuildMember, ActionRowBuilder, TextInputStyle, ModalBuilder } = require('discord.js')
const client = require('../index')
const Embed = require('../../bot/code/utils/Embed')

module.exports = {
    name: Events.InteractionCreate,
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {GuildMember} member 
     */
    async run(interaction) {
        if (interaction.commandName !== '심사승인') return
        await interaction.reply({
            embeds: [
                new Embed(client, 'info')
                    .setDescription(`심사 처리를 위해 정보를 불러오고 있습니다!`)
            ], ephemeral: true
        })
        if (interaction.isChatInputCommand()) {
            const member = await interaction.options.getMember('user')
            if (member.roles.cache.has('1051130868816683040')) return await interaction.editReply({
                embeds: [
                    new Embed(client, 'warn')
                        .setDescription(`이미 ${member.user}님은 이미 방송인으로 등록되어있어서 심사결과를 전송할수 없습니다.`)
                ]
            })
            try {
                await client.users.send(member.user.id, {
                    embeds: [
                        new Embed(client, 'success')
                            .setDescription(`${member.user}님 안녕하세요?\n${interaction.guild.name}에 방송인으로 심사가 승인되셨습니다!`)
                    ]
                })
            } catch (err) { }
            await interaction.editReply({
                embeds: [
                    new Embed(client, 'success')
                        .setDescription(`성공적으로 심사결과를 전달하였습니다 :)`)
                ]
            })
            await member.roles.remove('1052184503331852298')
            await member.roles.remove('1052193537787174942')
            await member.roles.add('1051130868816683040')
        } else {
            const member = await interaction.guild.members.fetch(interaction.targetId)
            if (member.roles.cache.has('1051130868816683040')) return await interaction.editReply({
                embeds: [
                    new Embed(client, 'warn')
                        .setDescription(`이미 ${member.user}님은 이미 방송인으로 등록되어있어서 심사결과를 전송할수 없습니다.`)
                ]
            })
            try {
                await client.users.send(member.user.id, {
                    embeds: [
                        new Embed(client, 'success')
                            .setDescription(`${member.user}님 안녕하세요?\n${interaction.guild.name}에 방송인으로 심사가 승인되셨습니다!`)
                    ]
                })
            } catch (err) { }
            await interaction.editReply({
                embeds: [
                    new Embed(client, 'success')
                        .setDescription(`성공적으로 심사결과를 전달하였습니다 :)`)
                ]
            })
            await member.roles.remove('1052184503331852298')
            await member.roles.remove('1052193537787174942')
            await member.roles.add('1051130868816683040')
        }
    }
}