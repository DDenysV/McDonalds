let menu = [
        {
            id: 1,
            productName: "Курячий бульйон",
            productDescription: "",
            productWeiht: "365 г",
            ingredients: "Курячий бульйон, куряче філе, яйце, локшина і духмяні трави",
            price: 56,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/brodo-di-galina.jpeg",
            keywords: ['гарячі страви', 'супи'],
            Weiht : 365,
            stopList : false,
            like : 0

        },
        {
            id: 2,
            productName: "Сирний суп",
            productWeiht: "300/60 г",
            ingredients: "Cирний крем-суп з дор блю, чеддером, вершковим сиром, беконом. Брускета з сирним кремом",
            price: 120,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/syrnyj-sup.jpeg",
            keywords: ['гарячі страви', "супи"],
            Weiht : 360,
            stopList : false,
            like : 0 ,
            
        },
        {
            id: 3,
            productName: "Цезар",
            productWeiht: "275 г",
            ingredients: "Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar",
            price: 130,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg",
            keywords: ['салати'],
            Weiht: 275,
            stopList : false,
            like : 0 
        },
        {

            id: 4,
            productName: "Цитрусовий з креветками",
            productWeiht: "220 г",
            ingredients: "Креветки, апельсин, грейпфрут, мiкс салатiв з цитрусовим соусом та мигдалем, помідори черрі",
            price: 160,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/citrusovyj-s-krevetkami_1562848610626.jpeg",
            keywords: ['салати'],
            datarestoratoratin : this,
            Weiht : 220,
            stopList : false,
            like : 0
        },
        {
            id: 5,
            productName: "Картопля фрi",
            productWeiht: "140 г",
            ingredients: "Картопля фрi",
            productDescription: "кусочки картофеля, обжаренные в большом количестве сильно нагретого растительного масла",
            price: 30,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/kartofel-fri_1550770471902.jpeg",
            keywords: ['гарячі страви', 'гарніри'],
            Weiht : 140,
            stopList : false,
            like : 0
        },
        {
            id: 6,
            productName: "Стейк зі свинини гриль",
            productWeiht: "180/150/30 г",
            ingredients: "Стейк зі свинини на грилі зі смаженою картоплею та грибами з соусом BBQ",
            price: 150,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/stejk-so-cvininy-gril.jpeg",
            keywords: ['гарячі страви', 'стейки'],
            Weiht : 350,
            stopList : false,
            like : 0
        },
        {
            id: 7,
            productName: "Курячі крильця в соусі",
            productWeiht: "250/100 г",
            ingredients: "Курячі крильця в пряному соусі Приван, карпопляні діпи",
            price: 100,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/kurinye-krylyshki-v-souse_156284838828.jpeg",
            keywords: ['гарячі страви', 'мясо'],
            Weiht : 350,
            stopList : false,
            like : 0
        },
        {
            id: 8,
            productName: "Наполеон із солоною карамеллю",
            productWeiht: "120 г",
            ingredients: "Ніжні листкові коржі з карамельним соусом",
            price: 70,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/napoleon-s-solenoj-karamelyu.jpeg",
            keywords: ['десерти'],
            Weiht : 120,
            stopList : false,
            like : 0 
        },
        {
            id: 9,
            productName: "Карбонара",
            productWeiht: "500 г ",
            ingredients: "Сир моцарела, шинка, грудинка, печериці, пармезан, помідори черрі",
            price: 175,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/karbonara_1567060586370.jpeg",
            keywords: ['піца'],
            Weiht : 175,
            stopList : false,
            like : 0 
        },
        {
            id: 10,
            productName: "Піца Мисливська",
            productWeiht: "500 г",
            ingredients: "Мисливські ковбаски, молочні ковбаски, сир моцарелла, гливи, печериці, солодка цибуля, перець болгарський, соус BBQ, соус марінара, петрушка",
            price: 129,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/picca-ohotnichya.jpeg",
            keywords: ['піца'],
            Weiht : 500,
            stopList : false,
            like : 0
        },
        {
            id: 11,
            productName: "Кохання - це XXL",
            productWeiht: "78 шт., 1980 г",
            ingredients: `Рол №1 Рол з філе лосося, сиром Філадельфія, авокадо та огірком– 2 шт. Рол №2 Рол з крабом кімчі, авокадо та огірком в ікрі тобіко Рол №3 Рол з філе лосося, сиром Філадельфія, Тамаго, огірком та соусом манго-чилі Рол №4 Рол з сурімі та імбиром Рол №5 Рол з  курячим філе, сиром Філадельфія, сиром Хохланд, болгарським перцем, огірком, салатом Ромен та соусом Спайсі Рол №6  з чукою та соусом Гомадаре з кунжутом Рол №7 Рол з вугрем, сиром Філадельфія, омлетом Тамаго, грушею та соусом унагі в білому кунжуті Рол №8 Рол з філе лосося Ролл №9 Рол з огiрком Гункан з креветками, червоною ікрою, манго та огірком – 3 шт. Гункан з крабом кімчі, Тамаго, огірком та кукурудзою – 3 шт.`,
            price: 900,
            productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/lyubov-eto-xxl.jpeg",
            keywords: ["суші"],
            Weiht : 1980,
            stopList : false,
            like : 0 
        },
    ]

export default menu