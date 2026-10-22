window.LUNE_REGIONS.jo = {
  label: "Jordan", city: "Amman", cur: "JOD", lang: "ar",
  text: {
    "Waitrose": "Cozmo", "Dubai Mall": "Taj Mall", "Mall of the Emirates": "City Mall", "noon Food": "OpenSooq", "noon.com": "opensooq.com",
    "noon": "OpenSooq", "Justlife": "WashyWash", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "safeway.com.jo",
    "Spinneys": "Safeway", "Carrefour": "Leaders Center", "VOX Cinemas": "Taj Cinemas", "VOX": "Taj", "Shake Shack": "Firefly Burger", "Etihad Guest Miles": "Royal Club points", "Etihad Guest": "Royal Club",
    "etihad.com": "rj.com", "Etihad": "Royal Jordanian", "KidZania": "Hamleys", "OliOli": "The Children's Museum", "Yas Waterworld": "Petra",
    "Coca-Cola Arena": "Tzkrti", "Atlantis The Palm": "Kempinski Ishtar Dead Sea",
    "Atlantis": "Kempinski", "Aquaventure": "the pools", "Ritz-Carlton": "Fairmont", "Ras Al Khaimah": "Aqaba", "Abu Dhabi": "Irbid",
    "Dubai": "Amman", "Palm Jumeirah": "the Dead Sea", "Yas Island": "Wadi Musa", "Al Quoz": "Sweifieh", "City Walk": "Abdali Boulevard", "Financial Centre": "Shmeisani",
    "Grand Atrium": "Taj Mall", "Al Barsha": "Abdoun", "GOLD, THEATRE by Rhodes and IMAX": "VIP screens", "Wizz Air Abu Dhabi": "Air Arabia Jordan",
    "وايتروز": "كوزمو", "دبي مول": "تاج مول", "مول الإمارات": "سيتي مول", "دبي": "عمّان", "كارفور": "ليدرز سنتر", "فوكس": "تاج سينما",
    "شيك شاك": "فايرفلاي برجر", "ديليفرو": "طلبات", "الاتحاد للطيران": "الملكية الأردنية", "أتلانتس": "كمبنسكي"
  },
  logos: { waitrose: "ld:cozmo.jo", spinneys: "ld:safeway.com.jo", carrefour: "ld:leaders.jo", noon: "ld:opensooq.com", amazon: "ld:smartbuy-me.com",
    justmop: "ld:washywash.com", careem: "ld:careem.com", deliveroo: "ld:talabat.com", talabat: "ld:talabat.com", vox: "ld:tajcinemas.com", shakeshack: "ld:fireflyburgers.com",
    etihad: "ld:rj.com", wizz: "ld:airarabia.com", kidzania: "ld:hamleys.com", olioli: "ld:cmj.jo", yas: "ld:visitpetra.jo",
    cocacolaarena: "ld:tzkrti.com", atlantis: "ld:kempinski.com", ritzrak: "ld:fairmont.com" },
  offers: {
    waitrose: { brand: "Cozmo", brandColor: "#0D4C8B", place: "Mecca Street, Amman", place2: "Mecca Street" },
    spinneys: { brand: "Safeway", brandColor: "#E31E24", place: "All Amman branches" },
    carrefour: { brand: "Leaders Center", brandColor: "#A3238E", place: "Sweifieh, Amman", place2: "Sweifieh" },
    noon: { brand: "OpenSooq", brandColor: "#3FA535" },
    amazon: { brand: "SmartBuy", brandColor: "#FFD400" },
    justmop: { brand: "WashyWash", brandColor: "#3BB9C9", why: "Laundry and cleaning run AED 1,600 a month" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    vox: { brand: "Taj Cinemas", brandColor: "#111111", place: "Taj Mall, Abdoun", place2: "Taj Mall" },
    shakeshack: { brand: "Firefly Burger", brandColor: "#C8102E", place: "Jabal Amman, Amman", place2: "Jabal Amman", qualifies: ["Dine-in and takeaway orders", "Jabal Amman branch only"] },
    emirates: { brand: "Royal Jordanian", brandColor: "#D32027" },
    wizz: { brand: "Air Arabia Jordan" },
    kidzania: { brand: "Hamleys", brandColor: "#E2001A", place: "Mecca Street, Amman", place2: "Mecca Street", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "The Children's Museum", brandColor: "#111111", place: "King Hussein Park, Amman", place2: "King Hussein Park", why: "A day out for the family, fifteen minutes away" },
    yas: { brand: "Visit Petra", brandColor: "#B5442A", place2: "Wadi Musa", why: "A weekend trip for four, three hours away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Tzkrti", brandColor: "#111111", place2: "Amman" },
    atlantis: { brand: "Kempinski", brandColor: "#0A1530", place2: "The Dead Sea", why: "Pool and beach passes come with the room" },
    ritzrak: { brand: "Fairmont", brandColor: "#1C1C1C", place2: "Fairmont Amman", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" }, amazon: { name: "SmartBuy", logo: "ld:smartbuy-me.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "rj_jo", kind: "air", regions: ["jo"], name: "Royal Jordanian Royal Club", unit: "Royal Club points", unitOne: "Royal Club point", logo: "ld:rj.com", color: "#FFFFFF", fg: "#D32027", initial: "R", account: "RJ ···· 4410", rate: 0.5 }
]);
