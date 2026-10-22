window.LUNE_REGIONS.gb = {
  label: "United Kingdom", city: "London", cur: "GBP", lang: "en",
  text: {
    "Dubai Mall": "Westfield London", "Mall of the Emirates": "Westfield Stratford City", "noon Food": "Uber Eats", "noon.com": "ebay.co.uk",
    "noon": "eBay", "Justlife": "Helpling", "Careem": "Uber", "spinneys.com": "sainsburys.co.uk",
    "Spinneys": "Sainsbury's", "Carrefour": "Tesco", "VOX Cinemas": "ODEON", "VOX": "ODEON", "Etihad Guest Miles": "Avios", "Etihad Guest": "British Airways Club",
    "etihad.com": "britishairways.com", "Etihad": "British Airways", "Talabat": "Just Eat", "KidZania": "Hamleys", "OliOli": "Science Museum", "Yas Waterworld": "Thorpe Park",
    "Warner Bros. World": "ZSL London Zoo", "Coca-Cola Arena": "The O2", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Center Parcs",
    "Atlantis": "Center Parcs", "Aquaventure": "the Subtropical Swimming Paradise", "Ritz-Carlton": "The Savoy", "Ras Al Khaimah": "the Cotswolds", "Abu Dhabi": "London",
    "Dubai": "London", "Palm Jumeirah": "Woburn Forest", "Yas Island": "Chertsey", "Al Quoz": "Shoreditch", "City Walk": "Covent Garden", "Financial Centre": "the City",
    "Grand Atrium": "Leicester Square", "Al Barsha": "Kensington", "GOLD, THEATRE by Rhodes and IMAX": "ODEON Luxe and IMAX",
    "Qatar Privilege Club": "Virgin Atlantic Flying Club", "flydubai OPEN": "easyJet Plus", "summer heat": "rainy days", "Wizz Air Abu Dhabi": "easyJet"
  },
  logos: { waitrose: "ld:waitrose.com", noon: "ld:ebay.co.uk", justmop: "ld:helpling.co.uk", careem: "uber", deliveroo: "ld:deliveroo.co.uk",
    spinneys: "ld:sainsburys.co.uk", carrefour: "ld:tesco.com", vox: "ld:odeon.co.uk", etihad: "ld:britishairways.com", kidzania: "ld:hamleys.com",
    olioli: "ld:sciencemuseum.org.uk", yas: "ld:thorpepark.com", wbworld: "ld:zsl.org", cocacolaarena: "ld:theo2.co.uk", platinumlist: "ld:ticketmaster.co.uk",
    atlantis: "ld:centerparcs.co.uk", ritzrak: "ld:thesavoylondon.com", talabat: "ld:just-eat.co.uk", qatar: "ld:virginatlantic.com", flydubai: "ld:easyjet.com", wizz: "ld:easyjet.com" },
  offers: {
    waitrose: { brand: "Waitrose", brandColor: "#5C8018", place: "King's Road, Chelsea", place2: "King's Road" },
    noon: { brand: "eBay", brandColor: "#E53238" },
    justmop: { brand: "Helpling", brandColor: "#2F6F5E", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Deliveroo", brandColor: "#00CCBC" },
    spinneys: { brand: "Sainsbury's", brandColor: "#F06C00", place: "All London stores" },
    carrefour: { brand: "Tesco", brandColor: "#00539F", place: "Tesco Extra, Surrey Quays", place2: "Surrey Quays" },
    vox: { brand: "ODEON", brandColor: "#152F5E", place: "ODEON Luxe Leicester Square, West End", place2: "Leicester Square" },
    shakeshack: { place: "Covent Garden Market Building, London", place2: "Covent Garden", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Covent Garden branch only"] },
    emirates: { brand: "British Airways", brandColor: "#075AAA" },
    wizz: { brand: "easyJet" },
    kidzania: { brand: "Hamleys", brandColor: "#E2001A", place: "Regent Street, London", place2: "Regent Street", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Science Museum", brandColor: "#000000", place: "Exhibition Road, South Kensington", place2: "South Kensington", why: "Hands-on science, good for rainy days" },
    yas: { brand: "Thorpe Park", brandColor: "#5038A8", place2: "Chertsey, Surrey", why: "A day out for four, under an hour by train" },
    wbworld: { brand: "ZSL London Zoo", brandColor: "#008844", place2: "Regent's Park, London", why: "A day out for the family, in the middle of town" },
    cocacolaarena: { brand: "The O2", brandColor: "#0050FF", place2: "Greenwich, London" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Center Parcs", brandColor: "#00594F", place2: "Woburn Forest, Bedfordshire", why: "Subtropical Swimming Paradise passes come with the lodge" },
    ritzrak: { brand: "The Savoy", brandColor: "#1C1C1C", place2: "The Savoy, Strand", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Just Eat", logo: "ld:just-eat.co.uk" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "ba_gb", kind: "air", regions: ["gb"], name: "British Airways Club", unit: "Avios", unitOne: "Avios", logo: "ld:britishairways.com", color: "#FFFFFF", fg: "#075AAA", initial: "B", account: "BA ···· 2381", rate: 0.5 },
  { id: "virgin_gb", kind: "air", regions: ["gb"], name: "Virgin Atlantic Flying Club", unit: "Virgin Points", unitOne: "Virgin Point", logo: "ld:virginatlantic.com", color: "#FFFFFF", fg: "#DA0530", initial: "V", account: null, rate: 0.5 }
]);
