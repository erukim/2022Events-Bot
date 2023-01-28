const { Events, SlashCommandBuilder, REST, Routes, PermissionsBitField, ChannelType, ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js')
const client = require('../index')
const config = require('../config')
module.exports = {
    name: Events.ClientReady,
    async run() {
        const commands = [
            new SlashCommandBuilder()
                .setDMPermission(false)
                .setName(`channel`)
                .setDescription(`Admin`)
                .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
                .addChannelOption(op => op
                    .setName(`channel`)
                    .setDescription(`channel`)
                    .addChannelTypes(ChannelType.GuildCategory)
                ),
            new SlashCommandBuilder()
                .setDMPermission(false)
                .setName(`심사승인`)
                .setDescription(`Admin`)
                .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
                .addUserOption(op => op
                    .setName(`user`)
                    .setDescription(`유저를 선택해주세요.`)
                    .setRequired(true)
                ),
            new ContextMenuCommandBuilder()
                .setDMPermission(false)
                .setName(`심사승인`)
                .setType(ApplicationCommandType.User)
                .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
        ].map(command => command.toJSON());
        const rest = new REST({ version: '10' }).setToken(config.token);
        rest.put(Routes.applicationCommands(client.user?.id), { body: commands }).catch(err => console.error(err));
    }
}