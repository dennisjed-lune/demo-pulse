window.LUNE_REGIONS.tr = {
  label: "Turkey", city: "Istanbul", cur: "TRY", lang: "en",
  text: {
    "Waitrose": "Migros", "Dubai Mall": "Zorlu Center", "Mall of the Emirates": "İstinye Park", "noon Food": "Trendyol Go", "noon.com": "trendyol.com",
    "noon": "Trendyol", "Justlife": "Armut", "Careem": "BiTaksi", "Deliveroo Plus": "Ypro", "Deliveroo": "Yemeksepeti", "spinneys.com": "a101.com.tr",
    "Spinneys": "A101", "Carrefour": "CarrefourSA", "VOX Cinemas": "Paribu Cineverse", "VOX": "Cineverse", "Etihad Guest Miles": "Miles&Smiles miles", "Etihad Guest": "Miles&Smiles",
    "etihad.com": "turkishairlines.com", "Etihad": "Turkish Airlines", "Talabat": "Yemeksepeti", "KidZania": "Toyzz Shop", "OliOli": "LEGOLAND Discovery Centre", "Yas Waterworld": "Adaland",
    "Warner Bros. World": "Istanbul Aquarium", "Coca-Cola Arena": "Zorlu PSM", "Platinumlist": "Biletix", "Atlantis The Palm": "Delphin Imperial",
    "Atlantis": "Delphin", "Aquaventure": "the aqua park", "Ritz-Carlton": "Kempinski", "Ras Al Khaimah": "Bodrum", "Abu Dhabi": "Ankara",
    "Dubai": "Istanbul", "Palm Jumeirah": "Antalya", "Yas Island": "Kuşadası", "Al Quoz": "Kadıköy", "City Walk": "Nişantaşı", "Financial Centre": "Levent",
    "Grand Atrium": "Zorlu Center", "Al Barsha": "Beşiktaş", "GOLD, THEATRE by Rhodes and IMAX": "IMAX and 4DX",
    "flydubai OPEN": "Pegasus BolPuan", "Wizz Air Abu Dhabi": "Pegasus"
  },
  logos: { waitrose: "ld:migros.com.tr", spinneys: "ld:a101.com.tr", carrefour: "ld:carrefoursa.com", noon: "ld:trendyol.com", justmop: "ld:armut.com",
    careem: "ld:bitaksi.com", deliveroo: "ld:yemeksepeti.com", talabat: "ld:yemeksepeti.com", vox: "ld:paribucineverse.com", etihad: "ld:turkishairlines.com",
    kidzania: "ld:toyzzshop.com", olioli: "ld:legolanddiscoverycentre.com", yas: "ld:adaland.com", wbworld: "ld:istanbulakvaryum.com",
    cocacolaarena: "ld:zorlupsm.com", platinumlist: "ld:biletix.com", atlantis: "ld:delphinhotel.com", ritzrak: "ld:kempinski.com",
    flydubai: "ld:flypgs.com", wizz: "ld:flypgs.com" },
  offers: {
    waitrose: { brand: "Migros", brandColor: "#F28E1C", place: "Kadıköy, Istanbul", place2: "Kadıköy" },
    noon: { brand: "Trendyol", brandColor: "#F27A1A" },
    justmop: { brand: "Armut", brandColor: "#2DB34A", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "BiTaksi", brandColor: "#22007C" },
    namshi: { brand: "Yemeksepeti", brandColor: "#FA0050" },
    spinneys: { brand: "A101", brandColor: "#00ADEF", place: "All Istanbul stores" },
    carrefour: { brand: "CarrefourSA", brandColor: "#1E5BC6", place: "İçerenköy, Ataşehir", place2: "İçerenköy" },
    vox: { brand: "Paribu Cineverse", brandColor: "#8DB33A", place: "Zorlu Center, Beşiktaş", place2: "Zorlu Center" },
    shakeshack: { place: "İstinye Park, Sarıyer", place2: "İstinye Park", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "İstinye Park branch only"] },
    emirates: { brand: "Turkish Airlines", brandColor: "#C90019" },
    wizz: { brand: "Pegasus" },
    kidzania: { brand: "Toyzz Shop", brandColor: "#E30613", place: "Cevahir, Şişli", place2: "Cevahir", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "LEGOLAND Discovery Centre", brandColor: "#FFCF00", place: "Forum Istanbul, Bayrampaşa", place2: "Forum Istanbul", why: "A day out for the family, half an hour away" },
    yas: { brand: "Adaland", brandColor: "#F28C38", place2: "Kuşadası, Aydın", why: "A long weekend for four, a short flight away" },
    wbworld: { brand: "Istanbul Aquarium", brandColor: "#E8412C", place2: "Florya, Istanbul", why: "Sharks, rainforest and sea life, four tickets in one booking" },
    cocacolaarena: { brand: "Zorlu PSM", brandColor: "#111111", place2: "Zorlu Center, Beşiktaş" },
    platinumlist: { brand: "Biletix", brandColor: "#000000" },
    atlantis: { brand: "Delphin Hotels", brandColor: "#8B6F47", place2: "Lara, Antalya", why: "Aqua park passes come with the room" },
    ritzrak: { brand: "Kempinski", brandColor: "#0A1530", place2: "Çırağan Palace Kempinski Istanbul", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Yemeksepeti", logo: "ld:yemeksepeti.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "turkish_tr", kind: "air", regions: ["tr"], name: "Turkish Airlines Miles&Smiles", unit: "Miles&Smiles miles", unitOne: "Miles&Smiles mile", logo: "ld:turkishairlines.com", color: "#FFFFFF", fg: "#C90019", initial: "T", account: "TK ···· 4410", rate: 0.5 },
  { id: "pegasus_tr", kind: "air", regions: ["tr"], name: "Pegasus BolPuan", unit: "BolPuan", unitOne: "BolPuan", logo: "ld:flypgs.com", color: "#FFFFFF", fg: "#E30A17", initial: "P", account: null, rate: 0.5 }
]);
