window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.jp = {
  label: "Japan", city: "Tokyo", cur: "JPY", lang: "en",
  text: {
    "Waitrose": "Seijo Ishii", "Dubai Mall": "Roppongi Hills", "Mall of the Emirates": "Tokyo Midtown", "noon Food": "Demae-can", "noon.com": "rakuten.co.jp",
    "noon": "Rakuten", "Justlife": "CaSy", "Careem": "GO", "Deliveroo Plus": "Uber One", "Deliveroo": "Uber Eats", "spinneys.com": "lifecorp.jp",
    "Spinneys": "Life", "Carrefour": "AEON", "VOX Cinemas": "TOHO Cinemas", "VOX": "TOHO", "Etihad Guest Miles": "JAL miles", "Etihad Guest": "JAL Mileage Bank",
    "etihad.com": "jal.co.jp", "Etihad": "JAL", "Talabat": "Demae-can", "KidZania": "Kiddy Land", "OliOli": "National Museum of Nature and Science", "Yas Waterworld": "Tokyo Disney Resort",
    "Warner Bros. World": "teamLab Planets", "Coca-Cola Arena": "Tokyo Dome", "Platinumlist": "Ticket Pia", "Atlantis The Palm": "Hoshino Resorts",
    "Atlantis": "Hoshino Resorts", "Aquaventure": "the hot springs", "Ritz-Carlton": "Okura", "Ras Al Khaimah": "Hakone", "Abu Dhabi": "Tokyo",
    "Dubai": "Tokyo", "Palm Jumeirah": "Karuizawa", "Yas Island": "Maihama", "Al Quoz": "Shinagawa", "City Walk": "Omotesando", "Financial Centre": "Marunouchi",
    "Grand Atrium": "Roppongi Hills", "Al Barsha": "Setagaya", "GOLD, THEATRE by Rhodes and IMAX": "Premier Box and IMAX",
    "Qatar Privilege Club": "ANA Mileage Club", "flydubai OPEN": "ZIPAIR", "summer heat": "summer humidity", "Wizz Air Abu Dhabi": "ZIPAIR"
  },
  logos: { waitrose: "ld:seijoishii.co.jp", noon: "ld:rakuten.co.jp", justmop: "ld:casy.co.jp", careem: "ld:goinc.jp", deliveroo: "ld:ubereats.com",
    spinneys: "ld:lifecorp.jp", carrefour: "ld:aeon.com", vox: "ld:tohotheater.jp", etihad: "ld:jal.co.jp", kidzania: "ld:kiddyland.co.jp",
    olioli: "ld:kahaku.go.jp", yas: "ld:disney.co.jp", wbworld: "ld:teamlab.art", cocacolaarena: "ld:tokyo-dome.co.jp", platinumlist: "ld:t.pia.jp",
    atlantis: "ld:hoshinoresorts.com", ritzrak: "ld:theokuratokyo.jp", talabat: "ld:demae-can.com", qatar: "ld:ana.co.jp", flydubai: "ld:zipair.net", wizz: "ld:zipair.net" },
  offers: {
    waitrose: { brand: "Seijo Ishii", brandColor: "#A6194B", place: "Seijo, Setagaya", place2: "Seijo" },
    noon: { brand: "Rakuten", brandColor: "#BF0000" },
    justmop: { brand: "CaSy", brandColor: "#4A2C17", why: "Cleaning runs AED 1,200 a month" },
    careem: { brand: "GO", brandColor: "#111111" },
    namshi: { brand: "Uber Eats", brandColor: "#06C167" },
    spinneys: { brand: "Life", brandColor: "#F15A22", place: "All Tokyo stores" },
    carrefour: { brand: "AEON", brandColor: "#B6007A", place: "AEON Style Shinagawa Seaside", place2: "Shinagawa" },
    vox: { brand: "TOHO Cinemas", brandColor: "#C8102E", place: "TOHO Cinemas Shinjuku, Kabukicho", place2: "Shinjuku" },
    shakeshack: { place: "Gaienmae, Minato", place2: "Gaienmae", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Gaienmae branch only"] },
    emirates: { brand: "JAL", brandColor: "#CC0000" },
    wizz: { brand: "ZIPAIR" },
    kidzania: { brand: "Kiddy Land", brandColor: "#E6A817", place: "Omotesando, Harajuku", place2: "Harajuku", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "National Museum of Nature and Science", brandColor: "#EE7700", place: "Ueno Park, Taito", place2: "Ueno Park", why: "A science day out for the family, in the city" },
    yas: { brand: "Tokyo Disney Resort", brandColor: "#1B3A8C", place2: "Maihama, Chiba", why: "A day out for four, half an hour away" },
    wbworld: { brand: "teamLab Planets", brandColor: "#111111", place2: "Toyosu, Tokyo", why: "Walk-through digital art, four tickets in one booking" },
    cocacolaarena: { brand: "Tokyo Dome", brandColor: "#E60012", place2: "Bunkyo, Tokyo" },
    platinumlist: { brand: "Ticket Pia", brandColor: "#1E5BC6" },
    atlantis: { brand: "Hoshino Resorts", brandColor: "#111111", place2: "Karuizawa, Nagano", why: "Hot springs and family stays, an hour by bullet train" },
    ritzrak: { brand: "The Okura Tokyo", brandColor: "#1C1C1C", place2: "The Okura Tokyo, Toranomon", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Demae-can", logo: "ld:demae-can.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "jal_jp", kind: "air", regions: ["jp"], name: "JAL Mileage Bank", unit: "JAL miles", unitOne: "JAL mile", logo: "ld:jal.co.jp", color: "#FFFFFF", fg: "#CC0000", initial: "J", account: "JL ···· 4410", rate: 0.5 },
  { id: "ana_jp", kind: "air", regions: ["jp"], name: "ANA Mileage Club", unit: "ANA miles", unitOne: "ANA mile", logo: "ld:ana.co.jp", color: "#FFFFFF", fg: "#13448F", initial: "A", account: null, rate: 0.5 }
]);
