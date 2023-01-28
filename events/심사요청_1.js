const { Events, ChatInputCommandInteraction, TextInputBuilder, ActionRowBuilder, TextInputStyle, ModalBuilder } = require('discord.js')
const client = require('../index')
const Embed = require('../../bot/code/utils/Embed')

module.exports = {
    name: Events.InteractionCreate,
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async run(interaction) {
        if (interaction.customId !== 'va1') return
        await interaction.member.roles.remove('1052184503331852298')
        await interaction.member.roles.add('1052193537787174942')
        await interaction.reply({
            embeds: [
                new Embed(client, 'success')
                    .setDescription(`크리에이터 참여자가 모두 완료되어\n자동으로 유저승인 되었습니다.\n2023년도 연말파티에 참여해주세요!`)
            ], ephemeral: true
        })
        return
        let modal = new ModalBuilder()
            .setCustomId('Introduction')
            .setTitle(`방송인 심사요청서`)
            .addComponents(
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setCustomId('Introduction-1')
                            .setLabel("방송 닉네임")
                            .setPlaceholder(`신청자의 방송활동 닉네임을 알려주세요.`)
                            .setRequired(true)
                            .setStyle(TextInputStyle.Short),
                    ),
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setCustomId('Introduction-2')
                            .setLabel("나이")
                            .setPlaceholder(`신청자의 나이를 작성해 주세요. (비공가능)`)
                            .setRequired(true)
                            .setStyle(TextInputStyle.Short),
                    ),
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setCustomId('Introduction-3')
                            .setLabel("마인크래프트 닉네임")
                            .setPlaceholder(`신청자의 마인크래프트 닉네임을 작성하여 주세요.`)
                            .setRequired(true)
                            .setStyle(TextInputStyle.Short),
                    ),
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setCustomId('Introduction-4')
                            .setLabel("인증링크")
                            .setPlaceholder(`자신이 활동하는 플랫폼의 방송링크를 알려주세요. (여러개 가능)`)
                            .setRequired(true)
                            .setStyle(TextInputStyle.Paragraph),
                    ),
            )
        await interaction.showModal(modal);
    }
}