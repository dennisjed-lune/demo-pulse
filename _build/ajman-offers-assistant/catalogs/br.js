window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.br = {
  label: "Brazil", city: "São Paulo", cur: "BRL", lang: "pt",
  text: {
    "Waitrose": "Pão de Açúcar", "Dubai Mall": "Shopping Iguatemi", "Mall of the Emirates": "Shopping Eldorado", "noon Food": "Mercado Livre", "noon.com": "mercadolivre.com.br",
    "noon": "Mercado Livre", "Justlife": "Parafuzo", "Careem": "Uber", "Deliveroo Plus": "Clube iFood", "Deliveroo": "iFood", "spinneys.com": "mambo.com.br",
    "Spinneys": "Mambo", "VOX Cinemas": "Cinemark", "VOX": "Cinemark", "Shake Shack": "Bob's", "Etihad Guest Miles": "Azul Fidelidade points", "Etihad Guest": "Azul Fidelidade",
    "etihad.com": "voeazul.com.br", "Etihad": "Azul", "Talabat": "Rappi", "KidZania": "Ri Happy", "Yas Waterworld": "Hopi Hari",
    "Warner Bros. World": "Zoo São Paulo", "Coca-Cola Arena": "Allianz Parque", "Platinumlist": "Sympla", "Atlantis The Palm": "Beach Park",
    "Atlantis": "Beach Park", "Aquaventure": "the water park", "Ritz-Carlton": "Fasano", "Ras Al Khaimah": "Campos do Jordão", "Abu Dhabi": "São Paulo",
    "Dubai": "São Paulo", "Palm Jumeirah": "Fortaleza", "Yas Island": "Vinhedo", "Al Quoz": "Vila Madalena", "City Walk": "Jardins", "Financial Centre": "Avenida Paulista",
    "Grand Atrium": "Shopping Iguatemi", "Al Barsha": "Moema", "GOLD, THEATRE by Rhodes and IMAX": "Prime, XD and IMAX",
    "Qatar Privilege Club": "LATAM Pass", "flydubai OPEN": "Smiles", "summer heat": "summer rain", "Wizz Air Abu Dhabi": "GOL"
  },
  logos: { waitrose: "ld:paodeacucar.com", noon: "ld:mercadolivre.com.br", justmop: "ld:parafuzo.com", careem: "uber", deliveroo: "ld:ifood.com.br",
    spinneys: "ld:mambo.com.br", carrefour: "ld:carrefour.com.br", vox: "ld:cinemark.com.br", shakeshack: "ld:bobs.com.br", etihad: "ld:voeazul.com.br", kidzania: "ld:rihappy.com.br",
    yas: "ld:hopihari.com.br", wbworld: "ld:zoologico.com.br", cocacolaarena: "ld:allianzparque.com.br", platinumlist: "ld:sympla.com.br",
    atlantis: "ld:beachpark.com.br", ritzrak: "ld:fasano.com.br", talabat: "ld:rappi.com.br", qatar: "ld:latamairlines.com", flydubai: "ld:smiles.com.br", wizz: "ld:voegol.com.br" },
  offers: {
    waitrose: { brand: "Pão de Açúcar", brandColor: "#0E9F2E", place: "Shopping Iguatemi, São Paulo", place2: "Shopping Iguatemi" },
    noon: { brand: "Mercado Livre", brandColor: "#FFE600" },
    justmop: { brand: "Parafuzo", brandColor: "#2DB58C", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "iFood", brandColor: "#EA1D2C" },
    spinneys: { brand: "Mambo", brandColor: "#E3122A", place: "All São Paulo stores" },
    carrefour: { brand: "Carrefour", brandColor: "#0E4C9A", place: "Carrefour Hipermercado Pinheiros, São Paulo", place2: "Pinheiros" },
    vox: { brand: "Cinemark", brandColor: "#D7001C", place: "Cinemark Shopping Eldorado, São Paulo", place2: "Shopping Eldorado" },
    shakeshack: { brand: "Bob's", brandColor: "#C8102E", place: "Avenida Paulista, São Paulo", place2: "Avenida Paulista", qualifies: ["Dine-in, takeaway and Bob's app orders", "Avenida Paulista branch only"] },
    emirates: { brand: "Azul", brandColor: "#0E5CB4" },
    wizz: { brand: "GOL" },
    kidzania: { brand: "Ri Happy", brandColor: "#E30613", place: "Shopping Eldorado, São Paulo", place2: "Shopping Eldorado", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Hopi Hari", brandColor: "#0057B8", place2: "Vinhedo, São Paulo state", why: "A day of rides for four, an hour away" },
    wbworld: { brand: "Zoo São Paulo", brandColor: "#97BC1E", place2: "Água Funda, São Paulo", why: "A day with the animals, four tickets in one booking" },
    cocacolaarena: { brand: "Allianz Parque", brandColor: "#003781", place2: "Perdizes, São Paulo" },
    platinumlist: { brand: "Sympla", brandColor: "#0097FF" },
    atlantis: { brand: "Beach Park", brandColor: "#E5352B", place2: "Aquiraz, Fortaleza", why: "Water park passes come with the room" },
    ritzrak: { brand: "Fasano", brandColor: "#6B5444", place2: "Hotel Fasano São Paulo, Jardins", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "iFood", logo: "ld:ifood.com.br" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "azul_br", kind: "air", regions: ["br"], name: "Azul Fidelidade", unit: "Azul Fidelidade points", unitOne: "Azul Fidelidade point", logo: "ld:voeazul.com.br", color: "#FFFFFF", fg: "#0E5CB4", initial: "A", account: "AD ···· 6182", rate: 0.5 },
  { id: "latam_br", kind: "air", regions: ["br"], name: "LATAM Pass", unit: "LATAM Pass points", unitOne: "LATAM Pass point", logo: "ld:latamairlines.com", color: "#FFFFFF", fg: "#1B0088", initial: "L", account: null, rate: 0.5 }
]);
