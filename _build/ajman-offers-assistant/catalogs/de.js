window.LUNE_REGIONS.de = {
  label: "Germany", city: "Berlin", cur: "EUR", lang: "de",
  text: {
    "Waitrose": "EDEKA", "Shake Shack": "Burgermeister", "Dubai Mall": "Mall of Berlin", "Mall of the Emirates": "Alexa", "noon Food": "OTTO Up", "noon.com": "otto.de",
    "noon": "OTTO", "Justlife": "Helpling", "Careem": "Uber", "Deliveroo Plus": "Wolt+", "Deliveroo": "Wolt", "spinneys.com": "rewe.de",
    "Spinneys": "REWE", "Carrefour": "Kaufland", "VOX Cinemas": "UCI Kinowelt", "VOX": "UCI", "Etihad Guest Miles": "Miles & More miles", "Etihad Guest": "Miles & More",
    "etihad.com": "lufthansa.com", "Etihad": "Lufthansa", "Talabat": "Lieferando", "KidZania": "Smyths Toys", "OliOli": "Deutsches Technikmuseum", "Yas Waterworld": "Europa-Park",
    "Warner Bros. World": "Zoo Berlin", "Coca-Cola Arena": "Uber Arena", "Platinumlist": "Eventim", "Atlantis The Palm": "Tropical Islands",
    "Atlantis": "Tropical Islands", "Aquaventure": "the tropical pool", "Ritz-Carlton": "Hotel Adlon Kempinski", "Ras Al Khaimah": "the Baltic coast", "Abu Dhabi": "Berlin",
    "Dubai": "Berlin", "Palm Jumeirah": "Brandenburg", "Yas Island": "Rust", "Al Quoz": "Kreuzberg", "City Walk": "Hackescher Markt", "Financial Centre": "Mitte",
    "Grand Atrium": "Potsdamer Platz", "Al Barsha": "Charlottenburg", "GOLD, THEATRE by Rhodes and IMAX": "UCI Luxe and IMAX",
    "summer heat": "grey winter days", "Wizz Air Abu Dhabi": "Eurowings"
  },
  logos: { waitrose: "ld:edeka.de", noon: "ld:otto.de", justmop: "ld:helpling.de", careem: "uber", deliveroo: "ld:wolt.com",
    spinneys: "ld:rewe.de", carrefour: "ld:kaufland.de", vox: "ld:uci-kinowelt.de", shakeshack: "ld:burger-meister.de", etihad: "ld:lufthansa.com",
    kidzania: "ld:smythstoys.com", olioli: "ld:technikmuseum.berlin", yas: "ld:europapark.de", wbworld: "ld:zoo-berlin.de", cocacolaarena: "ld:uber-arena.de",
    platinumlist: "ld:eventim.de", atlantis: "ld:tropical-islands.de", ritzrak: "ld:kempinski.com", talabat: "ld:lieferando.de", wizz: "ld:eurowings.com" },
  offers: {
    waitrose: { brand: "EDEKA", brandColor: "#005CA9", place: "Prenzlauer Berg, Berlin", place2: "Prenzlauer Berg" },
    noon: { brand: "OTTO", brandColor: "#F00020" },
    justmop: { brand: "Helpling", brandColor: "#2F6F5E", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Wolt", brandColor: "#009DE0" },
    spinneys: { brand: "REWE", brandColor: "#CC071E", place: "All Berlin stores" },
    carrefour: { brand: "Kaufland", brandColor: "#E10915", place: "Friedrichshain, Berlin", place2: "Friedrichshain" },
    vox: { brand: "UCI Kinowelt", brandColor: "#FFE600", place: "UCI Luxe Mercedes Platz, Friedrichshain", place2: "Mercedes Platz" },
    shakeshack: { brand: "Burgermeister", brandColor: "#0F3B2A", place: "Schlesisches Tor, Kreuzberg", place2: "Kreuzberg" },
    emirates: { brand: "Lufthansa", brandColor: "#05164D" },
    wizz: { brand: "Eurowings" },
    kidzania: { brand: "Smyths Toys", brandColor: "#E30613", place: "All Berlin stores", place2: "Berlin", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Deutsches Technikmuseum", brandColor: "#1A1A1A", place: "Trebbiner Strasse 9, Kreuzberg", place2: "Kreuzberg", why: "Trains, planes and hands-on science, good for grey days" },
    yas: { brand: "Europa-Park", brandColor: "#A8894E", place2: "Rust, Baden-Württemberg", why: "A long weekend for four, a short flight away" },
    wbworld: { brand: "Zoo Berlin", brandColor: "#3F5F1F", place2: "Charlottenburg, Berlin", why: "A day out for the family, in the middle of town" },
    cocacolaarena: { brand: "Uber Arena", brandColor: "#000000", place2: "Friedrichshain, Berlin" },
    platinumlist: { brand: "Eventim", brandColor: "#1C2A6B" },
    atlantis: { brand: "Tropical Islands", brandColor: "#1A8C8C", place2: "Krausnick, Brandenburg", why: "Tropical pool passes come with the room, an hour from Berlin" },
    ritzrak: { brand: "Hotel Adlon Kempinski", brandColor: "#0A1633", place2: "Pariser Platz, Berlin", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Lieferando", logo: "ld:lieferando.de" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "lufthansa_de", kind: "air", regions: ["de"], name: "Lufthansa Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:lufthansa.com", color: "#FFFFFF", fg: "#05164D", initial: "L", account: "LH ···· 4410", rate: 0.5 }
]);
