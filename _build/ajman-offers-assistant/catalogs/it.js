window.LUNE_REGIONS.it = {
  label: "Italy", city: "Milan", cur: "EUR", lang: "it",
  text: {
    "Waitrose": "Esselunga", "Shake Shack": "Old Wild West", "Dubai Mall": "CityLife Shopping District", "Mall of the Emirates": "Il Centro Arese", "noon Food": "Deliveroo", "noon.com": "subito.it",
    "noon": "Subito", "Justlife": "ProntoPro", "Careem": "Uber", "Deliveroo Plus": "Glovo Prime", "Deliveroo": "Glovo", "spinneys.com": "conad.it",
    "Spinneys": "Conad", "Carrefour": "Bennet", "VOX Cinemas": "The Space Cinema", "VOX": "The Space", "Etihad Guest Miles": "Volare points", "Etihad Guest": "Volare",
    "etihad.com": "ita-airways.com", "Etihad": "ITA Airways", "Talabat": "Just Eat", "KidZania": "Toys Center", "OliOli": "Museo Scienza", "Yas Waterworld": "Gardaland",
    "Warner Bros. World": "Parco Natura Viva", "Coca-Cola Arena": "San Siro", "Platinumlist": "TicketOne", "Atlantis The Palm": "Bluserena",
    "Atlantis": "Bluserena", "Aquaventure": "the pools and kids' club", "Ritz-Carlton": "Bulgari Hotel", "Ras Al Khaimah": "Lake Como", "Abu Dhabi": "Milan",
    "Dubai": "Milan", "Palm Jumeirah": "Puglia", "Yas Island": "Lake Garda", "Al Quoz": "Isola", "City Walk": "Brera", "Financial Centre": "Porta Nuova",
    "Grand Atrium": "Piazza del Duomo", "Al Barsha": "CityLife", "GOLD, THEATRE by Rhodes and IMAX": "recliner seats and IMAX",
    "summer heat": "foggy winter days", "Wizz Air Abu Dhabi": "Neos"
  },
  logos: { waitrose: "ld:esselunga.it", noon: "ld:subito.it", justmop: "ld:prontopro.it", careem: "uber", deliveroo: "ld:glovoapp.it",
    spinneys: "ld:conad.it", carrefour: "ld:bennet.com", vox: "ld:thespacecinema.it", shakeshack: "ld:oldwildwest.it", etihad: "ld:ita-airways.com",
    kidzania: "ld:toyscenter.it", olioli: "ld:museoscienza.org", yas: "ld:gardaland.it", wbworld: "ld:parconaturaviva.it", cocacolaarena: "ld:sansirostadium.com",
    platinumlist: "ld:ticketone.it", atlantis: "ld:bluserena.it", ritzrak: "ld:bulgarihotels.com", talabat: "ld:justeat.it", wizz: "ld:neosair.it" },
  offers: {
    waitrose: { brand: "Esselunga", brandColor: "#1D3E8A", place: "Viale Piave, Porta Venezia", place2: "Porta Venezia" },
    noon: { brand: "Subito", brandColor: "#F9423A" },
    justmop: { brand: "ProntoPro", brandColor: "#1A6FF0", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Glovo", brandColor: "#FFC244" },
    spinneys: { brand: "Conad", brandColor: "#F18A00", place: "All Milan stores" },
    carrefour: { brand: "Bennet", brandColor: "#E2001A", place: "Milan area hypermarkets", place2: "Milan" },
    vox: { brand: "The Space Cinema", brandColor: "#F07D00", place: "The Space Cinema Odeon, Corso Vittorio Emanuele", place2: "Duomo" },
    shakeshack: { brand: "Old Wild West", brandColor: "#B5121B", place: "All Milan restaurants", place2: "Milan" },
    emirates: { brand: "ITA Airways", brandColor: "#0E6B43" },
    wizz: { brand: "Neos" },
    kidzania: { brand: "Toys Center", brandColor: "#E30613", place: "All Milan stores", place2: "Milan", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Museo Scienza", brandColor: "#00475E", place: "Via San Vittore 21, Sant'Ambrogio", place2: "Sant'Ambrogio", why: "Hands-on science, good for foggy days" },
    yas: { brand: "Gardaland", brandColor: "#0B6FD6", place2: "Castelnuovo del Garda, Lake Garda", why: "A weekend for four, under two hours by car" },
    wbworld: { brand: "Parco Natura Viva", brandColor: "#00594F", place2: "Bussolengo, Verona", why: "A safari park and zoo, four tickets in one booking" },
    cocacolaarena: { brand: "San Siro Stadium", brandColor: "#E8862A", place2: "San Siro, Milan" },
    platinumlist: { brand: "TicketOne", brandColor: "#1E2A6B" },
    atlantis: { brand: "Bluserena", brandColor: "#0057B8", place2: "Puglia", why: "Pool and kids' club passes come with the room" },
    ritzrak: { brand: "Bulgari Hotel", brandColor: "#1C1C1C", place2: "Bulgari Hotel Milano, Brera", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Just Eat", logo: "ld:justeat.it" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "ita_it", kind: "air", regions: ["it"], name: "ITA Airways Volare", unit: "Volare points", unitOne: "Volare point", logo: "ld:ita-airways.com", color: "#FFFFFF", fg: "#0E6B43", initial: "I", account: "AZ ···· 6620", rate: 0.5 }
]);
