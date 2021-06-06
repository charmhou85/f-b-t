const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./auth.json")
client.login(token);

client.on('ready', () => {
    console.log(`owo!`);
});


client.on('message', msg=>{
    if (msg.content.includes("!dice8")) {
        const r = Math.floor(Math.random() * replies1.length);
        msg.reply(replies1[r]);
        }
        if (msg.content.includes("!cake")) {
            const c = Math.floor(Math.random() * repliesCake.length);
            msg.reply(repliesCake[c]);
        }
        if (msg.content.includes("!heart")) {
            const l = Math.floor(Math.random() * repliesHeart.length);
            msg.reply(repliesHeart[l]);
        }
        if (msg.content.includes("!mask")) {
            const m = Math.floor(Math.random() * repliesMask.length);
            msg.reply(repliesMask[m]);
        }
        if (msg.content.includes("!two")) {
            const t = Math.floor(Math.random() * repliesTwo.length);
            msg.reply(repliesTwo[t]);
        }
        if (msg.content === ("!help")) {
            msg.reply('\n\n:star:骰子指令:star:\n\n8面骰:dice8\n20面骰:dice20\n蛋糕骰:cake\n面具骰:mask\n愛心骰:heart\nOX兩面骰:two\n猜拳:pss\n\n記得在指令前加上「!」喔:D\n\n:star:其他指令:star:\n機器人介紹:help\n抽籤:擲筊\n占卜:今日運勢\n獲得愛心:愛尼\n撲克牌:poker(因為足足有52種所以不推薦當安價骰子)\n機機說早安:早安\n食物調查:吃甚麼\n@人:人\n\n:hugging:');
        }
        if (msg.content.includes("!擲筊")) {
            const b = Math.floor(Math.random() * repliesBuabei.length);
            msg.reply(repliesBuabei[b]);
        }
        if (msg.content.includes("!今日運勢")) {
            const o = Math.floor(Math.random() * repliesToday.length);
            msg.reply(repliesToday[o]);
        }
        if (msg.content === ("!愛尼")) {
            msg.reply(':smiling_face_with_3_hearts::sparkling_heart::cupid::gift_heart:');
        }
        if (msg.content.includes("!dice20")) {
            const s = Math.floor(Math.random() * replies20.length);
            msg.reply(replies20[s]);
        }
        if (msg.content.includes("!pss")) {
            const p = Math.floor(Math.random() * repliesPSS.length);
            msg.reply(repliesPSS[p]);
        }
        if (msg.content.includes("!poker")) {
            const q = Math.floor(Math.random() * repliesPoker.length);
            msg.reply(repliesPoker[q]);
        }
        if (msg.content.includes("!早安")) {
            if(msg.author.bot)
            return ;
            const s = Math.floor(Math.random() * repliesOhaiyo.length);
            msg.reply(repliesOhaiyo[s]);
        }
        if (msg.content.includes("!吃甚麼")) {
            if(msg.author.bot)
            return ;
            const f = Math.floor(Math.random() * repliesfood.length);
            msg.reply(repliesfood[f]);
        }
        if (msg.content.includes("!人")) {
            if(msg.author.bot)
            return ;
            const w = Math.floor(Math.random() * repliesMan.length);
            msg.reply(repliesMan[w]);
        }
    }

    

    , replies1 = [
        ':one:',
        ':two:',
        ':three:',
        ':four:',
        ':five:',
        ':six:',
        ':seven:',
        ':eight:'
    ]

, repliesCake = [
    ':cake:',
    ':cupcake:',
    ':birthday:'
]

, repliesHeart = [
    ':heart:',
    ':orange_heart:',
    ':yellow_heart:',
    ':green_heart:',
    ':blue_heart:',
    ':purple_heart:',
    ':black_heart:',
    ':brown_heart:',
    ':white_heart:'
]

, repliesMask = [
    ':japanese_ogre:',
    ':japanese_goblin:',
    ':clown:',
    ':skull:',
    ':alien:',
    ':robot_face:',
    ':jack_o_lantern:'
]

, repliesTwo = [
    ':o:',
    ':x:'
]

, repliesBuabei = [
    '大吉!!',
    '中吉!',
    '小吉',
    '凶',
    '大凶!!'
]

, repliesToday = [
    '是個適合社死的好天氣呢:eye::lips::eye:',
    'cp打炮日:point_right::ok_hand::sweat_drops::sweat_drops::sweat_drops:',
    '今天喝珍奶:bubble_tea:',
    '宜吸貓:smiley_cat:',
    '宜軟爛',
    ':underage:適合開車的天氣:underage:',
    '今天適合拖文拖圖軟爛一天(草)'
]

, replies20 = [
    ':one:',
    ':two:',
    ':three:',
    ':four:',
    ':five:',
    ':six:',
    ':seven:',
    ':eight:',
    ':nine:',
    ':ten:',
    ':one::one:',
    ':one::two:',
    ':one::three:',
    ':one::four:',
    ':one::five:',
    ':one::six:',
    ':one::seven:',
    ':one::eight:',
    ':one::nine:',
    ':two::zero:'
]

, repliesPSS = [
    ':v:',
    ':punch:',
    ':hand_splayed:'
]

, repliesPoker = [
    ':spades::regional_indicator_a:',
    ':spades::two:',
    ':spades::three:',
    ':spades::four:',
    ':spades::five:',
    ':spades::six:',
    ':spades::seven:',
    ':spades::eight:',
    ':spades::nine:',
    ':spades::ten:',
    ':spades::fencer::regional_indicator_j:',
    ':spades::ring::regional_indicator_q:',
    ':spades::crown::regional_indicator_k:',
    ':clubs::regional_indicator_a:',
    ':clubs::two:',
    ':clubs::three:',
    ':clubs::four:',
    ':clubs::five:',
    ':clubs::six:',
    ':clubs::seven:',
    ':clubs::eight:',
    ':clubs::nine:',
    ':clubs::ten:',
    ':clubs::fencer::regional_indicator_j:',
    ':clubs::ring::regional_indicator_q:',
    ':clubs::crown::regional_indicator_k:',
    ':hearts::regional_indicator_a:',
    ':hearts::two:',
    ':hearts::three:',
    ':hearts::four:',
    ':hearts::five:',
    ':hearts::six:',
    ':hearts::seven:',
    ':hearts::eight:',
    ':hearts::nine:',
    ':hearts::ten:',
    ':hearts::fencer::regional_indicator_j:',
    ':hearts::ring::regional_indicator_q:',
    ':hearts::crown::regional_indicator_k:',
    ':diamonds::regional_indicator_a:',
    ':diamonds::two:',
    ':diamonds::three:',
    ':diamonds::four:',
    ':diamonds::five:',
    ':diamonds::six:',
    ':diamonds::seven:',
    ':diamonds::eight:',
    ':diamonds::nine:',
    ':diamonds::ten:',
    ':diamonds::fencer::regional_indicator_j:',
    ':diamonds::ring::regional_indicator_q:',
    ':diamonds::crown::regional_indicator_k:'
]

, repliesOhaiyo = [
    '早安!:D',
    '早ㄤㄤ:DDDD',
    ':cooking::pancakes::sparkling_heart::sparkling_heart::sparkling_heart:',
    '早安!!!!',
    '草安:herb:'
]

, repliesfood = [
    '蒜味優格',
    '炒飯',
    '炒麵',
    '泡麵',
    '咖哩飯',
    '番茄義大利麵',
    '白醬義大利麵',
    '青醬義大利麵',
    '拉麵',
    '壽司',
    '全家',
    '711',
    '萊爾富',
    'OK',
    '機機:sparkling_heart:',
    '三菜一湯自己弄',
    '吃自己',
    '便當',
    '不要吃',
    '手搖飲',
    '土',
    '肉食',
    '素食',
    '小吃類',
    '火鍋',
    '蛋包飯'
]

, repliesMan = [
    '口水:sweat_drops:',
    '仙人掌:cactus:',
    '爹咪:herb:',
    '銀夢:eggplant:',
    '糜奈:sparkles:',
    '亂數:lollipop:',
    '獨步:cupcake:',
    'ssr:salad:',
    '樂樂:hotdog:',
    '阿凜:honey_pot:',
    '巴赫:shark:',
    '大雪:snowflake:',
    '烏里:purple_square:',
    '仙妹:seedling:',
    '希:bread:',
    '豬排:pig2:',
    '茶茶:tea:'
]
)

