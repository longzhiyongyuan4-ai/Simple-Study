let count = 0;

document.getElementById('btn').addEventListener('click', () => {
  count++;

  const messages = [
  ];

  // ★ 絵＋日本語＋英語の「正しいセット」を大量に登録（ここがバラエティの元）
  const baseItems = [
    { emoji: "🐶", jp: "犬", en: "Dog" },
{ emoji: "🐱", jp: "猫", en: "Cat" },
{ emoji: "🐭", jp: "ねずみ", en: "Mouse" },
{ emoji: "🐹", jp: "ハムスター", en: "Hamster" },
{ emoji: "🐰", jp: "うさぎ", en: "Rabbit" },
{ emoji: "🦊", jp: "きつね", en: "Fox" },
{ emoji: "🐻", jp: "くま", en: "Bear" },
{ emoji: "🐼", jp: "パンダ", en: "Panda" },
{ emoji: "🐨", jp: "コアラ", en: "Koala" },
{ emoji: "🐯", jp: "とら", en: "Tiger" },
{ emoji: "🦁", jp: "ライオン", en: "Lion" },
{ emoji: "🐮", jp: "うし", en: "Cow" },
{ emoji: "🐷", jp: "ぶた", en: "Pig" },
{ emoji: "🐸", jp: "かえる", en: "Frog" },
{ emoji: "🐵", jp: "さる", en: "Monkey" },
{ emoji: "🐔", jp: "にわとり", en: "Chicken" },
{ emoji: "🐧", jp: "ぺんぎん", en: "Penguin" },
{ emoji: "🐦", jp: "とり", en: "Bird" },
{ emoji: "🐤", jp: "ひよこ", en: "Chick" },
{ emoji: "🦆", jp: "あひる", en: "Duck" },
{ emoji: "🦅", jp: "わし", en: "Eagle" },
{ emoji: "🦉", jp: "ふくろう", en: "Owl" },
{ emoji: "🦇", jp: "こうもり", en: "Bat" },
{ emoji: "🐺", jp: "オオカミ", en: "Wolf" },
{ emoji: "🦄", jp: "ユニコーン", en: "Unicorn" },
{ emoji: "🐴", jp: "うま", en: "Horse" },
{ emoji: "🦓", jp: "しまうま", en: "Zebra" },
{ emoji: "🦌", jp: "しか", en: "Deer" },
{ emoji: "🐗", jp: "いのしし", en: "Boar" },
{ emoji: "🐑", jp: "ひつじ", en: "Sheep" },
{ emoji: "🐐", jp: "やぎ", en: "Goat" },
{ emoji: "🐪", jp: "らくだ", en: "Camel" },
{ emoji: "🐫", jp: "ふたこぶらくだ", en: "Bactrian Camel" },
{ emoji: "🦒", jp: "キリン", en: "Giraffe" },
{ emoji: "🐘", jp: "ぞう", en: "Elephant" },
{ emoji: "🦏", jp: "サイ", en: "Rhinoceros" },
{ emoji: "🦛", jp: "カバ", en: "Hippopotamus" },
{ emoji: "🐭", jp: "ねずみ", en: "Mouse" },
{ emoji: "🐁", jp: "ねずみ", en: "Mouse" },
{ emoji: "🐀", jp: "ラット", en: "Rat" },
{ emoji: "🦘", jp: "カンガルー", en: "Kangaroo" },
{ emoji: "🦙", jp: "アルパカ", en: "Alpaca" },
{ emoji: "🦥", jp: "ナマケモノ", en: "Sloth" },
{ emoji: "🦨", jp: "スカンク", en: "Skunk" },
{ emoji: "🦦", jp: "ラッコ", en: "Otter" },
{ emoji: "🦫", jp: "ビーバー", en: "Beaver" },
{ emoji: "🐿️", jp: "りす", en: "Squirrel" },
{ emoji: "🦔", jp: "はりねずみ", en: "Hedgehog" },
{ emoji: "🐉", jp: "ドラゴン", en: "Dragon" },
{ emoji: "🐲", jp: "ドラゴン", en: "Dragon" },
{ emoji: "🐍", jp: "へび", en: "Snake" },
{ emoji: "🦎", jp: "とかげ", en: "Lizard" },
{ emoji: "🐢", jp: "かめ", en: "Turtle" },
{ emoji: "🐊", jp: "わに", en: "Crocodile" },
{ emoji: "🦈", jp: "さめ", en: "Shark" },
{ emoji: "🐬", jp: "いるか", en: "Dolphin" },
{ emoji: "🐳", jp: "くじら", en: "Whale" },
{ emoji: "🐋", jp: "くじら", en: "Whale" },
{ emoji: "🦭", jp: "あざらし", en: "Seal" },
{ emoji: "🐙", jp: "たこ", en: "Octopus" },
{ emoji: "🦑", jp: "いか", en: "Squid" },
{ emoji: "🦐", jp: "えび", en: "Shrimp" },
{ emoji: "🦞", jp: "ロブスター", en: "Lobster" },
{ emoji: "🦀", jp: "かに", en: "Crab" },
{ emoji: "🐝", jp: "はち", en: "Bee" },
{ emoji: "🪰", jp: "はえ", en: "Fly" },
{ emoji: "🪱", jp: "みみず", en: "Worm" },
{ emoji: "🐛", jp: "いもむし", en: "Caterpillar" },
{ emoji: "🦋", jp: "ちょう", en: "Butterfly" },
{ emoji: "🐌", jp: "かたつむり", en: "Snail" },
{ emoji: "🐞", jp: "てんとうむし", en: "Ladybug" },
{ emoji: "🐜", jp: "あり", en: "Ant" },
{ emoji: "🕷️", jp: "くも", en: "Spider" },
{ emoji: "🕸️", jp: "くもの巣", en: "Spider Web" },
{ emoji: "🦂", jp: "さそり", en: "Scorpion" },
{ emoji: "🦟", jp: "か", en: "Mosquito" },
{ emoji: "🦠", jp: "ばいきん", en: "Microbe" },
{ emoji: "🐾", jp: "あしあと", en: "Paw Prints" },
{ emoji: "🦚", jp: "くじゃく", en: "Peacock" },
{ emoji: "🦜", jp: "オウム", en: "Parrot" },
{ emoji: "🦢", jp: "はくちょう", en: "Swan" },
{ emoji: "🦩", jp: "フラミンゴ", en: "Flamingo" },
{ emoji: "🦃", jp: "しちめんちょう", en: "Turkey" },
{ emoji: "🦝", jp: "アライグマ", en: "Raccoon" },
{ emoji: "🦡", jp: "アナグマ", en: "Badger" },
{ emoji: "🐕", jp: "いぬ", en: "Dog" },
{ emoji: "🐈", jp: "ねこ", en: "Cat" },
{ emoji: "🐓", jp: "おんどり", en: "Rooster" },
{ emoji: "🦃", jp: "ターキー", en: "Turkey" },
{ emoji: "🐎", jp: "うま", en: "Horse" },
{ emoji: "🐂", jp: "おうし", en: "Ox" },
{ emoji: "🐃", jp: "すいぎゅう", en: "Buffalo" },
{ emoji: "🐄", jp: "めうし", en: "Cow" },
{ emoji: "🍎", jp: "りんご", en: "Apple" },
{ emoji: "🍏", jp: "青りんご", en: "Green Apple" },
{ emoji: "🍐", jp: "なし", en: "Pear" },
{ emoji: "🍊", jp: "みかん", en: "Orange" },
{ emoji: "🍋", jp: "レモン", en: "Lemon" },
{ emoji: "🍌", jp: "バナナ", en: "Banana" },
{ emoji: "🍉", jp: "すいか", en: "Watermelon" },
{ emoji: "🍇", jp: "ぶどう", en: "Grapes" },
{ emoji: "🍓", jp: "いちご", en: "Strawberry" },
{ emoji: "🫐", jp: "ブルーベリー", en: "Blueberry" },
{ emoji: "🍒", jp: "さくらんぼ", en: "Cherry" },
{ emoji: "🍑", jp: "もも", en: "Peach" },
{ emoji: "🥭", jp: "マンゴー", en: "Mango" },
{ emoji: "🍍", jp: "パイナップル", en: "Pineapple" },
{ emoji: "🥥", jp: "ココナッツ", en: "Coconut" },
{ emoji: "🥝", jp: "キウイ", en: "Kiwi" },

{ emoji: "🍅", jp: "トマト", en: "Tomato" },
{ emoji: "🍆", jp: "なす", en: "Eggplant" },
{ emoji: "🥑", jp: "アボカド", en: "Avocado" },
{ emoji: "🥦", jp: "ブロッコリー", en: "Broccoli" },
{ emoji: "🥬", jp: "はくさい", en: "Chinese Cabbage" },
{ emoji: "🥒", jp: "きゅうり", en: "Cucumber" },
{ emoji: "🌽", jp: "とうもろこし", en: "Corn" },
{ emoji: "🥕", jp: "にんじん", en: "Carrot" },
{ emoji: "🧅", jp: "たまねぎ", en: "Onion" },
{ emoji: "🧄", jp: "にんにく", en: "Garlic" },
{ emoji: "🥔", jp: "じゃがいも", en: "Potato" },

{ emoji: "🍞", jp: "パン", en: "Bread" },
{ emoji: "🥐", jp: "クロワッサン", en: "Croissant" },
{ emoji: "🥖", jp: "フランスパン", en: "Baguette" },
{ emoji: "🫓", jp: "フラットブレッド", en: "Flatbread" },
{ emoji: "🥨", jp: "プレッツェル", en: "Pretzel" },
{ emoji: "🥯", jp: "ベーグル", en: "Bagel" },

{ emoji: "🧀", jp: "チーズ", en: "Cheese" },
{ emoji: "🥚", jp: "たまご", en: "Egg" },
{ emoji: "🍳", jp: "めだまやき", en: "Fried Egg" },

{ emoji: "🥞", jp: "パンケーキ", en: "Pancake" },
{ emoji: "🧇", jp: "ワッフル", en: "Waffle" },

{ emoji: "🍔", jp: "ハンバーガー", en: "Hamburger" },
{ emoji: "🌭", jp: "ホットドッグ", en: "Hot Dog" },
{ emoji: "🍕", jp: "ピザ", en: "Pizza" },
{ emoji: "🥪", jp: "サンドイッチ", en: "Sandwich" },
{ emoji: "🌮", jp: "タコス", en: "Taco" },
{ emoji: "🌯", jp: "ブリトー", en: "Burrito" },
{ emoji: "🥙", jp: "ケバブ", en: "Kebab" },
{ emoji: "🍝", jp: "パスタ", en: "Pasta" },
{ emoji: "🍜", jp: "ラーメン", en: "Ramen" },
{ emoji: "🍲", jp: "スープ", en: "Soup" },
{ emoji: "🍛", jp: "カレー", en: "Curry" },
{ emoji: "🍣", jp: "すし", en: "Sushi" },
{ emoji: "🍱", jp: "おべんとう", en: "Bento" },
{ emoji: "🍙", jp: "おにぎり", en: "Rice Ball" },
{ emoji: "🍚", jp: "ごはん", en: "Cooked Rice" },
{ emoji: "🍘", jp: "せんべい", en: "Rice Cracker" },
{ emoji: "🍢", jp: "おでん", en: "Oden" },
{ emoji: "🍡", jp: "だんご", en: "Dango" },
{ emoji: "🥟", jp: "ぎょうざ", en: "Dumpling" },
{ emoji: "🍤", jp: "えびてん", en: "Tempura Shrimp" },
{ emoji: "🍗", jp: "チキン", en: "Chicken" },
{ emoji: "🍖", jp: "スペアリブ", en: "Ribs" },

{ emoji: "🍦", jp: "ソフトクリーム", en: "Soft Ice Cream" },
{ emoji: "🍧", jp: "かき氷", en: "Shaved Ice" },
{ emoji: "🍨", jp: "アイスクリーム", en: "Ice Cream" },
{ emoji: "🍩", jp: "ドーナツ", en: "Donut" },
{ emoji: "🍪", jp: "クッキー", en: "Cookie" },
{ emoji: "🎂", jp: "ケーキ", en: "Cake" },
{ emoji: "🍰", jp: "ショートケーキ", en: "Shortcake" },
{ emoji: "🧁", jp: "カップケーキ", en: "Cupcake" },
{ emoji: "🥧", jp: "パイ", en: "Pie" },
{ emoji: "🍫", jp: "チョコレート", en: "Chocolate" },
{ emoji: "🍬", jp: "キャンディー", en: "Candy" },
{ emoji: "🍭", jp: "ペロペロキャンディー", en: "Lollipop" },
{ emoji: "🍮", jp: "プリン", en: "Pudding" },
{ emoji: "🍯", jp: "はちみつ", en: "Honey" },

{ emoji: "☕", jp: "コーヒー", en: "Coffee" },
{ emoji: "🍵", jp: "おちゃ", en: "Tea" },
{ emoji: "🧋", jp: "タピオカ", en: "Bubble Tea" },
{ emoji: "🥤", jp: "ジュース", en: "Juice" },
{ emoji: "🧃", jp: "ジュースパック", en: "Juice Box" },
{ emoji: "🍺", jp: "ビール", en: "Beer" },
{ emoji: "🍻", jp: "かんぱい", en: "Cheers" },
{ emoji: "🍷", jp: "ワイン", en: "Wine" },
{ emoji: "🍸", jp: "カクテル", en: "Cocktail" },
{ emoji: "🍹", jp: "トロピカルドリンク", en: "Tropical Drink" },
{ emoji: "🥛", jp: "ミルク", en: "Milk" },
{ emoji: "🍼", jp: "ほにゅうびん", en: "Baby Bottle" },
{ emoji: "🚗", jp: "車", en: "Car" },
{ emoji: "🚙", jp: "SUV", en: "SUV" },
{ emoji: "🚕", jp: "タクシー", en: "Taxi" },
{ emoji: "🛺", jp: "オートリキシャ", en: "Auto Rickshaw" },
{ emoji: "🚓", jp: "パトカー", en: "Police Car" },
{ emoji: "🚑", jp: "救急車", en: "Ambulance" },
{ emoji: "🚒", jp: "消防車", en: "Fire Truck" },
{ emoji: "🚐", jp: "ミニバン", en: "Minivan" },
{ emoji: "🚌", jp: "バス", en: "Bus" },
{ emoji: "🚍", jp: "路線バス", en: "City Bus" },
{ emoji: "🚎", jp: "トロリーバス", en: "Trolleybus" },

{ emoji: "🚚", jp: "トラック", en: "Truck" },
{ emoji: "🚛", jp: "大型トラック", en: "Semi Truck" },
{ emoji: "🚜", jp: "トラクター", en: "Tractor" },
{ emoji: "🏎️", jp: "レーシングカー", en: "Race Car" },
{ emoji: "🚲", jp: "自転車", en: "Bicycle" },
{ emoji: "🛴", jp: "キックボード", en: "Scooter" },
{ emoji: "🛵", jp: "スクーター", en: "Motor Scooter" },
{ emoji: "🏍️", jp: "バイク", en: "Motorcycle" },

{ emoji: "🚃", jp: "電車", en: "Train Car" },
{ emoji: "🚄", jp: "新幹線", en: "Bullet Train" },
{ emoji: "🚅", jp: "高速鉄道", en: "High-Speed Train" },
{ emoji: "🚆", jp: "列車", en: "Train" },
{ emoji: "🚇", jp: "地下鉄", en: "Subway" },
{ emoji: "🚈", jp: "ライトレール", en: "Light Rail" },
{ emoji: "🚉", jp: "駅", en: "Station" },
{ emoji: "🚊", jp: "路面電車", en: "Tram" },

{ emoji: "✈️", jp: "ひこうき", en: "Airplane" },
{ emoji: "🛫", jp: "離陸", en: "Departure" },
{ emoji: "🛬", jp: "着陸", en: "Arrival" },
{ emoji: "🛩️", jp: "小型飛行機", en: "Small Airplane" },
{ emoji: "🚁", jp: "ヘリコプター", en: "Helicopter" },
{ emoji: "🛸", jp: "UFO", en: "UFO" },

{ emoji: "🚀", jp: "ロケット", en: "Rocket" },
{ emoji: "🛰️", jp: "人工衛星", en: "Satellite" },
{ emoji: "🛸", jp: "宇宙船", en: "Spaceship" },

{ emoji: "⛵", jp: "ヨット", en: "Sailboat" },
{ emoji: "🚤", jp: "モーターボート", en: "Speedboat" },
{ emoji: "🛥️", jp: "ボート", en: "Boat" },
{ emoji: "🛳️", jp: "客船", en: "Passenger Ship" },
{ emoji: "⛴️", jp: "フェリー", en: "Ferry" },
{ emoji: "🚢", jp: "大型船", en: "Ship" },
{ emoji: "🛶", jp: "カヌー", en: "Canoe" },
{ emoji: "🛟", jp: "救命浮き輪", en: "Lifebuoy" },

{ emoji: "🛤️", jp: "線路", en: "Railway" },
{ emoji: "🛣️", jp: "道路", en: "Highway" },

{ emoji: "🛞", jp: "タイヤ", en: "Wheel" },
{ emoji: "⚓", jp: "いかり", en: "Anchor" },

{ emoji: "🧭", jp: "コンパス", en: "Compass" },
{ emoji: "🗺️", jp: "ちず", en: "Map" },

{ emoji: "🚧", jp: "工事中", en: "Construction" },
{ emoji: "🚦", jp: "信号", en: "Traffic Light" },
{ emoji: "🚥", jp: "横向き信号", en: "Horizontal Traffic Light" },
{ emoji: "🚏", jp: "バス停", en: "Bus Stop" },

{ emoji: "🛂", jp: "入国審査", en: "Passport Control" },
{ emoji: "🛄", jp: "手荷物受取", en: "Baggage Claim" },
{ emoji: "🛃", jp: "税関", en: "Customs" },

{ emoji: "🛅", jp: "手荷物預かり", en: "Left Luggage" },

{ emoji: "🛗", jp: "エレベーター", en: "Elevator" },
{ emoji: "🛝", jp: "すべり台", en: "Slide" },

{ emoji: "🛞", jp: "ホイール", en: "Wheel" },
{ emoji: "🛠️", jp: "工具", en: "Tools" },

{ emoji: "🧱", jp: "ブロック", en: "Brick" },
{ emoji: "⚙️", jp: "ギア", en: "Gear" },

{ emoji: "🛢️", jp: "オイルタンク", en: "Oil Drum" },
{ emoji: "⛽", jp: "ガソリンスタンド", en: "Fuel Pump" },

{ emoji: "🚨", jp: "サイレン", en: "Siren" },
{ emoji: "🚩", jp: "旗", en: "Flag" },

{ emoji: "🛡️", jp: "シールド", en: "Shield" },

{ emoji: "🧨", jp: "ばくだん", en: "Explosive" },
{ emoji: "💣", jp: "爆弾", en: "Bomb" },

{ emoji: "🪂", jp: "パラシュート", en: "Parachute" },
{ emoji: "🪁", jp: "たこ", en: "Kite" },

{ emoji: "🛷", jp: "そり", en: "Sled" },
{ emoji: "⛷️", jp: "スキー", en: "Ski" },
{ emoji: "🏂", jp: "スノーボード", en: "Snowboard" },

{ emoji: "🚠", jp: "ロープウェイ", en: "Cable Car" },
{ emoji: "🚡", jp: "ゴンドラ", en: "Gondola Lift" },

{ emoji: "🛰️", jp: "衛星", en: "Satellite" },
{ emoji: "🛸", jp: "宇宙船", en: "Spaceship" },
{ emoji: "☀️", jp: "はれ", en: "Sunny" },
{ emoji: "🌤️", jp: "晴れ時々くもり", en: "Mostly Sunny" },
{ emoji: "⛅", jp: "くもり", en: "Partly Cloudy" },
{ emoji: "🌥️", jp: "くもり時々晴れ", en: "Mostly Cloudy" },
{ emoji: "☁️", jp: "くもり", en: "Cloudy" },

{ emoji: "🌦️", jp: "にわか雨", en: "Rain Shower" },
{ emoji: "🌧️", jp: "あめ", en: "Rain" },
{ emoji: "⛈️", jp: "らいめい", en: "Thunderstorm" },
{ emoji: "🌩️", jp: "雷", en: "Lightning" },
{ emoji: "🌨️", jp: "ゆき", en: "Snow" },
{ emoji: "❄️", jp: "ゆきのけっしょう", en: "Snowflake" },
{ emoji: "🌬️", jp: "かぜ", en: "Wind" },
{ emoji: "🌪️", jp: "たつまき", en: "Tornado" },
{ emoji: "🌫️", jp: "きり", en: "Fog" },
{ emoji: "🌈", jp: "にじ", en: "Rainbow" },

{ emoji: "🔥", jp: "ほのお", en: "Fire" },
{ emoji: "💧", jp: "しずく", en: "Droplet" },
{ emoji: "🌊", jp: "なみ", en: "Wave" },
{ emoji: "🌡️", jp: "たいおんけい", en: "Thermometer" },

{ emoji: "🌍", jp: "ちきゅう", en: "Earth" },
{ emoji: "🌎", jp: "ちきゅう", en: "Earth" },
{ emoji: "🌏", jp: "ちきゅう", en: "Earth" },

{ emoji: "🌋", jp: "かざん", en: "Volcano" },
{ emoji: "⛰️", jp: "やま", en: "Mountain" },
{ emoji: "🏔️", jp: "ゆきやま", en: "Snowy Mountain" },
{ emoji: "🗻", jp: "ふじさん", en: "Mount Fuji" },

{ emoji: "🏕️", jp: "キャンプ", en: "Camping" },
{ emoji: "🏖️", jp: "ビーチ", en: "Beach" },
{ emoji: "🏜️", jp: "さばく", en: "Desert" },
{ emoji: "🏝️", jp: "しま", en: "Island" },
{ emoji: "🏞️", jp: "けしき", en: "National Park" },

{ emoji: "🌲", jp: "もり", en: "Forest" },
{ emoji: "🌳", jp: "き", en: "Tree" },
{ emoji: "🌴", jp: "やしのき", en: "Palm Tree" },
{ emoji: "🌵", jp: "サボテン", en: "Cactus" },

{ emoji: "🌱", jp: "め", en: "Seedling" },
{ emoji: "🌿", jp: "はっぱ", en: "Herb" },
{ emoji: "☘️", jp: "クローバー", en: "Clover" },
{ emoji: "🍀", jp: "よつば", en: "Four Leaf Clover" },

{ emoji: "🍁", jp: "もみじ", en: "Maple Leaf" },
{ emoji: "🍂", jp: "おちば", en: "Fallen Leaf" },
{ emoji: "🍃", jp: "はっぱ", en: "Leaf Fluttering" },

{ emoji: "🌸", jp: "さくら", en: "Cherry Blossom" },
{ emoji: "🌼", jp: "はな", en: "Flower" },
{ emoji: "🌻", jp: "ひまわり", en: "Sunflower" },
{ emoji: "🌺", jp: "ハイビスカス", en: "Hibiscus" },
{ emoji: "🌹", jp: "ばら", en: "Rose" },

{ emoji: "🌖", jp: "つき", en: "Moon" },
{ emoji: "🌕", jp: "まんげつ", en: "Full Moon" },
{ emoji: "🌙", jp: "つき", en: "Crescent Moon" },
{ emoji: "⭐", jp: "ほし", en: "Star" },
{ emoji: "🌟", jp: "きらきら", en: "Glowing Star" },
{ emoji: "✨", jp: "きらめき", en: "Sparkles" },

{ emoji: "🌌", jp: "ぎんが", en: "Milky Way" },
{ emoji: "🪐", jp: "わくせい", en: "Planet" },

{ emoji: "🌠", jp: "ながれぼし", en: "Shooting Star" },
{ emoji: "☄️", jp: "すいせい", en: "Comet" },

{ emoji: "💥", jp: "ばくはつ", en: "Explosion" },
{ emoji: "💨", jp: "ダッシュ", en: "Dash" },

{ emoji: "🌀", jp: "たいふう", en: "Cyclone" },

{ emoji: "🌁", jp: "きりのまち", en: "Foggy" },
{ emoji: "🌉", jp: "よるのはし", en: "Night Bridge" },

{ emoji: "🌇", jp: "ゆうひ", en: "Sunset" },
{ emoji: "🌅", jp: "ひので", en: "Sunrise" },

{ emoji: "🌆", jp: "ゆうやけ", en: "Dusk" },
{ emoji: "🏙️", jp: "まち", en: "Cityscape" },

{ emoji: "🌃", jp: "よるのまち", en: "Night City" },

{ emoji: "🪵", jp: "きのえだ", en: "Wood" },
{ emoji: "🪨", jp: "いし", en: "Rock" },
{ emoji: "⛏️", jp: "つるはし", en: "Pickaxe" },
{ emoji: "🪹", jp: "からのす", en: "Empty Nest" },
{ emoji: "🪺", jp: "たまごのす", en: "Nest with Eggs" },
{ emoji: "🪸", jp: "さんご", en: "Coral" },
{ emoji: "🪼", jp: "くらげ", en: "Jellyfish" },
{ emoji: "🦀", jp: "かに", en: "Crab" },
{ emoji: "🐚", jp: "かいがら", en: "Shell" },
{ emoji: "🌭", jp: "ホットスプリング", en: "Hot Spring" },
{ emoji: "♨️", jp: "おんせん", en: "Hot Spring" },
{ emoji: "🪻", jp: "アイリス", en: "Iris" },
{ emoji: "🌾", jp: "いね", en: "Rice Plant" },
{ emoji: "🪴", jp: "しょくぶつ", en: "Potted Plant" },
{ emoji: "🧊", jp: "こおり", en: "Ice" },
{ emoji: "🪹", jp: "からの巣", en: "Empty Nest" },
{ emoji: "🪺", jp: "卵の巣", en: "Nest with Eggs" },
{ emoji: "😀", jp: "にこにこ", en: "Grinning Face" },
{ emoji: "😃", jp: "にっこり", en: "Smiling Face" },
{ emoji: "😄", jp: "えがお", en: "Smiling Face with Eyes" },
{ emoji: "😁", jp: "にやにや", en: "Beaming Face" },
{ emoji: "😆", jp: "わらう", en: "Laughing" },
{ emoji: "😅", jp: "あせ", en: "Sweat Smile" },
{ emoji: "🤣", jp: "大笑い", en: "Rolling Laugh" },
{ emoji: "😂", jp: "わらいなみだ", en: "Laughing Tears" },

{ emoji: "🙂", jp: "にっこり", en: "Slight Smile" },
{ emoji: "😊", jp: "てれわらい", en: "Blush Smile" },
{ emoji: "😇", jp: "てんし", en: "Angel" },

{ emoji: "😉", jp: "ウィンク", en: "Wink" },
{ emoji: "😌", jp: "ほっとする", en: "Relieved" },
{ emoji: "😍", jp: "ハートめ", en: "Heart Eyes" },
{ emoji: "🥰", jp: "あいされてる", en: "Loved" },
{ emoji: "😘", jp: "ちゅー", en: "Kiss" },
{ emoji: "😗", jp: "キス", en: "Kissing" },
{ emoji: "😙", jp: "キスえがお", en: "Kissing Smile" },
{ emoji: "😚", jp: "キスめをとじる", en: "Kissing Closed Eyes" },

{ emoji: "😋", jp: "おいしい", en: "Yummy" },
{ emoji: "😛", jp: "べー", en: "Tongue Out" },
{ emoji: "😜", jp: "ウィンクべー", en: "Wink Tongue" },
{ emoji: "🤪", jp: "へんがお", en: "Crazy Face" },
{ emoji: "😝", jp: "べーえがお", en: "Squint Tongue" },

{ emoji: "🤑", jp: "おかねだいすき", en: "Money Face" },
{ emoji: "🤗", jp: "ハグ", en: "Hugging" },
{ emoji: "🤭", jp: "てでくちをおさえる", en: "Hand Over Mouth" },
{ emoji: "🤫", jp: "しーっ", en: "Shushing" },
{ emoji: "🤔", jp: "かんがえる", en: "Thinking" },

{ emoji: "🤐", jp: "くちをとじる", en: "Zipper Mouth" },
{ emoji: "😐", jp: "むすっと", en: "Neutral Face" },
{ emoji: "😑", jp: "むすっと2", en: "Expressionless" },
{ emoji: "😶", jp: "くちなし", en: "No Mouth" },

{ emoji: "🙄", jp: "めをまわす", en: "Eye Roll" },
{ emoji: "😏", jp: "にやり", en: "Smirk" },
{ emoji: "😒", jp: "ふきげん", en: "Unamused" },
{ emoji: "😞", jp: "しょんぼり", en: "Disappointed" },
{ emoji: "😔", jp: "しょんぼり2", en: "Pensive" },

{ emoji: "😟", jp: "しんぱい", en: "Worried" },
{ emoji: "😕", jp: "こんがらがる", en: "Confused" },
{ emoji: "🙁", jp: "かなしい", en: "Slight Frown" },
{ emoji: "☹️", jp: "かなしい2", en: "Frowning Face" },

{ emoji: "😣", jp: "くるしい", en: "Persevering" },
{ emoji: "😖", jp: "つらい", en: "Confounded" },
{ emoji: "😫", jp: "つかれた", en: "Tired" },
{ emoji: "😩", jp: "ぐったり", en: "Weary" },

{ emoji: "🥺", jp: "うるうる", en: "Pleading" },
{ emoji: "😢", jp: "なみだ", en: "Cry" },
{ emoji: "😭", jp: "大泣き", en: "Loud Cry" },

{ emoji: "😤", jp: "ぷんぷん", en: "Angry Steam" },
{ emoji: "😠", jp: "おこる", en: "Angry" },
{ emoji: "😡", jp: "げきおこ", en: "Pouting" },

{ emoji: "🤬", jp: "どぎついおこり", en: "Cursing" },
{ emoji: "🤯", jp: "あたまがはじける", en: "Mind Blown" },

{ emoji: "😱", jp: "きょうふ", en: "Scream" },
{ emoji: "😨", jp: "こわい", en: "Fearful" },
{ emoji: "😰", jp: "あせる", en: "Anxious" },
{ emoji: "😥", jp: "がっかり", en: "Sad but Relieved" },
{ emoji: "😓", jp: "あせ", en: "Sweat" },

{ emoji: "🤤", jp: "よだれ", en: "Drooling" },
{ emoji: "😴", jp: "ねむい", en: "Sleeping" },
{ emoji: "😪", jp: "ねむけ", en: "Sleepy" },

{ emoji: "🤢", jp: "きもちわるい", en: "Nauseated" },
{ emoji: "🤮", jp: "はく", en: "Vomiting" },
{ emoji: "🤧", jp: "くしゃみ", en: "Sneezing" },
{ emoji: "🤒", jp: "ねつ", en: "Sick" },
{ emoji: "🤕", jp: "けが", en: "Injured" },

{ emoji: "🧐", jp: "けんさ", en: "Monocle" },
{ emoji: "🤓", jp: "がりべん", en: "Nerd" },
{ emoji: "😎", jp: "サングラス", en: "Cool" },

{ emoji: "💡", jp: "ひらめき", en: "Light Bulb" },
{ emoji: "🔦", jp: "ライト", en: "Flashlight" },
{ emoji: "🕯️", jp: "ろうそく", en: "Candle" },

{ emoji: "🔑", jp: "かぎ", en: "Key" },
{ emoji: "🗝️", jp: "こだいのかぎ", en: "Old Key" },

{ emoji: "🔨", jp: "ハンマー", en: "Hammer" },
{ emoji: "🪓", jp: "おの", en: "Axe" },
{ emoji: "🔧", jp: "レンチ", en: "Wrench" },
{ emoji: "🔩", jp: "ナット", en: "Bolt" },
{ emoji: "⚙️", jp: "ギア", en: "Gear" },

{ emoji: "🪛", jp: "ドライバー", en: "Screwdriver" },
{ emoji: "🪚", jp: "のこぎり", en: "Saw" },

{ emoji: "🧰", jp: "どうぐばこ", en: "Toolbox" },
{ emoji: "🧲", jp: "じしゃく", en: "Magnet" },

{ emoji: "📱", jp: "スマホ", en: "Smartphone" },
{ emoji: "💻", jp: "パソコン", en: "Laptop" },
{ emoji: "🖥️", jp: "デスクトップ", en: "Desktop" },
{ emoji: "🖨️", jp: "プリンター", en: "Printer" },

{ emoji: "⌨️", jp: "キーボード", en: "Keyboard" },
{ emoji: "🖱️", jp: "マウス", en: "Mouse" },

{ emoji: "📷", jp: "カメラ", en: "Camera" },
{ emoji: "📸", jp: "シャッター", en: "Camera Flash" },
{ emoji: "🎥", jp: "ビデオカメラ", en: "Video Camera" },

{ emoji: "📺", jp: "テレビ", en: "Television" },
{ emoji: "📻", jp: "ラジオ", en: "Radio" },

{ emoji: "🎧", jp: "ヘッドホン", en: "Headphones" },
{ emoji: "🎤", jp: "マイク", en: "Microphone" },
{ emoji: "🎼", jp: "おんがく", en: "Music" },

{ emoji: "📚", jp: "ほん", en: "Books" },
{ emoji: "📖", jp: "よむ", en: "Open Book" },
{ emoji: "📝", jp: "メモ", en: "Memo" },
{ emoji: "✏️", jp: "えんぴつ", en: "Pencil" },
{ emoji: "🖊️", jp: "ペン", en: "Pen" },
{ emoji: "🖌️", jp: "ブラシ", en: "Paintbrush" },
{ emoji: "🖍️", jp: "クレヨン", en: "Crayon" },

{ emoji: "📦", jp: "はこ", en: "Box" },
{ emoji: "🎁", jp: "プレゼント", en: "Gift" },
{ emoji: "🛍️", jp: "ショッピングバッグ", en: "Shopping Bags" },

{ emoji: "💰", jp: "おかね", en: "Money Bag" },
{ emoji: "💸", jp: "おかねがとぶ", en: "Money Flying" },
{ emoji: "💳", jp: "カード", en: "Credit Card" },

{ emoji: "🧸", jp: "ぬいぐるみ", en: "Teddy Bear" },
{ emoji: "🎲", jp: "さいころ", en: "Dice" },
{ emoji: "🧩", jp: "パズル", en: "Puzzle" },
{ emoji: "♟️", jp: "チェス", en: "Chess Piece" },
{ emoji: "🎸", jp: "ギター", en: "Guitar" },
{ emoji: "🎹", jp: "ピアノ", en: "Piano" },
{ emoji: "🥁", jp: "ドラム", en: "Drum" },
{ emoji: "🎺", jp: "トランペット", en: "Trumpet" },
{ emoji: "🎷", jp: "サックス", en: "Saxophone" },
{ emoji: "🎻", jp: "バイオリン", en: "Violin" },
{ emoji: "🪕", jp: "バンジョー", en: "Banjo" },
{ emoji: "🪘", jp: "たいこ", en: "Drum" },
{ emoji: "🪗", jp: "アコーディオン", en: "Accordion" },
{ emoji: "🎤", jp: "マイク", en: "Microphone" },
{ emoji: "🎧", jp: "ヘッドホン", en: "Headphones" },
{ emoji: "📯", jp: "ほらがい", en: "Horn" },
{ emoji: "🔔", jp: "ベル", en: "Bell" },
{ emoji: "🛎️", jp: "サービスベル", en: "Service Bell" },
{ emoji: "🎼", jp: "おんがく", en: "Music Score" },
{ emoji: "🎵", jp: "おんぷ", en: "Music Note" },
{ emoji: "🎶", jp: "おんぷ2", en: "Music Notes" },
{ emoji: "🎙️", jp: "スタジオマイク", en: "Studio Microphone" },
{ emoji: "📻", jp: "ラジオ", en: "Radio" },
{ emoji: "🎚️", jp: "スライダー", en: "Level Slider" },
{ emoji: "🎛️", jp: "つまみ", en: "Control Knobs" },
{ emoji: "🪇", jp: "マラカス", en: "Maracas" },
{ emoji: "🪈", jp: "フルート", en: "Flute" },
{ emoji: "🪕", jp: "バンジョー", en: "Banjo" },
{ emoji: "🎺", jp: "トランペット", en: "Trumpet" },
{ emoji: "🎷", jp: "サックス", en: "Saxophone" },
{ emoji: "🎻", jp: "バイオリン", en: "Violin" },
{ emoji: "🪗", jp: "アコーディオン", en: "Accordion" },
{ emoji: "🥁", jp: "ドラム", en: "Drum" },
{ emoji: "🎸", jp: "ギター", en: "Guitar" },
{ emoji: "🎹", jp: "ピアノ", en: "Piano" },
{ emoji: "🎤", jp: "マイク", en: "Microphone" },
{ emoji: "🎧", jp: "ヘッドホン", en: "Headphones" },
{ emoji: "📯", jp: "ほらがい", en: "Horn" },
{ emoji: "🔔", jp: "ベル", en: "Bell" },
{ emoji: "🛎️", jp: "サービスベル", en: "Service Bell" },
{ emoji: "🎼", jp: "おんがく", en: "Music Score" },
{ emoji: "🎵", jp: "おんぷ", en: "Music Note" },
{ emoji: "🎶", jp: "おんぷ2", en: "Music Notes" },
{ emoji: "🎙️", jp: "スタジオマイク", en: "Studio Microphone" },
{ emoji: "📻", jp: "ラジオ", en: "Radio" },
{ emoji: "🎚️", jp: "スライダー", en: "Level Slider" },
{ emoji: "🎛️", jp: "つまみ", en: "Control Knobs" },
{ emoji: "🪇", jp: "マラカス", en: "Maracas" },
{ emoji: "🪈", jp: "フルート", en: "Flute" },
{ emoji: "🪘", jp: "たいこ", en: "Drum" },
{ emoji: "🪗", jp: "アコーディオン", en: "Accordion" },
{ emoji: "🪕", jp: "バンジョー", en: "Banjo" },
{ emoji: "🎺", jp: "トランペット", en: "Trumpet" },
{ emoji: "🎷", jp: "サックス", en: "Saxophone" },
{ emoji: "🏀", jp: "バスケットボール", en: "Basketball" },
{ emoji: "🏈", jp: "アメフト", en: "American Football" },
{ emoji: "⚾", jp: "やきゅう", en: "Baseball" },
{ emoji: "🥎", jp: "ソフトボール", en: "Softball" },
{ emoji: "🎾", jp: "テニス", en: "Tennis" },
{ emoji: "🏐", jp: "バレーボール", en: "Volleyball" },
{ emoji: "🏉", jp: "ラグビー", en: "Rugby" },
{ emoji: "🎱", jp: "ビリヤード", en: "Billiards" },
{ emoji: "🏓", jp: "ピンポン", en: "Table Tennis" },
{ emoji: "🏸", jp: "バドミントン", en: "Badminton" },
{ emoji: "🥍", jp: "ラクロス", en: "Lacrosse" },
{ emoji: "🥅", jp: "ゴール", en: "Goal Net" },
{ emoji: "⛳", jp: "ゴルフ", en: "Golf" },
{ emoji: "🏹", jp: "アーチェリー", en: "Archery" },
{ emoji: "🥊", jp: "ボクシング", en: "Boxing" },
{ emoji: "🥋", jp: "じゅうどう", en: "Judo" },
{ emoji: "🤼‍♂️", jp: "レスリング", en: "Wrestling" },
{ emoji: "🤼‍♀️", jp: "レスリング", en: "Wrestling" },
{ emoji: "🤸‍♂️", jp: "たいそう", en: "Gymnastics" },
{ emoji: "🤸‍♀️", jp: "たいそう", en: "Gymnastics" },
{ emoji: "⛸️", jp: "スケート", en: "Ice Skating" },
{ emoji: "🛼", jp: "ローラースケート", en: "Roller Skate" },
{ emoji: "🛹", jp: "スケボー", en: "Skateboard" },
{ emoji: "🚴‍♂️", jp: "じてんしゃ", en: "Cycling" },
{ emoji: "🚴‍♀️", jp: "じてんしゃ", en: "Cycling" },
{ emoji: "🚵‍♂️", jp: "マウンテンバイク", en: "Mountain Biking" },
{ emoji: "🚵‍♀️", jp: "マウンテンバイク", en: "Mountain Biking" },
{ emoji: "🏊‍♂️", jp: "すいえい", en: "Swimming" },
{ emoji: "🏊‍♀️", jp: "すいえい", en: "Swimming" },
{ emoji: "🤽‍♂️", jp: "すいちゅうハンドボール", en: "Water Polo" },
{ emoji: "🤽‍♀️", jp: "すいちゅうハンドボール", en: "Water Polo" },
{ emoji: "🏄‍♂️", jp: "サーフィン", en: "Surfing" },
{ emoji: "🏄‍♀️", jp: "サーフィン", en: "Surfing" },
{ emoji: "🚣‍♂️", jp: "ボートこぎ", en: "Rowing" },
{ emoji: "🚣‍♀️", jp: "ボートこぎ", en: "Rowing" },
{ emoji: "🧗‍♂️", jp: "ロッククライミング", en: "Climbing" },
{ emoji: "🧗‍♀️", jp: "ロッククライミング", en: "Climbing" },
{ emoji: "🏇", jp: "じょうば", en: "Horse Racing" },
{ emoji: "🤺", jp: "フェンシング", en: "Fencing" },
{ emoji: "🏂", jp: "スノーボード", en: "Snowboarding" },
{ emoji: "⛷️", jp: "スキー", en: "Skiing" },
{ emoji: "🛷", jp: "そり", en: "Sledding" },
{ emoji: "🥌", jp: "カーリング", en: "Curling" },
{ emoji: "🎿", jp: "スキーぐつ", en: "Ski Boots" },
{ emoji: "🏋️‍♂️", jp: "ウエイトリフティング", en: "Weightlifting" },
{ emoji: "🏋️‍♀️", jp: "ウエイトリフティング", en: "Weightlifting" },
{ emoji: "🤾‍♂️", jp: "ハンドボール", en: "Handball" },
{ emoji: "🤾‍♀️", jp: "ハンドボール", en: "Handball" },
{ emoji: "🤹‍♂️", jp: "ジャグリング", en: "Juggling" },
{ emoji: "🤹‍♀️", jp: "ジャグリング", en: "Juggling" },
{ emoji: "🎽", jp: "ランニングシャツ", en: "Running Shirt" },
{ emoji: "🎿", jp: "スキー", en: "Ski" },
{ emoji: "🥇", jp: "きんメダル", en: "Gold Medal" },
{ emoji: "🥈", jp: "ぎんメダル", en: "Silver Medal" },
{ emoji: "🥉", jp: "どうメダル", en: "Bronze Medal" },
{ emoji: "🏅", jp: "メダル", en: "Medal" },
{ emoji: "🏆", jp: "トロフィー", en: "Trophy" },
{ emoji: "🎯", jp: "ダーツ", en: "Dart" },
{ emoji: "🎳", jp: "ボウリング", en: "Bowling" },
{ emoji: "🪃", jp: "ブーメラン", en: "Boomerang" },
{ emoji: "🥏", jp: "フリスビー", en: "Flying Disc" },
{ emoji: "🛶", jp: "カヌー", en: "Canoe" },
{ emoji: "⛵", jp: "ヨット", en: "Sailboat" },
{ emoji: "🚤", jp: "モーターボート", en: "Speedboat" },
{ emoji: "🪁", jp: "たこあげ", en: "Kite" },
{ emoji: "🛹", jp: "スケボー", en: "Skateboard" },
{ emoji: "🛼", jp: "ローラースケート", en: "Roller Skate" },
{ emoji: "🤸‍♂️", jp: "たいそう", en: "Gymnastics" },
{ emoji: "🤸‍♀️", jp: "たいそう", en: "Gymnastics" },
{ emoji: "🧘‍♂️", jp: "ヨガ", en: "Yoga" },
{ emoji: "🧘‍♀️", jp: "ヨガ", en: "Yoga" },
{ emoji: "🧎‍♂️", jp: "ストレッチ", en: "Stretching" },
{ emoji: "🧎‍♀️", jp: "ストレッチ", en: "Stretching" },
{ emoji: "🚶‍♂️", jp: "あるく", en: "Walking" },
{ emoji: "🚶‍♀️", jp: "あるく", en: "Walking" },
{ emoji: "🏃‍♂️", jp: "はしる", en: "Running" },
{ emoji: "🏃‍♀️", jp: "はしる", en: "Running" },
{ emoji: "🧗‍♂️", jp: "クライミング", en: "Climbing" },
{ emoji: "🧗‍♀️", jp: "クライミング", en: "Climbing" },
{ emoji: "🏋️‍♂️", jp: "リフティング", en: "Weightlifting" },
{ emoji: "🏋️‍♀️", jp: "リフティング", en: "Weightlifting" },
{ emoji: "🤾‍♂️", jp: "ハンドボール", en: "Handball" },
{ emoji: "🤾‍♀️", jp: "ハンドボール", en: "Handball" },
{ emoji: "🤽‍♂️", jp: "すいちゅうスポーツ", en: "Water Polo" },
{ emoji: "🤽‍♀️", jp: "すいちゅうスポーツ", en: "Water Polo" },
{ emoji: "🏄‍♂️", jp: "サーフィン", en: "Surfing" },
{ emoji: "🏄‍♀️", jp: "サーフィン", en: "Surfing" },
{ emoji: "🚣‍♂️", jp: "ボート", en: "Rowing" },
{ emoji: "🚣‍♀️", jp: "ボート", en: "Rowing" },
{ emoji: "🛷", jp: "そり", en: "Sled" },
{ emoji: "⛷️", jp: "スキー", en: "Ski" },
{ emoji: "🏂", jp: "スノボ", en: "Snowboard" },
{ emoji: "🏠", jp: "いえ", en: "House" },
{ emoji: "🏡", jp: "にわつきのいえ", en: "House with Garden" },
{ emoji: "🏘️", jp: "いえぐん", en: "Housing Area" },
{ emoji: "🏚️", jp: "はいきょ", en: "Derelict House" },

{ emoji: "🏢", jp: "ビル", en: "Office Building" },
{ emoji: "🏣", jp: "ゆうびんきょく", en: "Post Office" },
{ emoji: "🏤", jp: "ヨーロッパのゆうびんきょく", en: "European Post Office" },
{ emoji: "🏥", jp: "びょういん", en: "Hospital" },
{ emoji: "🏦", jp: "ぎんこう", en: "Bank" },
{ emoji: "🏨", jp: "ホテル", en: "Hotel" },
{ emoji: "🏩", jp: "ラブホテル", en: "Love Hotel" },
{ emoji: "🏪", jp: "コンビニ", en: "Convenience Store" },
{ emoji: "🏫", jp: "がっこう", en: "School" },
{ emoji: "🏬", jp: "デパート", en: "Department Store" },
{ emoji: "🏭", jp: "こうじょう", en: "Factory" },
{ emoji: "🏯", jp: "しろ", en: "Japanese Castle" },
{ emoji: "🏰", jp: "おしろ", en: "Castle" },

{ emoji: "⛪", jp: "きょうかい", en: "Church" },
{ emoji: "🕌", jp: "モスク", en: "Mosque" },
{ emoji: "🛕", jp: "ヒンドゥーきょうのしんでん", en: "Hindu Temple" },
{ emoji: "🕍", jp: "ユダヤきょうのしんでん", en: "Synagogue" },

{ emoji: "🏛️", jp: "こくさいぎかい", en: "Classical Building" },
{ emoji: "🏗️", jp: "けんせつちゅう", en: "Construction" },
{ emoji: "🧱", jp: "レンガかべ", en: "Brick Wall" },

{ emoji: "🛖", jp: "こや", en: "Hut" },
{ emoji: "⛺", jp: "テント", en: "Tent" },
{ emoji: "🏟️", jp: "スタジアム", en: "Stadium" },
{ emoji: "🎪", jp: "サーカス", en: "Circus Tent" },

{ emoji: "🗼", jp: "とうきょうタワー", en: "Tokyo Tower" },
{ emoji: "🗽", jp: "じゆうのめがみ", en: "Statue of Liberty" },

{ emoji: "⛲", jp: "ふんすい", en: "Fountain" },
{ emoji: "⛩️", jp: "じんじゃ", en: "Shrine" },

{ emoji: "🛤️", jp: "せんろ", en: "Railway" },
{ emoji: "🛣️", jp: "どうろ", en: "Highway" },

{ emoji: "🌉", jp: "はし", en: "Bridge" },
{ emoji: "🌁", jp: "きりのまち", en: "Foggy City" },

{ emoji: "🏙️", jp: "まち", en: "Cityscape" },
{ emoji: "🌆", jp: "ゆうやけのまち", en: "City at Dusk" },
{ emoji: "🌃", jp: "よるのまち", en: "Night City" },

{ emoji: "🏞️", jp: "こくりつこうえん", en: "National Park" },
{ emoji: "🏝️", jp: "しま", en: "Island" },
{ emoji: "🏜️", jp: "さばく", en: "Desert" },
{ emoji: "🏖️", jp: "ビーチ", en: "Beach" },
{ emoji: "🏕️", jp: "キャンプじょう", en: "Campground" },

{ emoji: "🛣️", jp: "ハイウェイ", en: "Highway" },
{ emoji: "🛤️", jp: "レール", en: "Railroad" },

{ emoji: "🚏", jp: "バスてい", en: "Bus Stop" },
{ emoji: "🚉", jp: "えき", en: "Station" },
{ emoji: "🚇", jp: "ちかてつ", en: "Subway" },

{ emoji: "🛳️", jp: "フェリーターミナル", en: "Ferry Terminal" },
{ emoji: "🛫", jp: "くうこう（りりく）", en: "Airport Departure" },
{ emoji: "🛬", jp: "くうこう（ちゃくりく）", en: "Airport Arrival" },

{ emoji: "🗺️", jp: "ちず", en: "Map" },
{ emoji: "🧭", jp: "コンパス", en: "Compass" },

{ emoji: "🏚️", jp: "はいきょ", en: "Ruins" },
{ emoji: "🏘️", jp: "じゅうたくがい", en: "Neighborhood" },

{ emoji: "🏛️", jp: "ぎかい", en: "Parliament" },
{ emoji: "🏗️", jp: "こうじげんば", en: "Construction Site" },

{ emoji: "🏬", jp: "ショッピングモール", en: "Shopping Mall" },
{ emoji: "🏪", jp: "コンビニ", en: "Convenience Store" },
{ emoji: "🏨", jp: "ホテル", en: "Hotel" },
{ emoji: "🏦", jp: "ぎんこう", en: "Bank" },
{ emoji: "🏥", jp: "びょういん", en: "Hospital" },

{ emoji: "🏫", jp: "がっこう", en: "School" },
{ emoji: "🎓", jp: "だいがく", en: "University" },

{ emoji: "🏯", jp: "にほんのしろ", en: "Japanese Castle" },
{ emoji: "🏰", jp: "おしろ", en: "Castle" },

{ emoji: "🛖", jp: "こや", en: "Hut" },
{ emoji: "⛺", jp: "テント", en: "Tent" },

{ emoji: "🛝", jp: "こうえんのすべりだい", en: "Playground Slide" },
{ emoji: "🛞", jp: "タイヤ", en: "Wheel" },

{ emoji: "🪧", jp: "かんばん", en: "Signboard" },
{ emoji: "🚧", jp: "こうじちゅう", en: "Construction Barrier" },

{ emoji: "🪪", jp: "IDカード", en: "ID Card" },

{ emoji: "🛗", jp: "エレベーター", en: "Elevator" },
{ emoji: "🛎️", jp: "ベル", en: "Service Bell" },

{ emoji: "🛋️", jp: "ソファ", en: "Couch" },
{ emoji: "🪑", jp: "いす", en: "Chair" },
{ emoji: "🛏️", jp: "ベッド", en: "Bed" },
{ emoji: "🚪", jp: "ドア", en: "Door" },
{ emoji: "🪟", jp: "まど", en: "Window" },

{ emoji: "🧱", jp: "レンガ", en: "Brick" },
{ emoji: "🪨", jp: "いし", en: "Rock" },

{ emoji: "🛢️", jp: "タンク", en: "Oil Drum" },
{ emoji: "⛽", jp: "ガソリンスタンド", en: "Gas Station" },

{ emoji: "🛣️", jp: "どうろ", en: "Road" },
{ emoji: "🛤️", jp: "せんろ", en: "Railroad" },

{ emoji: "🗼", jp: "タワー", en: "Tower" },
{ emoji: "🗽", jp: "じゆうのめがみ", en: "Statue of Liberty" },
{ emoji: "👕", jp: "Tシャツ", en: "T-Shirt" },
{ emoji: "👖", jp: "ジーンズ", en: "Jeans" },
{ emoji: "🧥", jp: "コート", en: "Coat" },
{ emoji: "🥼", jp: "ラボコート", en: "Lab Coat" },
{ emoji: "🦺", jp: "安全ベスト", en: "Safety Vest" },

{ emoji: "👔", jp: "ネクタイ", en: "Necktie" },
{ emoji: "👗", jp: "ドレス", en: "Dress" },
{ emoji: "👙", jp: "ビキニ", en: "Bikini" },
{ emoji: "👚", jp: "ブラウス", en: "Blouse" },

{ emoji: "🩱", jp: "ワンピース水着", en: "One-Piece Swimsuit" },
{ emoji: "🩲", jp: "パンツ", en: "Briefs" },
{ emoji: "🩳", jp: "ショートパンツ", en: "Shorts" },

{ emoji: "👘", jp: "きもの", en: "Kimono" },
{ emoji: "🥻", jp: "サリー", en: "Sari" },
{ emoji: "🕺", jp: "ダンスウェア", en: "Dance Wear" },

{ emoji: "🧣", jp: "マフラー", en: "Scarf" },
{ emoji: "🧤", jp: "てぶくろ", en: "Gloves" },
{ emoji: "🧦", jp: "くつした", en: "Socks" },
{ emoji: "🧢", jp: "キャップ", en: "Cap" },
{ emoji: "👒", jp: "ぼうし", en: "Hat" },
{ emoji: "🎩", jp: "シルクハット", en: "Top Hat" },
{ emoji: "⛑️", jp: "ヘルメット", en: "Helmet" },
{ emoji: "👑", jp: "おうかん", en: "Crown" },

{ emoji: "👟", jp: "スニーカー", en: "Sneakers" },
{ emoji: "🥾", jp: "ブーツ", en: "Hiking Boots" },
{ emoji: "👞", jp: "くつ", en: "Dress Shoes" },
{ emoji: "👠", jp: "ハイヒール", en: "High Heels" },
{ emoji: "👡", jp: "サンダル", en: "Sandals" },
{ emoji: "🥿", jp: "フラットシューズ", en: "Flat Shoes" },
{ emoji: "👢", jp: "ブーツ", en: "Boots" },

{ emoji: "👛", jp: "がまぐち", en: "Purse" },
{ emoji: "👜", jp: "バッグ", en: "Handbag" },
{ emoji: "💼", jp: "ビジネスバッグ", en: "Briefcase" },
{ emoji: "🎒", jp: "リュック", en: "Backpack" },

{ emoji: "👝", jp: "ポーチ", en: "Pouch" },
{ emoji: "🧳", jp: "スーツケース", en: "Luggage" },

{ emoji: "👓", jp: "めがね", en: "Glasses" },
{ emoji: "🕶️", jp: "サングラス", en: "Sunglasses" },

{ emoji: "💍", jp: "ゆびわ", en: "Ring" },
{ emoji: "💎", jp: "ダイヤモンド", en: "Gemstone" },
{ emoji: "📿", jp: "ネックレス", en: "Prayer Beads" },
{ emoji: "📿", jp: "ビーズネックレス", en: "Necklace" },

{ emoji: "⛓️", jp: "チェーン", en: "Chain" },
{ emoji: "🔗", jp: "リンク", en: "Link" },

{ emoji: "🪮", jp: "くし", en: "Comb" },
{ emoji: "💇‍♂️", jp: "ヘアカット", en: "Haircut" },
{ emoji: "💇‍♀️", jp: "ヘアカット", en: "Haircut" },

{ emoji: "💅", jp: "ネイル", en: "Nail Polish" },
{ emoji: "🧴", jp: "ローション", en: "Lotion" },
{ emoji: "🧼", jp: "せっけん", en: "Soap" },
{ emoji: "🫧", jp: "あわ", en: "Bubbles" },

{ emoji: "🪒", jp: "かみそり", en: "Razor" },
{ emoji: "🧽", jp: "スポンジ", en: "Sponge" },

{ emoji: "🧺", jp: "ランドリーバスケット", en: "Laundry Basket" },
{ emoji: "🧻", jp: "トイレットペーパー", en: "Toilet Paper" },

{ emoji: "🧵", jp: "いと", en: "Thread" },
{ emoji: "🪡", jp: "ぬいばり", en: "Sewing Needle" },
{ emoji: "🧶", jp: "あみもの", en: "Yarn" },

{ emoji: "🧥", jp: "ジャケット", en: "Jacket" },
{ emoji: "🧦", jp: "ソックス", en: "Socks" },
{ emoji: "🧤", jp: "グローブ", en: "Gloves" },

{ emoji: "👚", jp: "トップス", en: "Top" },
{ emoji: "👕", jp: "シャツ", en: "Shirt" },
{ emoji: "👖", jp: "パンツ", en: "Pants" },

{ emoji: "👗", jp: "ワンピース", en: "Dress" },
{ emoji: "👘", jp: "きもの", en: "Kimono" },

{ emoji: "🩰", jp: "バレエシューズ", en: "Ballet Shoes" },
{ emoji: "🥋", jp: "どうぎ", en: "Martial Arts Uniform" },

{ emoji: "🎽", jp: "スポーツシャツ", en: "Sports Shirt" },
{ emoji: "🎽", jp: "ランニングウェア", en: "Running Shirt" },

{ emoji: "🧢", jp: "ぼうし", en: "Cap" },
{ emoji: "👒", jp: "ハット", en: "Hat" },
{ emoji: "🎩", jp: "トップハット", en: "Top Hat" },

{ emoji: "⛑️", jp: "ヘルメット", en: "Helmet" },
{ emoji: "🪖", jp: "ミリタリーヘルメット", en: "Military Helmet" },

{ emoji: "🧣", jp: "スカーフ", en: "Scarf" },
{ emoji: "🧤", jp: "てぶくろ", en: "Gloves" },
{ emoji: "🧦", jp: "くつした", en: "Socks" },

{ emoji: "👞", jp: "くつ", en: "Shoes" },
{ emoji: "👟", jp: "スニーカー", en: "Sneakers" },
{ emoji: "👠", jp: "ヒール", en: "Heels" },
{ emoji: "👡", jp: "サンダル", en: "Sandals" },
{ emoji: "👢", jp: "ブーツ", en: "Boots" },

{ emoji: "👜", jp: "バッグ", en: "Handbag" },
{ emoji: "🎒", jp: "リュック", en: "Backpack" },
{ emoji: "💼", jp: "ビジネスバッグ", en: "Briefcase" },

{ emoji: "💍", jp: "ゆびわ", en: "Ring" },
{ emoji: "💎", jp: "ほうせき", en: "Gem" },
{ emoji: "📿", jp: "ネックレス", en: "Necklace" },

{ emoji: "👓", jp: "めがね", en: "Glasses" },
{ emoji: "🕶️", jp: "サングラス", en: "Sunglasses" },
{ emoji: "🔧", jp: "レンチ", en: "Wrench" },
{ emoji: "🔨", jp: "ハンマー", en: "Hammer" },
{ emoji: "🪓", jp: "おの", en: "Axe" },
{ emoji: "🔩", jp: "ナット", en: "Bolt" },
{ emoji: "⚙️", jp: "ギア", en: "Gear" },
{ emoji: "🪛", jp: "ドライバー", en: "Screwdriver" },
{ emoji: "🪚", jp: "のこぎり", en: "Saw" },
{ emoji: "🧰", jp: "どうぐばこ", en: "Toolbox" },
{ emoji: "🧲", jp: "じしゃく", en: "Magnet" },

{ emoji: "🔗", jp: "チェーン", en: "Link" },
{ emoji: "⛓️", jp: "くさり", en: "Chains" },

{ emoji: "🪤", jp: "ねずみとり", en: "Mouse Trap" },
{ emoji: "🔫", jp: "おもちゃのピストル", en: "Toy Gun" },

{ emoji: "🧯", jp: "しょうかき", en: "Fire Extinguisher" },
{ emoji: "🚒", jp: "しょうぼうしゃ", en: "Fire Truck" },

{ emoji: "🔌", jp: "プラグ", en: "Electric Plug" },
{ emoji: "🔋", jp: "バッテリー", en: "Battery" },
{ emoji: "🪫", jp: "バッテリーぎれ", en: "Low Battery" },

{ emoji: "💡", jp: "でんき", en: "Light Bulb" },
{ emoji: "🔦", jp: "ライト", en: "Flashlight" },
{ emoji: "🕯️", jp: "ろうそく", en: "Candle" },

{ emoji: "🧮", jp: "そろばん", en: "Abacus" },
{ emoji: "🧷", jp: "ほうたいピン", en: "Safety Pin" },
{ emoji: "🧹", jp: "ほうき", en: "Broom" },
{ emoji: "🧺", jp: "かご", en: "Basket" },
{ emoji: "🧻", jp: "トイレットペーパー", en: "Toilet Paper" },
{ emoji: "🧼", jp: "せっけん", en: "Soap" },
{ emoji: "🧽", jp: "スポンジ", en: "Sponge" },
{ emoji: "🪣", jp: "バケツ", en: "Bucket" },

{ emoji: "🧴", jp: "ローション", en: "Lotion" },
{ emoji: "🫧", jp: "あわ", en: "Bubbles" },

{ emoji: "🪒", jp: "かみそり", en: "Razor" },

{ emoji: "🧫", jp: "シャーレ", en: "Petri Dish" },
{ emoji: "🧪", jp: "試験管", en: "Test Tube" },
{ emoji: "🧬", jp: "DNA", en: "DNA" },
{ emoji: "🧫", jp: "細菌プレート", en: "Culture Plate" },

{ emoji: "🧲", jp: "磁石", en: "Magnet" },
{ emoji: "🧯", jp: "消火器", en: "Fire Extinguisher" },

{ emoji: "📱", jp: "スマホ", en: "Smartphone" },
{ emoji: "📲", jp: "スマホ（着信）", en: "Mobile Calling" },
{ emoji: "💻", jp: "ノートパソコン", en: "Laptop" },
{ emoji: "🖥️", jp: "デスクトップ", en: "Desktop Computer" },
{ emoji: "🖨️", jp: "プリンター", en: "Printer" },
{ emoji: "⌨️", jp: "キーボード", en: "Keyboard" },
{ emoji: "🖱️", jp: "マウス", en: "Computer Mouse" },
{ emoji: "🖲️", jp: "トラックボール", en: "Trackball" },

{ emoji: "💽", jp: "ミニディスク", en: "Mini Disc" },
{ emoji: "💾", jp: "フロッピー", en: "Floppy Disk" },
{ emoji: "💿", jp: "CD", en: "CD" },
{ emoji: "📀", jp: "DVD", en: "DVD" },

{ emoji: "📼", jp: "ビデオテープ", en: "Video Cassette" },
{ emoji: "📷", jp: "カメラ", en: "Camera" },
{ emoji: "📸", jp: "カメラフラッシュ", en: "Camera Flash" },
{ emoji: "📹", jp: "ビデオカメラ", en: "Video Camera" },
{ emoji: "🎥", jp: "映画カメラ", en: "Movie Camera" },

{ emoji: "📺", jp: "テレビ", en: "Television" },
{ emoji: "📻", jp: "ラジオ", en: "Radio" },

{ emoji: "🎙️", jp: "スタジオマイク", en: "Studio Microphone" },
{ emoji: "🎚️", jp: "スライダー", en: "Level Slider" },
{ emoji: "🎛️", jp: "つまみ", en: "Control Knobs" },

{ emoji: "📡", jp: "アンテナ", en: "Satellite Antenna" },
{ emoji: "🛰️", jp: "衛星", en: "Satellite" },

{ emoji: "🕹️", jp: "ゲームコントローラー", en: "Joystick" },
{ emoji: "🎮", jp: "ゲームパッド", en: "Game Controller" },

{ emoji: "🧭", jp: "コンパス", en: "Compass" },
{ emoji: "🗺️", jp: "ちず", en: "Map" },

{ emoji: "🧱", jp: "レンガ", en: "Brick" },
{ emoji: "🪨", jp: "いし", en: "Rock" },
{ emoji: "⛏️", jp: "つるはし", en: "Pickaxe" },
{ emoji: "⚒️", jp: "ハンマーとつるはし", en: "Hammer and Pick" },

{ emoji: "🛠️", jp: "工具セット", en: "Tools" },
{ emoji: "🪚", jp: "のこぎり", en: "Saw" },
{ emoji: "🪛", jp: "ドライバー", en: "Screwdriver" },

{ emoji: "🧰", jp: "ツールボックス", en: "Toolbox" },

{ emoji: "🧯", jp: "消火器", en: "Fire Extinguisher" },

{ emoji: "🧪", jp: "試験管", en: "Test Tube" },
{ emoji: "🧬", jp: "DNA", en: "DNA" },

{ emoji: "🧫", jp: "シャーレ", en: "Petri Dish" },

{ emoji: "🧹", jp: "ほうき", en: "Broom" },
{ emoji: "🧺", jp: "かご", en: "Basket" },
{ emoji: "🧻", jp: "トイレットペーパー", en: "Toilet Paper" },

{ emoji: "🧼", jp: "せっけん", en: "Soap" },
{ emoji: "🧽", jp: "スポンジ", en: "Sponge" },

{ emoji: "🪣", jp: "バケツ", en: "Bucket" },

{ emoji: "🪒", jp: "かみそり", en: "Razor" },

{ emoji: "🧴", jp: "ローション", en: "Lotion" },

{ emoji: "🫧", jp: "あわ", en: "Bubbles" },

{ emoji: "🧵", jp: "いと", en: "Thread" },
{ emoji: "🪡", jp: "ぬいばり", en: "Sewing Needle" },
{ emoji: "🧶", jp: "あみもの", en: "Yarn" },

{ emoji: "📦", jp: "はこ", en: "Box" },
{ emoji: "📫", jp: "ポスト", en: "Mailbox" },
{ emoji: "📬", jp: "ゆうびん", en: "Mail" },

{ emoji: "📮", jp: "ポスト", en: "Postbox" },

{ emoji: "🗃️", jp: "カードボックス", en: "Card File Box" },
{ emoji: "🗄️", jp: "ファイルキャビネット", en: "File Cabinet" },

{ emoji: "🗑️", jp: "ごみばこ", en: "Trash Can" },
{ emoji: "🧙‍♂️", jp: "まほうつかい（男）", en: "Wizard" },
{ emoji: "🧙‍♀️", jp: "まほうつかい（女）", en: "Sorceress" },
{ emoji: "🧝‍♂️", jp: "エルフ（男）", en: "Elf" },
{ emoji: "🧝‍♀️", jp: "エルフ（女）", en: "Elf" },
{ emoji: "🧛‍♂️", jp: "ヴァンパイア（男）", en: "Vampire" },
{ emoji: "🧛‍♀️", jp: "ヴァンパイア（女）", en: "Vampire" },
{ emoji: "🧟‍♂️", jp: "ゾンビ（男）", en: "Zombie" },
{ emoji: "🧟‍♀️", jp: "ゾンビ（女）", en: "Zombie" },
{ emoji: "🧞‍♂️", jp: "ジーニー（男）", en: "Genie" },
{ emoji: "🧞‍♀️", jp: "ジーニー（女）", en: "Genie" },
{ emoji: "🧜‍♂️", jp: "マーマン", en: "Merman" },
{ emoji: "🧜‍♀️", jp: "マーメイド", en: "Mermaid" },
{ emoji: "🧚‍♂️", jp: "ようせい（男）", en: "Fairy" },
{ emoji: "🧚‍♀️", jp: "ようせい（女）", en: "Fairy" },

{ emoji: "🐉", jp: "ドラゴン", en: "Dragon" },
{ emoji: "🐲", jp: "ドラゴンのかお", en: "Dragon Face" },
{ emoji: "🦄", jp: "ユニコーン", en: "Unicorn" },

{ emoji: "👹", jp: "おに", en: "Ogre" },
{ emoji: "👺", jp: "てんぐ", en: "Goblin" },

{ emoji: "💀", jp: "どくろ", en: "Skull" },
{ emoji: "☠️", jp: "どくろとほね", en: "Skull and Crossbones" },

{ emoji: "👻", jp: "ゆうれい", en: "Ghost" },
{ emoji: "👽", jp: "エイリアン", en: "Alien" },
{ emoji: "👾", jp: "インベーダー", en: "Space Invader" },

{ emoji: "🧿", jp: "ナザール", en: "Nazar Amulet" },
{ emoji: "🔮", jp: "クリスタルボール", en: "Crystal Ball" },
{ emoji: "🪄", jp: "まほうのつえ", en: "Magic Wand" },

{ emoji: "🗡️", jp: "ダガー", en: "Dagger" },
{ emoji: "⚔️", jp: "けん", en: "Crossed Swords" },
{ emoji: "🛡️", jp: "シールド", en: "Shield" },

{ emoji: "🪓", jp: "バトルアックス", en: "Battle Axe" },
{ emoji: "🏹", jp: "ゆみ", en: "Bow and Arrow" },

{ emoji: "🧪", jp: "ポーション", en: "Potion" },
{ emoji: "🧬", jp: "まほうのしんけい", en: "Magic DNA" },

{ emoji: "📜", jp: "まきもの", en: "Scroll" },
{ emoji: "📖", jp: "まほうのほん", en: "Magic Book" },

{ emoji: "🪙", jp: "ゴールドコイン", en: "Gold Coin" },
{ emoji: "💰", jp: "おたからぶくろ", en: "Treasure Bag" },
{ emoji: "💎", jp: "ほうせき", en: "Gemstone" },

{ emoji: "🗝️", jp: "こだいのかぎ", en: "Ancient Key" },
{ emoji: "🔑", jp: "かぎ", en: "Key" },

{ emoji: "🧱", jp: "まほうのかべ", en: "Magic Wall" },
{ emoji: "🪨", jp: "いしのゴーレム", en: "Stone Golem" },

{ emoji: "🔥", jp: "ほのおのまほう", en: "Fire Magic" },
{ emoji: "❄️", jp: "こおりのまほう", en: "Ice Magic" },
{ emoji: "⚡", jp: "でんきのまほう", en: "Lightning Magic" },
{ emoji: "🌪️", jp: "かぜのまほう", en: "Wind Magic" },
{ emoji: "🌊", jp: "みずのまほう", en: "Water Magic" },

{ emoji: "🧗‍♂️", jp: "ダンジョンぼうけん", en: "Dungeon Explorer" },
{ emoji: "🧗‍♀️", jp: "ダンジョンぼうけん（女）", en: "Dungeon Explorer" },

{ emoji: "🪦", jp: "おはか", en: "Gravestone" },
{ emoji: "⚰️", jp: "かんおけ", en: "Coffin" },

{ emoji: "🕸️", jp: "くものす", en: "Spider Web" },
{ emoji: "🕷️", jp: "まほうのくも", en: "Magic Spider" },

{ emoji: "🧌", jp: "トロール", en: "Troll" },
{ emoji: "🦫", jp: "ビーバーゴーレム", en: "Beaver Golem" },

{ emoji: "🦥", jp: "ナマケモノモンスター", en: "Sloth Monster" },
{ emoji: "🦨", jp: "スカンクモンスター", en: "Skunk Monster" },

{ emoji: "🧞", jp: "ジーニー", en: "Genie" },
{ emoji: "🧚", jp: "ようせい", en: "Fairy" },

{ emoji: "🧜", jp: "マーメイド", en: "Mermaid" },
{ emoji: "🧛", jp: "ヴァンパイア", en: "Vampire" },
{ emoji: "🧟", jp: "ゾンビ", en: "Zombie" },

{ emoji: "🧙", jp: "まほうつかい", en: "Wizard" },

{ emoji: "🪄", jp: "まほうのつえ", en: "Magic Wand" },
{ emoji: "🔮", jp: "クリスタルボール", en: "Crystal Ball" },

{ emoji: "🧞‍♂️", jp: "ランプのせい", en: "Genie" },
{ emoji: "🧞‍♀️", jp: "ランプのせい（女）", en: "Genie" },

{ emoji: "🧚‍♂️", jp: "ようせい（男）", en: "Fairy" },
{ emoji: "🧚‍♀️", jp: "ようせい（女）", en: "Fairy" },

{ emoji: "🧜‍♂️", jp: "マーマン", en: "Merman" },
{ emoji: "🧜‍♀️", jp: "マーメイド", en: "Mermaid" },

{ emoji: "🧝‍♂️", jp: "エルフ（男）", en: "Elf" },
{ emoji: "🧝‍♀️", jp: "エルフ（女）", en: "Elf" },

{ emoji: "🧛‍♂️", jp: "ヴァンパイア（男）", en: "Vampire" },
{ emoji: "🧛‍♀️", jp: "ヴァンパイア（女）", en: "Vampire" },

{ emoji: "🧟‍♂️", jp: "ゾンビ（男）", en: "Zombie" },
{ emoji: "🧟‍♀️", jp: "ゾンビ（女）", en: "Zombie" },

{ emoji: "🧙‍♂️", jp: "まほうつかい（男）", en: "Wizard" },
{ emoji: "🧙‍♀️", jp: "まほうつかい（女）", en: "Sorceress" },
{ emoji: "👨‍🏭", jp: "こうばのしょくにん（男）", en: "Factory Worker" },
{ emoji: "👩‍🏭", jp: "こうばのしょくにん（女）", en: "Factory Worker" },

{ emoji: "👨‍🔧", jp: "エンジニア（男）", en: "Mechanic" },
{ emoji: "👩‍🔧", jp: "エンジニア（女）", en: "Mechanic" },

{ emoji: "👨‍🔬", jp: "科学者（男）", en: "Scientist" },
{ emoji: "👩‍🔬", jp: "科学者（女）", en: "Scientist" },

{ emoji: "👨‍💻", jp: "プログラマー（男）", en: "Programmer" },
{ emoji: "👩‍💻", jp: "プログラマー（女）", en: "Programmer" },

{ emoji: "👨‍🏫", jp: "先生（男）", en: "Teacher" },
{ emoji: "👩‍🏫", jp: "先生（女）", en: "Teacher" },

{ emoji: "👨‍🎓", jp: "学生（男）", en: "Student" },
{ emoji: "👩‍🎓", jp: "学生（女）", en: "Student" },

{ emoji: "👨‍⚕️", jp: "いしゃ（男）", en: "Doctor" },
{ emoji: "👩‍⚕️", jp: "いしゃ（女）", en: "Doctor" },

{ emoji: "👨‍⚕️", jp: "かんごし（男）", en: "Nurse" },
{ emoji: "👩‍⚕️", jp: "かんごし（女）", en: "Nurse" },

{ emoji: "👨‍🍳", jp: "コック（男）", en: "Chef" },
{ emoji: "👩‍🍳", jp: "コック（女）", en: "Chef" },

{ emoji: "👨‍🌾", jp: "のうか（男）", en: "Farmer" },
{ emoji: "👩‍🌾", jp: "のうか（女）", en: "Farmer" },

{ emoji: "👨‍🚒", jp: "しょうぼうし（男）", en: "Firefighter" },
{ emoji: "👩‍🚒", jp: "しょうぼうし（女）", en: "Firefighter" },

{ emoji: "👮‍♂️", jp: "けいさつ（男）", en: "Police Officer" },
{ emoji: "👮‍♀️", jp: "けいさつ（女）", en: "Police Officer" },

{ emoji: "🕵️‍♂️", jp: "たんてい（男）", en: "Detective" },
{ emoji: "🕵️‍♀️", jp: "たんてい（女）", en: "Detective" },

{ emoji: "👷‍♂️", jp: "けんせつ（男）", en: "Construction Worker" },
{ emoji: "👷‍♀️", jp: "けんせつ（女）", en: "Construction Worker" },

{ emoji: "👨‍✈️", jp: "パイロット（男）", en: "Pilot" },
{ emoji: "👩‍✈️", jp: "パイロット（女）", en: "Pilot" },

{ emoji: "🧑‍✈️", jp: "ひこうきのクルー", en: "Flight Crew" },

{ emoji: "👨‍🚀", jp: "うちゅうひこうし（男）", en: "Astronaut" },
{ emoji: "👩‍🚀", jp: "うちゅうひこうし（女）", en: "Astronaut" },

{ emoji: "👨‍⚖️", jp: "さいばんかん（男）", en: "Judge" },
{ emoji: "👩‍⚖️", jp: "さいばんかん（女）", en: "Judge" },

{ emoji: "👨‍💼", jp: "ビジネスマン", en: "Businessman" },
{ emoji: "👩‍💼", jp: "ビジネスウーマン", en: "Businesswoman" },

{ emoji: "👨‍💼", jp: "かいしゃいん（男）", en: "Office Worker" },
{ emoji: "👩‍💼", jp: "かいしゃいん（女）", en: "Office Worker" },

{ emoji: "🧑‍💼", jp: "しょくむいん", en: "Clerk" },

{ emoji: "👨‍🎤", jp: "アーティスト（男）", en: "Singer" },
{ emoji: "👩‍🎤", jp: "アーティスト（女）", en: "Singer" },

{ emoji: "👨‍🎨", jp: "げいじゅつか（男）", en: "Artist" },
{ emoji: "👩‍🎨", jp: "げいじゅつか（女）", en: "Artist" },

{ emoji: "👨‍🎭", jp: "はいゆう（男）", en: "Actor" },
{ emoji: "👩‍🎭", jp: "はいゆう（女）", en: "Actress" },

{ emoji: "🧑‍🎤", jp: "シンガー", en: "Singer" },
{ emoji: "🧑‍🎨", jp: "アーティスト", en: "Artist" },

{ emoji: "🧑‍🏫", jp: "きょうし", en: "Instructor" },

{ emoji: "🧑‍🏭", jp: "こうばのしょくにん", en: "Factory Worker" },

{ emoji: "🧑‍🔧", jp: "メカニック", en: "Mechanic" },

{ emoji: "🧑‍🔬", jp: "科学者", en: "Scientist" },

{ emoji: "🧑‍💻", jp: "プログラマー", en: "Programmer" },

{ emoji: "🧑‍⚕️", jp: "いりょうしょく", en: "Healthcare Worker" },

{ emoji: "🧑‍🍳", jp: "シェフ", en: "Chef" },

{ emoji: "🧑‍🌾", jp: "のうか", en: "Farmer" },

{ emoji: "🧑‍🚒", jp: "しょうぼうし", en: "Firefighter" },

{ emoji: "🧑‍✈️", jp: "パイロット", en: "Pilot" },

{ emoji: "🧑‍🚀", jp: "うちゅうひこうし", en: "Astronaut" },

{ emoji: "🧑‍⚖️", jp: "さいばんかん", en: "Judge" },

{ emoji: "🧑‍💼", jp: "ビジネスパーソン", en: "Businessperson" },

{ emoji: "🧑‍🎤", jp: "アーティスト", en: "Performer" },

{ emoji: "🧑‍🎨", jp: "げいじゅつか", en: "Artist" },

{ emoji: "🧑‍🎭", jp: "はいゆう", en: "Actor" },

{ emoji: "🧑‍🏋️", jp: "トレーナー", en: "Trainer" },

{ emoji: "🧑‍🚴", jp: "サイクリスト", en: "Cyclist" },

{ emoji: "🧑‍🍼", jp: "ほいくし", en: "Caregiver" },

{ emoji: "🧑‍⚕️", jp: "かんごし", en: "Nurse" },

{ emoji: "🧑‍🔧", jp: "こうじし", en: "Technician" },

{ emoji: "🧑‍🏭", jp: "こうじょうしょくにん", en: "Plant Worker" },

{ emoji: "🧑‍💻", jp: "エンジニア", en: "Engineer" },

{ emoji: "🧑‍💼", jp: "かいしゃいん", en: "Office Worker" },

{ emoji: "🧑‍🎓", jp: "がくせい", en: "Student" },

{ emoji: "🧑‍🏫", jp: "せんせい", en: "Teacher" },

{ emoji: "🧑‍⚕️", jp: "いしゃ", en: "Doctor" },

{ emoji: "🧑‍🍳", jp: "コック", en: "Cook" },

{ emoji: "🧑‍🌾", jp: "のうぎょうしゃ", en: "Agricultural Worker" },

{ emoji: "🧑‍🚒", jp: "しょうぼうし", en: "Firefighter" },

{ emoji: "🧑‍✈️", jp: "パイロット", en: "Pilot" },

{ emoji: "🧑‍🚀", jp: "うちゅうひこうし", en: "Astronaut" },

{ emoji: "🧑‍⚖️", jp: "さいばんかん", en: "Judge" },

{ emoji: "🧑‍💼", jp: "ビジネスパーソン", en: "Businessperson" },

{ emoji: "🧑‍🎤", jp: "シンガー", en: "Singer" },

{ emoji: "🧑‍🎨", jp: "アーティスト", en: "Artist" },

{ emoji: "🧑‍🎭", jp: "はいゆう", en: "Actor" },

{ emoji: "🧑‍🏋️", jp: "トレーナー", en: "Trainer" },

{ emoji: "🧑‍🚴", jp: "サイクリスト", en: "Cyclist" },

{ emoji: "🧑‍🍼", jp: "ほいくし", en: "Caregiver" },
{ emoji: "🏃‍♂️", jp: "はしる（男）", en: "Running" },
{ emoji: "🏃‍♀️", jp: "はしる（女）", en: "Running" },

{ emoji: "🚶‍♂️", jp: "あるく（男）", en: "Walking" },
{ emoji: "🚶‍♀️", jp: "あるく（女）", en: "Walking" },

{ emoji: "🏋️‍♂️", jp: "ウエイトリフティング（男）", en: "Weightlifting" },
{ emoji: "🏋️‍♀️", jp: "ウエイトリフティング（女）", en: "Weightlifting" },

{ emoji: "🤸‍♂️", jp: "たいそう（男）", en: "Gymnastics" },
{ emoji: "🤸‍♀️", jp: "たいそう（女）", en: "Gymnastics" },

{ emoji: "⛹️‍♂️", jp: "バスケドリブル（男）", en: "Basketball Dribble" },
{ emoji: "⛹️‍♀️", jp: "バスケドリブル（女）", en: "Basketball Dribble" },

{ emoji: "🤾‍♂️", jp: "ハンドボール（男）", en: "Handball" },
{ emoji: "🤾‍♀️", jp: "ハンドボール（女）", en: "Handball" },

{ emoji: "🤽‍♂️", jp: "すいちゅうスポーツ（男）", en: "Water Polo" },
{ emoji: "🤽‍♀️", jp: "すいちゅうスポーツ（女）", en: "Water Polo" },

{ emoji: "🏊‍♂️", jp: "すいえい（男）", en: "Swimming" },
{ emoji: "🏊‍♀️", jp: "すいえい（女）", en: "Swimming" },

{ emoji: "🏄‍♂️", jp: "サーフィン（男）", en: "Surfing" },
{ emoji: "🏄‍♀️", jp: "サーフィン（女）", en: "Surfing" },

{ emoji: "🚴‍♂️", jp: "じてんしゃ（男）", en: "Cycling" },
{ emoji: "🚴‍♀️", jp: "じてんしゃ（女）", en: "Cycling" },

{ emoji: "🚵‍♂️", jp: "マウンテンバイク（男）", en: "Mountain Biking" },
{ emoji: "🚵‍♀️", jp: "マウンテンバイク（女）", en: "Mountain Biking" },

{ emoji: "🤺", jp: "フェンシング", en: "Fencing" },

{ emoji: "🏇", jp: "じょうば", en: "Horse Racing" },

{ emoji: "⛷️", jp: "スキー", en: "Skiing" },
{ emoji: "🏂", jp: "スノーボード", en: "Snowboarding" },

{ emoji: "🧗‍♂️", jp: "クライミング（男）", en: "Climbing" },
{ emoji: "🧗‍♀️", jp: "クライミング（女）", en: "Climbing" },

{ emoji: "🤹‍♂️", jp: "ジャグリング（男）", en: "Juggling" },
{ emoji: "🤹‍♀️", jp: "ジャグリング（女）", en: "Juggling" },

{ emoji: "🤼‍♂️", jp: "レスリング（男）", en: "Wrestling" },
{ emoji: "🤼‍♀️", jp: "レスリング（女）", en: "Wrestling" },

{ emoji: "🥋", jp: "じゅうどう", en: "Judo" },
{ emoji: "🥊", jp: "ボクシング", en: "Boxing" },

{ emoji: "🤸", jp: "アクロバット", en: "Acrobatics" },

{ emoji: "🧘‍♂️", jp: "ヨガ（男）", en: "Yoga" },
{ emoji: "🧘‍♀️", jp: "ヨガ（女）", en: "Yoga" },

{ emoji: "🧎‍♂️", jp: "ストレッチ（男）", en: "Stretching" },
{ emoji: "🧎‍♀️", jp: "ストレッチ（女）", en: "Stretching" },

{ emoji: "🏌️‍♂️", jp: "ゴルフ（男）", en: "Golf" },
{ emoji: "🏌️‍♀️", jp: "ゴルフ（女）", en: "Golf" },

{ emoji: "🏹", jp: "アーチェリー", en: "Archery" },

{ emoji: "🚣‍♂️", jp: "ボートこぎ（男）", en: "Rowing" },
{ emoji: "🚣‍♀️", jp: "ボートこぎ（女）", en: "Rowing" },

{ emoji: "🛶", jp: "カヌー", en: "Canoe" },

{ emoji: "🤿", jp: "ダイビング", en: "Diving" },

{ emoji: "🪂", jp: "パラシュート", en: "Parachuting" },

{ emoji: "🛷", jp: "そり", en: "Sledding" },

{ emoji: "🛼", jp: "ローラースケート", en: "Roller Skating" },

{ emoji: "🛹", jp: "スケボー", en: "Skateboarding" },

{ emoji: "🤾", jp: "ハンドボール", en: "Handball" },

{ emoji: "🎳", jp: "ボウリング", en: "Bowling" },

{ emoji: "🎯", jp: "ダーツ", en: "Darts" },

{ emoji: "🎽", jp: "ランニングシャツ", en: "Running Shirt" },

{ emoji: "🥅", jp: "ゴール", en: "Goal Net" },

{ emoji: "⚽", jp: "サッカー", en: "Soccer" },
{ emoji: "🏀", jp: "バスケットボール", en: "Basketball" },
{ emoji: "🏈", jp: "アメフト", en: "American Football" },
{ emoji: "⚾", jp: "やきゅう", en: "Baseball" },
{ emoji: "🎾", jp: "テニス", en: "Tennis" },
{ emoji: "🏐", jp: "バレーボール", en: "Volleyball" },
{ emoji: "🏉", jp: "ラグビー", en: "Rugby" },
{ emoji: "🏓", jp: "ピンポン", en: "Table Tennis" },
{ emoji: "🏸", jp: "バドミントン", en: "Badminton" },

{ emoji: "🥍", jp: "ラクロス", en: "Lacrosse" },

{ emoji: "🥏", jp: "フリスビー", en: "Flying Disc" },

{ emoji: "🪃", jp: "ブーメラン", en: "Boomerang" },

{ emoji: "🤺", jp: "フェンシング", en: "Fencing" },

{ emoji: "🏋️", jp: "リフティング", en: "Lifting" },

{ emoji: "🤸", jp: "アクロバット", en: "Acrobatics" },

{ emoji: "🧘", jp: "めいそう", en: "Meditation" },

{ emoji: "🧗", jp: "クライミング", en: "Climbing" },

{ emoji: "🏃", jp: "ランニング", en: "Running" },

{ emoji: "🚶", jp: "ウォーキング", en: "Walking" },

{ emoji: "🏊", jp: "すいえい", en: "Swimming" },

{ emoji: "🚴", jp: "サイクリング", en: "Cycling" },

{ emoji: "🏄", jp: "サーフィン", en: "Surfing" },

{ emoji: "🤽", jp: "すいちゅうスポーツ", en: "Water Sports" },

{ emoji: "🤾", jp: "ハンドボール", en: "Handball" },

{ emoji: "🧎", jp: "ストレッチ", en: "Stretching" },

{ emoji: "🧘", jp: "ヨガ", en: "Yoga" },

{ emoji: "🏋️", jp: "トレーニング", en: "Training" },

{ emoji: "🤺", jp: "フェンシング", en: "Fencing" },

{ emoji: "🏹", jp: "アーチェリー", en: "Archery" },

{ emoji: "⛷️", jp: "スキー", en: "Skiing" },

{ emoji: "🏂", jp: "スノボ", en: "Snowboarding" },

{ emoji: "🛷", jp: "そり", en: "Sledding" },

{ emoji: "🛹", jp: "スケボー", en: "Skateboarding" },

{ emoji: "🛼", jp: "ローラースケート", en: "Roller Skating" },
{ emoji: "🍳", jp: "フライパン", en: "Frying Pan" },
{ emoji: "🥘", jp: "なべ", en: "Cooking Pot" },
{ emoji: "🍲", jp: "スープなべ", en: "Soup Pot" },
{ emoji: "🫕", jp: "フォンデュなべ", en: "Fondue Pot" },

{ emoji: "🍽️", jp: "しょっきセット", en: "Dinner Set" },
{ emoji: "🍴", jp: "フォーク", en: "Fork" },
{ emoji: "🥄", jp: "スプーン", en: "Spoon" },
{ emoji: "🔪", jp: "ナイフ", en: "Kitchen Knife" },

{ emoji: "🧂", jp: "しお", en: "Salt" },
{ emoji: "🫙", jp: "スパイスびん", en: "Spice Jar" },
{ emoji: "🧉", jp: "マテ茶カップ", en: "Mate Cup" },

{ emoji: "🥣", jp: "ボウル", en: "Bowl" },
{ emoji: "🥛", jp: "コップ", en: "Glass" },
{ emoji: "🍶", jp: "とっくり", en: "Sake Bottle" },

{ emoji: "🫗", jp: "そそぐ", en: "Pouring Liquid" },

{ emoji: "🧊", jp: "こおり", en: "Ice" },
{ emoji: "🧋", jp: "タピオカカップ", en: "Bubble Tea Cup" },

{ emoji: "🫙", jp: "びん", en: "Jar" },
{ emoji: "🥫", jp: "かんづめ", en: "Canned Food" },

{ emoji: "🧃", jp: "ジュースパック", en: "Juice Box" },
{ emoji: "🍼", jp: "ほにゅうびん", en: "Baby Bottle" },

{ emoji: "🍯", jp: "はちみつポット", en: "Honey Pot" },
{ emoji: "🫙", jp: "ジャムびん", en: "Jam Jar" },

{ emoji: "🧈", jp: "バター", en: "Butter" },
{ emoji: "🫛", jp: "ピクルスびん", en: "Pickle Jar" },

{ emoji: "🥡", jp: "テイクアウトボックス", en: "Takeout Box" },
{ emoji: "🥢", jp: "はし", en: "Chopsticks" },

{ emoji: "🫙", jp: "ソースびん", en: "Sauce Bottle" },
{ emoji: "🫗", jp: "そそぐ", en: "Pouring" },

{ emoji: "🧺", jp: "キッチンバスケット", en: "Kitchen Basket" },

{ emoji: "🧽", jp: "スポンジ", en: "Sponge" },
{ emoji: "🧼", jp: "せっけん", en: "Soap" },
{ emoji: "🧻", jp: "ペーパータオル", en: "Paper Towel" },

{ emoji: "🪣", jp: "バケツ", en: "Bucket" },
{ emoji: "🧹", jp: "ほうき", en: "Broom" },

{ emoji: "🧯", jp: "しょうかき", en: "Fire Extinguisher" },

{ emoji: "🧺", jp: "ランドリーバスケット", en: "Laundry Basket" },

{ emoji: "🧪", jp: "キッチンラボびん", en: "Kitchen Tube" },

{ emoji: "🧫", jp: "プレート", en: "Dish Plate" },

{ emoji: "🧬", jp: "キッチンDNA（装飾）", en: "Kitchen DNA" },

{ emoji: "🧲", jp: "マグネット", en: "Magnet" },

{ emoji: "🧵", jp: "キッチンひも", en: "Kitchen Thread" },
{ emoji: "🪡", jp: "ぬいばり", en: "Sewing Needle" },

{ emoji: "🧶", jp: "あみもの", en: "Yarn" },

{ emoji: "📦", jp: "はこ", en: "Box" },
{ emoji: "📫", jp: "ポスト", en: "Mailbox" },

{ emoji: "📬", jp: "ゆうびん", en: "Mail" },

{ emoji: "🗑️", jp: "ごみばこ", en: "Trash Can" },

{ emoji: "🧊", jp: "アイスキューブ", en: "Ice Cube" },

{ emoji: "🫙", jp: "オイルびん", en: "Oil Bottle" },
{ emoji: "🫗", jp: "オイルをそそぐ", en: "Pouring Oil" },

{ emoji: "🍾", jp: "シャンパンボトル", en: "Champagne Bottle" },
{ emoji: "🥂", jp: "シャンパングラス", en: "Champagne Glasses" },

{ emoji: "🍷", jp: "ワイングラス", en: "Wine Glass" },
{ emoji: "🍸", jp: "カクテルグラス", en: "Cocktail Glass" },
{ emoji: "🍹", jp: "トロピカルドリンク", en: "Tropical Drink" },

{ emoji: "🍺", jp: "ビールジョッキ", en: "Beer Mug" },
{ emoji: "🍻", jp: "かんぱい", en: "Cheers" },

{ emoji: "🥤", jp: "ストローつきカップ", en: "Cup with Straw" },

{ emoji: "🫙", jp: "ミルクびん", en: "Milk Bottle" },

{ emoji: "🧂", jp: "しおつぼ", en: "Salt Shaker" },
{ emoji: "🫙", jp: "こしょうつぼ", en: "Pepper Shaker" },

{ emoji: "🍽️", jp: "プレートセット", en: "Plate Set" },

{ emoji: "🥣", jp: "スープボウル", en: "Soup Bowl" },

{ emoji: "🥛", jp: "グラス", en: "Glass" },

{ emoji: "🫗", jp: "みずをそそぐ", en: "Pouring Water" },

{ emoji: "🍶", jp: "おちょこ", en: "Sake Cup" },

{ emoji: "🍱", jp: "おべんとうばこ", en: "Bento Box" },

{ emoji: "🥡", jp: "テイクアウト", en: "Takeout" },

{ emoji: "🥢", jp: "はし", en: "Chopsticks" },

{ emoji: "🍴", jp: "ナイフとフォーク", en: "Knife and Fork" },

{ emoji: "🔪", jp: "シェフナイフ", en: "Chef Knife" },

{ emoji: "🧂", jp: "しお", en: "Salt" },

{ emoji: "🫙", jp: "スパイスびん", en: "Spice Jar" },

{ emoji: "🧊", jp: "こおり", en: "Ice" },

{ emoji: "🧽", jp: "スポンジ", en: "Sponge" },

{ emoji: "🧼", jp: "せっけん", en: "Soap" },

{ emoji: "🧻", jp: "ペーパータオル", en: "Paper Towel" },

{ emoji: "🗑️", jp: "ごみばこ", en: "Trash Can" },

{ emoji: "🪣", jp: "バケツ", en: "Bucket" },

{ emoji: "🧹", jp: "ほうき", en: "Broom" },

{ emoji: "🧺", jp: "かご", en: "Basket" },

{ emoji: "🧯", jp: "しょうかき", en: "Fire Extinguisher" },
{ emoji: "👹", jp: "おに", en: "Ogre" },
{ emoji: "👺", jp: "てんぐ", en: "Goblin" },

{ emoji: "💀", jp: "どくろ", en: "Skull" },
{ emoji: "☠️", jp: "どくろとほね", en: "Skull and Crossbones" },

{ emoji: "👻", jp: "ゆうれい", en: "Ghost" },
{ emoji: "👽", jp: "エイリアン", en: "Alien" },
{ emoji: "👾", jp: "インベーダー", en: "Space Invader" },

{ emoji: "🧟‍♂️", jp: "ゾンビ（男）", en: "Zombie" },
{ emoji: "🧟‍♀️", jp: "ゾンビ（女）", en: "Zombie" },

{ emoji: "🧛‍♂️", jp: "ヴァンパイア（男）", en: "Vampire" },
{ emoji: "🧛‍♀️", jp: "ヴァンパイア（女）", en: "Vampire" },

{ emoji: "🧙‍♂️", jp: "まほうつかい（男）", en: "Wizard" },
{ emoji: "🧙‍♀️", jp: "まほうつかい（女）", en: "Sorceress" },

{ emoji: "🧞‍♂️", jp: "ジーニー（男）", en: "Genie" },
{ emoji: "🧞‍♀️", jp: "ジーニー（女）", en: "Genie" },

{ emoji: "🧝‍♂️", jp: "エルフ（男）", en: "Elf" },
{ emoji: "🧝‍♀️", jp: "エルフ（女）", en: "Elf" },

{ emoji: "🧚‍♂️", jp: "ようせい（男）", en: "Fairy" },
{ emoji: "🧚‍♀️", jp: "ようせい（女）", en: "Fairy" },

{ emoji: "🐉", jp: "ドラゴン", en: "Dragon" },
{ emoji: "🐲", jp: "ドラゴンのかお", en: "Dragon Face" },

{ emoji: "🦄", jp: "ユニコーン", en: "Unicorn" },

{ emoji: "🦖", jp: "ティラノサウルス", en: "T-Rex" },
{ emoji: "🦕", jp: "ブラキオサウルス", en: "Sauropod" },

{ emoji: "🦇", jp: "こうもりモンスター", en: "Bat Monster" },
{ emoji: "🕷️", jp: "くもモンスター", en: "Spider Monster" },
{ emoji: "🕸️", jp: "くものす", en: "Spider Web" },

{ emoji: "🧌", jp: "トロール", en: "Troll" },
{ emoji: "🦫", jp: "ビーバーゴーレム", en: "Beaver Golem" },
{ emoji: "🦥", jp: "ナマケモノモンスター", en: "Sloth Monster" },
{ emoji: "🦨", jp: "スカンクモンスター", en: "Skunk Monster" },

{ emoji: "🧛", jp: "ヴァンパイア", en: "Vampire" },
{ emoji: "🧟", jp: "ゾンビ", en: "Zombie" },
{ emoji: "🧞", jp: "ジーニー", en: "Genie" },
{ emoji: "🧚", jp: "ようせい", en: "Fairy" },
{ emoji: "🧜", jp: "マーメイド", en: "Mermaid" },

{ emoji: "🧙", jp: "まほうつかい", en: "Wizard" },

{ emoji: "🪄", jp: "まほうのつえ", en: "Magic Wand" },
{ emoji: "🔮", jp: "クリスタルボール", en: "Crystal Ball" },

{ emoji: "🗡️", jp: "ダガー", en: "Dagger" },
{ emoji: "⚔️", jp: "けん", en: "Crossed Swords" },
{ emoji: "🛡️", jp: "シールド", en: "Shield" },

{ emoji: "🪓", jp: "バトルアックス", en: "Battle Axe" },
{ emoji: "🏹", jp: "ゆみ", en: "Bow and Arrow" },

{ emoji: "🔥", jp: "ほのおモンスター", en: "Fire Monster" },
{ emoji: "❄️", jp: "こおりモンスター", en: "Ice Monster" },
{ emoji: "⚡", jp: "でんきモンスター", en: "Lightning Monster" },
{ emoji: "🌪️", jp: "かぜモンスター", en: "Wind Monster" },
{ emoji: "🌊", jp: "みずモンスター", en: "Water Monster" },

{ emoji: "🪦", jp: "おばけのおはか", en: "Haunted Grave" },
{ emoji: "⚰️", jp: "かんおけ", en: "Coffin" },

{ emoji: "👁️", jp: "いっつめモンスター", en: "One-Eyed Monster" },
{ emoji: "👁️‍🗨️", jp: "めのまほう", en: "Eye Magic" },

{ emoji: "🧠", jp: "ブレインモンスター", en: "Brain Monster" },

{ emoji: "🫀", jp: "ハートモンスター", en: "Heart Monster" },

{ emoji: "🫁", jp: "ルームモンスター", en: "Lung Monster" },

{ emoji: "🦴", jp: "ほねモンスター", en: "Bone Monster" },

{ emoji: "🧱", jp: "ストーンゴーレム", en: "Stone Golem" },
{ emoji: "🪨", jp: "ロックゴーレム", en: "Rock Golem" },

{ emoji: "🧪", jp: "ポーションモンスター", en: "Potion Monster" },
{ emoji: "🧬", jp: "DNAモンスター", en: "DNA Monster" },

{ emoji: "🧫", jp: "ばいきんモンスター", en: "Microbe Monster" },
{ emoji: "🦠", jp: "ウイルスモンスター", en: "Virus Monster" },

{ emoji: "🧨", jp: "ばくはつモンスター", en: "Explosion Monster" },
{ emoji: "💣", jp: "ボムモンスター", en: "Bomb Monster" },

{ emoji: "🪐", jp: "うちゅうモンスター", en: "Cosmic Monster" },
{ emoji: "🌌", jp: "ぎんがモンスター", en: "Galaxy Monster" },

{ emoji: "🌋", jp: "かざんモンスター", en: "Volcano Monster" },
{ emoji: "⛰️", jp: "やまモンスター", en: "Mountain Monster" },

{ emoji: "🌲", jp: "もりのモンスター", en: "Forest Monster" },
{ emoji: "🌳", jp: "きのモンスター", en: "Tree Monster" },

{ emoji: "🌵", jp: "サボテンモンスター", en: "Cactus Monster" },

{ emoji: "🪵", jp: "ウッドゴーレム", en: "Wood Golem" },

{ emoji: "🪁", jp: "たこモンスター", en: "Kite Monster" },

{ emoji: "🪂", jp: "そらモンスター", en: "Sky Monster" },

{ emoji: "🛸", jp: "UFOモンスター", en: "UFO Monster" },

{ emoji: "🚀", jp: "ロケットモンスター", en: "Rocket Monster" },

{ emoji: "🛰️", jp: "えいせいモンスター", en: "Satellite Monster" },

{ emoji: "🧳", jp: "トラベルモンスター", en: "Travel Monster" },

{ emoji: "🪙", jp: "ゴールドモンスター", en: "Gold Monster" },

{ emoji: "💎", jp: "ジェムモンスター", en: "Gem Monster" },

{ emoji: "🗝️", jp: "かぎモンスター", en: "Key Monster" },

{ emoji: "🧭", jp: "コンパスモンスター", en: "Compass Monster" },
{ emoji: "🇯🇵", jp: "日本", en: "Japan" },
{ emoji: "🇺🇸", jp: "アメリカ", en: "United States" },
{ emoji: "🇬🇧", jp: "イギリス", en: "United Kingdom" },
{ emoji: "🇫🇷", jp: "フランス", en: "France" },
{ emoji: "🇩🇪", jp: "ドイツ", en: "Germany" },
{ emoji: "🇮🇹", jp: "イタリア", en: "Italy" },
{ emoji: "🇪🇸", jp: "スペイン", en: "Spain" },
{ emoji: "🇨🇦", jp: "カナダ", en: "Canada" },
{ emoji: "🇦🇺", jp: "オーストラリア", en: "Australia" },
{ emoji: "🇳🇿", jp: "ニュージーランド", en: "New Zealand" },

{ emoji: "🇨🇳", jp: "中国", en: "China" },
{ emoji: "🇰🇷", jp: "韓国", en: "South Korea" },
{ emoji: "🇹🇼", jp: "台湾", en: "Taiwan" },
{ emoji: "🇭🇰", jp: "香港", en: "Hong Kong" },
{ emoji: "🇸🇬", jp: "シンガポール", en: "Singapore" },
{ emoji: "🇮🇳", jp: "インド", en: "India" },
{ emoji: "🇵🇰", jp: "パキスタン", en: "Pakistan" },
{ emoji: "🇧🇩", jp: "バングラデシュ", en: "Bangladesh" },
{ emoji: "🇱🇰", jp: "スリランカ", en: "Sri Lanka" },
{ emoji: "🇳🇵", jp: "ネパール", en: "Nepal" },

{ emoji: "🇧🇷", jp: "ブラジル", en: "Brazil" },
{ emoji: "🇦🇷", jp: "アルゼンチン", en: "Argentina" },
{ emoji: "🇨🇱", jp: "チリ", en: "Chile" },
{ emoji: "🇵🇪", jp: "ペルー", en: "Peru" },
{ emoji: "🇨🇴", jp: "コロンビア", en: "Colombia" },
{ emoji: "🇲🇽", jp: "メキシコ", en: "Mexico" },
{ emoji: "🇺🇾", jp: "ウルグアイ", en: "Uruguay" },
{ emoji: "🇵🇾", jp: "パラグアイ", en: "Paraguay" },
{ emoji: "🇧🇴", jp: "ボリビア", en: "Bolivia" },
{ emoji: "🇪🇨", jp: "エクアドル", en: "Ecuador" },

{ emoji: "🇷🇺", jp: "ロシア", en: "Russia" },
{ emoji: "🇺🇦", jp: "ウクライナ", en: "Ukraine" },
{ emoji: "🇵🇱", jp: "ポーランド", en: "Poland" },
{ emoji: "🇨🇿", jp: "チェコ", en: "Czech Republic" },
{ emoji: "🇸🇰", jp: "スロバキア", en: "Slovakia" },
{ emoji: "🇭🇺", jp: "ハンガリー", en: "Hungary" },
{ emoji: "🇷🇴", jp: "ルーマニア", en: "Romania" },
{ emoji: "🇧🇬", jp: "ブルガリア", en: "Bulgaria" },
{ emoji: "🇷🇸", jp: "セルビア", en: "Serbia" },
{ emoji: "🇭🇷", jp: "クロアチア", en: "Croatia" },

{ emoji: "🇸🇪", jp: "スウェーデン", en: "Sweden" },
{ emoji: "🇳🇴", jp: "ノルウェー", en: "Norway" },
{ emoji: "🇩🇰", jp: "デンマーク", en: "Denmark" },
{ emoji: "🇫🇮", jp: "フィンランド", en: "Finland" },
{ emoji: "🇮🇸", jp: "アイスランド", en: "Iceland" },
{ emoji: "🇪🇪", jp: "エストニア", en: "Estonia" },
{ emoji: "🇱🇻", jp: "ラトビア", en: "Latvia" },
{ emoji: "🇱🇹", jp: "リトアニア", en: "Lithuania" },
{ emoji: "🇦🇱", jp: "アルバニア", en: "Albania" },
{ emoji: "🇲🇪", jp: "モンテネグロ", en: "Montenegro" },

{ emoji: "🇬🇷", jp: "ギリシャ", en: "Greece" },
{ emoji: "🇹🇷", jp: "トルコ", en: "Turkey" },
{ emoji: "🇨🇾", jp: "キプロス", en: "Cyprus" },
{ emoji: "🇮🇱", jp: "イスラエル", en: "Israel" },
{ emoji: "🇵🇸", jp: "パレスチナ", en: "Palestine" },
{ emoji: "🇱🇧", jp: "レバノン", en: "Lebanon" },
{ emoji: "🇯🇴", jp: "ヨルダン", en: "Jordan" },
{ emoji: "🇸🇦", jp: "サウジアラビア", en: "Saudi Arabia" },
{ emoji: "🇶🇦", jp: "カタール", en: "Qatar" },
{ emoji: "🇦🇪", jp: "アラブ首長国連邦", en: "United Arab Emirates" },

{ emoji: "🇰🇼", jp: "クウェート", en: "Kuwait" },
{ emoji: "🇧🇭", jp: "バーレーン", en: "Bahrain" },
{ emoji: "🇴🇲", jp: "オマーン", en: "Oman" },
{ emoji: "🇮🇶", jp: "イラク", en: "Iraq" },
{ emoji: "🇮🇷", jp: "イラン", en: "Iran" },
{ emoji: "🇸🇾", jp: "シリア", en: "Syria" },
{ emoji: "🇦🇲", jp: "アルメニア", en: "Armenia" },
{ emoji: "🇬🇪", jp: "ジョージア", en: "Georgia" },
{ emoji: "🇦🇿", jp: "アゼルバイジャン", en: "Azerbaijan" },
{ emoji: "🇰🇿", jp: "カザフスタン", en: "Kazakhstan" },

{ emoji: "🇺🇿", jp: "ウズベキスタン", en: "Uzbekistan" },
{ emoji: "🇹🇯", jp: "タジキスタン", en: "Tajikistan" },
{ emoji: "🇰🇬", jp: "キルギス", en: "Kyrgyzstan" },
{ emoji: "🇹🇲", jp: "トルクメニスタン", en: "Turkmenistan" },

{ emoji: "🇿🇦", jp: "南アフリカ", en: "South Africa" },
{ emoji: "🇪🇬", jp: "エジプト", en: "Egypt" },
{ emoji: "🇳🇬", jp: "ナイジェリア", en: "Nigeria" },
{ emoji: "🇰🇪", jp: "ケニア", en: "Kenya" },
{ emoji: "🇹🇿", jp: "タンザニア", en: "Tanzania" },
{ emoji: "🇺🇬", jp: "ウガンダ", en: "Uganda" },
{ emoji: "🇬🇭", jp: "ガーナ", en: "Ghana" },
{ emoji: "🇪🇹", jp: "エチオピア", en: "Ethiopia" },
{ emoji: "🇸🇩", jp: "スーダン", en: "Sudan" },
{ emoji: "🇲🇦", jp: "モロッコ", en: "Morocco" },

{ emoji: "🇩🇿", jp: "アルジェリア", en: "Algeria" },
{ emoji: "🇱🇾", jp: "リビア", en: "Libya" },
{ emoji: "🇹🇳", jp: "チュニジア", en: "Tunisia" },
{ emoji: "🇲🇱", jp: "マリ", en: "Mali" },
{ emoji: "🇸🇳", jp: "セネガル", en: "Senegal" },
{ emoji: "🇨🇮", jp: "コートジボワール", en: "Ivory Coast" },
{ emoji: "🇨🇲", jp: "カメルーン", en: "Cameroon" },
{ emoji: "🇿🇲", jp: "ザンビア", en: "Zambia" },
{ emoji: "🇿🇼", jp: "ジンバブエ", en: "Zimbabwe" },
{ emoji: "🇧🇼", jp: "ボツワナ", en: "Botswana" },

{ emoji: "🇦🇴", jp: "アンゴラ", en: "Angola" },
{ emoji: "🇲🇿", jp: "モザンビーク", en: "Mozambique" },
{ emoji: "🇲🇬", jp: "マダガスカル", en: "Madagascar" },
{ emoji: "🇨🇩", jp: "コンゴ民主共和国", en: "DR Congo" },
{ emoji: "🇨🇬", jp: "コンゴ共和国", en: "Republic of Congo" },
{ emoji: "🇬🇶", jp: "赤道ギニア", en: "Equatorial Guinea" },
{ emoji: "🇬🇦", jp: "ガボン", en: "Gabon" },
{ emoji: "🇧🇫", jp: "ブルキナファソ", en: "Burkina Faso" },
{ emoji: "🇧🇯", jp: "ベナン", en: "Benin" },
{ emoji: "🇹🇬", jp: "トーゴ", en: "Togo" },

{ emoji: "🇸🇱", jp: "シエラレオネ", en: "Sierra Leone" },
{ emoji: "🇱🇷", jp: "リベリア", en: "Liberia" },
{ emoji: "🇬🇲", jp: "ガンビア", en: "Gambia" },
{ emoji: "🇬🇳", jp: "ギニア", en: "Guinea" },
{ emoji: "🇬🇼", jp: "ギニアビサウ", en: "Guinea-Bissau" },
{ emoji: "🇨🇻", jp: "カーボベルデ", en: "Cape Verde" },
{ emoji: "🇲🇷", jp: "モーリタニア", en: "Mauritania" },
{ emoji: "🇳🇪", jp: "ニジェール", en: "Niger" },
{ emoji: "🇹🇩", jp: "チャド", en: "Chad" },
{ emoji: "🇸🇸", jp: "南スーダン", en: "South Sudan" },

{ emoji: "🇵🇭", jp: "フィリピン", en: "Philippines" },
{ emoji: "🇮🇩", jp: "インドネシア", en: "Indonesia" },
{ emoji: "🇲🇾", jp: "マレーシア", en: "Malaysia" },
{ emoji: "🇹🇭", jp: "タイ", en: "Thailand" },
{ emoji: "🇻🇳", jp: "ベトナム", en: "Vietnam" },
{ emoji: "🇰🇭", jp: "カンボジア", en: "Cambodia" },
{ emoji: "🇱🇦", jp: "ラオス", en: "Laos" },
{ emoji: "🇲🇲", jp: "ミャンマー", en: "Myanmar" },
{ emoji: "🇧🇳", jp: "ブルネイ", en: "Brunei" },
{ emoji: "🇹🇱", jp: "東ティモール", en: "Timor-Leste" },

{ emoji: "🇫🇯", jp: "フィジー", en: "Fiji" },
{ emoji: "🇼🇸", jp: "サモア", en: "Samoa" },
{ emoji: "🇹🇴", jp: "トンガ", en: "Tonga" },
{ emoji: "🇰🇮", jp: "キリバス", en: "Kiribati" },
{ emoji: "🇻🇺", jp: "バヌアツ", en: "Vanuatu" },
{ emoji: "🇳🇨", jp: "ニューカレドニア", en: "New Caledonia" },
{ emoji: "🇵🇬", jp: "パプアニューギニア", en: "Papua New Guinea" },
{ emoji: "🇸🇧", jp: "ソロモン諸島", en: "Solomon Islands" },
{ emoji: "🇲🇵", jp: "北マリアナ諸島", en: "Northern Mariana Islands" },
{ emoji: "🇬🇺", jp: "グアム", en: "Guam" },
{ emoji: "🧩", jp: "パズルピース", en: "Puzzle Piece" },
{ emoji: "🧠", jp: "のうみそ", en: "Brain" },
{ emoji: "🔢", jp: "すうじパズル", en: "Number Puzzle" },
{ emoji: "🔣", jp: "きごうパズル", en: "Symbol Puzzle" },

{ emoji: "➕", jp: "たしざん", en: "Addition" },
{ emoji: "➖", jp: "ひきざん", en: "Subtraction" },
{ emoji: "✖️", jp: "かけざん", en: "Multiplication" },
{ emoji: "➗", jp: "わりざん", en: "Division" },

{ emoji: "🔤", jp: "アルファベット", en: "Alphabet" },
{ emoji: "🔡", jp: "こもじ", en: "Lowercase Letters" },
{ emoji: "🔠", jp: "おおもじ", en: "Uppercase Letters" },

{ emoji: "🧮", jp: "そろばん", en: "Abacus" },
{ emoji: "📐", jp: "さんかくじょうぎ", en: "Triangle Ruler" },
{ emoji: "📏", jp: "ものさし", en: "Ruler" },

{ emoji: "🧭", jp: "コンパス", en: "Compass" },
{ emoji: "🧱", jp: "ブロックパズル", en: "Block Puzzle" },

{ emoji: "🧊", jp: "こおりブロック", en: "Ice Block" },
{ emoji: "🪨", jp: "いしブロック", en: "Stone Block" },
{ emoji: "🪵", jp: "きのブロック", en: "Wood Block" },

{ emoji: "🎲", jp: "さいころ", en: "Dice" },
{ emoji: "♟️", jp: "チェスピース", en: "Chess Piece" },
{ emoji: "♜", jp: "チェス（ルーク）", en: "Chess Rook" },
{ emoji: "♞", jp: "チェス（ナイト）", en: "Chess Knight" },

{ emoji: "🧩", jp: "ジグソーパズル", en: "Jigsaw Puzzle" },
{ emoji: "🧠", jp: "ブレイントレーニング", en: "Brain Training" },

{ emoji: "🧪", jp: "ロジックテスト", en: "Logic Test" },
{ emoji: "🧬", jp: "パターン解析", en: "Pattern Analysis" },

{ emoji: "🔍", jp: "さがす", en: "Search" },
{ emoji: "🔎", jp: "けんさ", en: "Inspect" },

{ emoji: "🗝️", jp: "なぞのかぎ", en: "Mystery Key" },
{ emoji: "🔐", jp: "ロック", en: "Lock" },
{ emoji: "🔓", jp: "ロックかいじょ", en: "Unlock" },

{ emoji: "🧰", jp: "パズルツール", en: "Puzzle Tools" },

{ emoji: "🧯", jp: "リセットボタン", en: "Reset Button" },

{ emoji: "🧼", jp: "クリア", en: "Clear" },

{ emoji: "🧽", jp: "そうじパズル", en: "Clean Puzzle" },

{ emoji: "🧺", jp: "ソートバスケット", en: "Sorting Basket" },

{ emoji: "🧵", jp: "つなぐパズル", en: "Thread Puzzle" },
{ emoji: "🪡", jp: "ぬうパズル", en: "Sewing Puzzle" },

{ emoji: "🧶", jp: "あみものパズル", en: "Yarn Puzzle" },

{ emoji: "🧊", jp: "スライドブロック", en: "Sliding Block" },

{ emoji: "🧩", jp: "マッチングピース", en: "Matching Piece" },

{ emoji: "🧠", jp: "きおくゲーム", en: "Memory Game" },

{ emoji: "🧮", jp: "けいさんゲーム", en: "Calculation Game" },

{ emoji: "🔢", jp: "ナンバーパズル", en: "Number Puzzle" },

{ emoji: "🔣", jp: "シンボルパズル", en: "Symbol Puzzle" },

{ emoji: "🧭", jp: "ナビゲーションパズル", en: "Navigation Puzzle" },

{ emoji: "🧱", jp: "ブロックロジック", en: "Block Logic" },

{ emoji: "🪨", jp: "ロックパズル", en: "Rock Puzzle" },

{ emoji: "🪵", jp: "ウッドパズル", en: "Wood Puzzle" },

{ emoji: "🧊", jp: "アイスパズル", en: "Ice Puzzle" },

{ emoji: "🧩", jp: "ジグソー", en: "Jigsaw" },

{ emoji: "🧠", jp: "ブレインゲーム", en: "Brain Game" },

{ emoji: "🧪", jp: "テストパズル", en: "Test Puzzle" },

{ emoji: "🧬", jp: "パターンパズル", en: "Pattern Puzzle" },

{ emoji: "🔍", jp: "さがすゲーム", en: "Search Game" },

{ emoji: "🔎", jp: "けんさゲーム", en: "Inspect Game" },

{ emoji: "🗝️", jp: "かぎパズル", en: "Key Puzzle" },

{ emoji: "🔐", jp: "ロックパズル", en: "Lock Puzzle" },

{ emoji: "🔓", jp: "アンロックパズル", en: "Unlock Puzzle" },

{ emoji: "🧰", jp: "ツールパズル", en: "Tool Puzzle" },

{ emoji: "🧯", jp: "リセットパズル", en: "Reset Puzzle" },

{ emoji: "🧼", jp: "クリアパズル", en: "Clear Puzzle" },

{ emoji: "🧽", jp: "そうじパズル", en: "Clean Puzzle" },

{ emoji: "🧺", jp: "ソートパズル", en: "Sort Puzzle" },

{ emoji: "🧵", jp: "つなぐパズル", en: "Thread Puzzle" },

{ emoji: "🪡", jp: "ぬうパズル", en: "Sew Puzzle" },

{ emoji: "🧶", jp: "あみものパズル", en: "Yarn Puzzle" },

{ emoji: "🧊", jp: "スライドパズル", en: "Slide Puzzle" },

{ emoji: "🧩", jp: "マッチングパズル", en: "Matching Puzzle" },

{ emoji: "🧠", jp: "きおくパズル", en: "Memory Puzzle" },

{ emoji: "🧮", jp: "けいさんパズル", en: "Calculation Puzzle" },
{ emoji: "🧭", jp: "コンパス", en: "Compass" },
{ emoji: "🗺️", jp: "ちず", en: "Map" },
{ emoji: "🧭", jp: "たんけんコンパス", en: "Explorer Compass" },

{ emoji: "🪙", jp: "コイン", en: "Coin" },
{ emoji: "💰", jp: "おたからぶくろ", en: "Treasure Bag" },
{ emoji: "💎", jp: "ほうせき", en: "Gemstone" },
{ emoji: "🗝️", jp: "かぎ", en: "Key" },
{ emoji: "🔑", jp: "ロックキー", en: "Lock Key" },

{ emoji: "🪨", jp: "いし", en: "Rock" },
{ emoji: "🪵", jp: "きのえだ", en: "Wood" },
{ emoji: "🧱", jp: "ブロック", en: "Brick" },

{ emoji: "🪓", jp: "おの", en: "Axe" },
{ emoji: "⛏️", jp: "つるはし", en: "Pickaxe" },
{ emoji: "🗡️", jp: "ダガー", en: "Dagger" },
{ emoji: "⚔️", jp: "けん", en: "Sword" },
{ emoji: "🏹", jp: "ゆみ", en: "Bow" },
{ emoji: "🛡️", jp: "シールド", en: "Shield" },

{ emoji: "🧭", jp: "ナビゲーション", en: "Navigation" },
{ emoji: "🧭", jp: "たんけんナビ", en: "Explorer Navigation" },

{ emoji: "🧗‍♂️", jp: "クライミング（男）", en: "Climbing" },
{ emoji: "🧗‍♀️", jp: "クライミング（女）", en: "Climbing" },

{ emoji: "🧗", jp: "たんけんクライミング", en: "Explorer Climbing" },

{ emoji: "🧭", jp: "たんけんツール", en: "Explorer Tools" },
{ emoji: "🧰", jp: "どうぐばこ", en: "Toolbox" },

{ emoji: "🧪", jp: "ポーション", en: "Potion" },
{ emoji: "🧬", jp: "まほうのしんけい", en: "Magic DNA" },

{ emoji: "🧫", jp: "ばいきんプレート", en: "Microbe Plate" },
{ emoji: "🦠", jp: "ウイルス", en: "Virus" },

{ emoji: "🧨", jp: "ばくだん", en: "Explosive" },
{ emoji: "💣", jp: "ボム", en: "Bomb" },

{ emoji: "🪄", jp: "まほうのつえ", en: "Magic Wand" },
{ emoji: "🔮", jp: "クリスタルボール", en: "Crystal Ball" },

{ emoji: "🧙‍♂️", jp: "まほうつかい（男）", en: "Wizard" },
{ emoji: "🧙‍♀️", jp: "まほうつかい（女）", en: "Sorceress" },

{ emoji: "🧛", jp: "ヴァンパイア", en: "Vampire" },
{ emoji: "🧟", jp: "ゾンビ", en: "Zombie" },
{ emoji: "👹", jp: "おに", en: "Ogre" },
{ emoji: "👺", jp: "てんぐ", en: "Goblin" },

{ emoji: "🐉", jp: "ドラゴン", en: "Dragon" },
{ emoji: "🐲", jp: "ドラゴンのかお", en: "Dragon Face" },

{ emoji: "🦄", jp: "ユニコーン", en: "Unicorn" },

{ emoji: "🌋", jp: "かざん", en: "Volcano" },
{ emoji: "⛰️", jp: "やま", en: "Mountain" },
{ emoji: "🏔️", jp: "ゆきやま", en: "Snowy Mountain" },

{ emoji: "🌲", jp: "もり", en: "Forest" },
{ emoji: "🌳", jp: "き", en: "Tree" },
{ emoji: "🌴", jp: "やしのき", en: "Palm Tree" },
{ emoji: "🌵", jp: "サボテン", en: "Cactus" },

{ emoji: "🏕️", jp: "キャンプ", en: "Camping" },
{ emoji: "🏞️", jp: "こくりつこうえん", en: "National Park" },
{ emoji: "🏝️", jp: "しま", en: "Island" },
{ emoji: "🏜️", jp: "さばく", en: "Desert" },

{ emoji: "🛶", jp: "カヌー", en: "Canoe" },
{ emoji: "🚣‍♂️", jp: "ボートこぎ（男）", en: "Rowing" },
{ emoji: "🚣‍♀️", jp: "ボートこぎ（女）", en: "Rowing" },

{ emoji: "🧭", jp: "たんけんコンパス", en: "Adventure Compass" },

{ emoji: "🧳", jp: "たびかばん", en: "Travel Bag" },
{ emoji: "🎒", jp: "リュック", en: "Backpack" },

{ emoji: "🛞", jp: "タイヤ", en: "Wheel" },
{ emoji: "🚪", jp: "ドア", en: "Door" },

{ emoji: "🪟", jp: "まど", en: "Window" },

{ emoji: "🗿", jp: "モアイ", en: "Moai" },
{ emoji: "🗼", jp: "タワー", en: "Tower" },
{ emoji: "🗽", jp: "じゆうのめがみ", en: "Statue of Liberty" },

{ emoji: "🧭", jp: "たんけんガイド", en: "Adventure Guide" },

{ emoji: "🧗", jp: "たんけんクライマー", en: "Adventure Climber" },

{ emoji: "🧭", jp: "たんけんマーカー", en: "Adventure Marker" },

{ emoji: "🧭", jp: "たんけんポイント", en: "Adventure Point" },

{ emoji: "🧭", jp: "たんけんルート", en: "Adventure Route" },

{ emoji: "🧭", jp: "たんけんスポット", en: "Adventure Spot" },

{ emoji: "🧭", jp: "たんけんエリア", en: "Adventure Area" },

{ emoji: "🧭", jp: "たんけんゾーン", en: "Adventure Zone" },

{ emoji: "🧭", jp: "たんけんフィールド", en: "Adventure Field" },

{ emoji: "🧭", jp: "たんけんランド", en: "Adventure Land" },

{ emoji: "🧭", jp: "たんけんワールド", en: "Adventure World" }
  ];
  // ★ 1000個のアイテムを実際に作る（リンク固定）
  const items = [];
  for (let i = 0; i < 1000; i++) {
    const base = baseItems[i % baseItems.length];
    items.push({
      emoji: base.emoji,
      jp: base.jp,
      en: base.en
    });
  }

  // ★ ランダム選択
  const index = Math.floor(Math.random() * items.length);
  const item = items[index];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // ★ 表示（英語のカッコなし）
  document.getElementById('title').textContent = randomMessage;
  document.getElementById('count').textContent = `押した回数：${count}`;
  document.getElementById('animalJP').textContent = `${item.emoji} ${item.jp}`;
  document.getElementById('animalEN').textContent = `${item.en}`;
});
const CACHE_NAME = 'myapp-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
