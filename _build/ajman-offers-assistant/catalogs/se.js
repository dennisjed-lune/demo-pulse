window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.se = {
  label: "Sweden", city: "Stockholm", cur: "SEK", lang: "en",
  text: {
    "Waitrose": "Hemköp", "Dubai Mall": "Mall of Scandinavia", "Mall of the Emirates": "Täby Centrum", "noon Food": "Wolt", "noon.com": "cdon.se",
    "noon": "CDON", "Justlife": "Hemfrid", "Careem": "Uber", "Deliveroo Plus": "foodora PRO", "Deliveroo": "foodora", "spinneys.com": "coop.se",
    "Spinneys": "Coop", "Carrefour": "City Gross", "VOX Cinemas": "Filmstaden", "VOX": "Filmstaden", "Shake Shack": "Max Burgers",
    "Etihad Guest Miles": "EuroBonus points", "Etihad Guest": "SAS EuroBonus", "etihad.com": "flysas.com", "Etihad": "SAS", "Talabat": "Wolt",
    "KidZania": "Lekia", "OliOli": "Junibacken", "Yas Waterworld": "Gröna Lund", "Warner Bros. World": "Skansen",
    "Coca-Cola Arena": "Avicii Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Liseberg Grand Curiosa Hotel", "Atlantis": "Liseberg",
    "Aquaventure": "Oceana water park", "Ritz-Carlton": "Grand Hôtel", "Ras Al Khaimah": "the archipelago", "Abu Dhabi": "Stockholm",
    "Dubai": "Stockholm", "Palm Jumeirah": "Gothenburg", "Yas Island": "Djurgården", "Al Quoz": "Hammarby Sjöstad", "City Walk": "Biblioteksgatan", "Financial Centre": "Norrmalm",
    "Grand Atrium": "Mall of Scandinavia", "Al Barsha": "Södermalm", "GOLD, THEATRE by Rhodes and IMAX": "Lounge and IMAX",
    "Qatar Privilege Club": "Flying Blue", "flydubai OPEN": "Norwegian Reward", "summer heat": "dark winter", "Wizz Air Abu Dhabi": "Norwegian"
  },
  logos: { waitrose: "ld:hemkop.se", noon: "ld:cdon.se", justmop: "ld:hemfrid.se", careem: "uber", deliveroo: "ld:foodora.se",
    spinneys: "ld:coop.se", carrefour: "ld:citygross.se", vox: "ld:filmstaden.se", shakeshack: "ld:max.se", etihad: "ld:flysas.com", kidzania: "ld:lekia.se",
    olioli: "ld:junibacken.se", yas: "ld:gronalund.com", wbworld: "ld:skansen.se", cocacolaarena: "ld:stockholmlive.com", platinumlist: "ld:ticketmaster.se",
    atlantis: "ld:liseberg.se", ritzrak: "ld:grandhotel.se", talabat: "ld:wolt.com", qatar: "ld:flyingblue.com", flydubai: "ld:norwegian.com", wizz: "ld:norwegian.com" },
  offers: {
    waitrose: { brand: "Hemköp", brandColor: "#E2001A", place: "Klarabergsgatan, Stockholm", place2: "Klarabergsgatan" },
    noon: { brand: "CDON", brandColor: "#00C35A" },
    justmop: { brand: "Hemfrid", brandColor: "#0F3A57", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "foodora", brandColor: "#DF1067" },
    spinneys: { brand: "Coop", brandColor: "#00A443", place: "All Stockholm stores" },
    carrefour: { brand: "City Gross", brandColor: "#0A5CA8", place: "Bromma Blocks, Stockholm", place2: "Bromma Blocks" },
    vox: { brand: "Filmstaden", brandColor: "#C8102E", place: "Filmstaden Sergel, Hötorget", place2: "Hötorget" },
    shakeshack: { brand: "Max Burgers", brandColor: "#D2232A", place: "Drottninggatan, Stockholm", place2: "Drottninggatan" },
    emirates: { brand: "SAS", brandColor: "#0028F0" },
    wizz: { brand: "Norwegian" },
    kidzania: { brand: "Lekia", brandColor: "#E30613", place: "All Stockholm stores", place2: "Stockholm", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Junibacken", brandColor: "#F3DB8E", place: "Galärvarvsvägen 8, Djurgården", place2: "Djurgården", why: "A day out for the family, fifteen minutes away" },
    yas: { brand: "Gröna Lund", brandColor: "#0E5A3A", place2: "Djurgården, Stockholm", why: "A day out for four, fifteen minutes away" },
    wbworld: { brand: "Skansen", brandColor: "#C0392B", place2: "Djurgården, Stockholm", why: "Nordic animals and old Sweden, four tickets in one booking" },
    cocacolaarena: { brand: "Stockholm Live", brandColor: "#C5007C", place2: "Avicii Arena, Johanneshov" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Liseberg", brandColor: "#0F5132", place2: "Gothenburg", why: "Oceana water park passes come with the room" },
    ritzrak: { brand: "Grand Hôtel", brandColor: "#1C1C1C", place2: "Grand Hôtel, Blasieholmen", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Wolt", logo: "ld:wolt.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "sas_se", kind: "air", regions: ["se"], name: "SAS EuroBonus", unit: "EuroBonus points", unitOne: "EuroBonus point", logo: "ld:flysas.com", color: "#FFFFFF", fg: "#0028F0", initial: "S", account: "SK ···· 6082", rate: 0.5 }
]);
