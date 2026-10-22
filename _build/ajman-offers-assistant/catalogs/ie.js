window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.ie = {
  label: "Ireland", city: "Dublin", cur: "EUR", lang: "en",
  text: {
    "Waitrose": "Donnybrook Fair", "Dubai Mall": "Dundrum Town Centre", "Mall of the Emirates": "Liffey Valley", "noon Food": "Just Eat", "noon.com": "donedeal.ie",
    "noon": "DoneDeal", "Justlife": "Helpling", "Careem": "FREENOW", "Deliveroo Plus": "Deliveroo Plus", "Deliveroo": "Deliveroo", "spinneys.com": "supervalu.ie",
    "Spinneys": "SuperValu", "Carrefour": "Dunnes Stores", "VOX Cinemas": "Omniplex Cinemas", "VOX": "Omniplex", "Shake Shack": "Eddie Rocket's",
    "Etihad Guest Miles": "Avios", "Etihad Guest": "AerClub", "etihad.com": "aerlingus.com", "Etihad": "Aer Lingus", "Talabat": "Just Eat",
    "KidZania": "Smyths Toys", "OliOli": "Dublin Zoo", "Yas Waterworld": "Emerald Park", "Warner Bros. World": "Fota Wildlife Park",
    "Coca-Cola Arena": "3Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Center Parcs Longford Forest", "Atlantis": "Center Parcs",
    "Aquaventure": "the Subtropical Swimming Paradise", "Ritz-Carlton": "The Merrion", "Ras Al Khaimah": "Kerry", "Abu Dhabi": "Dublin",
    "Dubai": "Dublin", "Palm Jumeirah": "County Longford", "Yas Island": "County Meath", "Al Quoz": "Smithfield", "City Walk": "Grafton Street", "Financial Centre": "IFSC",
    "Grand Atrium": "Dundrum Town Centre", "Al Barsha": "Ranelagh", "GOLD, THEATRE by Rhodes and IMAX": "Omniplex MAXX",
    "Qatar Privilege Club": "British Airways Executive Club", "flydubai OPEN": "myRyanair", "summer heat": "winter rain", "Wizz Air Abu Dhabi": "Ryanair"
  },
  logos: { waitrose: "ld:donnybrookfair.ie", noon: "ld:donedeal.ie", justmop: "ld:helpling.ie", careem: "ld:free-now.com", deliveroo: "ld:deliveroo.ie",
    spinneys: "ld:supervalu.ie", carrefour: "ld:dunnesstores.com", vox: "ld:omniplex.ie", shakeshack: "ld:eddierockets.ie", etihad: "ld:aerlingus.com", kidzania: "ld:smythstoys.com",
    olioli: "ld:dublinzoo.ie", yas: "ld:emeraldpark.ie", wbworld: "ld:fotawildlife.ie", cocacolaarena: "ld:3arena.ie", platinumlist: "ld:ticketmaster.ie",
    atlantis: "ld:centerparcs.ie", ritzrak: "ld:merrionhotel.com", talabat: "ld:just-eat.ie", qatar: "ld:britishairways.com", flydubai: "ld:ryanair.com", wizz: "ld:ryanair.com" },
  offers: {
    waitrose: { brand: "Donnybrook Fair", brandColor: "#111111", place: "Morehampton Road, Donnybrook", place2: "Donnybrook" },
    noon: { brand: "DoneDeal", brandColor: "#E8262B" },
    justmop: { brand: "Helpling", brandColor: "#4FB68C", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "FREENOW", brandColor: "#D50F2F" },
    namshi: { brand: "Deliveroo", brandColor: "#00CCBC" },
    spinneys: { brand: "SuperValu", brandColor: "#C8102E", place: "All Dublin stores" },
    carrefour: { brand: "Dunnes Stores", brandColor: "#000000", place: "Stephen's Green Shopping Centre, Dublin", place2: "Stephen's Green" },
    vox: { brand: "Omniplex Cinemas", brandColor: "#FFE500", place: "Omniplex Rathmines, Dublin 6", place2: "Rathmines" },
    shakeshack: { brand: "Eddie Rocket's", brandColor: "#D7263D", place: "South Anne Street, Dublin 2", place2: "South Anne Street" },
    emirates: { brand: "Aer Lingus", brandColor: "#006272" },
    wizz: { brand: "Ryanair" },
    kidzania: { brand: "Smyths Toys", brandColor: "#E2001A", place: "Liffey Valley, Dublin", place2: "Liffey Valley", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Dublin Zoo", brandColor: "#5AA02C", place: "Phoenix Park, Dublin 8", place2: "Phoenix Park", why: "A day out for the family, twenty minutes away" },
    yas: { brand: "Emerald Park", brandColor: "#1DB24B", place2: "Ashbourne, County Meath", why: "A day out for four, half an hour away" },
    wbworld: { brand: "Fota Wildlife Park", brandColor: "#B8202A", place2: "Fota Island, Cork", why: "Animals from five continents, four tickets in one booking" },
    cocacolaarena: { brand: "3Arena", brandColor: "#000000", place2: "North Wall Quay, Dublin 1" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Center Parcs Longford Forest", brandColor: "#1F4E9C", place2: "Longford Forest, County Longford", why: "Swimming Paradise passes come with the lodge" },
    ritzrak: { brand: "The Merrion", brandColor: "#1C1C1C", place2: "The Merrion, Upper Merrion Street", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Just Eat", logo: "ld:just-eat.ie" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "aerlingus_ie", kind: "air", regions: ["ie"], name: "Aer Lingus AerClub", unit: "Avios", unitOne: "Avios", logo: "ld:aerlingus.com", color: "#FFFFFF", fg: "#006272", initial: "A", account: "EI ···· 2316", rate: 0.5 }
]);
