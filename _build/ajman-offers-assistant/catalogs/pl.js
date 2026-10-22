window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.pl = {
  label: "Poland", city: "Warsaw", cur: "PLN", lang: "en",
  text: {
    "Waitrose": "Delikatesy Centrum", "Dubai Mall": "Westfield Arkadia", "Mall of the Emirates": "Galeria Mokotów", "noon Food": "Glovo", "noon.com": "allegro.pl",
    "noon": "Allegro", "Justlife": "Pozamiatane.pl", "Careem": "Uber", "Deliveroo Plus": "Pyszne.pl+", "Deliveroo": "Pyszne.pl", "spinneys.com": "stokrotka.pl",
    "Spinneys": "Stokrotka", "Carrefour": "Biedronka", "VOX Cinemas": "Cinema City", "VOX": "Cinema City", "Shake Shack": "Bobby Burger",
    "Etihad Guest Miles": "Miles & More miles", "Etihad Guest": "Miles & More", "etihad.com": "lot.com", "Etihad": "LOT", "Talabat": "Glovo",
    "KidZania": "LEGO Store", "OliOli": "Copernicus Science Centre", "Yas Waterworld": "Energylandia", "Warner Bros. World": "Warsaw Zoo",
    "Coca-Cola Arena": "PGE Narodowy", "Platinumlist": "eBilet", "Atlantis The Palm": "Park of Poland", "Atlantis": "Park of Poland",
    "Aquaventure": "Suntago", "Ritz-Carlton": "Raffles Europejski", "Ras Al Khaimah": "Zakopane", "Abu Dhabi": "Warsaw",
    "Dubai": "Warsaw", "Palm Jumeirah": "Mszczonów", "Yas Island": "Zator", "Al Quoz": "Praga", "City Walk": "Nowy Świat", "Financial Centre": "Rondo ONZ",
    "Grand Atrium": "Westfield Arkadia", "Al Barsha": "Mokotów", "GOLD, THEATRE by Rhodes and IMAX": "4DX and IMAX",
    "Qatar Privilege Club": "Flying Blue", "flydubai OPEN": "Wizz Discount Club", "summer heat": "winter cold", "Wizz Air Abu Dhabi": "Wizz Air"
  },
  logos: { waitrose: "ld:delikatesy.pl", noon: "ld:allegro.pl", justmop: "ld:pozamiatane.pl", careem: "uber", deliveroo: "ld:pyszne.pl",
    spinneys: "ld:stokrotka.pl", carrefour: "ld:biedronka.pl", vox: "ld:cinema-city.pl", shakeshack: "ld:bobbyburger.pl", etihad: "ld:lot.com", kidzania: "ld:lego.com",
    olioli: "ld:kopernik.org.pl", yas: "ld:energylandia.pl", wbworld: "ld:zoo.waw.pl", cocacolaarena: "ld:pgenarodowy.pl", platinumlist: "ld:ebilet.pl",
    atlantis: "ld:suntago.pl", ritzrak: "ld:raffles.com", talabat: "ld:glovoapp.com", qatar: "ld:flyingblue.com", flydubai: "ld:wizzair.com", wizz: "ld:wizzair.com" },
  offers: {
    waitrose: { brand: "Delikatesy Centrum", brandColor: "#00923F", place: "Mokotów, Warsaw", place2: "Mokotów" },
    noon: { brand: "Allegro", brandColor: "#FF5A00" },
    justmop: { brand: "Pozamiatane.pl", brandColor: "#2BA8E0", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Pyszne.pl", brandColor: "#FF8000" },
    spinneys: { brand: "Stokrotka", brandColor: "#7AB929", place: "All Warsaw stores" },
    carrefour: { brand: "Biedronka", brandColor: "#E30613", place: "Marszałkowska, Warsaw", place2: "Marszałkowska" },
    vox: { brand: "Cinema City", brandColor: "#F07D00", place: "Cinema City Arkadia, Warsaw", place2: "Westfield Arkadia" },
    shakeshack: { brand: "Bobby Burger", brandColor: "#111111", place: "Śródmieście, Warsaw", place2: "Śródmieście" },
    emirates: { brand: "LOT", brandColor: "#232566" },
    wizz: { brand: "Wizz Air" },
    kidzania: { brand: "LEGO Store", brandColor: "#E3000B", place: "All Warsaw stores", place2: "Warsaw", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Copernicus Science Centre", brandColor: "#000000", place: "Wybrzeże Kościuszkowskie 20, Warsaw", place2: "Powiśle", why: "A day out for the family, fifteen minutes away" },
    yas: { brand: "Energylandia", brandColor: "#1E5BB8", place2: "Zator, Lesser Poland", why: "A long weekend for four, a short train ride away" },
    wbworld: { brand: "Warsaw Zoo", brandColor: "#3A9A3A", place2: "Praga, Warsaw", why: "Animals and gardens, four tickets in one booking" },
    cocacolaarena: { brand: "PGE Narodowy", brandColor: "#E2001A", place2: "Praga, Warsaw" },
    platinumlist: { brand: "eBilet", brandColor: "#4A2C63" },
    atlantis: { brand: "Park of Poland", brandColor: "#1F2A44", place2: "Wręcza, near Mszczonów", why: "Suntago water park passes come with the room" },
    ritzrak: { brand: "Raffles Europejski", brandColor: "#1C1C1C", place2: "Raffles Europejski Warsaw, Krakowskie Przedmieście", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Glovo", logo: "ld:glovoapp.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "lot_pl", kind: "air", regions: ["pl"], name: "LOT Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:lot.com", color: "#FFFFFF", fg: "#232566", initial: "L", account: "LO ···· 7731", rate: 0.5 }
]);
