window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.mx = {
  label: "Mexico", city: "Mexico City", cur: "MXN", lang: "es",
  text: {
    "Waitrose": "La Comer", "Dubai Mall": "Antara Polanco", "Mall of the Emirates": "Centro Santa Fe", "noon Food": "Mercado Libre", "noon.com": "mercadolibre.com.mx",
    "noon": "Mercado Libre", "Justlife": "Cronoshare", "Careem": "Uber", "Deliveroo Plus": "Rappi Pro", "Deliveroo": "Rappi", "spinneys.com": "chedraui.com.mx",
    "Spinneys": "Chedraui", "Carrefour": "Walmart", "VOX Cinemas": "Cinépolis", "VOX": "Cinépolis", "Etihad Guest Miles": "Aeroméxico Rewards points", "Etihad Guest": "Aeroméxico Rewards",
    "etihad.com": "aeromexico.com", "Etihad": "Aeroméxico", "Talabat": "DiDi Food", "KidZania": "Juguetrón", "OliOli": "Papalote Museo del Niño", "Yas Waterworld": "El Rollo",
    "Warner Bros. World": "Acuario Inbursa", "Coca-Cola Arena": "Arena CDMX", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Hotel Xcaret México",
    "Atlantis": "Hotel Xcaret", "Aquaventure": "the parks", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Valle de Bravo", "Abu Dhabi": "Mexico City",
    "Dubai": "Mexico City", "Palm Jumeirah": "the Riviera Maya", "Yas Island": "Morelos", "Al Quoz": "Roma Norte", "City Walk": "Condesa", "Financial Centre": "Paseo de la Reforma",
    "Grand Atrium": "Antara Polanco", "Al Barsha": "Coyoacán", "GOLD, THEATRE by Rhodes and IMAX": "VIP, 4DX and IMAX",
    "Qatar Privilege Club": "Viva Aerobus Doters", "flydubai OPEN": "Volaris v.club", "summer heat": "rainy season", "Wizz Air Abu Dhabi": "Volaris"
  },
  logos: { waitrose: "ld:lacomer.com.mx", noon: "ld:mercadolibre.com.mx", justmop: "ld:cronoshare.com.mx", careem: "uber", deliveroo: "ld:rappi.com.mx",
    spinneys: "ld:chedraui.com.mx", carrefour: "ld:walmart.com.mx", vox: "ld:cinepolis.com", etihad: "ld:aeromexico.com", kidzania: "ld:juguetron.mx",
    olioli: "ld:papalote.org.mx", yas: "ld:elrollo.com.mx", wbworld: "ld:acuarioinbursa.com.mx", cocacolaarena: "ld:arenacdmx.com", platinumlist: "ld:ticketmaster.com",
    atlantis: "ld:hotelxcaret.com", ritzrak: "ld:fourseasons.com", talabat: "ld:didi-food.com", qatar: "ld:doters.com", flydubai: "ld:volaris.com", wizz: "ld:volaris.com" },
  offers: {
    waitrose: { brand: "La Comer", brandColor: "#F26522", place: "Antara Polanco, Mexico City", place2: "Antara Polanco" },
    noon: { brand: "Mercado Libre", brandColor: "#FFE600" },
    justmop: { brand: "Cronoshare", brandColor: "#00AEEF", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Rappi", brandColor: "#FF441F" },
    spinneys: { brand: "Chedraui", brandColor: "#F47920", place: "All Mexico City stores" },
    carrefour: { brand: "Walmart", brandColor: "#0071CE", place: "Walmart Supercenter Santa Fe, Mexico City", place2: "Santa Fe" },
    vox: { brand: "Cinépolis", brandColor: "#002A5C", place: "Cinépolis VIP Antara Polanco, Mexico City", place2: "Antara Polanco" },
    shakeshack: { place: "Polanco, Mexico City", place2: "Polanco", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Polanco branch only"] },
    emirates: { brand: "Aeroméxico", brandColor: "#0B2343" },
    wizz: { brand: "Volaris" },
    kidzania: { brand: "Juguetrón", brandColor: "#00A33E", place: "Centro Santa Fe, Mexico City", place2: "Centro Santa Fe", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Papalote Museo del Niño", brandColor: "#009FE3", place: "Bosque de Chapultepec, Mexico City", place2: "Chapultepec", why: "A day out for the family, twenty minutes away" },
    yas: { brand: "El Rollo", brandColor: "#4A3AF0", place2: "Tlayacapan, Morelos", why: "A day of water slides for four, ninety minutes away" },
    wbworld: { brand: "Acuario Inbursa", brandColor: "#0B1F4B", place2: "Nuevo Polanco, Mexico City", why: "Sharks, rays and penguins, four tickets in one booking" },
    cocacolaarena: { brand: "Arena CDMX", brandColor: "#1C1C1C", place2: "Azcapotzalco, Mexico City" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Hotel Xcaret México", brandColor: "#1C1C1C", place2: "Playa del Carmen, Riviera Maya", why: "Park passes come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Hotel Mexico City", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "DiDi Food", logo: "ld:didi-food.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "aeromexico_mx", kind: "air", regions: ["mx"], name: "Aeroméxico Rewards", unit: "Aeroméxico Rewards points", unitOne: "Aeroméxico Rewards point", logo: "ld:aeromexico.com", color: "#FFFFFF", fg: "#0B2343", initial: "A", account: "AM ···· 5207", rate: 0.5 }
]);
