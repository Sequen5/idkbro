const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *MAKER MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
╭════〘 *IKY BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAMA : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏══════════════════⊱❁۪۪۪
┃╭───────────────────
┃│➸ *${prefix}tahta*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}gemboktext*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}silktext*
┃│➸ *${prefix}party* [text]
┃│➸ *${prefix}quotemaker* [tx|tx|random]
┃│➸  *${prefix}glitch* [text]
┃│➸ *${prefix}lovemake* [text]
┃│➸ *${prefix}fire* [text]
┃│➸ *${prefix}apiteks* [text]
┃│➸ *${prefix}airtext* [text]
┃│➸ *${prefix}metaltext* [text]
┃│➸ *${prefix}rtext* [text]
┃│➸ *${prefix}wolflogo* [text]
┃╰───────────────────
┗══════════════════⊱❁۪۪۪
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.maker = maker