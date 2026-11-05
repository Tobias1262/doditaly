
"use strict";

// DODITALY - MENU MULTILINGÜE
// Orden de traducciones:
// ES, IT, EN, FR, DE, CA, RU, PT

const idiomas = ["es", "it", "en", "fr", "de", "ca", "ru", "pt"];
let idioma = "es";
let categoriaActual = "todos";

function T(...valores) {
  return valores;
}

function traducir(valor) {
  if (typeof valor === "string") return valor;
  if (!Array.isArray(valor)) return "";
  return valor[idiomas.indexOf(idioma)] || valor[0] || "";
}

const textos = {
  portada: T(
    "Sabores auténticos de Italia",
    "Sapori autentici d'Italia",
    "Authentic flavours of Italy",
    "Saveurs authentiques d'Italie",
    "Authentische Aromen Italiens",
    "Sabors autèntics d'Itàlia",
    "Настоящие вкусы Италии",
    "Sabores autênticos de Itália"
  ),
  idioma: T(
    "Elegí tu idioma", "Scegli la tua lingua",
    "Choose your language", "Choisissez votre langue",
    "Wählen Sie Ihre Sprache", "Tria el teu idioma",
    "Выберите язык", "Escolha o seu idioma"
  ),
  buscar: T(
    "¿Qué te apetece hoy?", "Cosa ti va oggi?",
    "What would you like today?", "Qu'est-ce qui vous tente ?",
    "Worauf haben Sie heute Lust?", "Què et ve de gust avui?",
    "Что бы вы хотели сегодня?", "O que lhe apetece hoje?"
  ),
  placeholder: T(
    "Buscar productos...", "Cerca prodotti...",
    "Search products...", "Rechercher des produits...",
    "Produkte suchen...", "Cerca productes...",
    "Поиск блюд...", "Pesquisar produtos..."
  ),
  todos: T(
    "Todo", "Tutto", "All", "Tout",
    "Alle", "Tot", "Все", "Tudo"
  ),
  sinResultados: T(
    "No encontramos productos con ese nombre.",
    "Nessun prodotto trovato.",
    "No matching products found.",
    "Aucun produit trouvé.",
    "Keine passenden Produkte gefunden.",
    "No hem trobat cap producte.",
    "Ничего не найдено.",
    "Nenhum produto encontrado."
  ),
  llevar: T(
    "Para llevar", "Da asporto", "Takeaway",
    "À emporter", "Zum Mitnehmen", "Per emportar",
    "С собой", "Para levar"
  ),
  botella: T(
    "Botella", "Bottiglia", "Bottle", "Bouteille",
    "Flasche", "Ampolla", "Бутылка", "Garrafa"
  ),
  copa: T(
    "Copa", "Calice", "Glass", "Verre",
    "Glas", "Copa", "Бокал", "Copo"
  ),
  aviso: T(
    "Información y alérgenos",
    "Informazioni e allergeni",
    "Information and allergens",
    "Informations et allergènes",
    "Informationen und Allergene",
    "Informació i al·lèrgens",
    "Информация и аллергены",
    "Informações e alergénios"
  ),
  avisoTexto: T(
    "Consultá con nuestro personal antes de pedir si tenés alergias o intolerancias alimentarias.",
    "In caso di allergie o intolleranze alimentari, consulta il personale prima di ordinare.",
    "If you have food allergies or intolerances, please ask our staff before ordering.",
    "En cas d'allergies ou d'intolérances alimentaires, consultez notre personnel avant de commander.",
    "Bei Lebensmittelallergien oder Unverträglichkeiten fragen Sie bitte vor der Bestellung unser Personal.",
    "Si tens al·lèrgies o intoleràncies alimentàries, consulta el personal abans de demanar.",
    "Если у вас есть пищевая аллергия или непереносимость, сообщите персоналу перед заказом.",
    "Se tiver alergias ou intolerâncias alimentares, consulte a nossa equipa antes de pedir."
  ),
  gluten: T(
    "Los productos sin gluten pueden estar expuestos a contaminación cruzada.",
    "I prodotti senza glutine possono essere soggetti a contaminazione crociata.",
    "Gluten-free products may be subject to cross-contamination.",
    "Les produits sans gluten peuvent subir une contamination croisée.",
    "Glutenfreie Produkte können Kreuzkontaminationen ausgesetzt sein.",
    "Els productes sense gluten poden patir contaminació encreuada.",
    "Продукты без глютена могут подвергаться перекрёстному загрязнению.",
    "Os produtos sem glúten podem estar sujeitos a contaminação cruzada."
  )
};

// Cada producto:
// nombre, descripción, precio, precio para llevar opcional.
// Las descripciones son arrays con 8 traducciones.

function P(nombre, descripcion, precio, llevar = null) {
  return { nombre, descripcion, precio, llevar };
}

