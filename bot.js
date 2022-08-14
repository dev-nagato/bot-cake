const { Telegraf } = require('telegraf');

require('dotenv/config')    

const cakeBot = new Telegraf (process.env.BOT_TOKEN);
cakeBot.start(ctx => {
    const from = ctx.update.message.from

    console.log(from)

    ctx.reply (`seja bem vindo ${from.first_name} , vamos cozinhar juntos :)`)
}) 
cakeBot.hears ('bolo',ctx => {
    ctx.reply ('receitinha')
} )
cakeBot.command('bolo',ctx => {
    console.log(ctx)
})
cakeBot.on('text', (ctx, next) =>{
    ctx.reply('olá desculpe eu não reconheço este comando :(')
    next()
})

cakeBot.launch()