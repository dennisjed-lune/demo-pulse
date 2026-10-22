window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.in = {
  label: "India", city: "Mumbai", cur: "INR", lang: "en",
  text: {
    "Waitrose": "Nature's Basket", "Dubai Mall": "Phoenix Palladium", "Mall of the Emirates": "Jio World Drive", "noon Food": "Zomato", "noon.com": "flipkart.com",
    "noon": "Flipkart", "Justlife": "Urban Company", "Careem": "Uber", "Deliveroo Plus": "Swiggy One", "Deliveroo": "Swiggy", "spinneys.com": "dmartindia.com",
    "Spinneys": "DMart", "Carrefour": "Star Bazaar", "VOX Cinemas": "PVR INOX", "VOX": "PVR", "Shake Shack": "JK Burgers", "Etihad Guest Miles": "Maharaja Points", "Etihad Guest": "Maharaja Club",
    "etihad.com": "airindia.com", "Etihad": "Air India", "Talabat": "Zomato", "KidZania": "Hamleys", "Yas Waterworld": "Imagicaa",
    "Coca-Cola Arena": "Jio World Centre", "Platinumlist": "BookMyShow", "Atlantis The Palm": "Della Resorts",
    "Atlantis": "Della Resorts", "Aquaventure": "the adventure park", "Ritz-Carlton": "Taj", "Ras Al Khaimah": "Alibaug", "Abu Dhabi": "Mumbai",
    "Dubai": "Mumbai", "Palm Jumeirah": "Lonavala", "Yas Island": "Khopoli", "Al Quoz": "Lower Parel", "City Walk": "Bandra", "Financial Centre": "Bandra Kurla Complex",
    "Grand Atrium": "Phoenix Palladium", "Al Barsha": "Andheri West", "GOLD, THEATRE by Rhodes and IMAX": "PVR LUXE and IMAX",
    "flydubai OPEN": "IndiGo BluChip", "summer heat": "monsoon rain", "Wizz Air Abu Dhabi": "IndiGo"
  },
  logos: { waitrose: "ld:naturesbasket.in", noon: "ld:flipkart.com", justmop: "ld:urbancompany.com", careem: "uber", deliveroo: "ld:swiggy.com",
    spinneys: "ld:dmartindia.com", carrefour: "ld:starbazaarindia.com", vox: "ld:pvrcinemas.com", shakeshack: "ld:jumboking.co.in", etihad: "ld:airindia.com", kidzania: "ld:hamleys.com",
    yas: "ld:imagicaaworld.com", cocacolaarena: "ld:jioworldcentre.com", platinumlist: "ld:bookmyshow.com",
    atlantis: "ld:dellaresorts.com", ritzrak: "ld:tajhotels.com", talabat: "ld:zomato.com", flydubai: "ld:goindigo.in", wizz: "ld:goindigo.in" },
  offers: {
    waitrose: { brand: "Nature's Basket", brandColor: "#14263D", place: "Bandra West, Mumbai", place2: "Bandra West" },
    noon: { brand: "Flipkart", brandColor: "#2874F0" },
    justmop: { brand: "Urban Company", brandColor: "#111111", why: "Cleaning runs AED 400 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Swiggy", brandColor: "#FC8019" },
    spinneys: { brand: "DMart", brandColor: "#00703C", place: "All Mumbai stores" },
    carrefour: { brand: "Star Bazaar", brandColor: "#F26522", place: "Andheri West, Mumbai", place2: "Andheri West" },
    vox: { brand: "PVR INOX", brandColor: "#1A1A1A", place: "PVR Phoenix Palladium, Lower Parel", place2: "Lower Parel" },
    shakeshack: { brand: "JK Burgers", brandColor: "#1E7B34", place: "Dadar West, Mumbai", place2: "Dadar West", qualifies: ["Dine-in, takeaway and JK Burgers app orders", "Dadar West branch only"] },
    emirates: { brand: "Air India", brandColor: "#DA0E29" },
    wizz: { brand: "IndiGo" },
    kidzania: { brand: "Hamleys", brandColor: "#E2001A", place: "Phoenix Palladium, Lower Parel", place2: "Phoenix Palladium", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Imagicaa", brandColor: "#1B4EA3", place2: "Khopoli, near Mumbai", why: "A day out for four, two hours away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Jio World Centre", brandColor: "#0F3C8C", place2: "Bandra Kurla Complex, Mumbai" },
    platinumlist: { brand: "BookMyShow", brandColor: "#F84464" },
    atlantis: { brand: "Della Resorts", brandColor: "#1A1A1A", place2: "Lonavala, Maharashtra", why: "Pool and adventure park passes come with the room" },
    ritzrak: { brand: "Taj", brandColor: "#A8853C", place2: "The Taj Mahal Palace, Colaba", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Zomato", logo: "ld:zomato.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "airindia_in", kind: "air", regions: ["in"], name: "Air India Maharaja Club", unit: "Maharaja Points", unitOne: "Maharaja Point", logo: "ld:airindia.com", color: "#FFFFFF", fg: "#DA0E29", initial: "A", account: "AI ···· 4410", rate: 0.5 },
  { id: "indigo_in", kind: "air", regions: ["in"], name: "IndiGo BluChip", unit: "BluChips", unitOne: "BluChip", logo: "ld:goindigo.in", color: "#FFFFFF", fg: "#001B94", initial: "I", account: null, rate: 0.5 }
]);