const carta = [
  {
    id: "focaccias",
    nombre: T("Focaccias", "Focacce", "Focaccias", "Focaccias", "Focaccias", "Focaccies", "Фокачча", "Focaccias"),
    imagen: "images/focaccia.jpg",
    productos: [
      P("Danilo", T(
        "Bresaola de ternera, alcachofas en aceite, stracciatella de burrata y crema de pesto.",
        "Bresaola di manzo, carciofi sott'olio, stracciatella di burrata e crema al pesto.",
        "Beef bresaola, artichokes in oil, burrata stracciatella and pesto cream.",
        "Bresaola de bœuf, artichauts à l'huile, stracciatella de burrata et crème au pesto.",
        "Rinderbresaola, Artischocken in Öl, Burrata-Stracciatella und Pesto-Creme.",
        "Bresaola de vedella, carxofes en oli, stracciatella de burrata i crema de pesto.",
        "Вяленая говядина брезаола, артишоки в масле, страчателла из бурраты и крем песто.",
        "Bresaola de vaca, alcachofras em azeite, stracciatella de burrata e creme de pesto."
      ), "13,00 €", "10,00 €"),

      P("Domenico", T(
        "Mortadela con trufa, stracciatella de burrata, rúcula, pistacho crocante y ricotta cremosa.",
        "Mortadella al tartufo, stracciatella di burrata, rucola, pistacchio croccante e ricotta cremosa.",
        "Truffle mortadella, burrata stracciatella, rocket, crunchy pistachios and creamy ricotta.",
        "Mortadelle à la truffe, stracciatella de burrata, roquette, pistaches croquantes et ricotta crémeuse.",
        "Trüffelmortadella, Burrata-Stracciatella, Rucola, knusprige Pistazien und cremiger Ricotta.",
        "Mortadel·la amb tòfona, stracciatella de burrata, ruca, festucs cruixents i ricotta cremosa.",
        "Мортаделла с трюфелем, страчателла из бурраты, руккола, хрустящие фисташки и нежная рикотта.",
        "Mortadela com trufa, stracciatella de burrata, rúcula, pistácio crocante e ricota cremosa."
      ), "13,00 €", "10,00 €"),

      P("Fabrizio", T(
        "Coppa italiana, queso de búfala, tomate, rúcula y crema de trufa.",
        "Coppa italiana, mozzarella di bufala, pomodoro, rucola e crema al tartufo.",
        "Italian coppa, buffalo mozzarella, tomato, rocket and truffle cream.",
        "Coppa italienne, mozzarella de bufflonne, tomate, roquette et crème de truffe.",
        "Italienische Coppa, Büffelmozzarella, Tomate, Rucola und Trüffelcreme.",
        "Coppa italiana, mozzarella de búfala, tomàquet, ruca i crema de tòfona.",
        "Итальянская коппа, моцарелла из буйволиного молока, помидор, руккола и трюфельный крем.",
        "Coppa italiana, mozzarella de búfala, tomate, rúcula e creme de trufa."
      ), "13,00 €", "10,00 €"),

      P("Giacomo", T(
        "Calabacín a la parrilla, berenjenas asadas, tomate, rúcula, crema de trufa y queso de búfala.",
        "Zucchine grigliate, melanzane arrosto, pomodoro, rucola, crema al tartufo e mozzarella di bufala.",
        "Grilled courgette, roasted aubergine, tomato, rocket, truffle cream and buffalo mozzarella.",
        "Courgettes grillées, aubergines rôties, tomate, roquette, crème de truffe et mozzarella de bufflonne.",
        "Gegrillte Zucchini, geröstete Auberginen, Tomate, Rucola, Trüffelcreme und Büffelmozzarella.",
        "Carbassó a la graella, albergínies rostides, tomàquet, ruca, crema de tòfona i mozzarella de búfala.",
        "Цукини на гриле, запечённые баклажаны, помидор, руккола, трюфельный крем и буйволиная моцарелла.",
        "Curgete grelhada, beringela assada, tomate, rúcula, creme de trufa e mozzarella de búfala."
      ), "12,00 €", "9,50 €"),

      P("Giovanni", T(
        "Salami Milano, tomates secos, berenjenas asadas y crema de pecorino.",
        "Salame Milano, pomodori secchi, melanzane arrosto e crema di pecorino.",
        "Milano salami, sun-dried tomatoes, roasted aubergines and pecorino cream.",
        "Salami Milano, tomates séchées, aubergines rôties et crème de pecorino.",
        "Mailänder Salami, getrocknete Tomaten, geröstete Auberginen und Pecorino-Creme.",
        "Salami Milano, tomàquets secs, albergínies rostides i crema de pecorino.",
        "Салями Милано, вяленые томаты, запечённые баклажаны и крем из пекорино.",
        "Salame Milano, tomate seco, beringela assada e creme de pecorino."
      ), "13,00 €", "10,00 €"),

      P("Giuseppe", T(
        "Porchetta de Ariccia, berenjenas asadas, tomates secos y ricotta cremosa.",
        "Porchetta di Ariccia, melanzane arrosto, pomodori secchi e ricotta cremosa.",
        "Ariccia porchetta, roasted aubergines, sun-dried tomatoes and creamy ricotta.",
        "Porchetta d'Ariccia, aubergines rôties, tomates séchées et ricotta crémeuse.",
        "Porchetta aus Ariccia, geröstete Auberginen, getrocknete Tomaten und cremiger Ricotta.",
        "Porchetta d'Ariccia, albergínies rostides, tomàquets secs i ricotta cremosa.",
        "Поркетта из Ариччи, запечённые баклажаны, вяленые томаты и нежная рикотта.",
        "Porchetta de Ariccia, beringela assada, tomate seco e ricota cremosa."
      ), "13,00 €", "10,50 €"),

      P("Pietro", T(
        "Speck italiano, queso de búfala, rúcula y pasta de aceitunas negras.",
        "Speck italiano, mozzarella di bufala, rucola e paté di olive nere.",
        "Italian speck, buffalo mozzarella, rocket and black olive paste.",
        "Speck italien, mozzarella de bufflonne, roquette et tapenade d'olives noires.",
        "Italienischer Speck, Büffelmozzarella, Rucola und schwarze Olivenpaste.",
        "Speck italià, mozzarella de búfala, ruca i pasta d'olives negres.",
        "Итальянский шпек, буйволиная моцарелла, руккола и паста из чёрных оливок.",
        "Speck italiano, mozzarella de búfala, rúcula e pasta de azeitonas pretas."
      ), "13,00 €", "10,00 €"),

      P("Salvatore", T(
        "Spianata picante, pimientos asados, aceitunas negras y crema de 'nduja de Calabria.",
        "Spianata piccante, peperoni arrostiti, olive nere e crema di 'nduja calabrese.",
        "Spicy spianata salami, roasted peppers, black olives and Calabrian 'nduja cream.",
        "Spianata piquante, poivrons grillés, olives noires et crème de 'nduja calabraise.",
        "Scharfe Spianata-Salami, geröstete Paprika, schwarze Oliven und kalabrische 'Nduja-Creme.",
        "Spianata picant, pebrots escalivats, olives negres i crema de 'nduja calabresa.",
        "Острая салями спьяната, запечённый перец, чёрные оливки и калабрийский крем ндуя.",
        "Spianata picante, pimentos assados, azeitonas pretas e creme de 'nduja da Calábria."
      ), "12,50 €", "9,50 €"),

      P("Francesco", T(
        "Cotoletta estilo pizzaiola, salsa de tomate, jamón cocido, mozzarella gratinada y hojas verdes.",
        "Cotoletta alla pizzaiola, salsa di pomodoro, prosciutto cotto, mozzarella gratinata e insalata mista.",
        "Breaded cutlet pizzaiola-style, tomato sauce, cooked ham, melted mozzarella and mixed greens.",
        "Escalope panée façon pizzaiola, sauce tomate, jambon cuit, mozzarella gratinée et salade verte.",
        "Paniertes Schnitzel nach Pizzaiola-Art, Tomatensauce, Kochschinken, überbackener Mozzarella und Blattsalat.",
        "Escalopa arrebossada a la pizzaiola, salsa de tomàquet, pernil cuit, mozzarella gratinada i fulles verdes.",
        "Отбивная в панировке по-пиццайольски, томатный соус, варёная ветчина, запечённая моцарелла и зелень.",
        "Panado à pizzaiola, molho de tomate, fiambre, mozzarella gratinada e folhas verdes."
      ), "15,00 €", "11,50 €")
    ]
  },

  {
    id: "pinsas",
    nombre: T("Pinsas", "Pinse", "Roman pinsas", "Pinsas romaines", "Römische Pinsa", "Pinses romanes", "Римская пинса", "Pinsas romanas"),
    imagen: "images/pinsa.jpg",
    nota: T(
      "Cada pinsa lleva los ingredientes de la focaccia del mismo nombre.",
      "Ogni pinsa contiene gli ingredienti della focaccia con lo stesso nome.",
      "Each pinsa has the same ingredients as the focaccia of the same name.",
      "Chaque pinsa contient les mêmes ingrédients que la focaccia du même nom.",
      "Jede Pinsa enthält die Zutaten der gleichnamigen Focaccia.",
      "Cada pinsa porta els ingredients de la focaccia del mateix nom.",
      "Каждая пинса содержит те же ингредиенты, что и одноимённая фокачча.",
      "Cada pinsa tem os mesmos ingredientes da focaccia com o mesmo nome."
    ),
    productos: [
      P("Danilo", "", "15,00 €"),
      P("Domenico", "", "15,00 €"),
      P("Fabrizio", "", "15,00 €"),
      P("Pietro", "", "15,00 €"),
      P("Giacomo", "", "14,00 €"),
      P("Giovanni", "", "15,00 €"),
      P("Salvatore", "", "15,00 €"),
      P("Giuseppe", "", "16,00 €")
    ]
  },

  {
    id: "antipasti",
    nombre: T("Entrantes", "Antipasti", "Starters", "Entrées", "Vorspeisen", "Entrants", "Закуски", "Entradas"),
    imagen: "images/burrata.jpg",
    productos: [
      P("Burrata Pugliese", T(
        "Queso burrata acompañado de hojas verdes y tomates.",
        "Burrata pugliese accompagnata da insalata mista e pomodori.",
        "Puglian burrata cheese served with mixed greens and tomatoes.",
        "Burrata des Pouilles accompagnée de salade verte et de tomates.",
        "Burrata aus Apulien mit Blattsalat und Tomaten.",
        "Burrata de la Pulla amb fulles verdes i tomàquets.",
        "Буррата из Апулии с зеленью и помидорами.",
        "Burrata da Apúlia acompanhada de salada verde e tomate."
      ), "14,50 €"),

      P("Carpaccio de Bresaola", T(
        "Ternera curada, rúcula, parmesano y aderezo de limón.",
        "Bresaola di manzo, rucola, parmigiano e condimento al limone.",
        "Cured beef bresaola, rocket, Parmesan and lemon dressing.",
        "Bresaola de bœuf, roquette, parmesan et vinaigrette au citron.",
        "Luftgetrocknetes Rindfleisch, Rucola, Parmesan und Zitronendressing.",
        "Vedella curada, ruca, parmesà i amaniment de llimona.",
        "Вяленая говядина, руккола, пармезан и лимонная заправка.",
        "Carne de vaca curada, rúcula, parmesão e molho de limão."
      ), "14,50 €"),

      P("Ensalada Caprese", T(
        "Tomate, mozzarella de búfala, hojas verdes, aceitunas y pesto.",
        "Pomodoro, mozzarella di bufala, insalata mista, olive e pesto.",
        "Tomato, buffalo mozzarella, mixed greens, olives and pesto.",
        "Tomate, mozzarella de bufflonne, salade verte, olives et pesto.",
        "Tomate, Büffelmozzarella, Blattsalat, Oliven und Pesto.",
        "Tomàquet, mozzarella de búfala, fulles verdes, olives i pesto.",
        "Помидоры, буйволиная моцарелла, зелень, оливки и песто.",
        "Tomate, mozzarella de búfala, salada verde, azeitonas e pesto."
      ), "14,00 €"),

      P("Ensalada César", T(
        "Hojas verdes, pollo, parmesano, pan tostado y salsa César.",
        "Insalata mista, pollo, parmigiano, crostini e salsa Caesar.",
        "Mixed greens, chicken, Parmesan, croutons and Caesar dressing.",
        "Salade verte, poulet, parmesan, croûtons et sauce César.",
        "Blattsalat, Hähnchen, Parmesan, Croutons und Caesar-Dressing.",
        "Fulles verdes, pollastre, parmesà, crostons i salsa Cèsar.",
        "Листовой салат, курица, пармезан, гренки и соус Цезарь.",
        "Salada verde, frango, parmesão, croutons e molho César."
      ), "14,00 €"),

      P("Vitello Tonnato", T(
        "Ternera con salsa de atún y alcaparras.",
        "Vitello con salsa tonnata e capperi.",
        "Veal with tuna sauce and capers.",
        "Veau à la sauce au thon et aux câpres.",
        "Kalbfleisch mit Thunfischsauce und Kapern.",
        "Vedella amb salsa de tonyina i tàperes.",
        "Телятина под соусом из тунца с каперсами.",
        "Vitela com molho de atum e alcaparras."
      ), "15,00 €"),

      P("Melanzane alla Parmigiana", T(
        "Berenjenas con salsa de tomate, mozzarella y parmesano.",
        "Melanzane con salsa di pomodoro, mozzarella e parmigiano.",
        "Aubergines with tomato sauce, mozzarella and Parmesan.",
        "Aubergines à la sauce tomate, mozzarella et parmesan.",
        "Auberginen mit Tomatensauce, Mozzarella und Parmesan.",
        "Albergínies amb salsa de tomàquet, mozzarella i parmesà.",
        "Баклажаны с томатным соусом, моцареллой и пармезаном.",
        "Beringela com molho de tomate, mozzarella e parmesão."
      ), "16,00 €")
    ]
  },

  {
    id: "tablas",
    nombre: T("Tablas italianas", "Taglieri", "Italian sharing boards", "Planches italiennes", "Italienische Platten", "Taules italianes", "Итальянские ассорти", "Tábuas italianas"),
    imagen: "images/tagliere.jpg",
    productos: [
      P(T("Embutidos", "Salumi", "Cured meats", "Charcuteries", "Wurstwaren", "Embotits", "Мясные деликатесы", "Enchidos"), T(
        "Selección de embutidos italianos, aceitunas y pan de focaccia.",
        "Selezione di salumi italiani, olive e focaccia.",
        "Selection of Italian cured meats, olives and focaccia bread.",
        "Sélection de charcuteries italiennes, olives et focaccia.",
        "Auswahl italienischer Wurstwaren, Oliven und Focaccia.",
        "Selecció d'embotits italians, olives i pa de focaccia.",
        "Ассорти итальянских мясных деликатесов, оливки и фокачча.",
        "Seleção de enchidos italianos, azeitonas e focaccia."
      ), "16,50 €"),

      P("Formaggi", T(
        "Selección de quesos italianos, mermelada de tomate, aceitunas y focaccia.",
        "Selezione di formaggi italiani, confettura di pomodoro, olive e focaccia.",
        "Selection of Italian cheeses, tomato jam, olives and focaccia.",
        "Sélection de fromages italiens, confiture de tomate, olives et focaccia.",
        "Auswahl italienischer Käsesorten, Tomatenkonfitüre, Oliven und Focaccia.",
        "Selecció de formatges italians, melmelada de tomàquet, olives i focaccia.",
        "Ассорти итальянских сыров, томатный джем, оливки и фокачча.",
        "Seleção de queijos italianos, doce de tomate, azeitonas e focaccia."
      ), "18,00 €"),

      P("Tagliere Misto", T(
        "Selección de embutidos y quesos italianos, aceitunas y focaccia.",
        "Selezione di salumi e formaggi italiani, olive e focaccia.",
        "Selection of Italian cured meats and cheeses, olives and focaccia.",
        "Sélection de charcuteries et fromages italiens, olives et focaccia.",
        "Auswahl italienischer Wurst- und Käsesorten, Oliven und Focaccia.",
        "Selecció d'embotits i formatges italians, olives i focaccia.",
        "Ассорти итальянских мясных деликатесов и сыров, оливки и фокачча.",
        "Seleção de enchidos e queijos italianos, azeitonas e focaccia."
      ), "29,00 €")
    ]
  },

  {
    id: "pastas",
    nombre: T("Pastas", "Le Paste", "Pasta", "Pâtes", "Pasta", "Pastes", "Паста", "Massas"),
    imagen: "images/pasta.jpg",
    nota: T(
      "Salsas a elección: pomodoro, pesto, scarparo, putanesca o ajo, aceite y guindilla.",
      "Salse a scelta: pomodoro, pesto, scarparo, puttanesca o aglio, olio e peperoncino.",
      "Choose your sauce: tomato, pesto, scarparo, puttanesca or garlic, olive oil and chilli.",
      "Sauces au choix : tomate, pesto, scarparo, puttanesca ou ail, huile d'olive et piment.",
      "Sauce nach Wahl: Tomate, Pesto, Scarparo, Puttanesca oder Knoblauch, Olivenöl und Chili.",
      "Salses a escollir: tomàquet, pesto, scarparo, puttanesca o all, oli i bitxo.",
      "Соусы на выбор: томатный, песто, скарпаро, путтанеска или чеснок с оливковым маслом и чили.",
      "Molhos à escolha: tomate, pesto, scarparo, puttanesca ou alho, azeite e malagueta."
    ),
    productos: [
      P("Tortellini", T(
        "Pasta fresca rellena de ricotta y espinacas.",
        "Pasta fresca ripiena di ricotta e spinaci.",
        "Fresh pasta filled with ricotta and spinach.",
        "Pâtes fraîches farcies à la ricotta et aux épinards.",
        "Frische Pasta mit Ricotta-Spinat-Füllung.",
        "Pasta fresca farcida de ricotta i espinacs.",
        "Свежая паста с начинкой из рикотты и шпината.",
        "Massa fresca recheada com ricota e espinafres."
      ), "15,00 €"),
      P("Rigatoni", T(
        "Pasta seca cocida al dente.",
        "Pasta secca cotta al dente.",
        "Dried pasta cooked al dente.",
        "Pâtes sèches cuites al dente.",
        "Getrocknete Pasta, al dente gekocht.",
        "Pasta seca cuita al dente.",
        "Паста из сухих макарон, приготовленная аль денте.",
        "Massa seca cozida al dente."
      ), "14,00 €"),
      P("Lasagna", T(
        "Lasaña con ragú de carne.",
        "Lasagna al ragù di carne.",
        "Lasagne with meat ragù.",
        "Lasagnes au ragù de viande.",
        "Lasagne mit Fleischragout.",
        "Lasanya amb ragú de carn.",
        "Лазанья с мясным рагу.",
        "Lasanha com ragu de carne."
      ), "16,00 €")
    ]
  },

  {
    id: "postres",
    nombre: T("Postres", "Dolci", "Desserts", "Desserts", "Desserts", "Postres", "Десерты", "Sobremesas"),
    productos: [
      P("Focaccia Nonna Rosa", T(
        "Focaccia rellena de Nutella, pistacho y chocolate.",
        "Focaccia farcita con Nutella, pistacchio e cioccolato.",
        "Focaccia filled with Nutella, pistachios and chocolate.",
        "Focaccia garnie de Nutella, pistaches et chocolat.",
        "Focaccia gefüllt mit Nutella, Pistazien und Schokolade.",
        "Focaccia farcida de Nutella, festucs i xocolata.",
        "Фокачча с начинкой из Нутеллы, фисташек и шоколада.",
        "Focaccia recheada com Nutella, pistácio e chocolate."
      ), "8,00 €"),
      P("Il Cannolo di Lorenza", T(
        "Masa crujiente rellena de ricotta, azúcar glas y ralladura de limón.",
        "Cialda croccante ripiena di ricotta, zucchero a velo e scorza di limone.",
        "Crispy pastry shell filled with ricotta, icing sugar and lemon zest.",
        "Pâte croustillante garnie de ricotta, sucre glace et zeste de citron.",
        "Knusprige Teigrolle mit Ricotta, Puderzucker und Zitronenschale.",
        "Massa cruixent farcida de ricotta, sucre de llustre i ratlladura de llimona.",
        "Хрустящая трубочка с рикоттой, сахарной пудрой и лимонной цедрой.",
        "Massa crocante recheada com ricota, açúcar em pó e raspa de limão."
      ), "6,00 €"),
      P("Il Tiramisù de la Mamma", T(
        "Crema de queso dulce, café con amaretto y bizcocho italiano.",
        "Crema al mascarpone, caffè con amaretto e savoiardi.",
        "Sweet cheese cream, coffee with amaretto and Italian sponge biscuits.",
        "Crème de fromage sucrée, café à l'amaretto et biscuits italiens.",
        "Süße Käsecreme, Kaffee mit Amaretto und italienische Löffelbiskuits.",
        "Crema de formatge dolç, cafè amb amaretto i bescuits italians.",
        "Сладкий сырный крем, кофе с амаретто и итальянское печенье.",
        "Creme de queijo doce, café com amaretto e biscoitos italianos."
      ), "6,00 €"),
      P("La Pannacotta de Laura", T(
        "Nata cocida con salsa de chocolate y frutos rojos.",
        "Panna cotta con salsa al cioccolato e frutti di bosco.",
        "Cooked cream dessert with chocolate sauce and berries.",
        "Crème cuite avec sauce au chocolat et fruits rouges.",
        "Panna cotta mit Schokoladensauce und Beeren.",
        "Nata cuita amb salsa de xocolata i fruits vermells.",
        "Панна-котта с шоколадным соусом и ягодами.",
        "Natas cozidas com molho de chocolate e frutos vermelhos."
      ), "6,00 €"),
      P("Tarta de Queso, Zia Mónica", T(
        "Tarta de queso cremosa con frutos rojos o Nutella.",
        "Cheesecake cremoso con frutti di bosco o Nutella.",
        "Creamy cheesecake with berries or Nutella.",
        "Cheesecake crémeux aux fruits rouges ou au Nutella.",
        "Cremiger Käsekuchen mit Beeren oder Nutella.",
        "Pastís de formatge cremós amb fruits vermells o Nutella.",
        "Нежный чизкейк с ягодами или Нутеллой.",
        "Cheesecake cremoso com frutos vermelhos ou Nutella."
      ), "6,00 €")
    ]
  },

  {
    id: "cafes",
    nombre: T("Cafés", "Caffè", "Coffee", "Cafés", "Kaffee", "Cafès", "Кофе", "Cafés"),
    productos: [
      P("Café Corretto", T("Espresso con licor.", "Espresso con liquore.", "Espresso with liqueur.", "Expresso avec liqueur.", "Espresso mit Likör.", "Espresso amb licor.", "Эспрессо с ликёром.", "Expresso com licor."), "2,30 €"),
      P("Café Latte", T("Café con leche.", "Caffè con latte.", "Coffee with milk.", "Café au lait.", "Kaffee mit Milch.", "Cafè amb llet.", "Кофе с молоком.", "Café com leite."), "2,00 €"),
      P("Cappuccino", T("Café, leche espumada y cacao.", "Caffè, latte montato e cacao.", "Coffee, foamed milk and cocoa.", "Café, lait mousseux et cacao.", "Kaffee, Milchschaum und Kakao.", "Cafè, llet escumada i cacau.", "Кофе, вспененное молоко и какао.", "Café, leite espumado e cacau."), "2,50 €"),
      P("Espresso", T("Café concentrado.", "Caffè espresso.", "Concentrated coffee.", "Café concentré.", "Konzentrierter Kaffee.", "Cafè concentrat.", "Крепкий кофе.", "Café concentrado."), "1,80 €"),
      P("Latte Macchiato", T("Leche caliente manchada con café.", "Latte caldo macchiato con caffè.", "Hot milk with a shot of coffee.", "Lait chaud avec une touche de café.", "Heiße Milch mit einem Schuss Kaffee.", "Llet calenta tacada amb cafè.", "Горячее молоко с добавлением кофе.", "Leite quente com um toque de café."), "2,60 €"),
      P("Ristretto", T("Café corto y concentrado.", "Caffè corto e concentrato.", "Short, concentrated espresso.", "Expresso court et concentré.", "Kurzer, konzentrierter Espresso.", "Cafè curt i concentrat.", "Короткий крепкий эспрессо.", "Expresso curto e concentrado."), "1,80 €")
    ]
  },

  {
    id: "refrescos",
    nombre: T("Refrescos", "Bibite", "Soft drinks", "Boissons sans alcool", "Alkoholfreie Getränke", "Refrescos", "Безалкогольные напитки", "Refrigerantes"),
    productos: [
      P(T("Agua 0,50 L", "Acqua 0,50 L", "Water 0.50 L", "Eau 0,50 L", "Wasser 0,50 L", "Aigua 0,50 L", "Вода 0,5 л", "Água 0,50 L"), "", "1,90 €"),
      P("Coca-Cola 0,33 L", "", "2,80 €"),
      P("Coca-Cola Zero 0,33 L", "", "2,80 €"),
      P(T("Fanta naranja / limón", "Fanta arancia / limone", "Fanta orange / lemon", "Fanta orange / citron", "Fanta Orange / Zitrone", "Fanta taronja / llimona", "Фанта апельсин / лимон", "Fanta laranja / limão"), "", "2,80 €"),
      P("Schweppes Tonic 0,33 L", "", "2,80 €"),
      P(T("Zumos 0,30 L", "Succhi 0,30 L", "Juices 0.30 L", "Jus 0,30 L", "Säfte 0,30 L", "Sucs 0,30 L", "Соки 0,3 л", "Sumos 0,30 L"), "", "2,60 €")
    ]
  },

  {
    id: "cervezas",
    nombre: T("Cervezas", "Birre", "Beers", "Bières", "Biere", "Cerveses", "Пиво", "Cervejas"),
    productos: [
      P("Baladin 0,75 L", "", "13,90 €"),
      P("Menabrea 0,33 L", "", "3,20 €"),
      P("Moretti 0,33 L", "", "2,90 €"),
      P("Peroni 0,33 L", "", "2,90 €"),
      P(T("Caña 0,33 L", "Birra alla spina 0,33 L", "Draft beer 0.33 L", "Bière pression 0,33 L", "Fassbier 0,33 L", "Canya 0,33 L", "Разливное пиво 0,33 л", "Cerveja de pressão 0,33 L"), "", "2,70 €"),
      P("Damm Lemon 0,33 L", "", "2,70 €"),
      P("Free Damm 0,0 0,33 L", "", "2,80 €")
    ]
  },

  {
    id: "vinos",
    nombre: T("Vinos", "Vini", "Wines", "Vins", "Weine", "Vins", "Вина", "Vinhos"),
    productos: [
      P("Montecillo Verdejo", T("Blanco · D.O. Rueda", "Bianco · D.O. Rueda", "White · Rueda", "Blanc · Rueda", "Weißwein · Rueda", "Blanc · Rueda", "Белое · Руэда", "Branco · Rueda"), "18,00 €", { copa: "3,40 €" }),
      P("Mas Donis Blanco", T("Blanco · Montsant", "Bianco · Montsant", "White · Montsant", "Blanc · Montsant", "Weißwein · Montsant", "Blanc · Montsant", "Белое · Монсант", "Branco · Montsant"), "17,00 €", { copa: "3,20 €" }),
      P("Pinot Grigio", T("Blanco · Italia", "Bianco · Italia", "White · Italy", "Blanc · Italie", "Weißwein · Italien", "Blanc · Itàlia", "Белое · Италия", "Branco · Itália"), "19,00 €", { copa: "3,50 €" }),
      P("Mas Donis Tinto", T("Tinto · Montsant", "Rosso · Montsant", "Red · Montsant", "Rouge · Montsant", "Rotwein · Montsant", "Negre · Montsant", "Красное · Монсант", "Tinto · Montsant"), "17,00 €", { copa: "3,20 €" }),
      P("Montecillo Crianza", T("Tinto · Rioja", "Rosso · Rioja", "Red · Rioja", "Rouge · Rioja", "Rotwein · Rioja", "Negre · Rioja", "Красное · Риоха", "Tinto · Rioja"), "18,00 €", { copa: "3,40 €" }),
      P("Primitivo", T("Tinto · Salento, Italia", "Rosso · Salento, Italia", "Red · Salento, Italy", "Rouge · Salento, Italie", "Rotwein · Salento, Italien", "Negre · Salento, Itàlia", "Красное · Саленто, Италия", "Tinto · Salento, Itália"), "19,00 €", { copa: "3,50 €" }),
      P("Prosecco Millesimato", T("Espumoso · Italia", "Spumante · Italia", "Sparkling · Italy", "Pétillant · Italie", "Schaumwein · Italien", "Escumós · Itàlia", "Игристое · Италия", "Espumante · Itália"), "19,00 €")
    ]
  },

  {
    id: "cocteles",
    nombre: T("Cócteles", "Cocktail e aperitivi", "Cocktails", "Cocktails", "Cocktails", "Còctels", "Коктейли", "Cocktails"),
    imagen: "images/aperol.jpg",
    productos: [
      P("Aperol Spritz", T(
        "Aperol, prosecco, soda, naranja y hielo.",
        "Aperol, prosecco, soda, arancia e ghiaccio.",
        "Aperol, prosecco, soda, orange and ice.",
        "Aperol, prosecco, eau gazeuse, orange et glaçons.",
        "Aperol, Prosecco, Soda, Orange und Eis.",
        "Aperol, prosecco, soda, taronja i gel.",
        "Апероль, просекко, содовая, апельсин и лёд.",
        "Aperol, prosecco, soda, laranja e gelo."
      ), "7,00 €"),
      P("Bellini", T(
        "Prosecco y zumo de melocotón.",
        "Prosecco e succo di pesca.",
        "Prosecco and peach juice.",
        "Prosecco et jus de pêche.",
        "Prosecco und Pfirsichsaft.",
        "Prosecco i suc de préssec.",
        "Просекко и персиковый сок.",
        "Prosecco e sumo de pêssego."
      ), "7,00 €"),
      P("Gin Tonic", T(
        "Ginebra Seagram's, tónica y hielo.",
        "Gin Seagram's, acqua tonica e ghiaccio.",
        "Seagram's gin, tonic water and ice.",
        "Gin Seagram's, tonic et glaçons.",
        "Seagram's Gin, Tonic Water und Eis.",
        "Ginebra Seagram's, tònica i gel.",
        "Джин Seagram's, тоник и лёд.",
        "Gin Seagram's, água tónica e gelo."
      ), "7,50 €"),
      P("Il Garibaldi", T(
        "Campari, zumo de naranja y hielo.",
        "Campari, succo d'arancia e ghiaccio.",
        "Campari, orange juice and ice.",
        "Campari, jus d'orange et glaçons.",
        "Campari, Orangensaft und Eis.",
        "Campari, suc de taronja i gel.",
        "Кампари, апельсиновый сок и лёд.",
        "Campari, sumo de laranja e gelo."
      ), "7,00 €"),
      P("Limoncello", T(
        "Licor de limón, 29 % de alcohol.",
        "Liquore al limone, 29% vol.",
        "Lemon liqueur, 29% ABV.",
        "Liqueur de citron, 29 % vol.",
        "Zitronenlikör, 29 % vol.",
        "Licor de llimona, 29 % vol.",
        "Лимонный ликёр, крепость 29 %.",
        "Licor de limão, 29% vol."
      ), "5,00 €"),
      P("Negroni", T(
        "Campari, ginebra Seagram's, vermut rojo y hielo.",
        "Campari, gin Seagram's, vermouth rosso e ghiaccio.",
        "Campari, Seagram's gin, red vermouth and ice.",
        "Campari, gin Seagram's, vermouth rouge et glaçons.",
        "Campari, Seagram's Gin, roter Wermut und Eis.",
        "Campari, ginebra Seagram's, vermut vermell i gel.",
        "Кампари, джин Seagram's, красный вермут и лёд.",
        "Campari, gin Seagram's, vermute tinto e gelo."
      ), "7,00 €")
    ]
  }
];

