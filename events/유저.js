const { Events, ChatInputCommandInteraction, TextInputBuilder, ActionRowBuilder, TextInputStyle, ModalBuilder } = require('discord.js')
const client = require('../index')
const Embed = require('../../bot/code/utils/Embed')

module.exports = {
    name: Events.InteractionCreate,
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async run(interaction) {
        if (interaction.customId !== 'va2') return
        await interaction.member.roles.remove('1052184503331852298')
        await interaction.member.roles.add('1052193537787174942')
        await interaction.reply({
            embeds: [
                new Embed(client, 'success')
                    .setDescription(`유저로 승인되었습니다!`)
            ], ephemeral: true
        })
    }
}