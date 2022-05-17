const { Telegraf } = require('telegraf');

require('dotenv/config')    

const cakeBot = new Telegraf (process.env.BOT_TOKEN);
cakeBot.start(ctx => {
    ctx.reply ('Qual bolo você quer fazer?')
}) 
cakeBot.hears ('bolo',ctx => {
    ctx.reply ('receitinha')
} )
cakeBot.command('bolo',ctx => {
    console.log(ctx)
})
cakeBot.launch()