//内緒やで。ぶっちゃけダサいと思っとんねん、このカスみたいなコード。

const hero_attacker_nomal = ["双挽 乃保", "桜華 忠臣", "マルコス'55", "マリア=S=レオンブルク", "アダム=ユーリエフ", "ヴィーナス ポロロッチョ", "デビルミント鬼龍 デルミン", "ルルカ", "狐ヶ咲 甘色", "イグニス=ウィル=ウィスプ", "ステリア・ララ・シルワ", "クー・シー", "コラプス",];
const hero_attacker_special = ["ソル＝バッドガイ", "リュウ", "レム", "カイ＝キスク", "リヴァイ", "セイバーオルタ", "アイズ・ヴァレンシュタイン", "ノクティス", "キリト", "2B", "リムル=テンペスト", "御坂美琴", "デンジ", "ターニャ・デグレチャフ", "ボンドルド", "ゴン=フリークス", "シャドウ", "アーチャー"];
const hero_gunner_nomal = ["リリカ","ルチアーノ","深川 まとい","13 †サーティーン†","メグメグ","イスタカ","ソーン=ユーリエフ","HM-WA100 ニーズヘッグ","ゲームバズーカガール","糸廻 輪廻","Bugdoll","天空王 ぶれいずどらごん","みりぽゆ","メルーニャ・ランチェルナ"]
const hero_gunner_special = ["ディズィー","エミリア","鏡音 リン","猫宮ひなた","岡部 倫太郎","ギルガメッシュ","芥川 龍之介","アインズ・ウール・ゴウン","アクセラレータ","ロキシー・ミグルディア","ロックマン.EXE ＆ 光熱斗","シノン","ランサー"]
const hero_tank_nomal = ["ジャスティス ハンコック","ジャンヌ ダルク","グスタフ ハイドリヒ","ヴィオレッタ ノワール","トマス","青春 アリス","ラヴィ・シュシュマルシュ","アミスター=バランディン","鬼ヶ式 うら"]
const hero_tank_special = ["鏡音 レン","モノクマ","めぐみん","佐藤四郎兵衛忠信","ライザリン・シュタウト","ポプ子＆ピピ美"]
const hero_sprinter_nomal = ["十文字 アタリ","Voidoll","ニコラ テスラ","コクリコット ブランシュ","かけだし勇者","輝龍院きらら","零夜","ピエール 77世","アル･ダハブ=アルカティア","某 <なにがし>","チーちゃん","ーペルリニエ"]
const hero_sprinter_special = ["初音 ミク","春麗","ザック＆レイチェル","アクア","中島 敦","ジョーカー","アスナ","ラム","ベル・クラネル","パワー","キルア=ゾルディック","上条当麻","セイバー"]

