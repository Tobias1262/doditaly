"use strict";
// NOVEDADES: añadir objetos { titulo: {ca: "...", es: "...", ...}, texto: {ca: "...", es: "...", ...} }.
// Incluir las ocho traducciones para cada publicación. Vacío = sin anuncios.
const novedades = [{
 titulo: {ca:"Menú italià · 3 passos", es:"Menú italiano · 3 pasos", it:"Menù italiano · 3 portate", en:"Italian menu · 3 courses", fr:"Menu italien · 3 étapes", de:"Italienisches Menü · 3 Gänge", ru:"Итальянское меню · 3 блюда", pt:"Menu italiano · 3 etapas"},
 texto: {ca:"Antipasto, pasta casolana amb salsa a escollir, postres i beguda. Mínim dues persones. Consulta el preu i la disponibilitat al local.", es:"Antipasto, pasta casera con salsa a elección, postre y bebida. Mínimo dos personas. Consulta el precio y la disponibilidad en el local.", it:"Antipasto, pasta fatta in casa con salsa a scelta, dolce e bevanda. Minimo due persone. Chiedi prezzo e disponibilità al locale.", en:"Antipasto, homemade pasta with your choice of sauce, dessert and a drink. Minimum two people. Ask in the restaurant for price and availability.", fr:"Antipasto, pâtes maison avec sauce au choix, dessert et boisson. Minimum deux personnes. Prix et disponibilité à demander sur place.", de:"Antipasto, hausgemachte Pasta mit Sauce nach Wahl, Dessert und Getränk. Mindestens zwei Personen. Preis und Verfügbarkeit bitte im Lokal erfragen.", ru:"Антипасто, домашняя паста с соусом на выбор, десерт и напиток. Минимум два человека. Цену и наличие уточняйте в заведении.", pt:"Antipasto, massa caseira com molho à escolha, sobremesa e bebida. Mínimo duas pessoas. Consulte o preço e a disponibilidade no local."}
}];
const interfaz = {
 ca: ["Novetats", "Escriu una ressenya a Google", "Torna a dalt", "Aviat hi haurà novetats."],
 es: ["Novedades", "Escribe una reseña en Google", "Volver arriba", "Próximamente habrá novedades."],
 it: ["Novità", "Scrivi una recensione su Google", "Torna su", "Presto nuove notizie."],
 en: ["News", "Write a Google review", "Back to top", "News coming soon."],
 fr: ["Actualités", "Laisser un avis sur Google", "Retour en haut", "Des nouvelles prochainement."],
 de: ["Neuigkeiten", "Bei Google bewerten", "Nach oben", "Bald gibt es Neuigkeiten."],
 ru: ["Новости", "Оставить отзыв в Google", "Наверх", "Скоро здесь появятся новости."],
 pt: ["Novidades", "Escrever uma avaliação no Google", "Voltar ao topo", "Novidades em breve."]
};



// =====================================
// DODITALY - MENÚ MULTILINGÜE
// =====================================

// IMPORTANTE:
// Este orden corresponde a las traducciones
// de cada producto. NO modificar.
const idiomas = [
  "es", "it", "en", "fr",
  "de", "ca", "ru", "pt"
];

let idioma = "ca";
let categoriaActual = "todos";

// Crear traducciones en ocho idiomas.
function T(...valores) {
  return valores;
}

// Obtener traducción según idioma.
function traducir(valor) {
  if (typeof valor === "string") {
    return valor;
  }

  if (!Array.isArray(valor)) {
    return "";
  }

  return valor[idiomas.indexOf(idioma)]
    || valor[0]
    || "";
}

