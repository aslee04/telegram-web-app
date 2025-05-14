const TelegramBot = require('node-telegram-bot-api')

const token = '7672281669:AAEHagMPph6S3iLN1gO2YIWXCKsJcBrmcZk'

const webAppUrl = 'https://resplendent-mermaid-5ff13b.netlify.app/'
const bot = new TelegramBot(token, { polling: true })

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Pastdagi tugmani bosib formani toldiring', {
      reply_markup: {
        keyboard: [
          [{ text: 'Formani toldiring', web_app: { url: webAppUrl }}]
        ]
      }
    })

    await bot.sendMessage(chatId, 'Saytimizga tashrif buyuring', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Buyurtma berish', web_app: { url: webAppUrl } }]
          ]
        }
      })
  }
})