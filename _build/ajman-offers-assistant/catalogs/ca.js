window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.ca = {
  label: "Canada", city: "Toronto", cur: "CAD", lang: "en",
  text: {
    "Waitrose": "Longo's", "Dubai Mall": "CF Toronto Eaton Centre", "Mall of the Emirates": "Yorkdale", "noon Food": "Walmart+", "noon.com": "walmart.ca",
    "noon": "Walmart", "Justlife": "Jiffy", "Careem": "Uber", "Deliveroo Plus": "Skip+", "Deliveroo": "SkipTheDishes", "spinneys.com": "loblaws.ca",
    "Spinneys": "Loblaws", "Carrefour": "Canadian Tire", "VOX Cinemas": "Cineplex", "VOX": "Cineplex", "Etihad Guest Miles": "Aeroplan points", "Etihad Guest": "Aeroplan",
    "etihad.com": "aircanada.com", "Etihad": "Air Canada", "Talabat": "DoorDash", "KidZania": "Mastermind Toys", "OliOli": "Royal Ontario Museum", "Yas Waterworld": "Clifton Hill",
    "Warner Bros. World": "Ripley's Aquarium of Canada", "Coca-Cola Arena": "Scotiabank Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Great Wolf Lodge",
    "Atlantis": "Great Wolf Lodge", "Aquaventure": "the indoor water park", "Ritz-Carlton": "Fairmont", "Ras Al Khaimah": "Muskoka", "Abu Dhabi": "Toronto",
    "Dubai": "Toronto", "Palm Jumeirah": "Niagara Falls", "Yas Island": "Niagara Falls", "Al Quoz": "Liberty Village", "City Walk": "Yorkville", "Financial Centre": "the Financial District",
    "Grand Atrium": "Yonge-Dundas", "Al Barsha": "North York", "GOLD, THEATRE by Rhodes and IMAX": "VIP, UltraAVX and IMAX",
    "Qatar Privilege Club": "WestJet Rewards", "flydubai OPEN": "Porter VIPorter", "summer heat": "winter cold", "Wizz Air Abu Dhabi": "Flair Airlines"
  },
  logos: { waitrose: "ld:longos.com", noon: "ld:walmart.ca", justmop: "ld:jiffyondemand.com", careem: "uber", deliveroo: "ld:skipthedishes.com",
    spinneys: "ld:loblaws.ca", carrefour: "ld:canadiantire.ca", vox: "ld:cineplex.com", etihad: "ld:aircanada.com", kidzania: "ld:mastermindtoys.com",
    olioli: "ld:rom.on.ca", yas: "ld:cliftonhill.com", wbworld: "ld:ripleyaquariums.com", cocacolaarena: "ld:scotiabankarena.com", platinumlist: "ld:ticketmaster.ca",
    atlantis: "ld:greatwolflodge.com", ritzrak: "ld:fairmont.com", talabat: "ld:doordash.com", qatar: "ld:westjet.com", flydubai: "ld:flyporter.com", wizz: "ld:flyflair.com" },
  offers: {
    waitrose: { brand: "Longo's", brandColor: "#D7282F", place: "Maple Leaf Square, Downtown Toronto", place2: "Maple Leaf Square" },
    noon: { brand: "Walmart", brandColor: "#0071CE" },
    justmop: { brand: "Jiffy", brandColor: "#00A9E0", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "SkipTheDishes", brandColor: "#FF8000" },
    spinneys: { brand: "Loblaws", brandColor: "#E2231A", place: "All Toronto stores" },
    carrefour: { brand: "Canadian Tire", brandColor: "#D71920", place: "Yonge and Eglinton, Toronto", place2: "Yonge and Eglinton" },
    vox: { brand: "Cineplex", brandColor: "#1C1C1C", place: "Cineplex Cinemas Yonge-Dundas and VIP, Downtown Toronto", place2: "Yonge-Dundas" },
    shakeshack: { place: "Yonge-Dundas, Downtown Toronto", place2: "Yonge-Dundas", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Yonge-Dundas branch only"] },
    emirates: { brand: "Air Canada", brandColor: "#D8292F" },
    wizz: { brand: "Flair Airlines" },
    kidzania: { brand: "Mastermind Toys", brandColor: "#2E5DAA", place: "Yorkdale, Toronto", place2: "Yorkdale", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Royal Ontario Museum", brandColor: "#000000", place: "100 Queen's Park, Toronto", place2: "Queen's Park", why: "A day out for the family, in the middle of town" },
    yas: { brand: "Clifton Hill", brandColor: "#0057A8", place2: "Niagara Falls, Ontario", why: "A day of rides for four, ninety minutes away" },
    wbworld: { brand: "Ripley's Aquarium of Canada", brandColor: "#E5175F", place2: "Downtown Toronto", why: "Sharks, rays and jellyfish, four tickets in one booking" },
    cocacolaarena: { brand: "Scotiabank Arena", brandColor: "#EC111A", place2: "Downtown Toronto" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Great Wolf Lodge", brandColor: "#1B3A57", place2: "Niagara Falls, Ontario", why: "Indoor water park passes come with the room" },
    ritzrak: { brand: "Fairmont", brandColor: "#1C1C1C", place2: "Fairmont Royal York", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "DoorDash", logo: "ld:doordash.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "aircanada_ca", kind: "air", regions: ["ca"], name: "Air Canada Aeroplan", unit: "Aeroplan points", unitOne: "Aeroplan point", logo: "ld:aircanada.com", color: "#FFFFFF", fg: "#D8292F", initial: "A", account: "AC ···· 3816", rate: 0.5 },
  { id: "westjet_ca", kind: "air", regions: ["ca"], name: "WestJet Rewards", unit: "WestJet points", unitOne: "WestJet point", logo: "ld:westjet.com", color: "#FFFFFF", fg: "#00A1AF", initial: "W", account: null, rate: 0.5 }
]);
