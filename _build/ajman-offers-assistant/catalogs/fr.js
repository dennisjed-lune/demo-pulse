window.LUNE_REGIONS.fr = {
  label: "France", city: "Paris", cur: "EUR", lang: "fr",
  text: {
    "Waitrose": "La Grande Épicerie de Paris", "Shake Shack": "Big Fernand", "Dubai Mall": "Forum des Halles", "Mall of the Emirates": "Beaugrenelle", "noon Food": "Cdiscount à volonté", "noon.com": "cdiscount.com",
    "noon": "Cdiscount", "Justlife": "Wecasa", "Careem": "Uber", "spinneys.com": "franprix.fr",
    "Spinneys": "Franprix", "Carrefour": "Auchan", "VOX Cinemas": "Pathé", "VOX": "Pathé", "Etihad Guest Miles": "Flying Blue Miles", "Etihad Guest": "Flying Blue",
    "etihad.com": "airfrance.fr", "Etihad": "Air France", "Talabat": "Uber Eats", "KidZania": "JouéClub", "OliOli": "Cité des sciences", "Yas Waterworld": "Disneyland Paris",
    "Warner Bros. World": "Parc Astérix", "Coca-Cola Arena": "Accor Arena", "Platinumlist": "Fnac Spectacles", "Atlantis The Palm": "Center Parcs",
    "Atlantis": "Center Parcs", "Aquaventure": "Aqua Mundo", "Ritz-Carlton": "Ritz Paris", "Ras Al Khaimah": "Normandy", "Abu Dhabi": "Paris",
    "Dubai": "Paris", "Palm Jumeirah": "Les Bois-Francs", "Yas Island": "Marne-la-Vallée", "Al Quoz": "Belleville", "City Walk": "Le Marais", "Financial Centre": "La Défense",
    "Grand Atrium": "Châtelet", "Al Barsha": "the 16th arrondissement", "GOLD, THEATRE by Rhodes and IMAX": "Pathé Premium and IMAX",
    "summer heat": "grey days", "Wizz Air Abu Dhabi": "Transavia"
  },
  logos: { waitrose: "ld:lagrandeepicerie.com", noon: "ld:cdiscount.com", justmop: "ld:wecasa.fr", careem: "uber", deliveroo: "ld:deliveroo.fr",
    spinneys: "ld:franprix.fr", carrefour: "ld:auchan.fr", vox: "ld:pathe.fr", shakeshack: "ld:bigfernand.com", etihad: "ld:airfrance.fr",
    kidzania: "ld:joueclub.fr", olioli: "ld:cite-sciences.fr", yas: "ld:disneylandparis.com", wbworld: "ld:parcasterix.fr", cocacolaarena: "ld:accorarena.com",
    platinumlist: "ld:fnacspectacles.com", atlantis: "ld:centerparcs.de", ritzrak: "ld:ritzparis.com", talabat: "ld:ubereats.com", wizz: "ld:transavia.com" },
  offers: {
    waitrose: { brand: "La Grande Épicerie de Paris", brandColor: "#1A1A1A", place: "Rue de Sèvres, 7th arrondissement", place2: "Rive Gauche" },
    noon: { brand: "Cdiscount", brandColor: "#2F2FE8" },
    justmop: { brand: "Wecasa", brandColor: "#1A1A1A", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Deliveroo", brandColor: "#00CCBC" },
    spinneys: { brand: "Franprix", brandColor: "#F26722", place: "All Paris stores" },
    carrefour: { brand: "Auchan", brandColor: "#E2001A", place: "Westfield Les 4 Temps, La Défense", place2: "La Défense" },
    vox: { brand: "Pathé", brandColor: "#FFC20E", place: "Pathé Palace, Boulevard des Capucines", place2: "Opéra" },
    shakeshack: { brand: "Big Fernand", brandColor: "#1A1A1A", place: "Rue du Faubourg Poissonnière, 9th arrondissement", place2: "Faubourg Poissonnière" },
    emirates: { brand: "Air France", brandColor: "#002157" },
    wizz: { brand: "Transavia" },
    kidzania: { brand: "JouéClub", brandColor: "#E30613", place: "Village JouéClub, Boulevard des Italiens", place2: "Boulevard des Italiens", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Cité des sciences et de l'industrie", brandColor: "#1A1A1A", place: "30 Avenue Corentin Cariou, La Villette", place2: "La Villette", why: "Hands-on science, good for grey days" },
    yas: { brand: "Disneyland Paris", brandColor: "#1A2A6C", place2: "Marne-la-Vallée", why: "A weekend for four, forty minutes by RER" },
    wbworld: { brand: "Parc Astérix", brandColor: "#E30613", place2: "Plailly, Oise", why: "Rides and shows for four, forty minutes north of Paris" },
    cocacolaarena: { brand: "Accor Arena", brandColor: "#0A0A3C", place2: "Bercy, Paris" },
    platinumlist: { brand: "Fnac Spectacles", brandColor: "#E1A400" },
    atlantis: { brand: "Center Parcs", brandColor: "#00594F", place2: "Les Bois-Francs, Normandy", why: "Aqua Mundo pool passes come with the cottage" },
    ritzrak: { brand: "Ritz Paris", brandColor: "#1F2A44", place2: "Place Vendôme, Paris", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Uber Eats", logo: "ld:ubereats.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "airfrance_fr", kind: "air", regions: ["fr"], name: "Air France Flying Blue", unit: "Flying Blue Miles", unitOne: "Flying Blue Mile", logo: "ld:airfrance.fr", color: "#FFFFFF", fg: "#002157", initial: "A", account: "AF ···· 3092", rate: 0.5 }
]);
