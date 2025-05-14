const token = '7988590627:AAFaRY9CjxxhMshFuA6gnpV4bds1EQF8xJQ'

const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  const text = msg.chat.id

  if(text === '.')
})