const card_list_1 = ["UMEEEEEE!!! ㌍伝道 通信教育カラァーテェ","機航師弾 フルーク・ツォイク","荒れ狂う天空王 ぶれいずどらごん","【天罰の熾天使】†ファースト†","反導砲 カノーネ・ファイエル","【デルミン】デビルミント始龍","失われし呪物￤蛇神アペプ","¦¦¦狸ヶ原¦¦¦ 破戒怨士 喰色","‡滅国の城‡双生王 レヴィ・シュシュマルシュ","雷霊の加護 ワキンヤン","せかいをはかい！恐怖の大魔王"];
const card_list_1sp = ["【Fate/strange Fake】慢心無き戦","【禁書目録】聖人と天才","【HUNTER×HUNTER】決意と覚悟の拳","【幼女戦記】ラインの悪魔","【チェンソーマン】早川アキ","【ロックマンエグゼ】ショックウェーブ","【ダンまち】聖火の女神と宴","【超電磁砲】幻想殺し(イマジンブレイカー)","【NieR:Automata】静寂の時","【NieR:Automata】交錯する運命","【オーバーロード】不死者の王 アインズ","【文スト】理想という病を愛す","【千本桜】初音未來","【STEINS;GATE】未来を司る女神作戦","【爆裂アークウィザード】めぐみん","【愉悦の一閃】アイザック","【リゼロ】絶望という病","【魂屠る闇】ネカリ","【最終最凶】ベガ","【ライディーン】シン","【我羨惚(がせんこつ)】紗夢(じゃむ)"];
const card_list_2 = ["対消滅ロングレンジライフルHum-Buster","名門サッカー部 イナズマシュート","闘魂！注入！受け継がれし魂 ゲームバズーカ","合体攻撃！ドリーム☆エンジェルズアロー","戦陣の灯/ VDN-93 強襲揚陸艦 ユグドラシル","迅雷の科学者 アバカン","全員集合！魔法少女リリカ☆ルルカ","紅薔薇の暗殺術 クルエルダー","チーちゃんのウワキオシオキ狙撃","運命の女神 エボリューション☆リリカ","深淵より湧き上がるシャドウ","独災者 アングリフ・ギフト"];
const card_list_2sp = ["【メイドインアビス】黎明卿","【超電磁砲】常盤台の超電磁砲(レールガン)","【転スラ】受け継がれる想い","【SAO】氷の狙撃手","【FFXV】彼の者の物語","【ワンショットワンキル】猫宮ひなた","【慈愛の貧乏リッチー】ウィズ","【ライジング・フォース】カイ","【マグナムウェディング】エルフェルト"];
const card_list_3 = ["学園の王者 生徒会執行部","とある家庭用メカの反乱","ライバル狂刃忍者 -幽々院ゆらら-","‡焼亡の森‡溺愛弟 ルー・メルク・シルワ"];
const card_list_3sp = ["【Fate/strange Fake】造られし命達","【メイドインアビス】火葬砲","【チェンソーマン】マキマ","【SAO】旅路の果て","【ダンまち】ソード・オラトリア","【進撃の巨人】 小さな刃","【ラッシュ＆ブレイズ】ケン","【拳を極めし者】豪鬼","【アニモエスティンギ】ラムレザル"];
const card_list_4 = ["連合宇宙軍 強襲制圧型 装甲多脚戦車","妖軍一統 ゲネラール","＊絢爛ノ美＊　ボラ＆アルヒコ＆アペイロン","オールレンジアタック","連合宇宙軍 サテライトキャノン","狂愛の次女 ヴァルヴァラ","【デルミン】デビルミント鬼龍パパミン","絶夢の魔女 リベレーション★ルルカ","‡滅国の城‡偽らざる鮮血の玉座","革命の旗","-蒼王宮- 終焉禁獣 グラナート"];
const card_list_4sp = ["【陰実】HIGHEST","【陰実】偽りの中の戯れ","【HUNTER×HUNTER】旅立ちと仲間たち","【ロックマンエグゼ】アースブレイカー","【無職転生】すれ違う物語","【転スラ】集う者達","【ペルソナ5】心の怪盗団","【ライザのアトリエ2】夏だ！海だ！水着だ！","【文スト】武装探偵社","【Fate/stay night [HF]】狂戦士の咆哮","【進撃の巨人】 超大型巨人襲来","【超高校級の幸運】狛枝 凪斗","【熱狂する双演】鏡音リン&鏡音レン","【リゼロ】間断なき結束","【号令する歌姫】初音 ミク","【アイウォントアウト】ジャック・オー","【アイアンメイデン】ミリア"];
const card_list_5 = ["魂を司る聖天使 ガブリエル","妖炎参謀 月夜叉","祭りの真打ち！打ち上げ花火","戦略の灯/ 国防長官フレイ","ハイカラ盟友忍者 -壬生咲みみみ-","-蒼王宮- 聖歌連隊 ミローディア","不思議の王子様「白馬の晴斗くん」","失われし血族￤カティーア大盗賊団","銀河防衛ロボ Unidoll-2525","神技官 アンジュ・ソレイユ","【#コンパス2.0】アニメ キービジュアル"];
const card_list_5sp = ["【Fate/strange Fake】時計塔の師弟","【ポプテピピック】POP TEAM EPIC","【陰実】七陰の頭脳","【メイドインアビス】ナナチ＆ミーティ","【チェンソーマン】公安対魔特異４課","【無職転生】夕暮れのひと時","【超電磁砲】とある少女たちの物語","【SAO】妖精たちの国にて","【オーバーロード】守護者統括 アルベド","【文スト】ありふれた日常の幸せ","【FFXV】父子の絆","【ダンまち】眷族の物語(ファミリア・ミィス)","【超歌舞伎】今昔饗宴千本桜","【Fate/stay night [HF]】舞い散る桜","【STEINS;GATE】黄昏の憩い","【最高にハイ!!!エナドリ】猫宮ひなた","【進撃の巨人】 娘々ストレッチ","【風呂上がりの休息】アクア＆めぐみん","【超高校級のゲーマー】七海 千秋","【夢超える共演】初音ミク&鏡音リンレン","【リゼロ】ゼロから始まる異世界生活","【祝福する歌姫】初音 ミク","ギアメーカー"];
const card_list_6 = ["究極系ノーガード戦法","全天首都防壁 Hum-Sphere LLIK","楽団姫 ディーバ","背に負いし亡き妻の加護"];
const card_list_6sp = ["【Fate/strange Fake】To The City","【チェンソーマン】犬とチェンソー","【ロックマンエグゼ】ダブルストリーム","【転スラ】転生したらスライムだった件","【SAO】朝露の少女と","【ペルソナ5】運命の囚われ","【文スト】双つの黒","【ダンまち】至福の一時","【超歌舞伎】転生なしたる白狐","【Fate/stay night [HF]】lost butterfly","【駄女神’s】アクア＆めぐみん＆ダクネス","【イカれた約束】ザック＆レイ"];
const card_list_7 = ["ぶじゅつかの超速加速","楽団長 ドルケストル","創霊の加護 タイオワ"];
const card_list_7sp = ["【ポプテピピック】万全のポプ子","【ポプテピピック】たたかないで…","【禁書目録】未元物質（ダークマター）","【幼女戦記】神の恩寵","【オーバーロード】英雄モモン＆美姫ナーベ","【ライザのアトリエ2】ひと夏の思い出","【FFXV】輝かしき未来へ","【STEINS;GATE】時間跳躍の協力者","【リゼロ】ひとときの団欒","【空駆ける歌姫】初音 ミク"];
const card_list_8 = ["おかあさん だーいすき","極悪！最低！悪人派遣会社社長 ベリバッド","連合宇宙軍 シールドブレイカー","おとうさん あそんであそんでー","ドリーム☆マジカルスクエア","-蒼王宮-氷冠女王イデア=N=ユランブルク"];
const card_list_8sp = ["【無職転生】無慈悲なる邂逅","【ライザのアトリエ2】いざ！冒険の旅へ！","【Fate/stay night [HF]】激辛麻婆豆腐","【超高校級の希望】苗木 誠","【ルナティック・アイズ】レイチェル"];
const card_list_9 = ["-蒼王宮- 恩寵天使 ソーン=ユーリエフ","どこにでもいけるドア","恒星間転送装置 Tele-Pass","エナジー缶 100000ml"];
const card_list_9sp = ["【ペルソナ5】TAKE YOUR HEART"];
const card_list_10 = ["祭りの目玉！ドラゴン花火","UMEEEEEE!!! ㌍覇王 プニャトフスキ一族","蜘蛛縫組 Ж 三代目組長 蜘蛛縫 正太郎","モノリス Hum-Unknown","忘愛の長女 アレクサンドラ","蜘蛛縫組 Ж 面従相談役 千切 常影","‡焼亡の森‡奴隷狩り密売団 ケルマト"];
const card_list_10sp = ["【火遊びフラッシュバン】猫宮ひなた","【口寄せ・大型神陣】アンサー"];
const card_list_11 = ["ミナ&ルナ&レナのバーゲンセール戦争","¦¦¦狐ヶ咲¦¦¦ 祓三姉妹 夢色￤桃色","＊真実ノ美＊　ジョバンニ"];
const card_list_11sp = ["【HUNTER×HUNTER】ゾルディック家","【超電磁砲】超能力者(レベル5)の第一位","【NieR:Automata】戦いの始まり","【画竜点睛】梅喧(ばいけん)"];
const card_list_12 = ["せかいをまもる！守護星の女神","祭りの粋！オトコの手筒花火","紅薔薇の副団長 アミスター","ガルガルのピカピカデコ戦車","#夜光犯罪特区 #きてるちゃんライヴ","#夜光犯罪特区 #終夜の俺様賛美会","不思議の支配者「ハートの女王さま」","//*#イレギュラー 戦闘摂理偽装システム#*//","//*#イレギュラードールズ#*//"];
const card_list_12sp = ["【HUNTER×HUNTER】奇術師 ヒソカ","【幼女戦記】反撃の狼煙","【ダンまち】恥じらいの疾風"];

let i=0;


















//メニュー切り替え////////////////////////////////
const btn_menu1 = document.getElementById("radio_menu_1"); const btn_menu2 = document.getElementById("radio_menu_2"); const btn_menu3 = document.getElementById("radio_menu_3"); const btn_menu4 = document.getElementById("radio_menu_4"); const btn_menu5 = document.getElementById("radio_menu_5");
const contents_1 = document.getElementById("menu1_id"); const contents_2 = document.getElementById("menu2_id"); const contents_3 = document.getElementById("menu3_id"); const contents_4 = document.getElementById("menu4_id"); const contents_5 = document.getElementById("menu5_id");

