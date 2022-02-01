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
            msg.reply('\n\n:star:骰子指令:star:\n\n8面骰:dice8\n24面骰:dice24\n蛋糕骰:cake\n面具骰:mask\n愛心骰:heart\nOX兩面骰:two\n猜拳:pss\n\n記得在指令前加上「!」喔:D\n\n:star:其他指令:star:\n機器人介紹:help\n抽籤:擲筊\n占卜:今日運勢\n獲得愛心:愛尼\n撲克牌:poker(因為足足有52種所以不推薦當安價骰子)\n機機說早安:早安\n食物調查:吃甚麼\n@人:人\n機機箴言:問\n\n:hugging:');
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
        if (msg.content.includes("!dice24")) {
            const s = Math.floor(Math.random() * replies24.length);
            msg.reply(replies24[s]);
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
        if (msg.content.includes("!新年快樂")) {
            msg.reply('\n\n新年快樂:partying_face::tada::tada::confetti_ball::fireworks::fireworks::fireworks::two::zero::two::two::sparkles:\n今天有特別籤【!抽籤】喔uwu');
        }
        if (msg.content.includes("!抽籤")) {
            if(msg.author.bot)
            return ;
            const one = Math.floor(Math.random() * 5)+0;
            msg.reply('的新年運勢:');
            msg.channel.send('健康:'); 
            msg.channel.send(repliesNY1[one]);
            msg.channel.send('愛情:');
            const two = Math.floor(Math.random() * 5)+0;
            msg.channel.send(repliesNY1[two]);
            msg.channel.send('財富:');
            const thr = Math.floor(Math.random() * 5)+0; 
            msg.channel.send(repliesNY1[thr]);
            msg.channel.send('事業:');
            const four = Math.floor(Math.random() * 5)+0; 
            msg.channel.send(repliesNY1[four]);
            msg.channel.send('整體:');
            const five = Math.floor(Math.random() * 5)+0;
            msg.channel.send(repliesNY1[five]);
        }
        if (msg.content.includes("!問")) {
            if(msg.author.bot)
            return ;
            const yep = Math.floor(Math.random() * repliesNY2.length);
            msg.reply(repliesNY2[yep]);
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

, replies24 = [
    ':one:',
    ':two:',
    ':three:',
    ':four:',
    ':five:',
    ':six:',
    ':seven:',
    ':eight:',
    ':nine:',
    ':keycap_ten:',
    ':one::one:',
    ':one::two:',
    ':one::three:',
    ':one::four:',
    ':one::five:',
    ':one::six:',
    ':one::seven:',
    ':one::eight:',
    ':one::nine:',
    ':two::zero:',
    ':two::one:',
    ':two::two:',
    ':two::three:',
    ':two::four:'
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
    '蛋包飯',
    '泡芙'
]

, repliesMan = [
    '口水:sweat_drops:',
    '仙人掌:cactus:',
    '爹咪:herb:',
    '銀夢:eggplant:',
    '阿凜:sparkles:',
    '亂數:lollipop:',
    '霜飛:cloud_snow:',
    'ssr:salad:',
    '糜奈:hotdog:',
    '樂樂:penguin:',
    '巴赫:shark:',
    '大雪:snowflake:',
    '烏里:purple_square:',
    '仙妹:seedling:',
    '希:bread:',
    '豬排:pig2:',
    '微風:cloud_tornado:',
    '獨步:older_man:',
    '小吉:sweet_potato:'
]
, repliesNY1 = [
    
        '【大吉】',
        '【中吉】',
        '【小吉】',
        '【凶】',
        '【大凶】'
]
, repliesNY2 = [
    '如果我們投一輩子石塊，即使閉著眼睛，也肯定有一次擊中成功。',
    '先把魚網打開，魚兒才能找到漁網的入口。',
    '當你握著兩手沙子時，一定就拿不到地上那顆珍珠了。',
    '再長的路，一步步也能走完，再短的路，不邁開雙腳也無法到達。',
    '有無目標是成功者與平庸者的根本差別。',
    '命運掌握在自己手裡，命運的好壞由自己去創造。',
    '阻止你前行的，不是人生道路上的一百塊石頭，而是你鞋子裡的那一顆石子。',
    '成功不是將來才有的，而是從決定去做的那一刻起，持續累積而成。',
    '既然一切都會過去，那我們一定要抓住現在的。',
    '除了自己，任何人都無法給你力量。',
    '只有傻瓜才用雙腳去試河水的深淺。',
    '解決最複雜的事情往往需要最簡單的方法。',
    '因害怕失敗而不敢放手一搏，永遠不會成功。',
    '我們不行，往往不是因為我們不行，而是因為別人說了我們不行。',
    '只有舍，才有得。',
    '熱愛並不代表要放棄一切去愛。'
]

//愛尼們
)

