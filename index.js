const config = require('./config')
const { Client, Events } = require('discord.js')
const client = new Client(config.options)
client.login(config.token)
module.exports = client;
client.on('ready', async () => {
    console.log(client.user?.tag)
})

process.on('unhandledRejection', error => { console.error(error) });
process.on('uncaughtException', error => { console.error(error) });

const fs = require('node:fs')
const eventFiles = fs.readdirSync(`./events`).filter(file => file.endsWith('.js'));
eventFiles.forEach(file => {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.run(...args));
    } else {
        client.on(event.name, async (...args) => await event.run(...args));
    }
})