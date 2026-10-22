window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.id = {
  label: "Indonesia", city: "Jakarta", cur: "IDR", lang: "en",
  text: {
    "Waitrose": "Ranch Market", "Dubai Mall": "Grand Indonesia", "Mall of the Emirates": "Pondok Indah Mall", "noon Food": "GoFood", "noon.com": "tokopedia.com",
    "noon": "Tokopedia", "Amazon": "Shopee", "Justlife": "KliknClean", "Careem": "Gojek", "Deliveroo Plus": "GrabUnlimited", "Deliveroo": "GrabFood", "spinneys.com": "superindo.co.id",
    "Spinneys": "Superindo", "Carrefour": "Transmart", "VOX Cinemas": "Cinema XXI", "VOX": "XXI", "Shake Shack": "Burgreens", "Etihad Guest Miles": "GarudaMiles miles", "Etihad Guest": "GarudaMiles",
    "etihad.com": "garuda-indonesia.com", "Etihad": "Garuda Indonesia", "Talabat": "GoFood", "KidZania": "Toys Kingdom", "Yas Waterworld": "Ancol Dreamland",
    "Warner Bros. World": "Taman Safari", "Coca-Cola Arena": "Gelora Bung Karno", "Platinumlist": "KiosTix", "Atlantis The Palm": "AYANA Bali",
    "Atlantis": "AYANA", "Aquaventure": "the pools", "Ritz-Carlton": "Kempinski", "Ras Al Khaimah": "Bali", "Abu Dhabi": "Jakarta",
    "Dubai": "Jakarta", "Palm Jumeirah": "Jimbaran", "Yas Island": "Ancol", "Al Quoz": "Kemang", "City Walk": "Senopati", "Financial Centre": "Sudirman",
    "Grand Atrium": "Grand Indonesia", "Al Barsha": "Kebayoran Baru", "GOLD, THEATRE by Rhodes and IMAX": "The Premiere and IMAX",
    "flydubai OPEN": "Lion Air", "summer heat": "rainy season", "Wizz Air Abu Dhabi": "Lion Air"
  },
  logos: { waitrose: "ld:ranchmarket.co.id", noon: "ld:tokopedia.com", amazon: "ld:shopee.co.id", justmop: "ld:kliknclean.com", careem: "ld:gojek.com", deliveroo: "ld:grab.com",
    spinneys: "ld:superindo.co.id", carrefour: "ld:transmart.co.id", vox: "ld:21cineplex.com", shakeshack: "ld:burgreens.com", etihad: "ld:garuda-indonesia.com", kidzania: "ld:toyskingdom.co.id",
    yas: "ld:ancol.com", wbworld: "ld:tamansafari.com", cocacolaarena: "ld:gbk.id", platinumlist: "ld:kiostix.com",
    atlantis: "ld:ayana.com", ritzrak: "ld:kempinski.com", talabat: "ld:gofood.co.id", flydubai: "ld:lionair.co.id", wizz: "ld:lionair.co.id" },
  offers: {
    waitrose: { brand: "Ranch Market", brandColor: "#C8102E", place: "Grand Indonesia, Central Jakarta", place2: "Grand Indonesia" },
    noon: { brand: "Tokopedia", brandColor: "#03AC0E" },
    amazon: { brand: "Shopee", brandColor: "#EE4D2D", logo: "ld:shopee.co.id" },
    justmop: { brand: "KliknClean", brandColor: "#3FB8C9", why: "Cleaning runs AED 500 a month" },
    careem: { brand: "Gojek", brandColor: "#00AA13" },
    namshi: { brand: "GrabFood", brandColor: "#00B14F" },
    spinneys: { brand: "Superindo", brandColor: "#E4002B", place: "All Jakarta stores" },
    carrefour: { brand: "Transmart", brandColor: "#E30613", place: "Cilandak, South Jakarta", place2: "Cilandak" },
    vox: { brand: "Cinema XXI", brandColor: "#5A0F2E", place: "Plaza Senayan XXI, Senayan", place2: "Plaza Senayan" },
    shakeshack: { brand: "Burgreens", brandColor: "#1E5631", place: "Menteng, Central Jakarta", place2: "Menteng", qualifies: ["Dine-in, takeaway and delivery orders", "Menteng branch only"] },
    emirates: { brand: "Garuda Indonesia", brandColor: "#0B2C5F" },
    wizz: { brand: "Lion Air" },
    kidzania: { brand: "Toys Kingdom", brandColor: "#E94E1B", place: "Grand Indonesia, Central Jakarta", place2: "Grand Indonesia", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Ancol Dreamland", brandColor: "#0033A0", place2: "Ancol, North Jakarta", why: "A theme park day for four, half an hour away" },
    wbworld: { brand: "Taman Safari", brandColor: "#1E6B3A", place2: "Bogor, West Java", why: "Safari drive and animal shows, four tickets in one booking" },
    cocacolaarena: { brand: "Gelora Bung Karno", brandColor: "#D71920", place2: "Senayan, Jakarta" },
    platinumlist: { brand: "KiosTix", brandColor: "#2E3192" },
    atlantis: { brand: "AYANA", brandColor: "#1BA0D8", place2: "AYANA Bali, Jimbaran", why: "Pools and beach club access come with the room" },
    ritzrak: { brand: "Kempinski", brandColor: "#0B1A33", place2: "Hotel Indonesia Kempinski Jakarta", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "GoFood", logo: "ld:gofood.co.id" }, amazon: { name: "Shopee", logo: "ld:shopee.co.id" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "garuda_id", kind: "air", regions: ["id"], name: "GarudaMiles", unit: "GarudaMiles miles", unitOne: "GarudaMiles mile", logo: "ld:garuda-indonesia.com", color: "#FFFFFF", fg: "#0B2C5F", initial: "G", account: "GA ···· 4410", rate: 0.5 }
]);