// =====================================
// RENDERIZADO Y FUNCIONAMIENTO
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navegacion = document.getElementById("categorias");
  const buscar = document.getElementById("buscar");
  const sinResultados = document.getElementById("sin-resultados");
  const arriba = document.getElementById("arriba");

  // Escapar texto antes de insertarlo en HTML.
  function escapar(valor) {
    return String(valor ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalizar(texto) {
    return String(texto ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // Recuperar idioma guardado.
  try {
    const guardado = localStorage.getItem("doditaly_idioma");
    if (idiomas.includes(guardado)) idioma = guardado;
  } catch (error) {
    // El menú funciona aunque el navegador bloquee almacenamiento.
  }

  function crearNavegacion() {
    const opciones = [
      { id: "todos", nombre: traducir(textos.todos) },
      ...carta.map(c => ({
        id: c.id,
        nombre: traducir(c.nombre)
      }))
    ];

    navegacion.innerHTML = opciones.map(op => `
      <button type="button"
              data-categoria="${escapar(op.id)}"
              class="${op.id === categoriaActual ? "activo" : ""}"
              aria-pressed="${op.id === categoriaActual}">
        ${escapar(op.nombre)}
      </button>
    `).join("");
  }

  function crearProducto(producto) {
    const nombre = traducir(producto.nombre);
    const descripcion = traducir(producto.descripcion);

    let precioHTML = "";

    if (producto.llevar && typeof producto.llevar === "string") {
      precioHTML = `
        <p class="precio">
          ${escapar(producto.precio)}
          <span class="extra-precio">
            ${escapar(traducir(textos.llevar))}:
            ${escapar(producto.llevar)}
          </span>
        </p>
      `;
    } else if (producto.llevar && producto.llevar.copa) {
      precioHTML = `
        <p class="precio">
          ${escapar(traducir(textos.botella))}:
          ${escapar(producto.precio)}
          <span class="extra-precio">
            ${escapar(traducir(textos.copa))}:
            ${escapar(producto.llevar.copa)}
          </span>
        </p>
      `;
    } else {
      precioHTML = `<p class="precio">${escapar(producto.precio)}</p>`;
    }

    return `
      <article class="producto">
        <h3>${escapar(nombre)}</h3>
        ${descripcion ? `<p>${escapar(descripcion)}</p>` : ""}
        ${precioHTML}
      </article>
    `;
  }

  function crearMenu() {
    menu.innerHTML = carta.map(categoria => `
      <section class="seccion" id="${escapar(categoria.id)}">
        <div class="seccion-cabecera">
          ${categoria.imagen ? `
            <img src="${escapar(categoria.imagen)}"
                 alt="${escapar(traducir(categoria.nombre))}"
                 loading="lazy">
          ` : ""}

          <h2>${escapar(traducir(categoria.nombre))}</h2>
        </div>

        ${categoria.nota ? `
          <p class="nota-categoria">
            ${escapar(traducir(categoria.nota))}
          </p>
        ` : ""}

        <div class="productos">
          ${categoria.productos.map(crearProducto).join("")}
        </div>
      </section>
    `).join("");

    menu.querySelectorAll("img").forEach(img => {
      img.addEventListener("error", () => {
        img.hidden = true;
      });
      if (img.complete && img.naturalWidth === 0) {
        img.hidden = true;
      }
    });
  }

  function filtrarMenu() {
    const consulta = normalizar(buscar.value.trim());
    let resultados = 0;

    carta.forEach(categoria => {
      const seccion = document.getElementById(categoria.id);
      const articulos = seccion.querySelectorAll(".producto");

      if (categoriaActual !== "todos" &&
          categoriaActual !== categoria.id) {
        seccion.hidden = true;
        return;
      }

      let visibles = 0;

      categoria.productos.forEach((producto, indice) => {
        const contenido = [
          traducir(producto.nombre),
          traducir(producto.descripcion),
          traducir(categoria.nombre)
        ].join(" ");

        const coincide = normalizar(contenido).includes(consulta);

        articulos[indice].hidden = !coincide;

        if (coincide) {
          visibles++;
          resultados++;
        }
      });

      seccion.hidden = visibles === 0;
    });

    sinResultados.hidden = resultados > 0;
  }

  function actualizarTextos() {
    document.documentElement.lang = idioma;

    document.getElementById("frase-portada").textContent =
      traducir(textos.portada);

    document.getElementById("titulo-idioma").textContent =
      traducir(textos.idioma);

    document.getElementById("titulo-busqueda").textContent =
      traducir(textos.buscar);

    buscar.placeholder = traducir(textos.placeholder);

    sinResultados.textContent = traducir(textos.sinResultados);

    document.getElementById("titulo-aviso").textContent =
      traducir(textos.aviso);

    document.getElementById("texto-aviso").textContent =
      traducir(textos.avisoTexto);

    document.getElementById("texto-gluten").textContent =
      traducir(textos.gluten);

    document.querySelectorAll("[data-lang]").forEach(boton => {
      const activo = boton.dataset.lang === idioma;
      boton.classList.toggle("activo", activo);
      boton.setAttribute("aria-pressed", String(activo));
    });
  }

  function cambiarIdioma(nuevoIdioma) {
    if (!idiomas.includes(nuevoIdioma)) return;

    idioma = nuevoIdioma;
    categoriaActual = "todos";
    buscar.value = "";

    try {
      localStorage.setItem("doditaly_idioma", idioma);
    } catch (error) {
      // Continuar sin guardar preferencia.
    }

    actualizarTextos();
    crearNavegacion();
    crearMenu();
    filtrarMenu();
  }

  // Botones de idiomas.
  document.querySelectorAll("[data-lang]").forEach(boton => {
    boton.addEventListener("click", () => {
      cambiarIdioma(boton.dataset.lang);
    });
  });

  // Botones de categorías.
  navegacion.addEventListener("click", evento => {
    const boton = evento.target.closest("button[data-categoria]");
    if (!boton) return;

    categoriaActual = boton.dataset.categoria;
    buscar.value = "";

    crearNavegacion();
    filtrarMenu();

    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Buscador.
  buscar.addEventListener("input", () => {
    categoriaActual = "todos";
    crearNavegacion();
    filtrarMenu();
  });

  // Volver arriba.
  arriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    arriba.classList.toggle("visible", window.scrollY > 350);
  }, { passive: true });

  // Inicialización.
  cambiarIdioma(idioma);
});