// =====================================
// TEXTOS GENERALES
// =====================================

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
    "Elegí tu idioma",
    "Scegli la tua lingua",
    "Choose your language",
    "Choisissez votre langue",
    "Wählen Sie Ihre Sprache",
    "Tria el teu idioma",
    "Выберите язык",
    "Escolha o seu idioma"
  ),

  buscar: T(
    "¿Qué te apetece hoy?",
    "Cosa ti va oggi?",
    "What would you like today?",
    "Qu'est-ce qui vous tente ?",
    "Worauf haben Sie heute Lust?",
    "Què et ve de gust avui?",
    "Что бы вы хотели сегодня?",
    "O que lhe apetece hoje?"
  ),

  placeholder: T(
    "Buscar productos...",
    "Cerca prodotti...",
    "Search products...",
    "Rechercher des produits...",
    "Produkte suchen...",
    "Cerca productes...",
    "Поиск блюд...",
    "Pesquisar produtos..."
  ),

  todos: T(
    "Todo",
    "Tutto",
    "All",
    "Tout",
    "Alle",
    "Tot",
    "Все",
    "Tudo"
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
    "Para llevar",
    "Da asporto",
    "Takeaway",
    "À emporter",
    "Zum Mitnehmen",
    "Per emportar",
    "С собой",
    "Para levar"
  ),

  botella: T(
    "Botella",
    "Bottiglia",
    "Bottle",
    "Bouteille",
    "Flasche",
    "Ampolla",
    "Бутылка",
    "Garrafa"
  ),

  copa: T(
    "Copa",
    "Calice",
    "Glass",
    "Verre",
    "Glas",
    "Copa",
    "Бокал",
    "Copo"
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

// =====================================
// FUNCIÓN PARA CREAR PRODUCTOS
// =====================================

function P(
  nombre,
  descripcion,
  precio,
  llevar = null
) {
  return {
    nombre,
    descripcion,
    precio,
    llevar
  };
}

// =====================================
// CARTA DODITALY
// =====================================

// Las categorías comienzan en el bloque 2.

const carta = [

  // =====================================
  // 1. ENTRANTES
  // =====================================

  {
    id: "antipasti",

    nombre: T(
      "Entrantes",
      "Antipasti",
      "Starters",
      "Entrées",
      "Vorspeisen",
      "Entrants",
      "Закуски",
      "Entradas"
    ),

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

  // =====================================
  // 2. TABLAS ITALIANAS
  // =====================================

  {
    id: "tablas",

    nombre: T(
      "Tablas italianas",
      "Taglieri",
      "Italian sharing boards",
      "Planches italiennes",
      "Italienische Platten",
      "Taules italianes",
      "Итальянские ассорти",
      "Tábuas italianas"
    ),

    imagen: "images/tagliere.jpg",

    productos: [

      P(T(
        "Embutidos",
        "Salumi",
        "Cured meats",
        "Charcuteries",
        "Wurstwaren",
        "Embotits",
        "Мясные деликатесы",
        "Enchidos"
      ), T(
        "Selección de embutidos italianos, aceitunas y pan de focaccia casera.",
        "Selezione di salumi italiani, olive e focaccia fatta in casa.",
        "Selection of Italian cured meats, olives and homemade focaccia bread.",
        "Sélection de charcuteries italiennes, olives et focaccia maison.",
        "Auswahl italienischer Wurstwaren, Oliven und hausgemachte Focaccia.",
        "Selecció d'embotits italians, olives i focaccia casolana.",
        "Ассорти итальянских мясных деликатесов, оливки и домашняя фокачча.",
        "Seleção de enchidos italianos, azeitonas e focaccia caseira."
      ), "16,50 €"),

      P("Formaggi", T(
        "Selección de quesos italianos, aceitunas y pan de focaccia casera.",
        "Selezione di formaggi italiani, olive e focaccia fatta in casa.",
        "Selection of Italian cheeses, olives and homemade focaccia bread.",
        "Sélection de fromages italiens, olives et focaccia maison.",
        "Auswahl italienischer Käsesorten, Oliven und hausgemachte Focaccia.",
        "Selecció de formatges italians, olives i focaccia casolana.",
        "Ассорти итальянских сыров, оливки и домашняя фокачча.",
        "Seleção de queijos italianos, azeitonas e focaccia caseira."
      ), "18,00 €"),

      P("Tagliere Misto", T(
        "Selección de embutidos y quesos italianos, aceitunas y pan de focaccia casera.",
        "Selezione di salumi e formaggi italiani, olive e focaccia fatta in casa.",
        "Selection of Italian cured meats and cheeses, olives and homemade focaccia bread.",
        "Sélection de charcuteries et fromages italiens, olives et focaccia maison.",
        "Auswahl italienischer Wurst- und Käsesorten, Oliven und hausgemachte Focaccia.",
        "Selecció d'embotits i formatges italians, olives i focaccia casolana.",
        "Ассорти итальянских мясных деликатесов и сыров, оливки и домашняя фокачча.",
        "Seleção de enchidos e queijos italianos, azeitonas e focaccia caseira."
      ), "29,00 €")

    ]
  },


  // =====================================
  // 3. FOCACCIAS
  // =====================================

  {
    id: "focaccias",

    nombre: T(
      "Focaccias", "Focacce", "Focaccias",
      "Focaccias", "Focaccias", "Focaccies",
      "Фокачча", "Focaccias"
    ),

    imagen: "images/focaccias.jpeg",

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

  // =====================================
  // 4. PINSAS
  // =====================================

  {
    id: "pinsas",

    nombre: T(
      "Pinsas",
      "Pinse",
      "Roman pinsas",
      "Pinsas romaines",
      "Römische Pinsa",
      "Pinses romanes",
      "Римская пинса",
      "Pinsas romanas"
    ),

    imagen: "images/pinsas.jpeg",

    productos: [

      P("Danilo", "", "15,00 €"),
      P("Domenico", "", "15,00 €"),
      P("Fabrizio", "", "15,00 €"),
      P("Pietro", "", "15,00 €"),
      P("Giacomo", "", "14,00 €"),
      P("Giovanni", "", "15,00 €"),
      P("Salvatore", "", "15,00 €"),
      P("Giuseppe", "", "16,00 €"),

      // PENDIENTE:
      // Confirmar ingredientes y precio de Margherita.
      P("Margherita", "", "Consultar precio"),

      // PENDIENTE:
      // Confirmar ingredientes y tipo de prosciutto.
      P(
        "Margherita con prosciutto",
        "",
        "15,00 €"
      )

    ]
  },


  // =====================================
  // 5. PASTAS
  // =====================================

  {
    id: "pastas",

    nombre: T(
      "Pastas",
      "Le Paste",
      "Pasta",
      "Pâtes",
      "Pasta",
      "Pastes",
      "Паста",
      "Massas"
    ),

    imagen: "images/pastas.jpeg",

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

  // =====================================
  // 6. POSTRES
  // =====================================

  {
    id: "postres",
    imagen: "images/postres.jpeg",

    nombre: T(
      "Postres",
      "Dolci",
      "Desserts",
      "Desserts",
      "Desserts",
      "Postres",
      "Десерты",
      "Sobremesas"
    ),

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

  // =====================================
  // 7. CAFÉS
  // =====================================

  {
    id: "cafes",

    nombre: T(
      "Cafés",
      "Caffè",
      "Coffee",
      "Cafés",
      "Kaffee",
      "Cafès",
      "Кофе",
      "Cafés"
    ),

    productos: [

      P("Café Corretto", T(
        "Espresso con licor.",
        "Espresso con liquore.",
        "Espresso with liqueur.",
        "Expresso avec liqueur.",
        "Espresso mit Likör.",
        "Espresso amb licor.",
        "Эспрессо с ликёром.",
        "Expresso com licor."
      ), "2,30 €"),

      P("Café Latte", T(
        "Café con leche.",
        "Caffè con latte.",
        "Coffee with milk.",
        "Café au lait.",
        "Kaffee mit Milch.",
        "Cafè amb llet.",
        "Кофе с молоком.",
        "Café com leite."
      ), "2,00 €"),

      P("Cappuccino", T(
        "Café, leche espumada y cacao.",
        "Caffè, latte montato e cacao.",
        "Coffee, foamed milk and cocoa.",
        "Café, lait mousseux et cacao.",
        "Kaffee, Milchschaum und Kakao.",
        "Cafè, llet escumada i cacau.",
        "Кофе, вспененное молоко и какао.",
        "Café, leite espumado e cacau."
      ), "2,50 €"),

      P("Espresso", T(
        "Café concentrado.",
        "Caffè espresso.",
        "Concentrated coffee.",
        "Café concentré.",
        "Konzentrierter Kaffee.",
        "Cafè concentrat.",
        "Крепкий кофе.",
        "Café concentrado."
      ), "1,80 €"),

      P("Latte Macchiato", T(
        "Leche caliente manchada con café.",
        "Latte caldo macchiato con caffè.",
        "Hot milk with a shot of coffee.",
        "Lait chaud avec une touche de café.",
        "Heiße Milch mit einem Schuss Kaffee.",
        "Llet calenta tacada amb cafè.",
        "Горячее молоко с добавлением кофе.",
        "Leite quente com um toque de café."
      ), "2,60 €"),

      P("Ristretto", T(
        "Café corto y concentrado.",
        "Caffè corto e concentrato.",
        "Short, concentrated espresso.",
        "Expresso court et concentré.",
        "Kurzer, konzentrierter Espresso.",
        "Cafè curt i concentrat.",
        "Короткий крепкий эспрессо.",
        "Expresso curto e concentrado."
      ), "1,80 €")

    ]
  },


  // =====================================
  // 8. REFRESCOS
  // =====================================

  {
    id: "refrescos",

    nombre: T(
      "Refrescos", "Bibite", "Soft drinks",
      "Boissons sans alcool",
      "Alkoholfreie Getränke", "Refrescos",
      "Безалкогольные напитки", "Refrigerantes"
    ),

    productos: [

      P(T(
        "Agua 0,50 L", "Acqua 0,50 L",
        "Water 0.50 L", "Eau 0,50 L",
        "Wasser 0,50 L", "Aigua 0,50 L",
        "Вода 0,5 л", "Água 0,50 L"
      ), "", "1,90 €"),

      P("Coca-Cola 0,33 L", "", "2,80 €"),

      P("Coca-Cola Zero 0,33 L", "", "2,80 €"),

      P(T(
        "Fanta naranja / limón",
        "Fanta arancia / limone",
        "Fanta orange / lemon",
        "Fanta orange / citron",
        "Fanta Orange / Zitrone",
        "Fanta taronja / llimona",
        "Фанта апельсин / лимон",
        "Fanta laranja / limão"
      ), "", "2,80 €"),

      P("Schweppes Tonic 0,33 L", "", "2,80 €"),

      P(T(
        "Zumos 0,30 L",
        "Succhi 0,30 L",
        "Juices 0.30 L",
        "Jus 0,30 L",
        "Säfte 0,30 L",
        "Sucs 0,30 L",
        "Соки 0,3 л",
        "Sumos 0,30 L"
      ), "", "2,60 €")

    ]
  },

  // =====================================
  // 9. CERVEZAS
  // =====================================

  {
    id: "cervezas",

    nombre: T(
      "Cervezas", "Birre", "Beers", "Bières",
      "Biere", "Cerveses", "Пиво", "Cervejas"
    ),

    productos: [

      P("Baladin 0,75 L", "", "13,90 €"),

      P("Menabrea 0,33 L", "", "3,20 €"),

      P("Moretti 0,33 L", "", "2,90 €"),

      P("Peroni 0,33 L", "", "2,90 €"),

      P(T(
        "Caña 0,33 L",
        "Birra alla spina 0,33 L",
        "Draft beer 0.33 L",
        "Bière pression 0,33 L",
        "Fassbier 0,33 L",
        "Canya 0,33 L",
        "Разливное пиво 0,33 л",
        "Cerveja de pressão 0,33 L"
      ), "", "2,70 €"),

      P("Damm Lemon 0,33 L", "", "2,70 €"),

      P("Free Damm 0,0 0,33 L", "", "2,80 €")

    ]
  },

  // =====================================
  // 10. VINOS
  // =====================================

  {
    id: "vinos",

    nombre: T(
      "Vinos", "Vini", "Wines", "Vins",
      "Weine", "Vins", "Вина", "Vinhos"
    ),

    productos: [

      P("Montecillo Verdejo", T(
        "Blanco · D.O. Rueda",
        "Bianco · D.O. Rueda",
        "White · Rueda",
        "Blanc · Rueda",
        "Weißwein · Rueda",
        "Blanc · Rueda",
        "Белое · Руэда",
        "Branco · Rueda"
      ), "18,00 €", { copa: "3,40 €" }),

      P("Mas Donis Blanco", T(
        "Blanco · Montsant",
        "Bianco · Montsant",
        "White · Montsant",
        "Blanc · Montsant",
        "Weißwein · Montsant",
        "Blanc · Montsant",
        "Белое · Монсант",
        "Branco · Montsant"
      ), "17,00 €", { copa: "3,20 €" }),

      P("Pinot Grigio", T(
        "Blanco · Italia",
        "Bianco · Italia",
        "White · Italy",
        "Blanc · Italie",
        "Weißwein · Italien",
        "Blanc · Itàlia",
        "Белое · Италия",
        "Branco · Itália"
      ), "19,00 €", { copa: "3,50 €" }),

      P("Mas Donis Tinto", T(
        "Tinto · Montsant",
        "Rosso · Montsant",
        "Red · Montsant",
        "Rouge · Montsant",
        "Rotwein · Montsant",
        "Negre · Montsant",
        "Красное · Монсант",
        "Tinto · Montsant"
      ), "17,00 €", { copa: "3,20 €" }),

      P("Montecillo Crianza", T(
        "Tinto · Rioja",
        "Rosso · Rioja",
        "Red · Rioja",
        "Rouge · Rioja",
        "Rotwein · Rioja",
        "Negre · Rioja",
        "Красное · Риоха",
        "Tinto · Rioja"
      ), "18,00 €", { copa: "3,40 €" }),

      P("Primitivo", T(
        "Tinto · Salento, Italia",
        "Rosso · Salento, Italia",
        "Red · Salento, Italy",
        "Rouge · Salento, Italie",
        "Rotwein · Salento, Italien",
        "Negre · Salento, Itàlia",
        "Красное · Саленто, Италия",
        "Tinto · Salento, Itália"
      ), "19,00 €", { copa: "3,50 €" }),

      P("Prosecco Millesimato", T(
        "Espumoso · Italia",
        "Spumante · Italia",
        "Sparkling · Italy",
        "Pétillant · Italie",
        "Schaumwein · Italien",
        "Escumós · Itàlia",
        "Игристое · Италия",
        "Espumante · Itália"
      ), "19,00 €")

    ]
  },

  // =====================================
  // 11. CÓCTELES
  // =====================================

  {
    id: "cocteles",

    nombre: T(
      "Cócteles",
      "Cocktail e aperitivi",
      "Cocktails",
      "Cocktails",
      "Cocktails",
      "Còctels",
      "Коктейли",
      "Cocktails"
    ),

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
// FIN DE LOS PRODUCTOS DE LA CARTA
// =====================================

/* =========================================
   DODITALY — BLOQUE 6
   FUNCIONAMIENTO DEL MENÚ
========================================= */

// =========================================
// ORDEN DE LAS CATEGORÍAS
// =========================================

const ordenCategorias = [
  "antipasti",
  "tablas",
  "focaccias",
  "pinsas",
  "pastas",
  "postres",
  "cafes",
  "refrescos",
  "cervezas",
  "vinos",
  "cocteles"
];

carta.sort((a, b) => {
  const posicionA = ordenCategorias.indexOf(a.id);
  const posicionB = ordenCategorias.indexOf(b.id);

  return posicionA - posicionB;
});

// =========================================
// COPIAR INGREDIENTES A LAS PINSAS
// =========================================

const categoriaFocaccias = carta.find(
  categoria => categoria.id === "focaccias"
);

const categoriaPinsas = carta.find(
  categoria => categoria.id === "pinsas"
);

if (categoriaFocaccias && categoriaPinsas) {

  categoriaPinsas.productos.forEach(pinsa => {

    const focacciaEquivalente =
      categoriaFocaccias.productos.find(
        focaccia =>
          traducir(focaccia.nombre).toLowerCase() ===
          traducir(pinsa.nombre).toLowerCase()
      );

    if (focacciaEquivalente) {
      pinsa.descripcion =
        focacciaEquivalente.descripcion;
    }

  });

}

// =========================================
// INICIALIZACIÓN
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menu");
  const categorias = document.getElementById("categorias");
  const buscar = document.getElementById("buscar");
  const sinResultados =
    document.getElementById("sin-resultados");
  const arriba = document.getElementById("arriba");

  // Recuperar idioma guardado.
  let idiomaGuardado;
  try { idiomaGuardado = localStorage.getItem("doditaly-idioma"); } catch {}

  if (idiomas.includes(idiomaGuardado)) {
    idioma = idiomaGuardado;
  }

  // =====================================
  // TRADUCIR ELEMENTOS GENERALES
  // =====================================

  function actualizarTextos() {

    const elementos = {
      "frase-portada": textos.portada,
      "titulo-idioma": textos.idioma,
      "titulo-busqueda": textos.buscar,
      "titulo-aviso": textos.aviso,
      "texto-aviso": textos.avisoTexto,
      "texto-gluten": textos.gluten
    };

    Object.entries(elementos).forEach(
      ([id, contenido]) => {

        const elemento =
          document.getElementById(id);

        if (elemento) {
          elemento.textContent =
            traducir(contenido);
        }

      }
    );

    if (buscar) {
      buscar.placeholder =
        traducir(textos.placeholder);
    }

    document.documentElement.lang = idioma;
    const ui = interfaz[idioma];
    document.getElementById("titulo-novedades").textContent = ui[0];
    document.getElementById("resena-google").textContent = ui[1];
    arriba.setAttribute("aria-label", ui[2]);
    const lista = document.getElementById("lista-novedades");
    lista.replaceChildren();
    novedades.forEach(noticia => {
      const articulo = document.createElement("article");
      const titulo = document.createElement("h3");
      const texto = document.createElement("p");
      titulo.textContent = noticia.titulo[idioma] || noticia.titulo.ca;
      texto.textContent = noticia.texto[idioma] || noticia.texto.ca;
      articulo.append(titulo, texto);
      lista.append(articulo);
    });
    if (!novedades.length) lista.textContent = ui[3];

    // Marcar idioma activo.
    document.querySelectorAll(
      "[data-lang]"
    ).forEach(boton => {

      const activo =
        boton.dataset.lang === idioma;

      boton.classList.toggle(
        "activo",
        activo
      );

      boton.classList.toggle(
        "active",
        activo
      );

      boton.setAttribute(
        "aria-pressed",
        String(activo)
      );

    });

  }

  // =====================================
  // FORMATO DE PRECIOS
  // =====================================

  function mostrarPrecio(producto) {

    let html = "";

    const precioPrincipal =
      (producto.precio === "Consultar precio" ? traducir(T("Consultar precio", "Chiedere il prezzo", "Ask for price", "Prix sur demande", "Preis auf Anfrage", "Consulteu el preu", "Уточните цену", "Consultar preço")) : producto.precio) || "";

    const precioExtra =
      producto.llevar;

    if (precioPrincipal) {
      html += `
        <span class="precio">
          ${escaparHTML(precioPrincipal)}
        </span>
      `;
    }

    // Precio para llevar.
    if (
      typeof precioExtra === "string" &&
      precioExtra.trim()
    ) {

      html += `
        <span class="precio-llevar">
          ${escaparHTML(traducir(textos.llevar))}:
          ${escaparHTML(precioExtra)}
        </span>
      `;

    }

    // Precio de copa en vinos.
    if (
      precioExtra &&
      typeof precioExtra === "object" &&
      !Array.isArray(precioExtra) &&
      precioExtra.copa
    ) {

      html += `
        <span class="precio-copa">
          ${escaparHTML(traducir(textos.copa))}:
          ${escaparHTML(precioExtra.copa)}
        </span>
      `;

    }

    return html;
  }

  // =====================================
  // PROTEGER TEXTO HTML
  // =====================================

  function escaparHTML(valor) {

    return String(valor ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  }

  // =====================================
  // CREAR NAVEGACIÓN
  // =====================================

  function crearNavegacion() {

    if (!categorias) return;

    categorias.innerHTML = "";

    const botonTodos =
      document.createElement("button");

    botonTodos.type = "button";
    botonTodos.className = "categoria-btn";
    botonTodos.dataset.categoria = "todos";
    botonTodos.textContent =
      traducir(textos.todos);

    categorias.appendChild(botonTodos);

    carta.forEach(categoria => {

      const boton =
        document.createElement("button");

      boton.type = "button";
      boton.className = "categoria-btn";
      boton.dataset.categoria = categoria.id;

      boton.textContent =
        traducir(categoria.nombre);

      categorias.appendChild(boton);

    });

    categorias.querySelectorAll(
      "[data-categoria]"
    ).forEach(boton => {

      boton.addEventListener(
        "click",
        () => {

          categoriaActual =
            boton.dataset.categoria;

          actualizarBotonesCategorias();
          filtrarMenu();

          if (menu) {
            menu.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
              block: "start"
            });
          }

        }
      );

    });

    actualizarBotonesCategorias();
  }

  // =====================================
  // CATEGORÍA ACTIVA
  // =====================================

  function actualizarBotonesCategorias() {

    if (!categorias) return;

    categorias.querySelectorAll(
      "[data-categoria]"
    ).forEach(boton => {

      const activo =
        boton.dataset.categoria ===
        categoriaActual;

      boton.classList.toggle(
        "activo",
        activo
      );

      boton.classList.toggle(
        "active",
        activo
      );

      boton.setAttribute(
        "aria-pressed",
        String(activo)
      );

    });

  }

  // =====================================
  // CREAR TARJETA DE PRODUCTO
  // =====================================

  function crearProducto(producto) {

    const articulo =
      document.createElement("article");

    articulo.className = "producto";

    const nombre =
      traducir(producto.nombre);

    const descripcion =
      traducir(producto.descripcion);

    articulo.innerHTML = `
      <div class="producto-info">

        <h3 class="producto-nombre">
          ${escaparHTML(nombre)}
        </h3>

        ${
          descripcion
            ? `
              <p class="producto-descripcion">
                ${escaparHTML(descripcion)}
              </p>
            `
            : ""
        }

      </div>

      <div class="producto-precios">
        ${mostrarPrecio(producto)}
      </div>
    `;

    return articulo;
  }

  // =====================================
  // CREAR SECCIÓN DE CATEGORÍA
  // =====================================

  function crearSeccion(categoria) {

    const seccion =
      document.createElement("section");

    seccion.className = "seccion-menu";
    seccion.dataset.categoria = categoria.id;
    seccion.id = `seccion-${categoria.id}`;

    const titulo =
      document.createElement("h2");

    titulo.className = "titulo-categoria";
    titulo.textContent =
      traducir(categoria.nombre);

    seccion.appendChild(titulo);

    // Imagen de categoría.
    if (categoria.imagen) {

      const imagen =
        document.createElement("img");

      imagen.className = "imagen-categoria";
      imagen.src = categoria.imagen;
      imagen.alt =
        traducir(categoria.nombre);

      imagen.loading = "lazy";

      imagen.onerror = () => {
        imagen.remove();
      };

      seccion.appendChild(imagen);
    }

    // Nota de categoría.
    if (categoria.nota) {

      const nota =
        document.createElement("p");

      nota.className = "nota-categoria";
      nota.textContent =
        traducir(categoria.nota);

      seccion.appendChild(nota);
    }

    const contenedor =
      document.createElement("div");

    contenedor.className =
      "lista-productos";

    categoria.productos.forEach(
      producto => {

        contenedor.appendChild(
          crearProducto(producto)
        );

      }
    );

    seccion.appendChild(contenedor);

    return seccion;
  }

  // =====================================
  // RENDERIZAR MENÚ
  // =====================================

  function crearMenu() {

    if (!menu) {
      console.error(
        "DODITALY: No existe el elemento #menu en index.html"
      );
      return;
    }

    menu.innerHTML = "";

    carta.forEach(categoria => {

      menu.appendChild(
        crearSeccion(categoria)
      );

    });

    filtrarMenu();
  }

  // =====================================
  // BUSCADOR Y FILTROS
  // =====================================

  function normalizarTexto(valor) {

    return String(valor ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  }

  function filtrarMenu() {

    if (!menu) return;

    const consulta = normalizarTexto(
      buscar ? buscar.value : ""
    );

    let totalVisibles = 0;

    menu.querySelectorAll(
      ".seccion-menu"
    ).forEach(seccion => {

      const idCategoria =
        seccion.dataset.categoria;

      const categoria =
        carta.find(
          item => item.id === idCategoria
        );

      if (!categoria) {
        seccion.hidden = true;
        return;
      }

      const categoriaPermitida =
        categoriaActual === "todos" ||
        categoriaActual === idCategoria;

      let visiblesEnCategoria = 0;

      const productosDOM =
        seccion.querySelectorAll(
          ".producto"
        );

      productosDOM.forEach(
        (articulo, indice) => {

          const producto =
            categoria.productos[indice];

          if (!producto) {
            articulo.hidden = true;
            return;
          }

          const contenido = normalizarTexto([
            traducir(producto.nombre),
            traducir(producto.descripcion),
            traducir(categoria.nombre)
          ].join(" "));

          const coincide =
            !consulta ||
            contenido.includes(consulta);

          const visible =
            categoriaPermitida &&
            coincide;

          articulo.hidden = !visible;

          if (visible) {
            visiblesEnCategoria++;
            totalVisibles++;
          }

        }
      );

      seccion.hidden =
        !categoriaPermitida ||
        visiblesEnCategoria === 0;

    });

    if (sinResultados) {

      sinResultados.hidden =
        totalVisibles > 0;

      sinResultados.textContent =
        traducir(textos.sinResultados);

    }
  }

  // =====================================
  // CAMBIAR IDIOMA
  // =====================================

  function cambiarIdioma(nuevoIdioma) {

    if (!idiomas.includes(nuevoIdioma)) {
      return;
    }

    idioma = nuevoIdioma;

    try { localStorage.setItem("doditaly-idioma", idioma); } catch {}

    actualizarTextos();
    crearNavegacion();
    crearMenu();

  }

  // =====================================
  // BOTONES DE IDIOMAS
  // =====================================

  document.querySelectorAll(
    "[data-lang]"
  ).forEach(boton => {

    boton.addEventListener(
      "click",
      () => {

        cambiarIdioma(
          boton.dataset.lang
        );

      }
    );

  });

  // =====================================
  // EVENTO DEL BUSCADOR
  // =====================================

  if (buscar) {

    buscar.addEventListener(
      "input",
      filtrarMenu
    );

  }

  // =====================================
  // VOLVER ARRIBA
  // =====================================

  if (arriba) {

    arriba.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });

      }
    );

  }

  // =====================================
  // ARRANQUE
  // =====================================

  const actualizarArriba = () => arriba.classList.toggle("visible", window.scrollY > 300);
  window.addEventListener("scroll", actualizarArriba, { passive: true });
  actualizarArriba();
  actualizarTextos();
  crearNavegacion();
  crearMenu();

  console.log(
    "DODITALY: menú inicializado correctamente."
  );

});

/* =========================================
   FIN DEL SCRIPT.JS
========================================= */

