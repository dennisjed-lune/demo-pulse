window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.hk = {
  label: "Hong Kong", city: "Hong Kong", cur: "HKD", lang: "en",
  text: {
    "Waitrose": "city'super", "Dubai Mall": "IFC Mall", "Mall of the Emirates": "Harbour City", "noon Food": "KeeTa", "noon.com": "hktvmall.com",
    "noon": "HKTVmall", "Amazon": "Ztore", "Justlife": "Lazy", "Careem": "Uber", "Deliveroo Plus": "pandapro", "Deliveroo": "foodpanda", "spinneys.com": "wellcome.com.hk",
    "Spinneys": "Wellcome", "Carrefour": "PARKnSHOP", "VOX Cinemas": "Emperor Cinemas", "VOX": "Emperor", "Etihad Guest Miles": "Asia Miles", "Etihad Guest": "Asia Miles",
    "etihad.com": "cathaypacific.com", "Etihad": "Cathay Pacific", "Talabat": "KeeTa", "KidZania": "Toys\"R\"Us", "Yas Waterworld": "Hong Kong Disneyland",
    "Warner Bros. World": "Noah's Ark", "Coca-Cola Arena": "Kai Tak Sports Park", "Platinumlist": "Cityline", "Atlantis The Palm": "Hong Kong Ocean Park Marriott",
    "Atlantis": "Ocean Park Marriott", "Aquaventure": "the pool", "Ritz-Carlton": "Mandarin Oriental", "Ras Al Khaimah": "Lantau", "Abu Dhabi": "Hong Kong",
    "Dubai": "Hong Kong", "Palm Jumeirah": "Aberdeen", "Yas Island": "Lantau", "Al Quoz": "Kwun Tong", "City Walk": "Causeway Bay", "Financial Centre": "Central",
    "Grand Atrium": "Harbour City", "Al Barsha": "Mong Kok", "GOLD, THEATRE by Rhodes and IMAX": "Dolby Atmos and IMAX",
    "flydubai OPEN": "HK Express", "Wizz Air Abu Dhabi": "HK Express"
  },
  logos: { waitrose: "ld:citysuper.com.hk", noon: "ld:hktvmall.com", amazon: "ld:ztore.com", justmop: "ld:lazy.com.hk", careem: "uber", deliveroo: "ld:foodpanda.hk",
    spinneys: "ld:wellcome.com.hk", carrefour: "ld:parknshop.com", vox: "ld:emperorcinemas.com", etihad: "ld:cathaypacific.com", kidzania: "ld:toysrus.com.hk",
    yas: "ld:disney.com.hk", wbworld: "ld:noahsark.com.hk", cocacolaarena: "ld:kaitaksportspark.com.hk", platinumlist: "ld:cityline.com",
    atlantis: "ld:marriott.com", ritzrak: "ld:mandarinoriental.com", talabat: "ld:keeta.com", flydubai: "ld:hkexpress.com", wizz: "ld:hkexpress.com" },
  offers: {
    waitrose: { brand: "city'super", brandColor: "#2E7D32", place: "IFC Mall, Central", place2: "IFC Mall" },
    noon: { brand: "HKTVmall", brandColor: "#1E8E3E" },
    amazon: { brand: "Ztore", brandColor: "#B5121B", logo: "ld:ztore.com" },
    justmop: { brand: "Lazy", brandColor: "#3BB6D9", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "foodpanda", brandColor: "#D70F64" },
    spinneys: { brand: "Wellcome", brandColor: "#E4002B", place: "All Hong Kong stores" },
    carrefour: { brand: "PARKnSHOP", brandColor: "#1F3A93", place: "Harbour City, Tsim Sha Tsui", place2: "Tsim Sha Tsui" },
    vox: { brand: "Emperor Cinemas", brandColor: "#0B5345", place: "Emperor Cinemas iSQUARE, Tsim Sha Tsui", place2: "iSQUARE" },
    shakeshack: { place: "IFC Mall, Central", place2: "IFC Mall", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "IFC Mall branch only"] },
    emirates: { brand: "Cathay Pacific", brandColor: "#006564" },
    wizz: { brand: "HK Express" },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "Harbour City, Tsim Sha Tsui", place2: "Harbour City", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Hong Kong Disneyland", brandColor: "#0033A0", place2: "Lantau Island", why: "A day out for four, half an hour away" },
    wbworld: { brand: "Noah's Ark", brandColor: "#7A4A1E", place2: "Ma Wan", why: "Ark exhibits, gardens and play areas, four tickets in one booking" },
    cocacolaarena: { brand: "Kai Tak Sports Park", brandColor: "#D7262F", place2: "Kai Tak, Kowloon" },
    platinumlist: { brand: "Cityline", brandColor: "#4A90E2" },
    atlantis: { brand: "Marriott", brandColor: "#1C1C1C", place2: "Hong Kong Ocean Park Marriott Hotel", why: "Pool time and Ocean Park next door" },
    ritzrak: { brand: "Mandarin Oriental", brandColor: "#1C1C1C", place2: "Mandarin Oriental, Hong Kong", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "KeeTa", logo: "ld:keeta.com" }, amazon: { name: "Ztore", logo: "ld:ztore.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "cathay_hk", kind: "air", regions: ["hk"], name: "Cathay Pacific Asia Miles", unit: "Asia Miles", unitOne: "Asia Mile", logo: "ld:cathaypacific.com", color: "#FFFFFF", fg: "#006564", initial: "C", account: "CX ···· 4410", rate: 0.5 }
]);
