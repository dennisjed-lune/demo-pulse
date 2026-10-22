window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.pk = {
  label: "Pakistan", city: "Karachi", cur: "PKR", lang: "en",
  text: {
    "Waitrose": "Naheed", "Dubai Mall": "Dolmen Mall Clifton", "Mall of the Emirates": "Lucky One Mall", "noon Food": "foodpanda", "noon.com": "daraz.pk",
    "noon": "Daraz", "Amazon": "PriceOye", "Justlife": "Mahir Company", "Careem": "inDrive", "Deliveroo Plus": "pandapro", "Deliveroo": "foodpanda", "spinneys.com": "chaseup.com.pk",
    "Spinneys": "Chase Up", "Carrefour": "Imtiaz", "VOX Cinemas": "Cinepax", "VOX": "Cinepax", "Starbucks": "Coffee Wagera", "Shake Shack": "Burger Lab",
    "Etihad Guest Miles": "Awards+Plus miles", "Etihad Guest": "PIA Awards+Plus", "etihad.com": "piac.com.pk", "Etihad": "PIA", "Talabat": "foodpanda", "KidZania": "Bachaa Party",
    "Yas Waterworld": "The Great Fiesta", "Coca-Cola Arena": "Arts Council Karachi", "Platinumlist": "bookme", "Atlantis The Palm": "Islamabad Serena Hotel",
    "Atlantis": "Serena Hotels", "Aquaventure": "the pool", "Ritz-Carlton": "Marriott", "Ras Al Khaimah": "Murree", "Abu Dhabi": "Karachi",
    "Dubai": "Karachi", "Palm Jumeirah": "Islamabad", "Yas Island": "Super Highway", "Al Quoz": "Korangi", "City Walk": "Clifton", "Financial Centre": "I. I. Chundrigar Road",
    "Grand Atrium": "Dolmen Mall Clifton", "Al Barsha": "Gulshan-e-Iqbal", "GOLD, THEATRE by Rhodes and IMAX": "recliner seats and 3D",
    "flydubai OPEN": "Airblue", "Wizz Air Abu Dhabi": "Airblue"
  },
  logos: { waitrose: "ld:naheed.pk", noon: "ld:daraz.pk", amazon: "ld:priceoye.pk", justmop: "ld:mahircompany.com", careem: "ld:indrive.com", deliveroo: "ld:foodpanda.pk",
    spinneys: "ld:chaseup.com.pk", carrefour: "ld:imtiaz.com.pk", vox: "ld:cinepax.com", starbucks: "ld:coffeewagera.com", shakeshack: "ld:burgerlab.com.pk", etihad: "ld:piac.com.pk",
    kidzania: "ld:bachaaparty.com", yas: "ld:thegreatfiesta.com", cocacolaarena: "ld:artscouncil.org.pk", platinumlist: "ld:bookme.pk",
    atlantis: "ld:serenahotels.com", ritzrak: "ld:marriott.com", talabat: "ld:foodpanda.pk", flydubai: "ld:airblue.com", wizz: "ld:airblue.com" },
  offers: {
    waitrose: { brand: "Naheed", brandColor: "#E30613", place: "Bahadurabad, Karachi", place2: "Bahadurabad" },
    noon: { brand: "Daraz", brandColor: "#F85606" },
    amazon: { brand: "PriceOye", brandColor: "#1A73E8", logo: "ld:priceoye.pk" },
    justmop: { brand: "Mahir Company", brandColor: "#111111", why: "Cleaning and repairs run AED 300 a month" },
    careem: { brand: "inDrive", brandColor: "#C1F11D" },
    namshi: { brand: "foodpanda", brandColor: "#D70F64" },
    talabat: { brand: "Coffee Wagera", brandColor: "#6B3A1E", logo: "ld:coffeewagera.com" },
    spinneys: { brand: "Chase Up", brandColor: "#1D2B7A", place: "All Karachi stores" },
    carrefour: { brand: "Imtiaz", brandColor: "#253E8C", place: "Gulshan-e-Iqbal, Karachi", place2: "Gulshan-e-Iqbal" },
    vox: { brand: "Cinepax", brandColor: "#1A1A1A", place: "Ocean Mall, Clifton", place2: "Ocean Mall" },
    shakeshack: { brand: "Burger Lab", brandColor: "#111111", place: "DHA Phase 6, Karachi", place2: "DHA", qualifies: ["Dine-in, takeaway and Burger Lab app orders", "DHA branch only"] },
    emirates: { brand: "PIA", brandColor: "#006A4E" },
    wizz: { brand: "Airblue" },
    kidzania: { brand: "Bachaa Party", brandColor: "#FFC400", place: "All Karachi stores", place2: "Karachi", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "The Great Fiesta", brandColor: "#F28C28", place2: "Super Highway, Karachi", why: "A water park day for four, forty minutes away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Arts Council Karachi", brandColor: "#E31E24", place2: "Saddar, Karachi" },
    platinumlist: { brand: "bookme", brandColor: "#2B60DE" },
    atlantis: { brand: "Serena Hotels", brandColor: "#F26A21", place2: "Islamabad Serena Hotel", why: "Pool, gardens and kids' club, a short flight away" },
    ritzrak: { brand: "Marriott", brandColor: "#1C1C1C", place2: "Karachi Marriott Hotel", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "foodpanda", logo: "ld:foodpanda.pk" }, amazon: { name: "PriceOye", logo: "ld:priceoye.pk" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "pia_pk", kind: "air", regions: ["pk"], name: "PIA Awards+Plus", unit: "Awards+Plus miles", unitOne: "Awards+Plus mile", logo: "ld:piac.com.pk", color: "#FFFFFF", fg: "#006A4E", initial: "P", account: "PK ···· 4410", rate: 0.5 }
]);
