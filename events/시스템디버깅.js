const { Events, Message } = require('discord.js')
const config = require('../config')
const client = require('../index')
const Dokdo = require('dokdo')

module.exports = {
    name: Events.MessageCreate,
    /**
     * @param {Message} message 
     */
    async run(message) {
        new Dokdo(client, { aliases: ['dok'], prefix: '!', owners: ['1045323866182008832', '939349343431954462'] }).run(message)
    }
}