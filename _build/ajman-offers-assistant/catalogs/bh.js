window.LUNE_REGIONS.bh = {
  label: "Bahrain", city: "Manama", cur: "BHD", lang: "ar",
  text: {
    "Waitrose": "Alosra", "Dubai Mall": "City Centre Bahrain", "Mall of the Emirates": "Seef Mall", "noon Food": "Talabat", "noon.com": "dukakeen.com",
    "noon": "Dukakeen", "Careem": "Uber", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "megamart.bh",
    "Spinneys": "Megamart", "Carrefour": "LuLu", "VOX Cinemas": "Cineco", "VOX": "Cineco", "Etihad Guest Miles": "Falconflyer miles", "Etihad Guest": "Falconflyer",
    "etihad.com": "gulfair.com", "Etihad": "Gulf Air", "Talabat": "Talabat", "KidZania": "Toys\"R\"Us", "OliOli": "The Lost Paradise of Dilmun", "Yas Waterworld": "The Lost Paradise of Dilmun",
    "Warner Bros. World": "The Lost Paradise of Dilmun", "Coca-Cola Arena": "Bahrain International Circuit", "Atlantis The Palm": "Jumeirah Gulf of Bahrain",
    "Atlantis": "Jumeirah Gulf of Bahrain", "Aquaventure": "the beach club", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Durrat Al Bahrain", "Abu Dhabi": "Muharraq",
    "Dubai": "Manama", "Palm Jumeirah": "Sakhir", "Yas Island": "Sakhir", "Al Quoz": "Seef", "City Walk": "Sakhir", "Financial Centre": "Seef",
    "Grand Atrium": "Seef", "Al Barsha": "Seef", "GOLD, THEATRE by Rhodes and IMAX": "IMAX and THEATRE",
    "Qatar Privilege Club": "Falconflyer", "flydubai OPEN": "Falconflyer", "flydubai": "Gulf Air", "summer heat": "summer heat", "Wizz Air Abu Dhabi": "Gulf Air",
    "وايتروز": "الأسرة", "سبينس": "ميغا مارت", "دبي مول": "سيتي سنتر البحرين", "مول الإمارات": "مجمع السيف", "دبي": "المنامة", "كارفور": "لولو", "فوكس": "سينيكو",
    "ديليفرو": "طلبات", "الاتحاد للطيران": "طيران الخليج", "أتلانتس": "جميرا خليج البحرين", "كريم": "أوبر"
  },
  logos: { waitrose: "ld:alosraonline.com", noon: "ld:dukakeen.com", careem: "uber", deliveroo: "ld:talabat.com",
    spinneys: "ld:megamart.bh", carrefour: "ld:luluhypermarket.com", vox: "ld:cineco.net", etihad: "ld:gulfair.com", kidzania: "ld:toysrus.com.sa",
    yas: "ld:lpodwaterpark.com", cocacolaarena: "ld:bahraingp.com", atlantis: "ld:jumeirah.com", ritzrak: "ld:fourseasons.com",
    talabat: "ld:talabat.com", qatar: "ld:gulfair.com", flydubai: "ld:gulfair.com", wizz: "ld:gulfair.com" },
  offers: {
    waitrose: { brand: "Alosra", brandColor: "#4FB043", place: "Al Raya Mall, Juffair", place2: "Juffair" },
    noon: { brand: "Dukakeen", brandColor: "#1C1C1C", excludes: ["Gift cards and wallet top-ups", "Orders cancelled or returned"] },
    amazon: { hide: true },
    careem: { brand: "Uber" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    spinneys: { brand: "Megamart", brandColor: "#E5202E", place: "All Manama branches" },
    carrefour: { brand: "LuLu Hypermarket", brandColor: "#E31E24", place: "Dana Mall, Manama", place2: "Dana Mall", qualifies: ["In-store spend of AED 400 or more", "Dana Mall branch only"] },
    vox: { brand: "Cineco", brandColor: "#1F4F8F", place: "City Centre Bahrain, Seef", place2: "City Centre Bahrain" },
    shakeshack: { place: "City Centre Bahrain, Seef", place2: "City Centre Bahrain", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "City Centre Bahrain branch only"] },
    emirates: { brand: "Gulf Air", brandColor: "#A3875E" },
    wizz: { hide: true },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0062A8", place: "Seef, Manama", place2: "Seef", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "The Lost Paradise of Dilmun", brandColor: "#2E86C8", place2: "Sakhir", why: "A water park day for four, 30 minutes away", whyFamily: "A water park day for four, 30 minutes away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Bahrain International Circuit", brandColor: "#E01A22", place2: "Sakhir" },
    atlantis: { brand: "Jumeirah Gulf of Bahrain", brandColor: "#1C1C1C", place2: "Sakhir", why: "Beach, pools and a kids' club come with the room", whyFamily: "Beach, pools and a kids' club come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Hotel Bahrain Bay", why: "A weekend staycation in town", whyFamily: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "gulfair_bh", kind: "air", regions: ["bh"], name: "Gulf Air Falconflyer", unit: "Falconflyer miles", unitOne: "Falconflyer mile", logo: "ld:gulfair.com", color: "#FFFFFF", fg: "#A3875E", initial: "G", account: "GF ···· 2207", rate: 0.5 }
]);
