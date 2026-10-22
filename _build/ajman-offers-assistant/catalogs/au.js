window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.au = {
  label: "Australia", city: "Sydney", cur: "AUD", lang: "en",
  text: {
    "Waitrose": "Harris Farm Markets", "Dubai Mall": "Westfield Sydney", "Mall of the Emirates": "Westfield Bondi Junction", "noon Food": "DoorDash", "noon.com": "ebay.com.au",
    "noon": "eBay", "Justlife": "Airtasker", "Careem": "Uber", "Deliveroo Plus": "Uber One", "Deliveroo": "Uber Eats", "spinneys.com": "woolworths.com.au",
    "Spinneys": "Woolworths", "Carrefour": "Big W", "VOX Cinemas": "Event Cinemas", "VOX": "Event", "Shake Shack": "Grill'd", "Etihad Guest Miles": "Qantas Points", "Etihad Guest": "Qantas Frequent Flyer",
    "etihad.com": "qantas.com", "Etihad": "Qantas", "Talabat": "DoorDash", "KidZania": "Toyworld", "OliOli": "Powerhouse", "Yas Waterworld": "Luna Park Sydney",
    "Warner Bros. World": "Taronga Zoo", "Coca-Cola Arena": "Qudos Bank Arena", "Platinumlist": "Ticketek", "Atlantis The Palm": "Paradise Resort Gold Coast",
    "Atlantis": "Paradise Resort", "Aquaventure": "the water park", "Ritz-Carlton": "Crown", "Ras Al Khaimah": "the Hunter Valley", "Abu Dhabi": "Sydney",
    "Dubai": "Sydney", "Palm Jumeirah": "the Gold Coast", "Yas Island": "Milsons Point", "Al Quoz": "Alexandria", "City Walk": "Surry Hills", "Financial Centre": "the CBD",
    "Grand Atrium": "Pitt Street Mall", "Al Barsha": "Chatswood", "GOLD, THEATRE by Rhodes and IMAX": "Gold Class and V-Max",
    "Qatar Privilege Club": "Velocity Frequent Flyer", "flydubai OPEN": "Jetstar", "Wizz Air Abu Dhabi": "Jetstar"
  },
  logos: { waitrose: "ld:harrisfarm.com.au", noon: "ld:ebay.com.au", justmop: "ld:airtasker.com", careem: "uber", deliveroo: "ld:ubereats.com",
    spinneys: "ld:woolworths.com.au", carrefour: "ld:bigw.com.au", vox: "ld:eventcinemas.com.au", shakeshack: "ld:grilld.com.au", etihad: "ld:qantas.com", kidzania: "ld:toyworld.com.au",
    olioli: "ld:powerhouse.com.au", yas: "ld:lunaparksydney.com", wbworld: "ld:taronga.org.au", cocacolaarena: "ld:qudosbankarena.com.au", platinumlist: "ld:ticketek.com.au",
    atlantis: "ld:paradiseresort.com.au", ritzrak: "ld:crownsydney.com.au", talabat: "ld:doordash.com", qatar: "ld:virginaustralia.com", flydubai: "ld:jetstar.com", wizz: "ld:jetstar.com" },
  offers: {
    waitrose: { brand: "Harris Farm Markets", brandColor: "#1E5631", place: "Broadway, Ultimo", place2: "Broadway" },
    noon: { brand: "eBay", brandColor: "#0064D2" },
    justmop: { brand: "Airtasker", brandColor: "#0A66FF", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Uber Eats", brandColor: "#06C167" },
    spinneys: { brand: "Woolworths", brandColor: "#178841", place: "All Sydney stores" },
    carrefour: { brand: "Big W", brandColor: "#0046BE", place: "Westfield Bondi Junction", place2: "Bondi Junction" },
    vox: { brand: "Event Cinemas", brandColor: "#111111", place: "Event Cinemas George Street, Sydney CBD", place2: "George Street" },
    shakeshack: { brand: "Grill'd", brandColor: "#E31B23", place: "Crown Street, Surry Hills", place2: "Surry Hills", qualifies: ["Dine-in, takeaway and Grill'd app orders", "Surry Hills branch only"] },
    emirates: { brand: "Qantas", brandColor: "#E40000" },
    wizz: { brand: "Jetstar" },
    kidzania: { brand: "Toyworld", brandColor: "#009FE3", place: "All Sydney stores", place2: "Sydney", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Powerhouse", brandColor: "#111111", place: "Powerhouse Castle Hill", place2: "Castle Hill", why: "A science day out for the family, forty minutes away" },
    yas: { brand: "Luna Park Sydney", brandColor: "#A8302B", place2: "Milsons Point, Sydney", why: "A night of rides for four, across the bridge" },
    wbworld: { brand: "Taronga Zoo", brandColor: "#1E6B3A", place2: "Mosman, Sydney", why: "Animals and harbour views, four tickets in one booking" },
    cocacolaarena: { brand: "Qudos Bank Arena", brandColor: "#7B5CE6", place2: "Sydney Olympic Park" },
    platinumlist: { brand: "Ticketek", brandColor: "#0B1A2B" },
    atlantis: { brand: "Paradise Resort", brandColor: "#E8403A", place2: "Surfers Paradise, Gold Coast", why: "Water park and kids' club access come with the room" },
    ritzrak: { brand: "Crown Sydney", brandColor: "#A8894C", place2: "Crown Sydney, Barangaroo", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "DoorDash", logo: "ld:doordash.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "qantas_au", kind: "air", regions: ["au"], name: "Qantas Frequent Flyer", unit: "Qantas Points", unitOne: "Qantas Point", logo: "ld:qantas.com", color: "#FFFFFF", fg: "#E40000", initial: "Q", account: "QF ···· 4410", rate: 0.5 },
  { id: "virgin_au", kind: "air", regions: ["au"], name: "Velocity Frequent Flyer", unit: "Velocity Points", unitOne: "Velocity Point", logo: "ld:virginaustralia.com", color: "#FFFFFF", fg: "#E10A0A", initial: "V", account: null, rate: 0.5 }
]);
