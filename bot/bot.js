import { Telegraf } from 'telegraf';

const TOKEN = "6502921690:AAEZopsYD0rLsb-4Oubr00l7BHEARp1Soqs";
const bot = new Telegraf(TOKEN);

bot.start((ctx) => 
	ctx.reply("Welcome")
);
bot.launch();