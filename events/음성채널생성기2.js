const client = require('../index')
const { ChannelType, PermissionsBitField } = require('discord.js')

client.on('voiceStateUpdate', async (newState, oldState) => {
    if (!newState.guild) return;
    if (!newState.member.voice.channel) return;
    const channel = newState.guild.channels.cache.get('1051129797369155654')
    if (!channel) return
    if (newState.member.voice.channel.id !== channel.id) return
    if (newState.member.voice.channel) {
        newState.guild.channels.create({
            name: `${newState.member.user.username} | 음성채널`,
            type: ChannelType.GuildVoice,
            parent: `1051128271355518996`,
            permissionOverwrites: [
                {
                    id: `1052193537787174942`,
                    allow: [
                        PermissionsBitField.Flags.ViewChannel,
                        PermissionsBitField.Flags.ManageChannels,
                        PermissionsBitField.Flags.SendMessages,
                        PermissionsBitField.Flags.AttachFiles,
                        PermissionsBitField.Flags.AddReactions,
                        PermissionsBitField.Flags.UseExternalEmojis,
                        PermissionsBitField.Flags.UseExternalStickers,
                        PermissionsBitField.Flags.ReadMessageHistory,
                        PermissionsBitField.Flags.Connect,
                        PermissionsBitField.Flags.Speak,
                        PermissionsBitField.Flags.Stream,
                        PermissionsBitField.Flags.UseEmbeddedActivities,
                        PermissionsBitField.Flags.UseVAD,
                    ],
                    deny: [
                        PermissionsBitField.Flags.ManageRoles,
                        PermissionsBitField.Flags.ManageWebhooks,
                        PermissionsBitField.Flags.CreateInstantInvite,
                        PermissionsBitField.Flags.SendMessagesInThreads,
                        PermissionsBitField.Flags.CreatePrivateThreads,
                        PermissionsBitField.Flags.CreatePublicThreads,
                        PermissionsBitField.Flags.EmbedLinks,
                        PermissionsBitField.Flags.MentionEveryone,
                        PermissionsBitField.Flags.ManageMessages,
                        PermissionsBitField.Flags.ManageThreads,
                        PermissionsBitField.Flags.SendTTSMessages,
                        PermissionsBitField.Flags.UseApplicationCommands,
                        PermissionsBitField.Flags.PrioritySpeaker,
                        PermissionsBitField.Flags.MuteMembers,
                        PermissionsBitField.Flags.DeafenMembers,
                        PermissionsBitField.Flags.MoveMembers,
                        PermissionsBitField.Flags.ManageEvents,
                    ]
                },
                {
                    id: `1051130868816683040`,
                    deny: [
                        PermissionsBitField.Flags.ViewChannel,
                        PermissionsBitField.Flags.ManageChannels,
                        PermissionsBitField.Flags.SendMessages,
                        PermissionsBitField.Flags.AttachFiles,
                        PermissionsBitField.Flags.AddReactions,
                        PermissionsBitField.Flags.UseExternalEmojis,
                        PermissionsBitField.Flags.UseExternalStickers,
                        PermissionsBitField.Flags.ReadMessageHistory,
                        PermissionsBitField.Flags.Connect,
                        PermissionsBitField.Flags.Speak,
                        PermissionsBitField.Flags.Stream,
                        PermissionsBitField.Flags.UseEmbeddedActivities,
                        PermissionsBitField.Flags.UseVAD,
                        PermissionsBitField.Flags.ManageRoles,
                        PermissionsBitField.Flags.ManageWebhooks,
                        PermissionsBitField.Flags.CreateInstantInvite,
                        PermissionsBitField.Flags.SendMessagesInThreads,
                        PermissionsBitField.Flags.CreatePrivateThreads,
                        PermissionsBitField.Flags.CreatePublicThreads,
                        PermissionsBitField.Flags.EmbedLinks,
                        PermissionsBitField.Flags.MentionEveryone,
                        PermissionsBitField.Flags.ManageMessages,
                        PermissionsBitField.Flags.ManageThreads,
                        PermissionsBitField.Flags.SendTTSMessages,
                        PermissionsBitField.Flags.UseApplicationCommands,
                        PermissionsBitField.Flags.PrioritySpeaker,
                        PermissionsBitField.Flags.MuteMembers,
                        PermissionsBitField.Flags.DeafenMembers,
                        PermissionsBitField.Flags.MoveMembers,
                        PermissionsBitField.Flags.ManageEvents,
                    ]
                },
                {
                    id: newState.guild.roles.everyone,
                    deny: [
                        PermissionsBitField.Flags.ViewChannel,
                        PermissionsBitField.Flags.ManageChannels,
                        PermissionsBitField.Flags.SendMessages,
                        PermissionsBitField.Flags.AttachFiles,
                        PermissionsBitField.Flags.AddReactions,
                        PermissionsBitField.Flags.UseExternalEmojis,
                        PermissionsBitField.Flags.UseExternalStickers,
                        PermissionsBitField.Flags.ReadMessageHistory,
                        PermissionsBitField.Flags.Connect,
                        PermissionsBitField.Flags.Speak,
                        PermissionsBitField.Flags.Stream,
                        PermissionsBitField.Flags.UseEmbeddedActivities,
                        PermissionsBitField.Flags.UseVAD,
                        PermissionsBitField.Flags.ManageRoles,
                        PermissionsBitField.Flags.ManageWebhooks,
                        PermissionsBitField.Flags.CreateInstantInvite,
                        PermissionsBitField.Flags.SendMessagesInThreads,
                        PermissionsBitField.Flags.CreatePrivateThreads,
                        PermissionsBitField.Flags.CreatePublicThreads,
                        PermissionsBitField.Flags.EmbedLinks,
                        PermissionsBitField.Flags.MentionEveryone,
                        PermissionsBitField.Flags.ManageMessages,
                        PermissionsBitField.Flags.ManageThreads,
                        PermissionsBitField.Flags.SendTTSMessages,
                        PermissionsBitField.Flags.UseApplicationCommands,
                        PermissionsBitField.Flags.PrioritySpeaker,
                        PermissionsBitField.Flags.MuteMembers,
                        PermissionsBitField.Flags.DeafenMembers,
                        PermissionsBitField.Flags.MoveMembers,
                        PermissionsBitField.Flags.ManageEvents,
                    ]
                }
            ]
        }).then(async (ch) => {
            if (!ch) return
            try {
                await newState.member.voice.setChannel(ch)
                const interval = setInterval(async () => {
                    if (ch.deleted == true) {
                        try { await clearInterval(interval) } catch (err) { }
                        return;
                    }
                    if (ch.members.size == 0) {
                        try { await ch.delete() } catch (err) { }
                        return;
                    }
                }, 5000);
            } catch (err) { }
        })
    }
})