const RemoveActiveClassFunction = function () {
    contents_1.classList.remove("active");
    contents_2.classList.remove("active");
    contents_3.classList.remove("active");
    contents_4.classList.remove("active");
    contents_5.classList.remove("active");
    code_output.textContent ="";
}

btn_menu1.addEventListener("click", function () { RemoveActiveClassFunction(); contents_1.classList.add("active"); });
btn_menu2.addEventListener("click", function () { RemoveActiveClassFunction(); contents_2.classList.add("active"); });
btn_menu3.addEventListener("click", function () { RemoveActiveClassFunction(); contents_3.classList.add("active"); });
btn_menu4.addEventListener("click", function () { RemoveActiveClassFunction(); contents_4.classList.add("active"); });
btn_menu5.addEventListener("click", function () { RemoveActiveClassFunction(); contents_5.classList.add("active");deta_set(); });
//////////////////////////////////////////////////




















//ヒーロー選択/////////////////////////////////////
const attackerlist = document.getElementById("attackerlist");
const gunnerlist = document.getElementById("gunnerlist");
const tanklist = document.getElementById("tanklist");
const sprinterlist = document.getElementById("sprinterlist");

i = 0;while (i < hero_attacker_nomal.length) {attackerlist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_attacker_nomal">' + hero_attacker_nomal[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_attacker_special.length) {attackerlist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_attacker_special">' + hero_attacker_special[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_gunner_nomal.length) {gunnerlist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_gunner_nomal">' + hero_gunner_nomal[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_gunner_special.length) {gunnerlist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_gunner_special">' + hero_gunner_special[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_tank_nomal.length) {tanklist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_tank_nomal">' + hero_tank_nomal[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_tank_special.length) {tanklist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_tank_special">' + hero_tank_special[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_sprinter_nomal.length) {sprinterlist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_sprinter_nomal">' + hero_sprinter_nomal[i] + '</label>');i = i + 1;}
i = 0;while (i < hero_sprinter_special.length) {sprinterlist.insertAdjacentHTML("beforeend", '<label class="checkboxs"><input type="checkbox" class="class_sprinter_special">' + hero_sprinter_special[i] + '</label>');i = i + 1;}






//一括ボタン
const hero_nomal_allcheck_btn = document.getElementById("hero_nomal_allcheck_btn"),hero_special_allcheck_btn = document.getElementById("hero_special_allcheck_btn"),hero_uncheck_btn = document.getElementById("hero_uncheck_btn");

hero_nomal_allcheck_btn.addEventListener("click",function(){hero_nomal_allcheck();});hero_special_allcheck_btn.addEventListener("click",function(){hero_special_allcheck();});hero_uncheck_btn.addEventListener("click",function(){hero_uncheck();});

const checkbox_attacker_nomal = document.getElementsByClassName("class_attacker_nomal");
const checkbox_attacker_special = document.getElementsByClassName("class_attacker_special");
const checkbox_gunner_nomal = document.getElementsByClassName("class_gunner_nomal");
const checkbox_gunner_special = document.getElementsByClassName("class_gunner_special");
const checkbox_tank_nomal = document.getElementsByClassName("class_tank_nomal");
const checkbox_tank_special = document.getElementsByClassName("class_tank_special");
const checkbox_sprinter_nomal = document.getElementsByClassName("class_sprinter_nomal");
const checkbox_sprinter_special = document.getElementsByClassName("class_sprinter_special");



const hero_nomal_allcheck = function(){i = 0;while (i < hero_attacker_nomal.length) {checkbox_attacker_nomal[i].checked=true;i = i + 1;}  i = 0;while (i < hero_gunner_nomal.length) {checkbox_gunner_nomal[i].checked=true;i = i + 1;}  i = 0;while (i < hero_tank_nomal.length) {checkbox_tank_nomal[i].checked=true;i = i + 1;}  i = 0;while (i < hero_sprinter_nomal.length) {checkbox_sprinter_nomal[i].checked=true;i = i + 1;}  }

const hero_special_allcheck = function(){i = 0;while (i < hero_attacker_special.length) {checkbox_attacker_special[i].checked=true;i = i + 1;}  i = 0;while (i < hero_gunner_special.length) {checkbox_gunner_special[i].checked=true;i = i + 1;}  i = 0;while (i < hero_tank_special.length) {checkbox_tank_special[i].checked=true;i = i + 1;}  i = 0;while (i < hero_sprinter_special.length) {checkbox_sprinter_special[i].checked=true;i = i + 1;}  }

const hero_uncheck = function(){i = 0;while (i < hero_attacker_nomal.length) {checkbox_attacker_nomal[i].checked=false;i = i + 1;}  i = 0;while (i < hero_gunner_nomal.length) {checkbox_gunner_nomal[i].checked=false;i = i + 1;}  i = 0;while (i < hero_tank_nomal.length) {checkbox_tank_nomal[i].checked=false;i = i + 1;}  i = 0;while (i < hero_sprinter_nomal.length) {checkbox_sprinter_nomal[i].checked=false;i = i + 1;}  i = 0;while (i < hero_attacker_special.length) {checkbox_attacker_special[i].checked=false;i = i + 1;}  i = 0;while (i < hero_gunner_special.length) {checkbox_gunner_special[i].checked=false;i = i + 1;}  i = 0;while (i < hero_tank_special.length) {checkbox_tank_special[i].checked=false;i = i + 1;}  i = 0;while (i < hero_sprinter_special.length) {checkbox_sprinter_special[i].checked=false;i = i + 1;}  }
///////////////////////////////////////////////

















//カード選択//////////////////////////////////////////////////

const listbox_card_1 = document.getElementById("listbox_card_1");
i=0;
while (i < card_list_1.length) {
    listbox_card_1.insertAdjacentHTML(
        "beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_1 nomal">' + card_list_1[i] + '</label>'
    );
    i=i+1;
}
const listbox_card_1sp = document.getElementById("listbox_card_1sp");
i=0;
while (i < card_list_1sp.length) {
    listbox_card_1sp.insertAdjacentHTML(
        "beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_1sp special">' + card_list_1sp[i] + '</label>'
    );
    i=i+1;
}
const listbox_card_2 = document.getElementById("listbox_card_2");i=0;while (i < card_list_2.length) {listbox_card_2.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_2 nomal">' + card_list_2[i] + '</label>');i=i+1;}
const listbox_card_2sp = document.getElementById("listbox_card_2sp");i=0;while (i < card_list_2sp.length) {listbox_card_2sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_2sp special">' + card_list_2sp[i] + '</label>');i=i+1;}
const listbox_card_3 = document.getElementById("listbox_card_3");i=0;while (i < card_list_3.length) {listbox_card_3.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_3 nomal">' + card_list_3[i] + '</label>');i=i+1;}
const listbox_card_3sp = document.getElementById("listbox_card_3sp");i=0;while (i < card_list_3sp.length) {listbox_card_3sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_3sp special">' + card_list_3sp[i] + '</label>');i=i+1;}
const listbox_card_4 = document.getElementById("listbox_card_4");i=0;while (i < card_list_4.length) {listbox_card_4.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_4 nomal">' + card_list_4[i] + '</label>');i=i+1;}
const listbox_card_4sp = document.getElementById("listbox_card_4sp");i=0;while (i < card_list_4sp.length) {listbox_card_4sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_4sp special">' + card_list_4sp[i] + '</label>');i=i+1;}
const listbox_card_5 = document.getElementById("listbox_card_5");i=0;while (i < card_list_5.length) {listbox_card_5.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_5 nomal">' + card_list_5[i] + '</label>');i=i+1;}
const listbox_card_5sp = document.getElementById("listbox_card_5sp");i=0;while (i < card_list_5sp.length) {listbox_card_5sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_5sp special">' + card_list_5sp[i] + '</label>');i=i+1;}
const listbox_card_6 = document.getElementById("listbox_card_6");i=0;while (i < card_list_6.length) {listbox_card_6.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_6 nomal">' + card_list_6[i] + '</label>');i=i+1;}
const listbox_card_6sp = document.getElementById("listbox_card_6sp");i=0;while (i < card_list_6sp.length) {listbox_card_6sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_6sp special">' + card_list_6sp[i] + '</label>');i=i+1;}
const listbox_card_7 = document.getElementById("listbox_card_7");i=0;while (i < card_list_7.length) {listbox_card_7.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_7 nomal">' + card_list_7[i] + '</label>');i=i+1;}
const listbox_card_7sp = document.getElementById("listbox_card_7sp");i=0;while (i < card_list_7sp.length) {listbox_card_7sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_7sp special">' + card_list_7sp[i] + '</label>');i=i+1;}
const listbox_card_8 = document.getElementById("listbox_card_8");i=0;while (i < card_list_8.length) {listbox_card_8.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_8 nomal">' + card_list_8[i] + '</label>');i=i+1;}
const listbox_card_8sp = document.getElementById("listbox_card_8sp");i=0;while (i < card_list_8sp.length) {listbox_card_8sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_8sp special">' + card_list_8sp[i] + '</label>');i=i+1;}
const listbox_card_9 = document.getElementById("listbox_card_9");i=0;while (i < card_list_9.length) {listbox_card_9.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_9 nomal">' + card_list_9[i] + '</label>');i=i+1;}
const listbox_card_9sp = document.getElementById("listbox_card_9sp");i=0;while (i < card_list_9sp.length) {listbox_card_9sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_9sp special">' + card_list_9sp[i] + '</label>');i=i+1;}
const listbox_card_10 = document.getElementById("listbox_card_10");i=0;while (i < card_list_10.length) {listbox_card_10.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_10 nomal">' + card_list_10[i] + '</label>');i=i+1;}
const listbox_card_10sp = document.getElementById("listbox_card_10sp");i=0;while (i < card_list_10sp.length) {listbox_card_10sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_10sp special">' + card_list_10sp[i] + '</label>');i=i+1;}
const listbox_card_11 = document.getElementById("listbox_card_11");i=0;while (i < card_list_11.length) {listbox_card_11.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_11 nomal">' + card_list_11[i] + '</label>');i=i+1;}
const listbox_card_11sp = document.getElementById("listbox_card_11sp");i=0;while (i < card_list_11sp.length) {listbox_card_11sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_11sp special">' + card_list_11sp[i] + '</label>');i=i+1;}
const listbox_card_12 = document.getElementById("listbox_card_12");i=0;while (i < card_list_12.length) {listbox_card_12.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_12 nomal">' + card_list_12[i] + '</label>');i=i+1;}
const listbox_card_12sp = document.getElementById("listbox_card_12sp");i=0;while (i < card_list_12sp.length) {listbox_card_12sp.insertAdjacentHTML("beforeend",'<label class="checkboxs"><input type="checkbox" class="checkbox_card_12sp special">' + card_list_12sp[i] + '</label>');i=i+1;}


//表示変更ボタン
const cardtype_select_btn = document.getElementById("cardtype_select_btn");
const menu4_btntab = document.getElementById("menu4_btntab");
const cardtype_selecttab = document.getElementById("cardtype_selecttab");
const contents_card = document.getElementsByClassName("contents_card");

cardtype_select_btn.addEventListener("click",function(){
    cardtype_select();
});

const cardtype_select = function(){
    for (i=0;i<12;i=i+1){
        contents_card[i].classList.remove("active");
    }
    menu4_btntab.classList.remove("active");
    cardtype_selecttab.classList.add("active");
}

const cardtype_select_menu = document.getElementsByClassName("cardtype_select_menu");

const cardtype_select2 = function(number){
    cardtype_selecttab.classList.remove("active");
    menu4_btntab.classList.add("active");
    contents_card[number].classList.add("active");
}

cardtype_select_menu[0].addEventListener("click",function(){cardtype_select2(0);});
cardtype_select_menu[1].addEventListener("click",function(){cardtype_select2(1);});
cardtype_select_menu[2].addEventListener("click",function(){cardtype_select2(2);});
cardtype_select_menu[3].addEventListener("click",function(){cardtype_select2(3);});
cardtype_select_menu[4].addEventListener("click",function(){cardtype_select2(4);});
cardtype_select_menu[5].addEventListener("click",function(){cardtype_select2(5);});
cardtype_select_menu[6].addEventListener("click",function(){cardtype_select2(6);});
cardtype_select_menu[7].addEventListener("click",function(){cardtype_select2(7);});
cardtype_select_menu[8].addEventListener("click",function(){cardtype_select2(8);});
cardtype_select_menu[9].addEventListener("click",function(){cardtype_select2(9);});
cardtype_select_menu[10].addEventListener("click",function(){cardtype_select2(10);});
cardtype_select_menu[11].addEventListener("click",function(){cardtype_select2(11);});
  

//一括選択：恒常
const card_check_btn = document.getElementById("card_check_btn")

card_check_btn.addEventListener('click',function(){
    card_check();
})

const card_check = function(){
    let activecheckbox_card = document.querySelectorAll('.contents_card.active .nomal');
    for(i=0;i<activecheckbox_card.length;i=i+1){
        activecheckbox_card[i].checked=true;
    }
}

//一括選択：コラボ
const spcard_check_btn = document.getElementById("spcard_check_btn")

spcard_check_btn.addEventListener('click',function(){
    spcard_check();
})

const spcard_check = function(){
    let activecheckbox_card = document.querySelectorAll('.contents_card.active .special');
    for(i=0;i<activecheckbox_card.length;i=i+1){
        activecheckbox_card[i].checked=true;
    }
}

//リセット

const card_uncheck_btn = document.getElementById("card_uncheck_btn")

card_uncheck_btn.addEventListener('click',function(){
    card_uncheck();
})

const card_uncheck = function(){
    let activecheckbox_card = document.querySelectorAll('.contents_card.active .nomal');
    for(i=0;i<activecheckbox_card.length;i=i+1){
        activecheckbox_card[i].checked=false;
    }
    activecheckbox_card = document.querySelectorAll('.contents_card.active .special');
    for(i=0;i<activecheckbox_card.length;i=i+1){
        activecheckbox_card[i].checked=false;
    }
}

const allcard_uncheck = function(){
    let activecheckbox_card =""
    activecheckbox_card = document.getElementsByClassName("checkbox_card_1");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_1sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_2");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_2sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_3");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_3sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_4");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_4sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_5");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_5sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_6");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_6sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_7");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_7sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_8");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_8sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_9");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_9sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_10");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_10sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_11");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_11sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_12");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};
    activecheckbox_card = document.getElementsByClassName("checkbox_card_12sp");for(i=0;i<activecheckbox_card.length;i=i+1){activecheckbox_card[i].checked=false;};


}
///////////////////////////////////////////////















//セーブ//////////////////////////////////////////////
const save_btn = document.getElementById("save_btn");
const code_output = document.getElementById("code_output");

save_btn.addEventListener('click', function(){
    deta_save();
});


//code1~8:ヒーロー 9~32:カード 
const deta_save = function () {
    
    let code1="",code2="",code3="",code4="",code5="",code6="",code7="",code8="",code9="",code10="",code11="",code12="",code13="",code14="",code15="",code16="",code17="",code18="",code19="",code20="",code21="",code22="",code23="",code24="",code25="",code26="",code27="",code28="",code29="",code30="",code31="",code32="",code33="0";
    i = 0;
    while (i < checkbox_attacker_nomal.length) {
        if (true == checkbox_attacker_nomal[i].checked) {
            code1 = "1" + code1;
        } else {
            code1 = "0" + code1;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_attacker_special.length) {
        if (true == checkbox_attacker_special[i].checked) {
            code2 = "1" + code2;
        } else {
            code2 = "0" + code2;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_gunner_nomal.length) {
        if (true == checkbox_gunner_nomal[i].checked) {
            code3 = "1" + code3;
        } else {
            code3 = "0" + code3;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_gunner_special.length) {
        if (true == checkbox_gunner_special[i].checked) {
            code4 = "1" + code4;
        } else {
            code4 = "0" + code4;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_tank_nomal.length) {
        if (true == checkbox_tank_nomal[i].checked) {
            code5 = "1" + code5;
        } else {
            code5 = "0" + code5;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_tank_special.length) {
        if (true == checkbox_tank_special[i].checked) {
            code6 = "1" + code6;
        } else {
            code6 = "0" + code6;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_sprinter_nomal.length) {
        if (true == checkbox_sprinter_nomal[i].checked) {
            code7 = "1" + code7;
        } else {
            code7 = "0" + code7;
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_sprinter_special.length) {
        if (true == checkbox_sprinter_special[i].checked) {
            code8 = "1" + code8;
        } else {
            code8 = "0" + code8;
        }
        i = i + 1;
    }

    i = 0;while (i < checkbox_card_1.length) {if (true == checkbox_card_1[i].checked) {code9 = "1" + code9;} else {code9 = "0" + code9;}i = i + 1;}
    i = 0;while (i < checkbox_card_1sp.length) {i = i + 1;if (true == checkbox_card_1sp[checkbox_card_1sp.length-i].checked) {code10 = "1" + code10;} else {code10 = "0" + code10;}}
    i = 0;while (i < checkbox_card_2.length) {if (true == checkbox_card_2[i].checked) {code11 = "1" + code11;} else {code11 = "0" + code11;}i = i + 1;}
    i = 0;while (i < checkbox_card_2sp.length) {i = i + 1;if (true == checkbox_card_2sp[checkbox_card_2sp.length-i].checked) {code12 = "1" + code12;} else {code12 = "0" + code12;}}
    i = 0;while (i < checkbox_card_3.length) {if (true == checkbox_card_3[i].checked) {code13 = "1" + code13;} else {code13 = "0" + code13;}i = i + 1;}
    i = 0;while (i < checkbox_card_3sp.length) {i = i + 1;if (true == checkbox_card_3sp[checkbox_card_3sp.length-i].checked) {code14 = "1" + code14;} else {code14 = "0" + code14;}}
    i = 0;while (i < checkbox_card_4.length) {if (true == checkbox_card_4[i].checked) {code15 = "1" + code15;} else {code15 = "0" + code15;}i = i + 1;}
    i = 0;while (i < checkbox_card_4sp.length) {i = i + 1;if (true == checkbox_card_4sp[checkbox_card_4sp.length-i].checked) {code16 = "1" + code16;} else {code16 = "0" + code16;}}
    i = 0;while (i < checkbox_card_5.length) {if (true == checkbox_card_5[i].checked) {code17 = "1" + code17;} else {code17 = "0" + code17;}i = i + 1;}
    i = 0;while (i < checkbox_card_5sp.length) {i = i + 1;if (true == checkbox_card_5sp[checkbox_card_5sp.length-i].checked) {code18 = "1" + code18;} else {code18 = "0" + code18;}}
    i = 0;while (i < checkbox_card_6.length) {if (true == checkbox_card_6[i].checked) {code19 = "1" + code19;} else {code19 = "0" + code19;}i = i + 1;}
    i = 0;while (i < checkbox_card_6sp.length) {i = i + 1;if (true == checkbox_card_6sp[checkbox_card_6sp.length-i].checked) {code20 = "1" + code20;} else {code20 = "0" + code20;}}
    i = 0;while (i < checkbox_card_7.length) {if (true == checkbox_card_7[i].checked) {code21 = "1" + code21;} else {code21 = "0" + code21;}i = i + 1;}
    i = 0;while (i < checkbox_card_7sp.length) {i = i + 1;if (true == checkbox_card_7sp[checkbox_card_7sp.length-i].checked) {code22 = "1" + code22;} else {code22 = "0" + code22;}}
    i = 0;while (i < checkbox_card_8.length) {if (true == checkbox_card_8[i].checked) {code23 = "1" + code23;} else {code23 = "0" + code23;}i = i + 1;}
    i = 0;while (i < checkbox_card_8sp.length) {i = i + 1;if (true == checkbox_card_8sp[checkbox_card_8sp.length-i].checked) {code24 = "1" + code24;} else {code24 = "0" + code24;}}
    i = 0;while (i < checkbox_card_9.length) {if (true == checkbox_card_9[i].checked) {code25 = "1" + code25;} else {code25 = "0" + code25;}i = i + 1;}
    i = 0;while (i < checkbox_card_9sp.length) {i = i + 1;if (true == checkbox_card_9sp[checkbox_card_9sp.length-i].checked) {code26 = "1" + code26;} else {code26 = "0" + code26;}}
    i = 0;while (i < checkbox_card_10.length) {if (true == checkbox_card_10[i].checked) {code27 = "1" + code27;} else {code27 = "0" + code27;}i = i + 1;}
    i = 0;while (i < checkbox_card_10sp.length) {i = i + 1;if (true == checkbox_card_10sp[checkbox_card_10sp.length-i].checked) {code28 = "1" + code28;} else {code28 = "0" + code28;}}
    i = 0;while (i < checkbox_card_11.length) {if (true == checkbox_card_11[i].checked) {code29 = "1" + code29;} else {code29 = "0" + code29;}i = i + 1;}
    i = 0;while (i < checkbox_card_11sp.length) {i = i + 1;if (true == checkbox_card_11sp[checkbox_card_11sp.length-i].checked) {code30 = "1" + code30;} else {code30 = "0" + code30;}}
    i = 0;while (i < checkbox_card_12.length) {if (true == checkbox_card_12[i].checked) {code31 = "1" + code31;} else {code31 = "0" + code31;}i = i + 1;}
    i = 0;while (i < checkbox_card_12sp.length) {i = i + 1;if (true == checkbox_card_12sp[checkbox_card_12sp.length-i].checked) {code32 = "1" + code32;} else {code32 = "0" + code32;}}


    code_output.textContent = parseInt(code1,2).toString(36)+'_'+parseInt(code2,2).toString(36)+'_'+parseInt(code3,2).toString(36)+'_'+parseInt(code4,2).toString(36)+'_'+parseInt(code5,2).toString(36)+'_'+parseInt(code6,2).toString(36)+'_'+parseInt(code7,2).toString(36)+'_'+parseInt(code8,2).toString(36)+'_'+parseInt(code9,2).toString(36)+'_'+parseInt(code10,2).toString(36)+'_'+parseInt(code11,2).toString(36)+'_'+parseInt(code12,2).toString(36)+'_'+parseInt(code13,2).toString(36)+'_'+parseInt(code14,2).toString(36)+'_'+parseInt(code15,2).toString(36)+'_'+parseInt(code16,2).toString(36)+'_'+parseInt(code17,2).toString(36)+'_'+parseInt(code18,2).toString(36)+'_'+parseInt(code19,2).toString(36)+'_'+parseInt(code20,2).toString(36)+'_'+parseInt(code21,2).toString(36)+'_'+parseInt(code22,2).toString(36)+'_'+parseInt(code23,2).toString(36)+'_'+parseInt(code24,2).toString(36)+'_'+parseInt(code25,2).toString(36)+'_'+parseInt(code26,2).toString(36)+'_'+parseInt(code27,2).toString(36)+'_'+parseInt(code28,2).toString(36)+'_'+parseInt(code29,2).toString(36)+'_'+parseInt(code30,2).toString(36)+'_'+parseInt(code31,2).toString(36)+'_'+parseInt(code32,2).toString(36)+'_'+parseInt(code33,2).toString(36);
}


const checkbox_card_1 = document.getElementsByClassName("checkbox_card_1")
const checkbox_card_1sp = document.getElementsByClassName("checkbox_card_1sp")
const checkbox_card_2 = document.getElementsByClassName("checkbox_card_2")
const checkbox_card_2sp = document.getElementsByClassName("checkbox_card_2sp")
const checkbox_card_3 = document.getElementsByClassName("checkbox_card_3")
const checkbox_card_3sp = document.getElementsByClassName("checkbox_card_3sp")
const checkbox_card_4 = document.getElementsByClassName("checkbox_card_4")
const checkbox_card_4sp = document.getElementsByClassName("checkbox_card_4sp")
const checkbox_card_5 = document.getElementsByClassName("checkbox_card_5")
const checkbox_card_5sp = document.getElementsByClassName("checkbox_card_5sp")
const checkbox_card_6 = document.getElementsByClassName("checkbox_card_6")
const checkbox_card_6sp = document.getElementsByClassName("checkbox_card_6sp")
const checkbox_card_7 = document.getElementsByClassName("checkbox_card_7")
const checkbox_card_7sp = document.getElementsByClassName("checkbox_card_7sp")
const checkbox_card_8 = document.getElementsByClassName("checkbox_card_8")
const checkbox_card_8sp = document.getElementsByClassName("checkbox_card_8sp")
const checkbox_card_9 = document.getElementsByClassName("checkbox_card_9")
const checkbox_card_9sp = document.getElementsByClassName("checkbox_card_9sp")
const checkbox_card_10 = document.getElementsByClassName("checkbox_card_10")
const checkbox_card_10sp = document.getElementsByClassName("checkbox_card_10sp")
const checkbox_card_11 = document.getElementsByClassName("checkbox_card_11")
const checkbox_card_11sp = document.getElementsByClassName("checkbox_card_11sp")
const checkbox_card_12 = document.getElementsByClassName("checkbox_card_12")
const checkbox_card_12sp = document.getElementsByClassName("checkbox_card_12sp")



const load_text = document.getElementById("load_text");
const load_btn = document.getElementById("load_btn");
const code_input = document.getElementById("code_input");

load_btn.addEventListener('click', function(){
    hero_uncheck();
    allcard_uncheck();
    deta_load();
});

const deta_load = function () {
    let deta_code = load_text.value
    let deta_code_split = deta_code.split("_")


    let code1 = parseInt(deta_code_split[0],36).toString(2);
    i=0;
    j=code1.length;
    while (i < code1.length) {
        j=j-1;
        if (1==code1.charAt(j)) {
            checkbox_attacker_nomal[i].checked=true;
        }
        i=i+1;
    }
    let code2 = parseInt(deta_code_split[1],36).toString(2);
    i=0;
    j=code2.length;
    while (i < code2.length) {
        j=j-1;
        if (1==code2.charAt(j)) {
            checkbox_attacker_special[i].checked=true;
        }
        i=i+1;
    }
    let code3 = parseInt(deta_code_split[2],36).toString(2);
    i=0;
    j=code3.length;
    while (i < code3.length) {
        j=j-1;
        if (1==code3.charAt(j)) {
            checkbox_gunner_nomal[i].checked=true;
        }
        i=i+1;
    }
    let code4 = parseInt(deta_code_split[3],36).toString(2);
    i=0;
    j=code4.length;
    while (i < code4.length) {
        j=j-1;
        if (1==code4.charAt(j)) {
            checkbox_gunner_special[i].checked=true;
        }
        i=i+1;
    }
    let code5 = parseInt(deta_code_split[4],36).toString(2);
    i=0;
    j=code5.length;
    while (i < code5.length) {
        j=j-1;
        if (1==code5.charAt(j)) {
            checkbox_tank_nomal[i].checked=true;
        }
        i=i+1;
    }
    let code6 = parseInt(deta_code_split[5],36).toString(2);
    i=0;
    j=code6.length;
    while (i < code6.length) {
        j=j-1;
        if (1==code6.charAt(j)) {
            checkbox_tank_special[i].checked=true;
        }
        i=i+1;
    }
    let code7 = parseInt(deta_code_split[6],36).toString(2);
    i=0;
    j=code7.length;
    while (i < code7.length) {
        j=j-1;
        if (1==code7.charAt(j)) {
            checkbox_sprinter_nomal[i].checked=true;
        }
        i=i+1;
    }
    let code8 = parseInt(deta_code_split[7],36).toString(2);
    i=0;
    j=code8.length;
    while (i < code8.length) {
        j=j-1;
        if (1==code8.charAt(j)) {
            checkbox_sprinter_special[i].checked=true;
        }
        i=i+1;
    }
    let code9 = parseInt(deta_code_split[8],36).toString(2);
    i=0;
    j=code9.length;
    while (i < code9.length) {
        j=j-1;
        if (1==code9.charAt(j)) {
            checkbox_card_1[i].checked=true;
        }
        i=i+1;
    }
    let code10 = parseInt(deta_code_split[9],36).toString(2);
    i=0;
    j=code10.length;
    while (i < code10.length) {
        j=j-1;
        i=i+1;
        if (1==code10.charAt(j)) {
            checkbox_card_1sp[checkbox_card_1sp.length-i].checked=true;
        }
    }
    let code11 = parseInt(deta_code_split[10],36).toString(2);i=0;j=code11.length;while (i < code11.length) {j=j-1;if (1==code11.charAt(j)) {checkbox_card_2[i].checked=true;}i=i+1;}
    let code12 = parseInt(deta_code_split[11],36).toString(2);i=0;j=code12.length;while (i < code12.length) {j=j-1;i=i+1;if (1==code12.charAt(j)) {checkbox_card_2sp[checkbox_card_2sp.length-i].checked=true;}}
    let code13 = parseInt(deta_code_split[12],36).toString(2);i=0;j=code13.length;while (i < code13.length) {j=j-1;if (1==code13.charAt(j)) {checkbox_card_3[i].checked=true;}i=i+1;}
    let code14 = parseInt(deta_code_split[13],36).toString(2);i=0;j=code14.length;while (i < code14.length) {j=j-1;i=i+1;if (1==code14.charAt(j)) {checkbox_card_3sp[checkbox_card_3sp.length-i].checked=true;}}
    let code15 = parseInt(deta_code_split[14],36).toString(2);i=0;j=code15.length;while (i < code15.length) {j=j-1;if (1==code15.charAt(j)) {checkbox_card_4[i].checked=true;}i=i+1;}
    let code16 = parseInt(deta_code_split[15],36).toString(2);i=0;j=code16.length;while (i < code16.length) {j=j-1;i=i+1;if (1==code16.charAt(j)) {checkbox_card_4sp[checkbox_card_4sp.length-i].checked=true;}}
    let code17 = parseInt(deta_code_split[16],36).toString(2);i=0;j=code17.length;while (i < code17.length) {j=j-1;if (1==code17.charAt(j)) {checkbox_card_5[i].checked=true;}i=i+1;}
    let code18 = parseInt(deta_code_split[17],36).toString(2);i=0;j=code18.length;while (i < code18.length) {j=j-1;i=i+1;if (1==code18.charAt(j)) {checkbox_card_5sp[checkbox_card_5sp.length-i].checked=true;}}
    let code19 = parseInt(deta_code_split[18],36).toString(2);i=0;j=code19.length;while (i < code19.length) {j=j-1;if (1==code19.charAt(j)) {checkbox_card_6[i].checked=true;}i=i+1;}
    let code20 = parseInt(deta_code_split[19],36).toString(2);i=0;j=code20.length;while (i < code20.length) {j=j-1;i=i+1;if (1==code20.charAt(j)) {checkbox_card_6sp[checkbox_card_6sp.length-i].checked=true;}}
    let code21 = parseInt(deta_code_split[20],36).toString(2);i=0;j=code21.length;while (i < code21.length) {j=j-1;if (1==code21.charAt(j)) {checkbox_card_7[i].checked=true;}i=i+1;}
    let code22 = parseInt(deta_code_split[21],36).toString(2);i=0;j=code22.length;while (i < code22.length) {j=j-1;i=i+1;if (1==code22.charAt(j)) {checkbox_card_7sp[checkbox_card_7sp.length-i].checked=true;}}
    let code23 = parseInt(deta_code_split[22],36).toString(2);i=0;j=code23.length;while (i < code23.length) {j=j-1;if (1==code23.charAt(j)) {checkbox_card_8[i].checked=true;}i=i+1;}
    let code24 = parseInt(deta_code_split[23],36).toString(2);i=0;j=code24.length;while (i < code24.length) {j=j-1;i=i+1;if (1==code24.charAt(j)) {checkbox_card_8sp[checkbox_card_8sp.length-i].checked=true;}}
    let code25 = parseInt(deta_code_split[24],36).toString(2);i=0;j=code25.length;while (i < code25.length) {j=j-1;if (1==code25.charAt(j)) {checkbox_card_9[i].checked=true;}i=i+1;}
    let code26 = parseInt(deta_code_split[25],36).toString(2);i=0;j=code26.length;while (i < code26.length) {j=j-1;i=i+1;if (1==code26.charAt(j)) {checkbox_card_9sp[checkbox_card_9sp.length-i].checked=true;}}
    let code27 = parseInt(deta_code_split[26],36).toString(2);i=0;j=code27.length;while (i < code27.length) {j=j-1;if (1==code27.charAt(j)) {checkbox_card_10[i].checked=true;}i=i+1;}
    let code28 = parseInt(deta_code_split[27],36).toString(2);i=0;j=code28.length;while (i < code28.length) {j=j-1;i=i+1;if (1==code28.charAt(j)) {checkbox_card_10sp[checkbox_card_10sp.length-i].checked=true;}}
    let code29 = parseInt(deta_code_split[28],36).toString(2);i=0;j=code29.length;while (i < code29.length) {j=j-1;if (1==code29.charAt(j)) {checkbox_card_11[i].checked=true;}i=i+1;}
    let code30 = parseInt(deta_code_split[29],36).toString(2);i=0;j=code30.length;while (i < code30.length) {j=j-1;i=i+1;if (1==code30.charAt(j)) {checkbox_card_11sp[checkbox_card_11sp.length-i].checked=true;}}
    let code31 = parseInt(deta_code_split[30],36).toString(2);i=0;j=code31.length;while (i < code31.length) {j=j-1;if (1==code31.charAt(j)) {checkbox_card_12[i].checked=true;}i=i+1;}
    let code32 = parseInt(deta_code_split[31],36).toString(2);i=0;j=code32.length;while (i < code32.length) {j=j-1;i=i+1;if (1==code32.charAt(j)) {checkbox_card_12sp[checkbox_card_12sp.length-i].checked=true;}}


}











//デッキ生成//////////////////////////////////////////////
let box_hero = [];
let box_card = [];
let hero_deta ="";
let card_deta =[];
const result_hero = document.getElementById("result_hero");
const result_card1 = document.getElementById("result_card1");
const result_card2 = document.getElementById("result_card2");
const result_card3 = document.getElementById("result_card3");
const result_card4 = document.getElementById("result_card4");
const deckmake_btn = document.getElementById("deckmake_btn");

deckmake_btn.addEventListener('click',function(){
    deta_roll();
})

const deta_roll = function(){
    if (box_hero.length<1) {
        result_hero.textContent = "ヒーローを選択していません。";
    } else {
        hero_deta = box_hero.splice(Math.floor(Math.random()*box_hero.length),1);
        result_hero.textContent = hero_deta;
        box_hero.push(hero_deta);
    }
    if (box_card.length<3) {
        result_card1.textContent = "カードの選択枚数が不足しています。";
        result_card2.textContent = "";
        result_card3.textContent = "";
        result_card4.textContent = "";  
    } else {
        card_deta[0] = box_card.splice(Math.floor(Math.random()*box_card.length),1);
        card_deta[1] = box_card.splice(Math.floor(Math.random()*box_card.length),1);
        card_deta[2] = box_card.splice(Math.floor(Math.random()*box_card.length),1);
        card_deta[3] = box_card.splice(Math.floor(Math.random()*box_card.length),1);
        result_card1.textContent = card_deta[0];
        result_card2.textContent = card_deta[1];
        result_card3.textContent = card_deta[2];
        result_card4.textContent = card_deta[3];
        box_card.push(card_deta[0]);
        box_card.push(card_deta[1]);
        box_card.push(card_deta[2]);
        box_card.push(card_deta[3]);
    }




}




















const deta_set = function(){
    box_hero = [];
    i = 0;
    while (i < checkbox_attacker_nomal.length) {
        if (true == checkbox_attacker_nomal[i].checked) {
            box_hero.push(hero_attacker_nomal[i]);
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_attacker_special.length) {
        if (true == checkbox_attacker_special[i].checked) {
            box_hero.push(hero_attacker_special[i]);
        }
        i = i + 1;
    }
    i = 0;while (i < checkbox_gunner_nomal.length) {if (true == checkbox_gunner_nomal[i].checked) {box_hero.push(hero_gunner_nomal[i]);}i = i + 1;}
    i = 0;while (i < checkbox_gunner_special.length) {if (true == checkbox_gunner_special[i].checked) {box_hero.push(hero_gunner_special[i]);}i = i + 1;}
    i = 0;while (i < checkbox_tank_nomal.length) {if (true == checkbox_tank_nomal[i].checked) {box_hero.push(hero_tank_nomal[i]);}i = i + 1;}
    i = 0;while (i < checkbox_tank_special.length) {if (true == checkbox_tank_special[i].checked) {box_hero.push(hero_tank_special[i]);}i = i + 1;}
    i = 0;while (i < checkbox_sprinter_nomal.length) {if (true == checkbox_sprinter_nomal[i].checked) {box_hero.push(hero_sprinter_nomal[i]);}i = i + 1;}
    i = 0;while (i < checkbox_sprinter_special.length) {if (true == checkbox_sprinter_special[i].checked) {box_hero.push(hero_sprinter_special[i]);}i = i + 1;}

    box_card = [];

    i = 0;
    while (i < checkbox_card_1.length) {
        if (true == checkbox_card_1[i].checked) {
            box_card.push(card_list_1[i]);
        }
        i = i + 1;
    }
    i = 0;
    while (i < checkbox_card_1sp.length) {
        if (true == checkbox_card_1sp[i].checked) {
            box_card.push(card_list_1sp[i]);
        }
        i = i + 1;
    }
    i = 0;while (i < checkbox_card_2.length) {if (true == checkbox_card_2[i].checked) {box_card.push(card_list_2[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_2sp.length) {if (true == checkbox_card_2sp[i].checked) {box_card.push(card_list_2sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_3.length) {if (true == checkbox_card_3[i].checked) {box_card.push(card_list_3[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_3sp.length) {if (true == checkbox_card_3sp[i].checked) {box_card.push(card_list_3sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_4.length) {if (true == checkbox_card_4[i].checked) {box_card.push(card_list_4[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_4sp.length) {if (true == checkbox_card_4sp[i].checked) {box_card.push(card_list_4sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_5.length) {if (true == checkbox_card_5[i].checked) {box_card.push(card_list_5[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_5sp.length) {if (true == checkbox_card_5sp[i].checked) {box_card.push(card_list_5sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_6.length) {if (true == checkbox_card_6[i].checked) {box_card.push(card_list_6[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_6sp.length) {if (true == checkbox_card_6sp[i].checked) {box_card.push(card_list_6sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_7.length) {if (true == checkbox_card_7[i].checked) {box_card.push(card_list_7[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_7sp.length) {if (true == checkbox_card_7sp[i].checked) {box_card.push(card_list_7sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_8.length) {if (true == checkbox_card_8[i].checked) {box_card.push(card_list_8[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_8sp.length) {if (true == checkbox_card_8sp[i].checked) {box_card.push(card_list_8sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_9.length) {if (true == checkbox_card_9[i].checked) {box_card.push(card_list_9[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_9sp.length) {if (true == checkbox_card_9sp[i].checked) {box_card.push(card_list_9sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_10.length) {if (true == checkbox_card_10[i].checked) {box_card.push(card_list_10[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_10sp.length) {if (true == checkbox_card_10sp[i].checked) {box_card.push(card_list_10sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_11.length) {if (true == checkbox_card_11[i].checked) {box_card.push(card_list_11[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_11sp.length) {if (true == checkbox_card_11sp[i].checked) {box_card.push(card_list_11sp[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_12.length) {if (true == checkbox_card_12[i].checked) {box_card.push(card_list_12[i]);}i = i + 1;}
    i = 0;while (i < checkbox_card_12sp.length) {if (true == checkbox_card_12sp[i].checked) {box_card.push(card_list_12sp[i]);}i = i + 1;}

 
}
