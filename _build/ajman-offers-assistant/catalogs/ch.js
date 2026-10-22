window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.ch = {
  label: "Switzerland", city: "Zurich", cur: "CHF", lang: "de",
  text: {
    "Waitrose": "Globus", "Dubai Mall": "Sihlcity", "Mall of the Emirates": "Glattzentrum", "noon Food": "Smood", "noon.com": "galaxus.ch",
    "noon": "Galaxus", "Justlife": "Batmaid", "Careem": "Uber", "Deliveroo Plus": "Uber One", "Deliveroo": "Uber Eats", "spinneys.com": "coop.ch",
    "Spinneys": "Coop", "Carrefour": "Migros", "VOX Cinemas": "Arena Cinemas", "VOX": "Arena", "Shake Shack": "Holy Cow!",
    "Etihad Guest Miles": "Miles & More miles", "Etihad Guest": "Miles & More", "etihad.com": "swiss.com", "Etihad": "SWISS", "Talabat": "Smood",
    "KidZania": "Franz Carl Weber", "OliOli": "Technorama", "Yas Waterworld": "Alpamare", "Warner Bros. World": "Zoo Zürich",
    "Coca-Cola Arena": "Hallenstadion", "Platinumlist": "Ticketcorner", "Atlantis The Palm": "Swiss Holiday Park", "Atlantis": "Swiss Holiday Park",
    "Aquaventure": "the indoor pool", "Ritz-Carlton": "Baur au Lac", "Ras Al Khaimah": "St. Moritz", "Abu Dhabi": "Zurich",
    "Dubai": "Zurich", "Palm Jumeirah": "Lake Lucerne", "Yas Island": "Pfäffikon", "Al Quoz": "Zurich West", "City Walk": "Bahnhofstrasse", "Financial Centre": "Paradeplatz",
    "Grand Atrium": "Sihlcity", "Al Barsha": "Oerlikon", "GOLD, THEATRE by Rhodes and IMAX": "Arena VIP lounge seats",
    "Qatar Privilege Club": "Flying Blue", "flydubai OPEN": "easyJet Plus", "summer heat": "winter cold", "Wizz Air Abu Dhabi": "easyJet"
  },
  logos: { waitrose: "ld:globus.ch", noon: "ld:galaxus.ch", amazon: "ld:brack.ch", justmop: "ld:batmaid.ch", careem: "uber", deliveroo: "ld:ubereats.com",
    spinneys: "ld:coop.ch", carrefour: "ld:migros.ch", vox: "ld:arena.ch", shakeshack: "ld:holycow.ch", etihad: "ld:swiss.com", kidzania: "ld:fcw.ch",
    olioli: "ld:technorama.ch", yas: "ld:alpamare.ch", wbworld: "ld:zoo.ch", cocacolaarena: "ld:hallenstadion.ch", platinumlist: "ld:ticketcorner.ch",
    atlantis: "ld:swissholidaypark.ch", ritzrak: "ld:bauraulac.ch", talabat: "ld:smood.ch", qatar: "ld:flyingblue.com", flydubai: "ld:easyjet.com", wizz: "ld:easyjet.com" },
  offers: {
    waitrose: { brand: "Globus", brandColor: "#000000", place: "Globus Bahnhofstrasse, Zurich", place2: "Bahnhofstrasse" },
    noon: { brand: "Galaxus", brandColor: "#000000" },
    amazon: { brand: "Brack.ch", brandColor: "#C8102E" },
    justmop: { brand: "Batmaid", brandColor: "#111111", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Uber Eats", brandColor: "#06C167" },
    spinneys: { brand: "Coop", brandColor: "#E5661B", place: "All Zurich stores" },
    carrefour: { brand: "Migros", brandColor: "#FF6600", place: "Glattzentrum, Wallisellen", place2: "Glattzentrum" },
    vox: { brand: "Arena Cinemas", brandColor: "#E5007D", place: "Arena Cinemas Sihlcity, Zurich", place2: "Sihlcity" },
    shakeshack: { brand: "Holy Cow!", brandColor: "#2B2B2B", place: "Niederdorf, Zurich", place2: "Niederdorf" },
    emirates: { brand: "SWISS", brandColor: "#E30613" },
    wizz: { brand: "easyJet" },
    kidzania: { brand: "Franz Carl Weber", brandColor: "#D2232A", place: "Bahnhofstrasse, Zurich", place2: "Bahnhofstrasse", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Technorama", brandColor: "#3A3A3A", place: "Technoramastrasse 1, Winterthur", place2: "Winterthur", why: "A day out for the family, twenty minutes away" },
    yas: { brand: "Alpamare", brandColor: "#0062AE", place2: "Pfäffikon SZ", why: "A water park day for four, half an hour away" },
    wbworld: { brand: "Zoo Zürich", brandColor: "#D0021B", place2: "Zürichberg, Zurich", why: "Animals and the Masoala Rainforest, four tickets in one booking" },
    cocacolaarena: { brand: "Hallenstadion", brandColor: "#000000", place2: "Oerlikon, Zurich" },
    platinumlist: { brand: "Ticketcorner", brandColor: "#1E2761" },
    atlantis: { brand: "Swiss Holiday Park", brandColor: "#2C3E5A", place2: "Morschach, Lake Lucerne", why: "Pool and spa passes come with the room" },
    ritzrak: { brand: "Baur au Lac", brandColor: "#1C1C1C", place2: "Baur au Lac, Talstrasse", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Smood", logo: "ld:smood.ch" }, amazon: { name: "Brack.ch", logo: "ld:brack.ch" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "swiss_ch", kind: "air", regions: ["ch"], name: "SWISS Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:swiss.com", color: "#FFFFFF", fg: "#E30613", initial: "S", account: "LX ···· 3308", rate: 0.5 }
]);
