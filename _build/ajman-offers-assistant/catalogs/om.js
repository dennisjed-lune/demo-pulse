window.LUNE_REGIONS.om = {
  label: "Oman", city: "Muscat", cur: "OMR", lang: "ar",
  text: {
    "Waitrose": "Sultan Center", "Dubai Mall": "Mall of Oman", "Mall of the Emirates": "Mall of Muscat", "Careem": "OTaxi", "Uber Eats": "Talabat", "Uber": "OTaxi",
    "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "Al Meera stores", "Spinneys": "Al Meera", "Carrefour": "LuLu",
    "VOX Cinemas": "Novo Cinemas", "VOX": "Novo", "Shake Shack": "McDonald's", "Etihad Guest Miles": "Sindbad miles", "Etihad Guest": "Sindbad",
    "etihad.com": "omanair.com", "Etihad": "Oman Air", "Talabat": "Talabat", "KidZania": "Toys\"R\"Us", "OliOli": "Oman Aquarium", "Yas Waterworld": "Marah Land",
    "Warner Bros. World": "Oman Aquarium", "Coca-Cola Arena": "Royal Opera House Muscat", "Atlantis The Palm": "Shangri-La Barr Al Jissah",
    "Atlantis": "Shangri-La Barr Al Jissah", "Aquaventure": "the lazy river", "Ritz-Carlton": "Kempinski", "Ras Al Khaimah": "Jebel Akhdar", "Abu Dhabi": "Sohar",
    "Dubai": "Muscat", "Palm Jumeirah": "Barr Al Jissah", "Yas Island": "Al Qurum", "Al Quoz": "Bausher", "City Walk": "Shatti Al Qurum", "Financial Centre": "Bausher",
    "Grand Atrium": "Bausher", "Al Barsha": "Al Mawaleh", "GOLD, THEATRE by Rhodes and IMAX": "premium halls",
    "Qatar Privilege Club": "Sindbad", "flydubai OPEN": "mOVemore", "flydubai": "SalamAir", "summer heat": "summer heat", "Wizz Air Abu Dhabi": "SalamAir",
    "وايتروز": "مركز سلطان", "سبينس": "الميرة", "دبي مول": "مول عمان", "مول الإمارات": "مول مسقط", "دبي": "مسقط", "كارفور": "لولو", "فوكس": "نوفو",
    "شيك شاك": "ماكدونالدز", "ديليفرو": "طلبات", "الاتحاد للطيران": "الطيران العماني", "أتلانتس": "شانغريلا بر الجصة", "كريم": "أوتاكسي"
  },
  logos: { waitrose: "ld:sultan-center.com", amazon: "ld:markeetex.com", careem: "ld:otaxi.om", uber: "ld:otaxi.om", deliveroo: "ld:talabat.com",
    spinneys: "ld:almeera.com.qa", carrefour: "ld:luluhypermarket.com", vox: "ld:novocinemas.com", shakeshack: "ld:mcdonalds.com", etihad: "ld:omanair.com",
    kidzania: "ld:toysrus.com.sa", yas: "ld:marahland.com", wbworld: "ld:omanaquarium.om", atlantis: "ld:shangri-la.com", ritzrak: "ld:kempinski.com",
    talabat: "ld:talabat.com", qatar: "ld:omanair.com", flydubai: "ld:salamair.com", wizz: "ld:salamair.com" },
  offers: {
    waitrose: { brand: "Sultan Center", brandColor: "#F07800", place: "Al Hail, Muscat", place2: "Al Hail" },
    amazon: { brand: "Markeetex", brandColor: "#E8202A", deal: "5% back on orders", valueNote: "back on orders, up to AED 100 a month", qualifies: ["Orders on markeetex.com or the Markeetex app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards and wallet top-ups", "Returned items"] },
    careem: { brand: "OTaxi", brandColor: "#F05A1A", why: "AED 980 on OTaxi so far this month", status: { tier: "Regular", rate: "15%", line: "15% back on OTaxi until 30 September", sub: "Earned over 40 rides. Today's 20% sits on top of it." }, qualifies: ["Rides booked in the OTaxi app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Rides paid in cash", "Rides booked after 9pm"] },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    spinneys: { brand: "Al Meera", brandColor: "#8CA21E", place: "All Muscat branches", qualifies: ["Friday spend in store", "Paid with your Ajman Bank card ···· 4417"] },
    carrefour: { brand: "LuLu Hypermarket", brandColor: "#E31E24", place: "Bausher, Muscat", place2: "Bausher", qualifies: ["In-store spend of AED 400 or more", "Bausher branch only"] },
    vox: { brand: "Novo Cinemas", brandColor: "#F5C400", place: "Mall of Muscat, Al Mawaleh", place2: "Mall of Muscat" },
    shakeshack: { brand: "McDonald's", brandColor: "#FFC72C", place: "Al Khuwair, Muscat", place2: "Al Khuwair", qualifies: ["Dine-in, takeaway and McDonald's app orders", "Al Khuwair branch only"], excludes: ["Delivery app orders", "Gift cards"] },
    emirates: { brand: "Oman Air", brandColor: "#007A87" },
    wizz: { brand: "SalamAir", brandColor: "#B5C42F", qualifies: ["Fares and bundles booked at salamair.com", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Airport-desk purchases", "mOVemore memberships"] },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0062A8", place: "City Centre Muscat, Al Mawaleh", place2: "City Centre Muscat", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Marah Land", brandColor: "#C8102E", place2: "Al Qurum, Muscat", why: "Rides and games for four, 15 minutes away", whyFamily: "Rides and games for four, 15 minutes away" },
    wbworld: { brand: "Oman Aquarium", brandColor: "#1F5F73", place2: "Mall of Oman, Bausher", why: "Aquarium tunnels and shows, four tickets in one booking", whyFamily: "Aquarium tunnels and shows, four tickets in one booking" },
    cocacolaarena: { hide: true },
    atlantis: { brand: "Shangri-La Barr Al Jissah", brandColor: "#8C6D3F", place2: "Barr Al Jissah, Muscat", why: "Pools and a lazy river come with the room", whyFamily: "Pools and a lazy river come with the room" },
    ritzrak: { brand: "Kempinski", brandColor: "#0A1A33", place2: "Kempinski Hotel Muscat", why: "A weekend staycation in town", whyFamily: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" }, amazon: { name: "Markeetex", logo: "ld:markeetex.com" }, uber: { name: "OTaxi", logo: "ld:otaxi.om" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "omanair_om", kind: "air", regions: ["om"], name: "Oman Air Sindbad", unit: "Sindbad miles", unitOne: "Sindbad mile", logo: "ld:omanair.com", color: "#FFFFFF", fg: "#007A87", initial: "O", account: "WY ···· 5531", rate: 0.5 }
]);
