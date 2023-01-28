const { Events, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const client = require('../index')

module.exports = {
    name: Events.InteractionCreate,
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async run(interaction) {
        if (interaction.commandName !== 'channel') return
        const channel = await interaction.options.getChannel(`channel`)
        await interaction.reply(`s`)
        await interaction.deleteReply()
        const per = {
            // 서버 일반 권한
            ViewChannel: false, // 채널 보기
            ManageChannels: false, // 채널 관리하기
            ManageRoles: false, // 역할 관리하기
            ManageEmojisAndStickers: false, // 이모티콘 및 스티커 관리
            ViewAuditLog: false, // 감사 로그 보기
            ViewGuildInsights: false, // 서버 인사이트 보기
            ManageWebhooks: false, // 웹후크 관리하기
            ManageGuild: false, // 서버 관리하기
            // 멤버십 권한
            CreateInstantInvite: false, // 초대 코드 만들기
            ChangeNickname: false, // 별명 변경하기
            ManageNicknames: false, // 별명 관리하기
            KickMembers: false, // 멤버 추방하기
            BanMembers: false, // 멤버 차단하기
            ModerateMembers: false, // 타임아웃
            // 채팅 채널 권한
            SendMessages: false, // 메시지 보내기
            SendMessagesInThreads: false, // 스레드에서 메시지 보내기
            CreatePublicThreads: false, // 공개 스레드 만들기
            CreatePrivateThreads: false, // 비공개 스레드 만들기
            EmbedLinks: false, // 링크 첨부
            AttachFiles: false, // 파일 첨부
            AddReactions: false, // 반응 추가하기
            UseExternalEmojis: false, // 외부 이모티콘 사용
            UseExternalStickers: false, // 외부 스티커 사용
            MentionEveryone: false, // @everyone, @here, 모든 역할 멘션하기
            ManageMessages: false, // 메시지 관리
            ManageThreads: false, // 스레드 관리하기
            ReadMessageHistory: true, // 메시지 기록 보기
            SendTTSMessages: false, // 텍스트 음성 변환 메시지 전송
            UseApplicationCommands: false, // 애플리케이션 명령어 사용
            // 음성 채널 권한
            Connect: false, // 연결
            Speak: false, // 말하기
            Stream: false, // 영상
            UseEmbeddedActivities: false, // 활동 사용하기
            UseVAD: false, // 음성 감지 사용
            PrioritySpeaker: false, // 우선 발언권
            MuteMembers: false, // 멤버들의 마이크 음소거하기
            DeafenMembers: false, // 멤버의 헤드셋 음소거하기
            MoveMembers: false, // 멤버 이동
            // 무대 채널 권한
            RequestToSpeak: false, // 발언권 요청하기
            // 이벤트 권한
            ManageEvents: false, // 이벤트 관리
        }
        await channel.permissionOverwrites.edit(`1051130868816683040`, per)
        await channel.permissionOverwrites.edit(`1052193537787174942`, per)
        await channel.permissionOverwrites.edit(`1052184503331852298`, per)
        await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, per)
    }
}