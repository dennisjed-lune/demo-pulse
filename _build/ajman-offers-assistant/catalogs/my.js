window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.my = {
  label: "Malaysia", city: "Kuala Lumpur", cur: "MYR", lang: "en",
  text: {
    "Waitrose": "Village Grocer", "Dubai Mall": "Pavilion Kuala Lumpur", "Mall of the Emirates": "Mid Valley Megamall", "noon Food": "ShopeeFood", "noon.com": "shopee.com.my",
    "noon": "Shopee", "Amazon": "Lazada", "Justlife": "ServisHero", "Careem": "Grab", "Deliveroo Plus": "pandapro", "Deliveroo": "foodpanda", "spinneys.com": "jayagrocer.com",
    "Spinneys": "Jaya Grocer", "Carrefour": "Lotus's", "VOX Cinemas": "GSC", "VOX": "GSC", "Etihad Guest Miles": "Enrich Points", "Etihad Guest": "Enrich",
    "etihad.com": "malaysiaairlines.com", "Etihad": "Malaysia Airlines", "Talabat": "ShopeeFood", "KidZania": "Toys\"R\"Us", "OliOli": "Petrosains", "Yas Waterworld": "Sunway Lagoon",
    "Warner Bros. World": "Zoo Negara", "Coca-Cola Arena": "Zepp Kuala Lumpur", "Platinumlist": "Ticket2U", "Atlantis The Palm": "Desaru Coast",
    "Atlantis": "Desaru Coast", "Aquaventure": "the Adventure Waterpark", "Ritz-Carlton": "Mandarin Oriental", "Ras Al Khaimah": "Langkawi", "Abu Dhabi": "Kuala Lumpur",
    "Dubai": "Kuala Lumpur", "Palm Jumeirah": "Desaru", "Yas Island": "Bandar Sunway", "Al Quoz": "Petaling Jaya", "City Walk": "Bangsar", "Financial Centre": "KLCC",
    "Grand Atrium": "Pavilion Kuala Lumpur", "Al Barsha": "Mont Kiara", "GOLD, THEATRE by Rhodes and IMAX": "Gold Class and IMAX",
    "flydubai OPEN": "AirAsia", "summer heat": "monsoon rain", "Wizz Air Abu Dhabi": "AirAsia"
  },
  logos: { waitrose: "ld:villagegrocer.com.my", noon: "ld:shopee.com.my", amazon: "ld:lazada.com.my", justmop: "ld:servishero.com", careem: "ld:grab.com", deliveroo: "ld:foodpanda.my",
    spinneys: "ld:jayagrocer.com", carrefour: "ld:lotuss.com.my", vox: "ld:gsc.com.my", etihad: "ld:malaysiaairlines.com", kidzania: "ld:toysrus.com.my",
    olioli: "ld:petrosains.com.my", yas: "ld:sunwaylagoon.com", wbworld: "ld:zoonegaramalaysia.my", cocacolaarena: "ld:zepp.co.jp", platinumlist: "ld:ticket2u.com.my",
    atlantis: "ld:desarucoast.com", ritzrak: "ld:mandarinoriental.com", talabat: "ld:shopeefood.com.my", flydubai: "ld:airasiagroup.com", wizz: "ld:airasiagroup.com" },
  offers: {
    waitrose: { brand: "Village Grocer", brandColor: "#4E8B2C", place: "Bangsar Village, Kuala Lumpur", place2: "Bangsar Village" },
    noon: { brand: "Shopee", brandColor: "#EE4D2D" },
    amazon: { brand: "Lazada", brandColor: "#0F146D", logo: "ld:lazada.com.my" },
    justmop: { brand: "ServisHero", brandColor: "#FBBF24", why: "Cleaning runs AED 800 a month" },
    careem: { brand: "Grab", brandColor: "#00B14F" },
    namshi: { brand: "foodpanda", brandColor: "#D70F64" },
    spinneys: { brand: "Jaya Grocer", brandColor: "#E3242B", place: "All Kuala Lumpur stores" },
    carrefour: { brand: "Lotus's", brandColor: "#00B2A9", place: "Mutiara Damansara, Petaling Jaya", place2: "Mutiara Damansara" },
    vox: { brand: "GSC", brandColor: "#111111", place: "GSC Mid Valley Megamall", place2: "Mid Valley Megamall" },
    shakeshack: { place: "The Exchange TRX, Kuala Lumpur", place2: "The Exchange TRX", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "The Exchange TRX branch only"] },
    emirates: { brand: "Malaysia Airlines", brandColor: "#1C3D72" },
    wizz: { brand: "AirAsia" },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "1 Utama, Petaling Jaya", place2: "1 Utama", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Petrosains", brandColor: "#1E3A8A", place: "Suria KLCC, Kuala Lumpur", place2: "Suria KLCC", why: "A science day out for the family, in the city centre" },
    yas: { brand: "Sunway Lagoon", brandColor: "#1E6FD9", place2: "Bandar Sunway, Selangor", why: "A theme park day for four, half an hour away" },
    wbworld: { brand: "Zoo Negara", brandColor: "#1E6B3A", place2: "Ulu Klang, Selangor", why: "Animals and shows, four tickets in one booking" },
    cocacolaarena: { brand: "Zepp Kuala Lumpur", brandColor: "#E60012", place2: "Bukit Bintang City Centre" },
    platinumlist: { brand: "Ticket2U", brandColor: "#A64CA6" },
    atlantis: { brand: "Desaru Coast", brandColor: "#2BA6B5", place2: "Desaru, Johor", why: "Adventure Waterpark passes come with the room" },
    ritzrak: { brand: "Mandarin Oriental", brandColor: "#1C1C1C", place2: "Mandarin Oriental, Kuala Lumpur", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "ShopeeFood", logo: "ld:shopeefood.com.my" }, amazon: { name: "Lazada", logo: "ld:lazada.com.my" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "malaysiaairlines_my", kind: "air", regions: ["my"], name: "Malaysia Airlines Enrich", unit: "Enrich Points", unitOne: "Enrich Point", logo: "ld:malaysiaairlines.com", color: "#FFFFFF", fg: "#1C3D72", initial: "M", account: "MH ···· 4410", rate: 0.5 },
  { id: "airasia_my", kind: "air", regions: ["my"], name: "AirAsia Rewards", unit: "AirAsia points", unitOne: "AirAsia point", logo: "ld:airasiagroup.com", color: "#FFFFFF", fg: "#FF0000", initial: "A", account: null, rate: 0.5 }
]);
