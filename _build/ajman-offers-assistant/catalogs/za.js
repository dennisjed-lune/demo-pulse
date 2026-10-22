window.LUNE_REGIONS.za = {
  label: "South Africa", city: "Johannesburg", cur: "ZAR", lang: "en",
  text: {
    "Waitrose": "Woolworths", "Dubai Mall": "Sandton City", "Mall of the Emirates": "Mall of Africa", "noon Food": "Takealot", "noon.com": "takealot.com",
    "noon": "Takealot", "Justlife": "SweepSouth", "Careem": "Uber", "Deliveroo Plus": "TakealotMORE", "Deliveroo": "Mr D", "spinneys.com": "pnp.co.za",
    "Spinneys": "Pick n Pay", "Carrefour": "Makro", "VOX Cinemas": "Ster-Kinekor", "VOX": "Ster-Kinekor", "Shake Shack": "Steers", "Etihad Guest Miles": "Voyager miles", "Etihad Guest": "SAA Voyager",
    "etihad.com": "flysaa.com", "Etihad": "South African Airways", "Talabat": "Mr D", "KidZania": "Toys\"R\"Us", "OliOli": "Sci-Bono Discovery Centre", "Yas Waterworld": "uShaka Marine World",
    "Warner Bros. World": "Lion & Safari Park", "Coca-Cola Arena": "Sun Arena at Time Square", "Platinumlist": "Computicket", "Atlantis The Palm": "Sun City Resort",
    "Atlantis": "Sun City", "Aquaventure": "the Valley of Waves", "Ritz-Carlton": "Saxon", "Ras Al Khaimah": "the Drakensberg", "Abu Dhabi": "Cape Town",
    "Dubai": "Johannesburg", "Palm Jumeirah": "Sun City", "Yas Island": "Durban", "Al Quoz": "Maboneng", "City Walk": "Rosebank", "Financial Centre": "Sandton",
    "Grand Atrium": "Sandton City", "Al Barsha": "Melville", "GOLD, THEATRE by Rhodes and IMAX": "Cine Prestige and IMAX", "Wizz Air Abu Dhabi": "LIFT"
  },
  logos: { waitrose: "ld:woolworths.co.za", spinneys: "ld:picknpay.co.za", carrefour: "ld:makro.co.za", noon: "ld:takealot.com", justmop: "ld:sweepsouth.com",
    careem: "uber", deliveroo: "ld:mrd.com", talabat: "ld:mrd.com", vox: "ld:sterkinekor.com", shakeshack: "ld:steers.co.za", etihad: "ld:flysaa.com",
    wizz: "ld:lift.co.za", kidzania: "ld:toysrus.co.za", olioli: "ld:sci-bono.co.za", yas: "ld:ushakamarineworld.co.za", wbworld: "ld:lionandsafaripark.com",
    cocacolaarena: "ld:timesquare.co.za", platinumlist: "ld:computicket.com", atlantis: "ld:suninternational.com", ritzrak: "ld:saxon.co.za" },
  offers: {
    waitrose: { brand: "Woolworths", brandColor: "#000000", place: "Sandton City, Sandton", place2: "Sandton City" },
    noon: { brand: "Takealot", brandColor: "#0B79BF" },
    justmop: { brand: "SweepSouth", brandColor: "#7FC6BA", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Mr D", brandColor: "#6DCFF6" },
    spinneys: { brand: "Pick n Pay", brandColor: "#003B5C", place: "All Johannesburg stores" },
    carrefour: { brand: "Makro", brandColor: "#004B93", place: "Woodmead, Sandton", place2: "Woodmead" },
    vox: { brand: "Ster-Kinekor", brandColor: "#0090D7", place: "Rosebank Mall, Rosebank", place2: "Rosebank" },
    shakeshack: { brand: "Steers", brandColor: "#4B1A43", place: "Braamfontein, Johannesburg", place2: "Braamfontein", qualifies: ["Dine-in, takeaway and Steers app orders", "Braamfontein branch only"] },
    emirates: { brand: "South African Airways", brandColor: "#0E1E3F" },
    wizz: { brand: "LIFT" },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#1D4EB8", place: "Mall of Africa, Midrand", place2: "Mall of Africa", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Sci-Bono Discovery Centre", brandColor: "#1F4E9C", place: "Newtown, Johannesburg", place2: "Newtown", why: "A day out for the family, twenty minutes away" },
    yas: { brand: "uShaka Marine World", brandColor: "#0072BC", place2: "Durban, KwaZulu-Natal", why: "A long weekend for four, a short flight away" },
    wbworld: { brand: "Lion & Safari Park", brandColor: "#3D3D3B", place2: "Hartbeespoort, North West", why: "Lions, cheetahs and a game drive, four tickets in one booking" },
    cocacolaarena: { brand: "Sun Arena at Time Square", brandColor: "#111111", place2: "Menlyn Maine, Pretoria" },
    platinumlist: { brand: "Computicket", brandColor: "#E21F4D" },
    atlantis: { brand: "Sun International", brandColor: "#0F2557", place2: "Sun City, North West", why: "Valley of Waves passes come with the room" },
    ritzrak: { brand: "Saxon Hotel", brandColor: "#8C7A4B", place2: "Saxon Hotel, Sandhurst", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Mr D", logo: "ld:mrd.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "saa_za", kind: "air", regions: ["za"], name: "SAA Voyager", unit: "Voyager miles", unitOne: "Voyager mile", logo: "ld:flysaa.com", color: "#FFFFFF", fg: "#0E1E3F", initial: "S", account: "SA ···· 4410", rate: 0.5 }
]);
