window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.be = {
  label: "Belgium", city: "Brussels", cur: "EUR", lang: "fr",
  text: {
    "Waitrose": "Delhaize", "Dubai Mall": "Woluwe Shopping", "Mall of the Emirates": "Docks Bruxsel", "noon Food": "Takeaway.com", "noon.com": "bol.com",
    "noon": "bol", "Justlife": "ListMinut", "Careem": "Uber", "Deliveroo Plus": "Deliveroo Plus", "Deliveroo": "Deliveroo", "spinneys.com": "bioplanet.be",
    "Spinneys": "Bio-Planet", "Carrefour": "Colruyt", "VOX Cinemas": "Kinepolis", "VOX": "Kinepolis", "Shake Shack": "Manhattn's Burgers",
    "Etihad Guest Miles": "Miles & More miles", "Etihad Guest": "Miles & More", "etihad.com": "brusselsairlines.com", "Etihad": "Brussels Airlines", "Talabat": "Takeaway.com",
    "KidZania": "Maxi Toys", "OliOli": "Technopolis", "Yas Waterworld": "Walibi Belgium", "Warner Bros. World": "Pairi Daiza",
    "Coca-Cola Arena": "ING Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Sunparks De Haan", "Atlantis": "Sunparks",
    "Aquaventure": "the Aquafun pool", "Ritz-Carlton": "Corinthia", "Ras Al Khaimah": "the Ardennes", "Abu Dhabi": "Brussels",
    "Dubai": "Brussels", "Palm Jumeirah": "the Belgian coast", "Yas Island": "Wavre", "Al Quoz": "Tour & Taxis", "City Walk": "Avenue Louise", "Financial Centre": "European Quarter",
    "Grand Atrium": "Galeries Royales Saint-Hubert", "Al Barsha": "Ixelles", "GOLD, THEATRE by Rhodes and IMAX": "Laser ULTRA and 4DX",
    "Qatar Privilege Club": "Flying Blue", "flydubai OPEN": "TUI fly", "summer heat": "winter rain", "Wizz Air Abu Dhabi": "TUI fly"
  },
  logos: { waitrose: "ld:delhaize.be", noon: "ld:bol.com", justmop: "ld:listminut.be", careem: "uber", deliveroo: "ld:deliveroo.be",
    spinneys: "ld:bioplanet.be", carrefour: "ld:colruyt.be", vox: "ld:kinepolis.com", shakeshack: "ld:manhattns.com", etihad: "ld:brusselsairlines.com", kidzania: "ld:maxitoys.com",
    olioli: "ld:technopolis.be", yas: "ld:walibi.be", wbworld: "ld:pairidaiza.eu", cocacolaarena: "ld:palais12.com", platinumlist: "ld:ticketmaster.be",
    atlantis: "ld:sunparks.com", ritzrak: "ld:corinthia.com", talabat: "ld:takeaway.com", qatar: "ld:flyingblue.com", flydubai: "ld:tuifly.be", wizz: "ld:tuifly.be" },
  offers: {
    waitrose: { brand: "Delhaize", brandColor: "#D2232A", place: "Woluwe Shopping, Brussels", place2: "Woluwe Shopping" },
    noon: { brand: "bol", brandColor: "#0000A4" },
    justmop: { brand: "ListMinut", brandColor: "#FF9500", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Deliveroo", brandColor: "#00CCBC" },
    spinneys: { brand: "Bio-Planet", brandColor: "#004F9F", place: "All Brussels stores" },
    carrefour: { brand: "Colruyt", brandColor: "#F18A00", place: "Colruyt Anderlecht, Brussels", place2: "Anderlecht" },
    vox: { brand: "Kinepolis", brandColor: "#1C5AA6", place: "Kinepolis Brussels, Heysel", place2: "Heysel" },
    shakeshack: { brand: "Manhattn's Burgers", brandColor: "#F9C400", place: "Ixelles, Brussels", place2: "Ixelles" },
    emirates: { brand: "Brussels Airlines", brandColor: "#002A5C" },
    wizz: { brand: "TUI fly" },
    kidzania: { brand: "Maxi Toys", brandColor: "#E4032E", place: "All Brussels stores", place2: "Brussels", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Technopolis", brandColor: "#FFE500", place: "Technologielaan, Mechelen", place2: "Mechelen", why: "A day out for the family, half an hour away" },
    yas: { brand: "Walibi Belgium", brandColor: "#E30613", place2: "Wavre", why: "A day out for four, half an hour away" },
    wbworld: { brand: "Pairi Daiza", brandColor: "#B08A3E", place2: "Brugelette, Hainaut", why: "Animals and gardens, four tickets in one booking" },
    cocacolaarena: { brand: "ING Arena", brandColor: "#FF6200", place2: "Heysel, Brussels" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Sunparks", brandColor: "#0072BC", place2: "De Haan, Belgian coast", why: "Aquafun pool passes come with the cottage" },
    ritzrak: { brand: "Corinthia Grand Hotel Astoria", brandColor: "#1C1C1C", place2: "Corinthia Brussels, Rue Royale", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Takeaway.com", logo: "ld:takeaway.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "brusselsairlines_be", kind: "air", regions: ["be"], name: "Brussels Airlines Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:brusselsairlines.com", color: "#FFFFFF", fg: "#002A5C", initial: "B", account: "SN ···· 5127", rate: 0.5 }
]);
