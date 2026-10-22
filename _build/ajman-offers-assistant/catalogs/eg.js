window.LUNE_REGIONS.eg = {
  label: "Egypt", city: "Cairo", cur: "EGP", lang: "ar",
  text: {
    "Waitrose": "Gourmet", "Dubai Mall": "Cairo Festival City", "Mall of the Emirates": "Mall of Egypt", "noon Food": "Jumia", "noon.com": "jumia.com.eg",
    "noon": "Jumia", "Justlife": "Filkhedma", "Careem": "Uber", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "seoudisupermarket.com",
    "Spinneys": "Seoudi", "Carrefour": "Hyperone", "VOX Cinemas": "Scene Cinemas", "VOX": "Scene", "Shake Shack": "Buffalo Burger", "Etihad Guest Miles": "EgyptAir Plus miles", "Etihad Guest": "EgyptAir Plus",
    "etihad.com": "egyptair.com", "Etihad": "EgyptAir", "KidZania": "Toys\"R\"Us", "Yas Waterworld": "Pickalbatros Aqua Park",
    "Warner Bros. World": "Grand Egyptian Museum", "Coca-Cola Arena": "Cairo Opera House", "Platinumlist": "Ticketsmarche", "Atlantis The Palm": "Jaz Aquamarine",
    "Atlantis": "Jaz", "Aquaventure": "the aqua park", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Ain Sokhna", "Abu Dhabi": "Alexandria",
    "Dubai": "Cairo", "Palm Jumeirah": "Hurghada", "Yas Island": "Sharm El Sheikh", "Al Quoz": "Maadi", "City Walk": "Zamalek", "Financial Centre": "New Cairo",
    "Grand Atrium": "Cairo Festival City", "Al Barsha": "Heliopolis", "GOLD, THEATRE by Rhodes and IMAX": "VIP and IMAX", "Wizz Air Abu Dhabi": "Air Cairo",
    "وايتروز": "جورميه", "دبي مول": "كايرو فستيفال سيتي", "مول الإمارات": "مول مصر", "دبي": "القاهرة", "كارفور": "هايبر وان", "فوكس": "سين سينماز",
    "شيك شاك": "بافلو برجر", "ديليفرو": "طلبات", "الاتحاد للطيران": "مصر للطيران", "أتلانتس": "جاز"
  },
  logos: { waitrose: "ld:gourmetegypt.com", spinneys: "ld:seoudisupermarket.com", carrefour: "ld:hyperone.com.eg", noon: "ld:jumia.com.eg", justmop: "ld:filkhedma.com",
    careem: "uber", deliveroo: "ld:talabat.com", talabat: "ld:talabat.com", vox: "ld:scenecinemas.com", shakeshack: "ld:buffaloburger.com", etihad: "ld:egyptair.com",
    wizz: "ld:aircairo.com", kidzania: "ld:toysrus.com", yas: "ld:pickalbatros.com", wbworld: "ld:gem.eg", cocacolaarena: "ld:cairoopera.org",
    platinumlist: "ld:ticketsmarche.com", atlantis: "ld:jazhotels.com", ritzrak: "ld:fourseasons.com" },
  offers: {
    waitrose: { brand: "Gourmet", brandColor: "#1A1A1A", place: "Zamalek, Cairo", place2: "Zamalek" },
    spinneys: { brand: "Seoudi", brandColor: "#00563F", place: "All Cairo branches" },
    carrefour: { brand: "Hyperone", brandColor: "#1B3F94", place: "Sheikh Zayed, Giza", place2: "Sheikh Zayed" },
    noon: { brand: "Jumia", brandColor: "#F68B1E" },
    justmop: { brand: "Filkhedma", brandColor: "#1DB45A", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    vox: { brand: "Scene Cinemas", brandColor: "#111111", place: "District 5, New Cairo", place2: "District 5" },
    shakeshack: { brand: "Buffalo Burger", brandColor: "#F47B20", place: "Zamalek, Cairo", place2: "Zamalek", qualifies: ["Dine-in, takeaway and Buffalo Burger app orders", "Zamalek branch only"] },
    emirates: { brand: "EgyptAir", brandColor: "#0D3B7A" },
    wizz: { brand: "Air Cairo" },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "Cairo Festival City, New Cairo", place2: "Cairo Festival City", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Pickalbatros Aqua Park", brandColor: "#1E2A4A", place2: "Sharm El Sheikh", why: "A long weekend for four, a short flight away" },
    wbworld: { brand: "Grand Egyptian Museum", brandColor: "#E8731A", place2: "Giza", why: "The Tutankhamun galleries, four tickets in one booking" },
    cocacolaarena: { brand: "Cairo Opera House", brandColor: "#7A0A0A", place2: "Zamalek, Cairo" },
    platinumlist: { brand: "Ticketsmarche", brandColor: "#FFC20E" },
    atlantis: { brand: "Jaz Hotel Group", brandColor: "#4A3B3B", place2: "Makadi Bay, Hurghada", why: "Aqua park passes come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Cairo at Nile Plaza", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "egyptair_eg", kind: "air", regions: ["eg"], name: "EgyptAir Plus", unit: "EgyptAir Plus miles", unitOne: "EgyptAir Plus mile", logo: "ld:egyptair.com", color: "#FFFFFF", fg: "#0D3B7A", initial: "E", account: "MS ···· 4410", rate: 0.5 }
]);
