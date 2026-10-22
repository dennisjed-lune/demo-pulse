// Regional offer catalogs for the sales setup. Offer ids stay the same (every flow keys on them);
// only brand, logo, place and local copy change. "ld:<domain>" logos load from logo.dev.
window.LUNE_REGIONS = {
  me: { label: "United Arab Emirates", city: "Dubai", cur: "AED" },
  ksa: {
    label: "Saudi Arabia", city: "Riyadh", cur: "SAR", lang: "ar",
    text: {
      "Waitrose": "Panda", "Dubai Mall": "Riyadh Park", "Mall of the Emirates": "Al Nakheel Mall", "Dubai": "Riyadh", "Abu Dhabi": "Jeddah",
      "spinneys.com": "tamimimarkets.com", "Spinneys": "Tamimi Markets", "Carrefour": "Danube", "VOX Cinemas": "Muvi Cinemas", "VOX": "Muvi",
      "Shake Shack": "Al Baik", "Deliveroo Plus": "HungerStation Pro", "Deliveroo": "HungerStation", "Etihad Guest Miles": "AlFursan miles", "Etihad Guest": "AlFursan",
      "etihad.com": "saudia.com", "Etihad": "Saudia", "KidZania": "Toys\"R\"Us", "Yas Waterworld": "Riyadh Season", "Coca-Cola Arena": "webook",
      "Atlantis The Palm": "Red Sea Global", "Atlantis": "Red Sea Global", "Aquaventure": "the reef", "Ritz-Carlton": "Fairmont", "Ras Al Khaimah": "AlUla",
      "Palm Jumeirah": "the Red Sea", "Yas Island": "Boulevard City", "Al Quoz": "Al Olaya", "City Walk": "Boulevard", "Financial Centre": "King Abdullah Road",
      "Grand Atrium": "Riyadh Park", "Al Barsha": "Al Nakheel", "GOLD, THEATRE by Rhodes and IMAX": "Muvi Suites and IMAX", "Wizz Air Abu Dhabi": "flynas", "Booking.com": "Almosafer",
      "وايتروز": "بنده", "دبي مول": "الرياض بارك", "مول الإمارات": "النخيل مول", "دبي": "الرياض", "كارفور": "الدانوب", "فوكس": "موڤي",
      "شيك شاك": "البيك", "ديليفرو": "هنقرستيشن", "الاتحاد للطيران": "الخطوط السعودية", "أتلانتس": "البحر الأحمر الدولية"
    },
    logos: { waitrose: "ld:panda.com.sa", spinneys: "ld:tamimimarkets.com", carrefour: "ld:danube.sa", vox: "ld:muvicinemas.com", shakeshack: "ld:albaik.com",
      deliveroo: "ld:hungerstation.com", talabat: "ld:hungerstation.com", etihad: "ld:saudiairlines.com", kidzania: "ld:toysrus.com.sa", yas: "ld:riyadhseason.com",
      cocacolaarena: "ld:webook.com", atlantis: "ld:redseaglobal.com", ritzrak: "ld:fairmont.com", booking: "ld:almosafer.com", wizz: "ld:flynas.com" },
    offers: {
      waitrose: { brand: "Panda", brandColor: "#E03A2F", place: "Riyadh Park, Riyadh", place2: "Riyadh Park" },
      spinneys: { brand: "Tamimi Markets", brandColor: "#E3242B", place: "All Riyadh branches" },
      carrefour: { brand: "Danube", brandColor: "#0E6B3A", place: "Al Nakheel Mall, Riyadh", place2: "Al Nakheel Mall" },
      vox: { brand: "Muvi Cinemas", brandColor: "#7A2B8C", place: "Riyadh Park, Riyadh", place2: "Riyadh Park" },
      shakeshack: { brand: "Al Baik", brandColor: "#D8232A", place: "Olaya Street, Riyadh", place2: "Olaya" },
      namshi: { brand: "HungerStation", brandColor: "#FFD200" },
      emirates: { brand: "Saudia", brandColor: "#FFFFFF", fitContain: true },
      wizz: { brand: "flynas" },
      booking: { brand: "Almosafer", brandColor: "#0B3B4F" },
      kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "Riyadh Park, Riyadh", place2: "Riyadh Park", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
      yas: { brand: "Riyadh Season", brandColor: "#111111", place2: "Boulevard City, Riyadh", why: "A night out for four, ten minutes away" },
      cocacolaarena: { brand: "webook", brandColor: "#7B4DFF", place2: "Riyadh" },
      atlantis: { brand: "Red Sea Global", brandColor: "#8A6A3B", place2: "The Red Sea", why: "Reef and island stays on the Red Sea coast" },
      ritzrak: { brand: "Fairmont", brandColor: "#1C1C1C", place2: "Fairmont Riyadh", why: "A weekend staycation in town" },
      olioli: { hide: true }, wbworld: { hide: true }
    },
    partners: {}, gifts: { talabat: { name: "HungerStation", logo: "ld:hungerstation.com" } }
  },
  eu: {
    label: "Netherlands", city: "Amsterdam", cur: "EUR", lang: "en",
    text: {
      "Waitrose": "Lidl", "Shake Shack": "Five Guys", "Dubai Mall": "Kalverstraat", "Mall of the Emirates": "Zuidoost",
      "noon Food": "Zalando Lounge", "noon.com": "zalando.com", "noon": "Zalando", "Justlife": "Helpling", "Careem": "Uber",
      "Deliveroo Plus": "Just Eat+", "Deliveroo": "Just Eat", "spinneys.com": "aldi.nl", "Spinneys": "Aldi", "Carrefour": "Albert Heijn",
      "VOX Cinemas": "Pathé", "VOX": "Pathé", "Etihad Guest Miles": "Flying Blue Miles", "Etihad Guest": "Flying Blue", "etihad.com": "klm.com", "Etihad": "KLM",
      "Talabat": "Thuisbezorgd", "KidZania": "LEGO Store", "OliOli": "NEMO", "Yas Waterworld": "Disneyland Paris", "Warner Bros. World": "Efteling",
      "Coca-Cola Arena": "Ziggo Dome", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Center Parcs", "Atlantis": "Center Parcs",
      "Aquaventure": "Aqua Mundo", "Ritz-Carlton": "Hilton", "Ras Al Khaimah": "Noordwijk", "Abu Dhabi": "Amsterdam", "Dubai": "Amsterdam",
      "Palm Jumeirah": "De Eemhof", "Yas Island": "Marne-la-Vallée", "Al Quoz": "Oosterdok", "City Walk": "Zuidoost", "Financial Centre": "Centrum",
      "Grand Atrium": "Leidseplein", "Al Barsha": "Zuid", "GOLD, THEATRE by Rhodes and IMAX": "Pathé Premium and IMAX",
      "Qatar Privilege Club": "Avios", "flydubai OPEN": "Miles & More", "summer heat": "rainy days", "Wizz Air Abu Dhabi": "Wizz Air"
    },
    logos: { waitrose: "ld:lidl.com", noon: "ld:zalando.com", justmop: "ld:helpling.com", careem: "uber", deliveroo: "ld:justeat.com",
      spinneys: "ld:aldi.nl", carrefour: "ld:ah.nl", vox: "ld:pathe.nl", shakeshack: "ld:fiveguys.com", etihad: "ld:klm.com",
      kidzania: "ld:lego.com", olioli: "ld:nemosciencemuseum.nl", yas: "ld:disneylandparis.com", wbworld: "ld:efteling.com",
      cocacolaarena: "ld:ziggodome.nl", platinumlist: "ld:ticketmaster.com", atlantis: "ld:centerparcs.com", ritzrak: "ld:hilton.com",
      talabat: "ld:thuisbezorgd.nl", qatar: "ld:avios.com", flydubai: "ld:milesandmore.com" },
    offers: {
      waitrose: { brand: "Lidl", brandColor: "#0050AA", place: "Kalverstraat, Amsterdam Centrum", place2: "Kalverstraat" },
      noon: { brand: "Zalando", brandColor: "#FF6900" },
      justmop: { brand: "Helpling", brandColor: "#2EB872", why: "Cleaning runs AED 1,600 a month" },
      careem: { brand: "Uber" },
      namshi: { brand: "Just Eat", brandColor: "#FF8000" },
      spinneys: { brand: "Aldi", brandColor: "#00005F", place: "All Amsterdam branches" },
      carrefour: { brand: "Albert Heijn", brandColor: "#00A0E2", place: "Amsterdamse Poort, Zuidoost", place2: "Zuidoost" },
      vox: { brand: "Pathé", brandColor: "#FFC20E", place: "Pathé Arena, ArenA Boulevard", place2: "Zuidoost" },
      shakeshack: { brand: "Five Guys", brandColor: "#D51E3A", place: "Kalverstraat, Amsterdam Centrum", place2: "Kalverstraat" },
      emirates: { brand: "KLM", brandColor: "#00A1DE" },
      wizz: { brand: "Wizz Air" },
      kidzania: { brand: "LEGO Store", brandColor: "#E3000B", place: "Kalverstraat, Amsterdam Centrum", place2: "Kalverstraat", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
      olioli: { brand: "NEMO Science Museum", brandColor: "#00E05A", place: "Oosterdok 2, Amsterdam", place2: "Oosterdok", why: "Hands-on science, good for rainy days" },
      yas: { brand: "Disneyland Paris", brandColor: "#1A2A6C", place2: "Marne-la-Vallée, Paris", why: "A weekend for four, a direct train away" },
      wbworld: { brand: "Efteling", brandColor: "#A3122A", place2: "Kaatsheuvel", why: "A day out for four, an hour and a half by car" },
      cocacolaarena: { brand: "Ziggo Dome", brandColor: "#F39200", place2: "Amsterdam Zuidoost" },
      platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
      atlantis: { brand: "Center Parcs", brandColor: "#006B4F", place2: "De Eemhof, Zeewolde", why: "Aqua Mundo pool passes come with the cottage" },
      ritzrak: { brand: "Hilton", brandColor: "#104C97", place2: "Hilton Amsterdam", why: "Canal-side rooms, a staycation in town" }
    },
    partners: {},
    gifts: { talabat: { name: "Thuisbezorgd", logo: "ld:thuisbezorgd.nl" } }
  },
  asia: {
    label: "Singapore", city: "Singapore", cur: "SGD", lang: "en",
    text: {
      "Waitrose": "FairPrice", "Dubai Mall": "VivoCity", "Mall of the Emirates": "Junction 8", "noon Food": "ShopeeFood", "noon.com": "shopee.sg",
      "noon": "Shopee", "Justlife": "Sendhelper", "Careem": "Grab", "Uber Eats": "GrabFood", "Uber": "Grab", "Deliveroo Plus": "pandapro",
      "Deliveroo": "foodpanda", "spinneys.com": "giant.sg", "Spinneys": "Giant", "Carrefour": "Sheng Siong", "VOX Cinemas": "Shaw Theatres", "VOX": "Shaw",
      "Etihad Guest Miles": "KrisFlyer miles", "Etihad Guest": "KrisFlyer", "etihad.com": "singaporeair.com", "Etihad": "Singapore Airlines",
      "Talabat": "foodpanda", "KidZania": "Toys\"R\"Us", "OliOli": "Science Centre", "Yas Waterworld": "Universal Studios Singapore",
      "Warner Bros. World": "Mandai Wildlife Reserve", "Coca-Cola Arena": "SISTIC", "Platinumlist": "Klook", "Atlantis The Palm": "Marina Bay Sands",
      "Atlantis": "Marina Bay Sands", "Aquaventure": "SkyPark", "Ritz-Carlton": "Fairmont", "Ras Al Khaimah": "Sentosa", "Abu Dhabi": "Singapore",
      "Dubai": "Singapore", "Amazon": "Lazada", "Prime orders": "LazMall orders", "Palm Jumeirah": "Marina Bay", "Yas Island": "Sentosa",
      "Al Quoz": "Jurong East", "City Walk": "Kallang", "Financial Centre": "HarbourFront", "Grand Atrium": "Jewel Changi", "Al Barsha": "Bishan",
      "GOLD, THEATRE by Rhodes and IMAX": "Lumiere and IMAX", "Qatar Privilege Club": "Asia Miles", "summer heat": "afternoon rain", "Wizz Air Abu Dhabi": "Wizz Air"
    },
    logos: { waitrose: "ld:fairprice.com.sg", noon: "ld:shopee.sg", justmop: "ld:sendhelper.com", uber: "ld:grab.com", careem: "ld:grab.com",
      amazon: "ld:lazada.sg", deliveroo: "ld:foodpanda.sg", spinneys: "ld:giant.sg", carrefour: "ld:shengsiong.com.sg", vox: "ld:shaw.sg",
      etihad: "ld:singaporeair.com", kidzania: "ld:toysrus.com.sg", olioli: "ld:science.edu.sg", yas: "ld:rwsentosa.com", wbworld: "ld:mandai.com",
      cocacolaarena: "ld:sistic.com.sg", platinumlist: "ld:klook.com", atlantis: "ld:marinabaysands.com", ritzrak: "ld:fairmont.com",
      talabat: "ld:foodpanda.sg", qatar: "ld:cathaypacific.com" },
    offers: {
      waitrose: { brand: "FairPrice", brandColor: "#1F5BD8", place: "VivoCity, HarbourFront", place2: "VivoCity" },
      noon: { brand: "Shopee", brandColor: "#EE4D2D" },
      justmop: { brand: "Sendhelper", brandColor: "#E2483C", why: "Cleaning runs AED 1,600 a month" },
      careem: { brand: "Grab", brandColor: "#00B14F" },
      amazon: { brand: "Lazada", brandColor: "#0F146D" },
      namshi: { brand: "foodpanda", brandColor: "#D70F64" },
      spinneys: { brand: "Giant", brandColor: "#6CBE45", place: "All Singapore branches" },
      carrefour: { brand: "Sheng Siong", brandColor: "#1B3C87", place: "Junction 8, Bishan", place2: "Junction 8", qualifies: ["In-store spend of AED 400 or more", "Junction 8 branch only"] },
      vox: { brand: "Shaw Theatres", brandColor: "#A6192E", place: "Lido, Orchard Road", place2: "Lido", qualifies: ["Standard seats, booked at the counter or in the Shaw app", "Shaw Theatres Lido only"] },
      shakeshack: { place: "Jewel Changi Airport", place2: "Jewel Changi", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Jewel Changi branch only"] },
      emirates: { brand: "Singapore Airlines", brandColor: "#1D3360" },
      wizz: { brand: "Wizz Air" },
      kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "Suntec City", place2: "Suntec City", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
      olioli: { brand: "Science Centre", brandColor: "#E94E1B", place: "15 Science Centre Road, Jurong East", place2: "Jurong East", why: "Indoor and air-conditioned, good for rainy afternoons" },
      yas: { brand: "Universal Studios Singapore", brandColor: "#1C1C1C", place2: "Sentosa", why: "A day out for four, twenty minutes away" },
      wbworld: { brand: "Mandai Wildlife Reserve", brandColor: "#1E4D2B", place2: "Mandai", why: "Zoo and River Wonders, four tickets in one booking" },
      cocacolaarena: { brand: "SISTIC", brandColor: "#4A6CF7", place2: "Singapore Indoor Stadium" },
      platinumlist: { brand: "Klook", brandColor: "#FF5B00" },
      atlantis: { brand: "Marina Bay Sands", brandColor: "#1C1C1C", place2: "Marina Bay", why: "SkyPark access comes with the room" },
      ritzrak: { brand: "Fairmont", brandColor: "#1C1C1C", place2: "Fairmont Singapore", why: "A two-night staycation in town" }
    },
    partners: {},
    gifts: { talabat: { name: "foodpanda", logo: "ld:foodpanda.sg" }, amazon: { name: "Lazada", logo: "ld:lazada.sg" }, uber: { name: "Grab", logo: "ld:grab.com" } }
  },
  us: {
    label: "United States", city: "New York", cur: "USD", lang: "en",
    text: {
      "Waitrose": "Whole Foods Market", "Dubai Mall": "Hudson Yards", "Mall of the Emirates": "Brooklyn", "noon Food": "Walmart+", "noon.com": "walmart.com",
      "noon": "Walmart", "Justlife": "TaskRabbit", "Careem": "Uber", "Deliveroo Plus": "DashPass", "Deliveroo": "DoorDash", "spinneys.com": "traderjoes.com",
      "Spinneys": "Trader Joe's", "Carrefour": "Target", "VOX Cinemas": "AMC Theatres", "VOX": "AMC", "Etihad Guest Miles": "SkyMiles", "Etihad Guest": "Delta SkyMiles",
      "etihad.com": "delta.com", "Etihad": "Delta", "Talabat": "Grubhub", "KidZania": "LEGO Store", "OliOli": "Bronx Zoo", "Yas Waterworld": "Universal Orlando Resort",
      "Warner Bros. World": "SeaWorld Orlando", "Coca-Cola Arena": "Madison Square Garden", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Kalahari Resorts",
      "Atlantis": "Kalahari Resorts", "Aquaventure": "the indoor water park", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "the Hamptons", "Abu Dhabi": "New York",
      "Dubai": "New York", "Palm Jumeirah": "the Poconos", "Yas Island": "Orlando", "Al Quoz": "Chelsea", "City Walk": "SoHo", "Financial Centre": "Midtown",
      "Grand Atrium": "Times Square", "Al Barsha": "Upper West Side", "GOLD, THEATRE by Rhodes and IMAX": "Dolby Cinema and IMAX",
      "Qatar Privilege Club": "United MileagePlus", "flydubai OPEN": "JetBlue TrueBlue", "summer heat": "winter cold", "Wizz Air Abu Dhabi": "JetBlue"
    },
    logos: { waitrose: "ld:wholefoodsmarket.com", noon: "ld:walmart.com", justmop: "ld:taskrabbit.com", careem: "uber", deliveroo: "ld:doordash.com",
      spinneys: "ld:traderjoes.com", carrefour: "ld:target.com", vox: "ld:amctheatres.com", etihad: "ld:delta.com", kidzania: "ld:lego.com",
      olioli: "ld:bronxzoo.com", yas: "ld:universalorlando.com", wbworld: "ld:seaworld.com", cocacolaarena: "ld:msg.com", platinumlist: "ld:ticketmaster.com",
      atlantis: "ld:kalahariresorts.com", ritzrak: "ld:fourseasons.com", talabat: "ld:grubhub.com", qatar: "ld:united.com", flydubai: "ld:jetblue.com", wizz: "ld:jetblue.com" },
    offers: {
      waitrose: { brand: "Whole Foods Market", brandColor: "#00674B", place: "Hudson Yards, Manhattan", place2: "Hudson Yards" },
      noon: { brand: "Walmart", brandColor: "#0071CE" },
      justmop: { brand: "TaskRabbit", brandColor: "#1D7A5F", why: "Cleaning runs AED 1,600 a month" },
      careem: { brand: "Uber" },
      namshi: { brand: "DoorDash", brandColor: "#FF3008" },
      spinneys: { brand: "Trader Joe's", brandColor: "#C8102E", place: "All New York stores" },
      carrefour: { brand: "Target", brandColor: "#CC0000", place: "Atlantic Terminal, Brooklyn", place2: "Brooklyn" },
      vox: { brand: "AMC Theatres", brandColor: "#E31837", place: "AMC Lincoln Square 13, Upper West Side", place2: "Upper West Side" },
      shakeshack: { place: "Madison Square Park, Manhattan", place2: "Madison Square Park", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Madison Square Park branch only"] },
      emirates: { brand: "Delta", brandColor: "#0B1F4B" },
      wizz: { brand: "JetBlue" },
      kidzania: { brand: "LEGO Store", brandColor: "#E3000B", place: "Fifth Avenue, Manhattan", place2: "Fifth Avenue", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
      olioli: { brand: "Bronx Zoo", brandColor: "#1E7B4F", place: "2300 Southern Boulevard, Bronx", place2: "Bronx", why: "A day out for the family, half an hour away" },
      yas: { brand: "Universal Orlando Resort", brandColor: "#1B3A8C", place2: "Orlando, Florida", why: "A long weekend for four, a short flight away" },
      wbworld: { brand: "SeaWorld Orlando", brandColor: "#0B4DA2", place2: "Orlando, Florida", why: "Shows, rides and aquariums, four tickets in one booking" },
      cocacolaarena: { brand: "Madison Square Garden", brandColor: "#14325C", place2: "Midtown, Manhattan" },
      platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
      atlantis: { brand: "Kalahari Resorts", brandColor: "#0E2B4F", place2: "The Poconos, Pennsylvania", why: "Indoor water park passes come with the room" },
      ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons New York Downtown", why: "A weekend staycation in town" }
    },
    partners: {},
    gifts: { talabat: { name: "Grubhub", logo: "ld:grubhub.com" } }
  }
};


// ---- au.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.au = {
  label: "Australia", city: "Sydney", cur: "AUD", lang: "en",
  text: {
    "Waitrose": "Harris Farm Markets", "Dubai Mall": "Westfield Sydney", "Mall of the Emirates": "Westfield Bondi Junction", "noon Food": "DoorDash", "noon.com": "ebay.com.au",
    "noon": "eBay", "Justlife": "Airtasker", "Careem": "Uber", "Deliveroo Plus": "Uber One", "Deliveroo": "Uber Eats", "spinneys.com": "woolworths.com.au",
    "Spinneys": "Woolworths", "Carrefour": "Big W", "VOX Cinemas": "Event Cinemas", "VOX": "Event", "Shake Shack": "Grill'd", "Etihad Guest Miles": "Qantas Points", "Etihad Guest": "Qantas Frequent Flyer",
    "etihad.com": "qantas.com", "Etihad": "Qantas", "Talabat": "DoorDash", "KidZania": "Toyworld", "OliOli": "Powerhouse", "Yas Waterworld": "Luna Park Sydney",
    "Warner Bros. World": "Taronga Zoo", "Coca-Cola Arena": "Qudos Bank Arena", "Platinumlist": "Ticketek", "Atlantis The Palm": "Paradise Resort Gold Coast",
    "Atlantis": "Paradise Resort", "Aquaventure": "the water park", "Ritz-Carlton": "Crown", "Ras Al Khaimah": "the Hunter Valley", "Abu Dhabi": "Sydney",
    "Dubai": "Sydney", "Palm Jumeirah": "the Gold Coast", "Yas Island": "Milsons Point", "Al Quoz": "Alexandria", "City Walk": "Surry Hills", "Financial Centre": "the CBD",
    "Grand Atrium": "Pitt Street Mall", "Al Barsha": "Chatswood", "GOLD, THEATRE by Rhodes and IMAX": "Gold Class and V-Max",
    "Qatar Privilege Club": "Velocity Frequent Flyer", "flydubai OPEN": "Jetstar", "Wizz Air Abu Dhabi": "Jetstar"
  },
  logos: { waitrose: "ld:harrisfarm.com.au", noon: "ld:ebay.com.au", justmop: "ld:airtasker.com", careem: "uber", deliveroo: "ld:ubereats.com",
    spinneys: "ld:woolworths.com.au", carrefour: "ld:bigw.com.au", vox: "ld:eventcinemas.com.au", shakeshack: "ld:grilld.com.au", etihad: "ld:qantas.com", kidzania: "ld:toyworld.com.au",
    olioli: "ld:powerhouse.com.au", yas: "ld:lunaparksydney.com", wbworld: "ld:taronga.org.au", cocacolaarena: "ld:qudosbankarena.com.au", platinumlist: "ld:ticketek.com.au",
    atlantis: "ld:paradiseresort.com.au", ritzrak: "ld:crownsydney.com.au", talabat: "ld:doordash.com", qatar: "ld:virginaustralia.com", flydubai: "ld:jetstar.com", wizz: "ld:jetstar.com" },
  offers: {
    waitrose: { brand: "Harris Farm Markets", brandColor: "#1E5631", place: "Broadway, Ultimo", place2: "Broadway" },
    noon: { brand: "eBay", brandColor: "#0064D2" },
    justmop: { brand: "Airtasker", brandColor: "#0A66FF", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Uber Eats", brandColor: "#06C167" },
    spinneys: { brand: "Woolworths", brandColor: "#178841", place: "All Sydney stores" },
    carrefour: { brand: "Big W", brandColor: "#0046BE", place: "Westfield Bondi Junction", place2: "Bondi Junction" },
    vox: { brand: "Event Cinemas", brandColor: "#111111", place: "Event Cinemas George Street, Sydney CBD", place2: "George Street" },
    shakeshack: { brand: "Grill'd", brandColor: "#E31B23", place: "Crown Street, Surry Hills", place2: "Surry Hills", qualifies: ["Dine-in, takeaway and Grill'd app orders", "Surry Hills branch only"] },
    emirates: { brand: "Qantas", brandColor: "#E40000" },
    wizz: { brand: "Jetstar" },
    kidzania: { brand: "Toyworld", brandColor: "#009FE3", place: "All Sydney stores", place2: "Sydney", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Powerhouse", brandColor: "#111111", place: "Powerhouse Castle Hill", place2: "Castle Hill", why: "A science day out for the family, forty minutes away" },
    yas: { brand: "Luna Park Sydney", brandColor: "#A8302B", place2: "Milsons Point, Sydney", why: "A night of rides for four, across the bridge" },
    wbworld: { brand: "Taronga Zoo", brandColor: "#1E6B3A", place2: "Mosman, Sydney", why: "Animals and harbour views, four tickets in one booking" },
    cocacolaarena: { brand: "Qudos Bank Arena", brandColor: "#7B5CE6", place2: "Sydney Olympic Park" },
    platinumlist: { brand: "Ticketek", brandColor: "#0B1A2B" },
    atlantis: { brand: "Paradise Resort", brandColor: "#E8403A", place2: "Surfers Paradise, Gold Coast", why: "Water park and kids' club access come with the room" },
    ritzrak: { brand: "Crown Sydney", brandColor: "#A8894C", place2: "Crown Sydney, Barangaroo", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "DoorDash", logo: "ld:doordash.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "qantas_au", kind: "air", regions: ["au"], name: "Qantas Frequent Flyer", unit: "Qantas Points", unitOne: "Qantas Point", logo: "ld:qantas.com", color: "#FFFFFF", fg: "#E40000", initial: "Q", account: "QF ···· 4410", rate: 0.5 },
  { id: "virgin_au", kind: "air", regions: ["au"], name: "Velocity Frequent Flyer", unit: "Velocity Points", unitOne: "Velocity Point", logo: "ld:virginaustralia.com", color: "#FFFFFF", fg: "#E10A0A", initial: "V", account: null, rate: 0.5 }
]);

// ---- be.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.be = {
  label: "Belgium", city: "Brussels", cur: "EUR", lang: "fr",
  text: {
    "Waitrose": "Delhaize", "Dubai Mall": "Woluwe Shopping", "Mall of the Emirates": "Docks Bruxsel", "noon Food": "Takeaway.com", "noon.com": "bol.com",
    "noon": "bol", "Justlife": "ListMinut", "Careem": "Uber", "Deliveroo Plus": "Deliveroo Plus", "Deliveroo": "Deliveroo", "spinneys.com": "bioplanet.be",
    "Spinneys": "Bio-Planet", "Carrefour": "Colruyt", "VOX Cinemas": "Kinepolis", "VOX": "Kinepolis", "Shake Shack": "Manhattn's Burgers",
    "Etihad Guest Miles": "Miles & More miles", "Etihad Guest": "Miles & More", "etihad.com": "brusselsairlines.com", "Etihad": "Brussels Airlines", "Talabat": "Takeaway.com",
    "KidZania": "Maxi Toys", "OliOli": "Technopolis", "Yas Waterworld": "Walibi Belgium", "Warner Bros. World": "Pairi Daiza",
    "Coca-Cola Arena": "ING Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Sunparks De Haan", "Atlantis": "Sunparks",
    "Aquaventure": "the Aquafun pool", "Ritz-Carlton": "Corinthia", "Ras Al Khaimah": "the Ardennes", "Abu Dhabi": "Brussels",
    "Dubai": "Brussels", "Palm Jumeirah": "the Belgian coast", "Yas Island": "Wavre", "Al Quoz": "Tour & Taxis", "City Walk": "Avenue Louise", "Financial Centre": "European Quarter",
    "Grand Atrium": "Galeries Royales Saint-Hubert", "Al Barsha": "Ixelles", "GOLD, THEATRE by Rhodes and IMAX": "Laser ULTRA and 4DX",
    "Qatar Privilege Club": "Flying Blue", "flydubai OPEN": "TUI fly", "summer heat": "winter rain", "Wizz Air Abu Dhabi": "TUI fly"
  },
  logos: { waitrose: "ld:delhaize.be", noon: "ld:bol.com", justmop: "ld:listminut.be", careem: "uber", deliveroo: "ld:deliveroo.be",
    spinneys: "ld:bioplanet.be", carrefour: "ld:colruyt.be", vox: "ld:kinepolis.com", shakeshack: "ld:manhattns.com", etihad: "ld:brusselsairlines.com", kidzania: "ld:maxitoys.com",
    olioli: "ld:technopolis.be", yas: "ld:walibi.be", wbworld: "ld:pairidaiza.eu", cocacolaarena: "ld:palais12.com", platinumlist: "ld:ticketmaster.be",
    atlantis: "ld:sunparks.com", ritzrak: "ld:corinthia.com", talabat: "ld:takeaway.com", qatar: "ld:flyingblue.com", flydubai: "ld:tuifly.be", wizz: "ld:tuifly.be" },
  offers: {
    waitrose: { brand: "Delhaize", brandColor: "#D2232A", place: "Woluwe Shopping, Brussels", place2: "Woluwe Shopping" },
    noon: { brand: "bol", brandColor: "#0000A4" },
    justmop: { brand: "ListMinut", brandColor: "#FF9500", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Deliveroo", brandColor: "#00CCBC" },
    spinneys: { brand: "Bio-Planet", brandColor: "#004F9F", place: "All Brussels stores" },
    carrefour: { brand: "Colruyt", brandColor: "#F18A00", place: "Colruyt Anderlecht, Brussels", place2: "Anderlecht" },
    vox: { brand: "Kinepolis", brandColor: "#1C5AA6", place: "Kinepolis Brussels, Heysel", place2: "Heysel" },
    shakeshack: { brand: "Manhattn's Burgers", brandColor: "#F9C400", place: "Ixelles, Brussels", place2: "Ixelles" },
    emirates: { brand: "Brussels Airlines", brandColor: "#002A5C" },
    wizz: { brand: "TUI fly" },
    kidzania: { brand: "Maxi Toys", brandColor: "#E4032E", place: "All Brussels stores", place2: "Brussels", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Technopolis", brandColor: "#FFE500", place: "Technologielaan, Mechelen", place2: "Mechelen", why: "A day out for the family, half an hour away" },
    yas: { brand: "Walibi Belgium", brandColor: "#E30613", place2: "Wavre", why: "A day out for four, half an hour away" },
    wbworld: { brand: "Pairi Daiza", brandColor: "#B08A3E", place2: "Brugelette, Hainaut", why: "Animals and gardens, four tickets in one booking" },
    cocacolaarena: { brand: "ING Arena", brandColor: "#FF6200", place2: "Heysel, Brussels" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Sunparks", brandColor: "#0072BC", place2: "De Haan, Belgian coast", why: "Aquafun pool passes come with the cottage" },
    ritzrak: { brand: "Corinthia Grand Hotel Astoria", brandColor: "#1C1C1C", place2: "Corinthia Brussels, Rue Royale", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Takeaway.com", logo: "ld:takeaway.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "brusselsairlines_be", kind: "air", regions: ["be"], name: "Brussels Airlines Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:brusselsairlines.com", color: "#FFFFFF", fg: "#002A5C", initial: "B", account: "SN ···· 5127", rate: 0.5 }
]);

// ---- bh.js
window.LUNE_REGIONS.bh = {
  label: "Bahrain", city: "Manama", cur: "BHD", lang: "ar",
  text: {
    "Waitrose": "Alosra", "Dubai Mall": "City Centre Bahrain", "Mall of the Emirates": "Seef Mall", "noon Food": "Talabat", "noon.com": "dukakeen.com",
    "noon": "Dukakeen", "Careem": "Uber", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "megamart.bh",
    "Spinneys": "Megamart", "Carrefour": "LuLu", "VOX Cinemas": "Cineco", "VOX": "Cineco", "Etihad Guest Miles": "Falconflyer miles", "Etihad Guest": "Falconflyer",
    "etihad.com": "gulfair.com", "Etihad": "Gulf Air", "Talabat": "Talabat", "KidZania": "Toys\"R\"Us", "OliOli": "The Lost Paradise of Dilmun", "Yas Waterworld": "The Lost Paradise of Dilmun",
    "Warner Bros. World": "The Lost Paradise of Dilmun", "Coca-Cola Arena": "Bahrain International Circuit", "Atlantis The Palm": "Jumeirah Gulf of Bahrain",
    "Atlantis": "Jumeirah Gulf of Bahrain", "Aquaventure": "the beach club", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Durrat Al Bahrain", "Abu Dhabi": "Muharraq",
    "Dubai": "Manama", "Palm Jumeirah": "Sakhir", "Yas Island": "Sakhir", "Al Quoz": "Seef", "City Walk": "Sakhir", "Financial Centre": "Seef",
    "Grand Atrium": "Seef", "Al Barsha": "Seef", "GOLD, THEATRE by Rhodes and IMAX": "IMAX and THEATRE",
    "Qatar Privilege Club": "Falconflyer", "flydubai OPEN": "Falconflyer", "flydubai": "Gulf Air", "summer heat": "summer heat", "Wizz Air Abu Dhabi": "Gulf Air",
    "وايتروز": "الأسرة", "سبينس": "ميغا مارت", "دبي مول": "سيتي سنتر البحرين", "مول الإمارات": "مجمع السيف", "دبي": "المنامة", "كارفور": "لولو", "فوكس": "سينيكو",
    "ديليفرو": "طلبات", "الاتحاد للطيران": "طيران الخليج", "أتلانتس": "جميرا خليج البحرين", "كريم": "أوبر"
  },
  logos: { waitrose: "ld:alosraonline.com", noon: "ld:dukakeen.com", careem: "uber", deliveroo: "ld:talabat.com",
    spinneys: "ld:megamart.bh", carrefour: "ld:luluhypermarket.com", vox: "ld:cineco.net", etihad: "ld:gulfair.com", kidzania: "ld:toysrus.com.sa",
    yas: "ld:lpodwaterpark.com", cocacolaarena: "ld:bahraingp.com", atlantis: "ld:jumeirah.com", ritzrak: "ld:fourseasons.com",
    talabat: "ld:talabat.com", qatar: "ld:gulfair.com", flydubai: "ld:gulfair.com", wizz: "ld:gulfair.com" },
  offers: {
    waitrose: { brand: "Alosra", brandColor: "#4FB043", place: "Al Raya Mall, Juffair", place2: "Juffair" },
    noon: { brand: "Dukakeen", brandColor: "#1C1C1C", excludes: ["Gift cards and wallet top-ups", "Orders cancelled or returned"] },
    amazon: { hide: true },
    careem: { brand: "Uber" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    spinneys: { brand: "Megamart", brandColor: "#E5202E", place: "All Manama branches" },
    carrefour: { brand: "LuLu Hypermarket", brandColor: "#E31E24", place: "Dana Mall, Manama", place2: "Dana Mall", qualifies: ["In-store spend of AED 400 or more", "Dana Mall branch only"] },
    vox: { brand: "Cineco", brandColor: "#1F4F8F", place: "City Centre Bahrain, Seef", place2: "City Centre Bahrain" },
    shakeshack: { place: "City Centre Bahrain, Seef", place2: "City Centre Bahrain", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "City Centre Bahrain branch only"] },
    emirates: { brand: "Gulf Air", brandColor: "#A3875E" },
    wizz: { hide: true },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0062A8", place: "Seef, Manama", place2: "Seef", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "The Lost Paradise of Dilmun", brandColor: "#2E86C8", place2: "Sakhir", why: "A water park day for four, 30 minutes away", whyFamily: "A water park day for four, 30 minutes away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Bahrain International Circuit", brandColor: "#E01A22", place2: "Sakhir" },
    atlantis: { brand: "Jumeirah Gulf of Bahrain", brandColor: "#1C1C1C", place2: "Sakhir", why: "Beach, pools and a kids' club come with the room", whyFamily: "Beach, pools and a kids' club come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Hotel Bahrain Bay", why: "A weekend staycation in town", whyFamily: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "gulfair_bh", kind: "air", regions: ["bh"], name: "Gulf Air Falconflyer", unit: "Falconflyer miles", unitOne: "Falconflyer mile", logo: "ld:gulfair.com", color: "#FFFFFF", fg: "#A3875E", initial: "G", account: "GF ···· 2207", rate: 0.5 }
]);

// ---- br.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.br = {
  label: "Brazil", city: "São Paulo", cur: "BRL", lang: "pt",
  text: {
    "Waitrose": "Pão de Açúcar", "Dubai Mall": "Shopping Iguatemi", "Mall of the Emirates": "Shopping Eldorado", "noon Food": "Mercado Livre", "noon.com": "mercadolivre.com.br",
    "noon": "Mercado Livre", "Justlife": "Parafuzo", "Careem": "Uber", "Deliveroo Plus": "Clube iFood", "Deliveroo": "iFood", "spinneys.com": "mambo.com.br",
    "Spinneys": "Mambo", "VOX Cinemas": "Cinemark", "VOX": "Cinemark", "Shake Shack": "Bob's", "Etihad Guest Miles": "Azul Fidelidade points", "Etihad Guest": "Azul Fidelidade",
    "etihad.com": "voeazul.com.br", "Etihad": "Azul", "Talabat": "Rappi", "KidZania": "Ri Happy", "Yas Waterworld": "Hopi Hari",
    "Warner Bros. World": "Zoo São Paulo", "Coca-Cola Arena": "Allianz Parque", "Platinumlist": "Sympla", "Atlantis The Palm": "Beach Park",
    "Atlantis": "Beach Park", "Aquaventure": "the water park", "Ritz-Carlton": "Fasano", "Ras Al Khaimah": "Campos do Jordão", "Abu Dhabi": "São Paulo",
    "Dubai": "São Paulo", "Palm Jumeirah": "Fortaleza", "Yas Island": "Vinhedo", "Al Quoz": "Vila Madalena", "City Walk": "Jardins", "Financial Centre": "Avenida Paulista",
    "Grand Atrium": "Shopping Iguatemi", "Al Barsha": "Moema", "GOLD, THEATRE by Rhodes and IMAX": "Prime, XD and IMAX",
    "Qatar Privilege Club": "LATAM Pass", "flydubai OPEN": "Smiles", "summer heat": "summer rain", "Wizz Air Abu Dhabi": "GOL"
  },
  logos: { waitrose: "ld:paodeacucar.com", noon: "ld:mercadolivre.com.br", justmop: "ld:parafuzo.com", careem: "uber", deliveroo: "ld:ifood.com.br",
    spinneys: "ld:mambo.com.br", carrefour: "ld:carrefour.com.br", vox: "ld:cinemark.com.br", shakeshack: "ld:bobs.com.br", etihad: "ld:voeazul.com.br", kidzania: "ld:rihappy.com.br",
    yas: "ld:hopihari.com.br", wbworld: "ld:zoologico.com.br", cocacolaarena: "ld:allianzparque.com.br", platinumlist: "ld:sympla.com.br",
    atlantis: "ld:beachpark.com.br", ritzrak: "ld:fasano.com.br", talabat: "ld:rappi.com.br", qatar: "ld:latamairlines.com", flydubai: "ld:smiles.com.br", wizz: "ld:voegol.com.br" },
  offers: {
    waitrose: { brand: "Pão de Açúcar", brandColor: "#0E9F2E", place: "Shopping Iguatemi, São Paulo", place2: "Shopping Iguatemi" },
    noon: { brand: "Mercado Livre", brandColor: "#FFE600" },
    justmop: { brand: "Parafuzo", brandColor: "#2DB58C", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "iFood", brandColor: "#EA1D2C" },
    spinneys: { brand: "Mambo", brandColor: "#E3122A", place: "All São Paulo stores" },
    carrefour: { brand: "Carrefour", brandColor: "#0E4C9A", place: "Carrefour Hipermercado Pinheiros, São Paulo", place2: "Pinheiros" },
    vox: { brand: "Cinemark", brandColor: "#D7001C", place: "Cinemark Shopping Eldorado, São Paulo", place2: "Shopping Eldorado" },
    shakeshack: { brand: "Bob's", brandColor: "#C8102E", place: "Avenida Paulista, São Paulo", place2: "Avenida Paulista", qualifies: ["Dine-in, takeaway and Bob's app orders", "Avenida Paulista branch only"] },
    emirates: { brand: "Azul", brandColor: "#0E5CB4" },
    wizz: { brand: "GOL" },
    kidzania: { brand: "Ri Happy", brandColor: "#E30613", place: "Shopping Eldorado, São Paulo", place2: "Shopping Eldorado", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Hopi Hari", brandColor: "#0057B8", place2: "Vinhedo, São Paulo state", why: "A day of rides for four, an hour away" },
    wbworld: { brand: "Zoo São Paulo", brandColor: "#97BC1E", place2: "Água Funda, São Paulo", why: "A day with the animals, four tickets in one booking" },
    cocacolaarena: { brand: "Allianz Parque", brandColor: "#003781", place2: "Perdizes, São Paulo" },
    platinumlist: { brand: "Sympla", brandColor: "#0097FF" },
    atlantis: { brand: "Beach Park", brandColor: "#E5352B", place2: "Aquiraz, Fortaleza", why: "Water park passes come with the room" },
    ritzrak: { brand: "Fasano", brandColor: "#6B5444", place2: "Hotel Fasano São Paulo, Jardins", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "iFood", logo: "ld:ifood.com.br" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "azul_br", kind: "air", regions: ["br"], name: "Azul Fidelidade", unit: "Azul Fidelidade points", unitOne: "Azul Fidelidade point", logo: "ld:voeazul.com.br", color: "#FFFFFF", fg: "#0E5CB4", initial: "A", account: "AD ···· 6182", rate: 0.5 },
  { id: "latam_br", kind: "air", regions: ["br"], name: "LATAM Pass", unit: "LATAM Pass points", unitOne: "LATAM Pass point", logo: "ld:latamairlines.com", color: "#FFFFFF", fg: "#1B0088", initial: "L", account: null, rate: 0.5 }
]);

// ---- ca.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.ca = {
  label: "Canada", city: "Toronto", cur: "CAD", lang: "en",
  text: {
    "Waitrose": "Longo's", "Dubai Mall": "CF Toronto Eaton Centre", "Mall of the Emirates": "Yorkdale", "noon Food": "Walmart+", "noon.com": "walmart.ca",
    "noon": "Walmart", "Justlife": "Jiffy", "Careem": "Uber", "Deliveroo Plus": "Skip+", "Deliveroo": "SkipTheDishes", "spinneys.com": "loblaws.ca",
    "Spinneys": "Loblaws", "Carrefour": "Canadian Tire", "VOX Cinemas": "Cineplex", "VOX": "Cineplex", "Etihad Guest Miles": "Aeroplan points", "Etihad Guest": "Aeroplan",
    "etihad.com": "aircanada.com", "Etihad": "Air Canada", "Talabat": "DoorDash", "KidZania": "Mastermind Toys", "OliOli": "Royal Ontario Museum", "Yas Waterworld": "Clifton Hill",
    "Warner Bros. World": "Ripley's Aquarium of Canada", "Coca-Cola Arena": "Scotiabank Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Great Wolf Lodge",
    "Atlantis": "Great Wolf Lodge", "Aquaventure": "the indoor water park", "Ritz-Carlton": "Fairmont", "Ras Al Khaimah": "Muskoka", "Abu Dhabi": "Toronto",
    "Dubai": "Toronto", "Palm Jumeirah": "Niagara Falls", "Yas Island": "Niagara Falls", "Al Quoz": "Liberty Village", "City Walk": "Yorkville", "Financial Centre": "the Financial District",
    "Grand Atrium": "Yonge-Dundas", "Al Barsha": "North York", "GOLD, THEATRE by Rhodes and IMAX": "VIP, UltraAVX and IMAX",
    "Qatar Privilege Club": "WestJet Rewards", "flydubai OPEN": "Porter VIPorter", "summer heat": "winter cold", "Wizz Air Abu Dhabi": "Flair Airlines"
  },
  logos: { waitrose: "ld:longos.com", noon: "ld:walmart.ca", justmop: "ld:jiffyondemand.com", careem: "uber", deliveroo: "ld:skipthedishes.com",
    spinneys: "ld:loblaws.ca", carrefour: "ld:canadiantire.ca", vox: "ld:cineplex.com", etihad: "ld:aircanada.com", kidzania: "ld:mastermindtoys.com",
    olioli: "ld:rom.on.ca", yas: "ld:cliftonhill.com", wbworld: "ld:ripleyaquariums.com", cocacolaarena: "ld:scotiabankarena.com", platinumlist: "ld:ticketmaster.ca",
    atlantis: "ld:greatwolflodge.com", ritzrak: "ld:fairmont.com", talabat: "ld:doordash.com", qatar: "ld:westjet.com", flydubai: "ld:flyporter.com", wizz: "ld:flyflair.com" },
  offers: {
    waitrose: { brand: "Longo's", brandColor: "#D7282F", place: "Maple Leaf Square, Downtown Toronto", place2: "Maple Leaf Square" },
    noon: { brand: "Walmart", brandColor: "#0071CE" },
    justmop: { brand: "Jiffy", brandColor: "#00A9E0", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "SkipTheDishes", brandColor: "#FF8000" },
    spinneys: { brand: "Loblaws", brandColor: "#E2231A", place: "All Toronto stores" },
    carrefour: { brand: "Canadian Tire", brandColor: "#D71920", place: "Yonge and Eglinton, Toronto", place2: "Yonge and Eglinton" },
    vox: { brand: "Cineplex", brandColor: "#1C1C1C", place: "Cineplex Cinemas Yonge-Dundas and VIP, Downtown Toronto", place2: "Yonge-Dundas" },
    shakeshack: { place: "Yonge-Dundas, Downtown Toronto", place2: "Yonge-Dundas", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Yonge-Dundas branch only"] },
    emirates: { brand: "Air Canada", brandColor: "#D8292F" },
    wizz: { brand: "Flair Airlines" },
    kidzania: { brand: "Mastermind Toys", brandColor: "#2E5DAA", place: "Yorkdale, Toronto", place2: "Yorkdale", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Royal Ontario Museum", brandColor: "#000000", place: "100 Queen's Park, Toronto", place2: "Queen's Park", why: "A day out for the family, in the middle of town" },
    yas: { brand: "Clifton Hill", brandColor: "#0057A8", place2: "Niagara Falls, Ontario", why: "A day of rides for four, ninety minutes away" },
    wbworld: { brand: "Ripley's Aquarium of Canada", brandColor: "#E5175F", place2: "Downtown Toronto", why: "Sharks, rays and jellyfish, four tickets in one booking" },
    cocacolaarena: { brand: "Scotiabank Arena", brandColor: "#EC111A", place2: "Downtown Toronto" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Great Wolf Lodge", brandColor: "#1B3A57", place2: "Niagara Falls, Ontario", why: "Indoor water park passes come with the room" },
    ritzrak: { brand: "Fairmont", brandColor: "#1C1C1C", place2: "Fairmont Royal York", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "DoorDash", logo: "ld:doordash.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "aircanada_ca", kind: "air", regions: ["ca"], name: "Air Canada Aeroplan", unit: "Aeroplan points", unitOne: "Aeroplan point", logo: "ld:aircanada.com", color: "#FFFFFF", fg: "#D8292F", initial: "A", account: "AC ···· 3816", rate: 0.5 },
  { id: "westjet_ca", kind: "air", regions: ["ca"], name: "WestJet Rewards", unit: "WestJet points", unitOne: "WestJet point", logo: "ld:westjet.com", color: "#FFFFFF", fg: "#00A1AF", initial: "W", account: null, rate: 0.5 }
]);

// ---- ch.js
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

// ---- de.js
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

// ---- eg.js
window.LUNE_REGIONS.eg = {
  label: "Egypt", city: "Cairo", cur: "EGP", lang: "ar",
  text: {
    "Waitrose": "Gourmet", "Dubai Mall": "Cairo Festival City", "Mall of the Emirates": "Mall of Egypt", "noon Food": "Jumia", "noon.com": "jumia.com.eg",
    "noon": "Jumia", "Justlife": "Filkhedma", "Careem": "Uber", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "seoudisupermarket.com",
    "Spinneys": "Seoudi", "Carrefour": "Hyperone", "VOX Cinemas": "Scene Cinemas", "VOX": "Scene", "Shake Shack": "Buffalo Burger", "Etihad Guest Miles": "EgyptAir Plus miles", "Etihad Guest": "EgyptAir Plus",
    "etihad.com": "egyptair.com", "Etihad": "EgyptAir", "KidZania": "Toys\"R\"Us", "Yas Waterworld": "Pickalbatros Aqua Park",
    "Warner Bros. World": "Grand Egyptian Museum", "Coca-Cola Arena": "Cairo Opera House", "Platinumlist": "Ticketsmarche", "Atlantis The Palm": "Jaz Aquamarine",
    "Atlantis": "Jaz", "Aquaventure": "the aqua park", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Ain Sokhna", "Abu Dhabi": "Alexandria",
    "Dubai": "Cairo", "Palm Jumeirah": "Hurghada", "Yas Island": "Sharm El Sheikh", "Al Quoz": "Maadi", "City Walk": "Zamalek", "Financial Centre": "New Cairo",
    "Grand Atrium": "Cairo Festival City", "Al Barsha": "Heliopolis", "GOLD, THEATRE by Rhodes and IMAX": "VIP and IMAX", "Wizz Air Abu Dhabi": "Air Cairo",
    "وايتروز": "جورميه", "دبي مول": "كايرو فستيفال سيتي", "مول الإمارات": "مول مصر", "دبي": "القاهرة", "كارفور": "هايبر وان", "فوكس": "سين سينماز",
    "شيك شاك": "بافلو برجر", "ديليفرو": "طلبات", "الاتحاد للطيران": "مصر للطيران", "أتلانتس": "جاز"
  },
  logos: { waitrose: "ld:gourmetegypt.com", spinneys: "ld:seoudisupermarket.com", carrefour: "ld:hyperone.com.eg", noon: "ld:jumia.com.eg", justmop: "ld:filkhedma.com",
    careem: "uber", deliveroo: "ld:talabat.com", talabat: "ld:talabat.com", vox: "ld:scenecinemas.com", shakeshack: "ld:buffaloburger.com", etihad: "ld:egyptair.com",
    wizz: "ld:aircairo.com", kidzania: "ld:toysrus.com", yas: "ld:pickalbatros.com", wbworld: "ld:gem.eg", cocacolaarena: "ld:cairoopera.org",
    platinumlist: "ld:ticketsmarche.com", atlantis: "ld:jazhotels.com", ritzrak: "ld:fourseasons.com" },
  offers: {
    waitrose: { brand: "Gourmet", brandColor: "#1A1A1A", place: "Zamalek, Cairo", place2: "Zamalek" },
    spinneys: { brand: "Seoudi", brandColor: "#00563F", place: "All Cairo branches" },
    carrefour: { brand: "Hyperone", brandColor: "#1B3F94", place: "Sheikh Zayed, Giza", place2: "Sheikh Zayed" },
    noon: { brand: "Jumia", brandColor: "#F68B1E" },
    justmop: { brand: "Filkhedma", brandColor: "#1DB45A", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    vox: { brand: "Scene Cinemas", brandColor: "#111111", place: "District 5, New Cairo", place2: "District 5" },
    shakeshack: { brand: "Buffalo Burger", brandColor: "#F47B20", place: "Zamalek, Cairo", place2: "Zamalek", qualifies: ["Dine-in, takeaway and Buffalo Burger app orders", "Zamalek branch only"] },
    emirates: { brand: "EgyptAir", brandColor: "#0D3B7A" },
    wizz: { brand: "Air Cairo" },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "Cairo Festival City, New Cairo", place2: "Cairo Festival City", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Pickalbatros Aqua Park", brandColor: "#1E2A4A", place2: "Sharm El Sheikh", why: "A long weekend for four, a short flight away" },
    wbworld: { brand: "Grand Egyptian Museum", brandColor: "#E8731A", place2: "Giza", why: "The Tutankhamun galleries, four tickets in one booking" },
    cocacolaarena: { brand: "Cairo Opera House", brandColor: "#7A0A0A", place2: "Zamalek, Cairo" },
    platinumlist: { brand: "Ticketsmarche", brandColor: "#FFC20E" },
    atlantis: { brand: "Jaz Hotel Group", brandColor: "#4A3B3B", place2: "Makadi Bay, Hurghada", why: "Aqua park passes come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Cairo at Nile Plaza", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "egyptair_eg", kind: "air", regions: ["eg"], name: "EgyptAir Plus", unit: "EgyptAir Plus miles", unitOne: "EgyptAir Plus mile", logo: "ld:egyptair.com", color: "#FFFFFF", fg: "#0D3B7A", initial: "E", account: "MS ···· 4410", rate: 0.5 }
]);

// ---- es.js
window.LUNE_REGIONS.es = {
  label: "Spain", city: "Madrid", cur: "EUR", lang: "es",
  text: {
    "Waitrose": "El Corte Inglés", "Shake Shack": "Goiko", "Dubai Mall": "Xanadú", "Mall of the Emirates": "La Vaguada", "noon Food": "Uber Eats", "noon.com": "pccomponentes.com",
    "noon": "PcComponentes", "Justlife": "TaskRabbit", "Careem": "Cabify", "Deliveroo Plus": "Glovo Prime", "Deliveroo": "Glovo", "spinneys.com": "mercadona.es",
    "Spinneys": "Mercadona", "Carrefour": "Alcampo", "VOX Cinemas": "Cinesa", "VOX": "Cinesa", "Etihad Guest Miles": "Avios", "Etihad Guest": "Iberia Club",
    "etihad.com": "iberia.com", "Etihad": "Iberia", "Talabat": "Just Eat", "KidZania": "Toy Planet", "OliOli": "Planetario de Madrid", "Yas Waterworld": "Parque de Atracciones de Madrid",
    "Warner Bros. World": "Faunia", "Coca-Cola Arena": "Movistar Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "PortAventura World",
    "Atlantis": "PortAventura", "Aquaventure": "Caribe Aquatic Park", "Ritz-Carlton": "Mandarin Oriental", "Ras Al Khaimah": "the Costa Brava", "Abu Dhabi": "Madrid",
    "Dubai": "Madrid", "Palm Jumeirah": "the Costa Dorada", "Yas Island": "Casa de Campo", "Al Quoz": "Lavapiés", "City Walk": "Malasaña", "Financial Centre": "Azca",
    "Grand Atrium": "Puerta del Sol", "Al Barsha": "Chamberí", "GOLD, THEATRE by Rhodes and IMAX": "Cinesa LUXE and IMAX",
    "Qatar Privilege Club": "Air Europa SUMA", "Wizz Air Abu Dhabi": "Iberia Express"
  },
  logos: { waitrose: "ld:elcorteingles.es", noon: "ld:pccomponentes.com", justmop: "ld:taskrabbit.es", careem: "ld:cabify.es", deliveroo: "ld:glovoapp.com",
    spinneys: "ld:mercadona.es", carrefour: "ld:alcampo.es", vox: "ld:cinesa.es", shakeshack: "ld:goiko.com", etihad: "ld:iberia.com",
    kidzania: "ld:toyplanet.com", olioli: "ld:planetmad.es", yas: "ld:parquedeatracciones.es", wbworld: "ld:faunia.es", cocacolaarena: "ld:movistararena.es",
    platinumlist: "ld:ticketmaster.es", atlantis: "ld:portaventuraworld.com", ritzrak: "ld:mandarinoriental.com", talabat: "ld:just-eat.es", qatar: "ld:aireuropa.com", wizz: "ld:iberiaexpress.com" },
  offers: {
    waitrose: { brand: "El Corte Inglés", brandColor: "#00843D", place: "El Corte Inglés Castellana, Madrid", place2: "Castellana" },
    noon: { brand: "PcComponentes", brandColor: "#FF6000" },
    justmop: { brand: "TaskRabbit", brandColor: "#1A7258", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Cabify", brandColor: "#7145D6" },
    namshi: { brand: "Glovo", brandColor: "#FFC244" },
    spinneys: { brand: "Mercadona", brandColor: "#009B3A", place: "All Madrid stores" },
    carrefour: { brand: "Alcampo", brandColor: "#E2001A", place: "Centro Comercial La Vaguada, Barrio del Pilar", place2: "La Vaguada" },
    vox: { brand: "Cinesa", brandColor: "#00477F", place: "Cinesa Príncipe Pío, Madrid", place2: "Príncipe Pío" },
    shakeshack: { brand: "Goiko", brandColor: "#000000", place: "Chamberí, Madrid", place2: "Chamberí" },
    emirates: { brand: "Iberia", brandColor: "#D7192D" },
    wizz: { brand: "Iberia Express" },
    kidzania: { brand: "Toy Planet", brandColor: "#E30613", place: "All Madrid stores", place2: "Madrid", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Planetario de Madrid", brandColor: "#1D4F91", place: "Parque Enrique Tierno Galván, Arganzuela", place2: "Arganzuela", why: "Shows under the dome, a good family afternoon" },
    yas: { brand: "Parque de Atracciones de Madrid", brandColor: "#0A1A5C", place2: "Casa de Campo, Madrid", why: "A day out for four, twenty minutes away" },
    wbworld: { brand: "Faunia", brandColor: "#1E3A8A", place2: "Valdebernardo, Madrid", why: "Animals, forests and an ice zone, a day out in town" },
    cocacolaarena: { brand: "Movistar Arena", brandColor: "#019DF4", place2: "Goya, Madrid" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "PortAventura World", brandColor: "#0055A5", place2: "Salou, Costa Dorada", why: "Caribe Aquatic Park passes come with the room" },
    ritzrak: { brand: "Mandarin Oriental Ritz", brandColor: "#1C1C1C", place2: "Mandarin Oriental Ritz, Madrid", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Just Eat", logo: "ld:just-eat.es" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "iberia_es", kind: "air", regions: ["es"], name: "Iberia Club", unit: "Avios", unitOne: "Avios", logo: "ld:iberia.com", color: "#FFFFFF", fg: "#D7192D", initial: "I", account: "IB ···· 5207", rate: 0.5 },
  { id: "aireuropa_es", kind: "air", regions: ["es"], name: "Air Europa SUMA", unit: "SUMA miles", unitOne: "SUMA mile", logo: "ld:aireuropa.com", color: "#FFFFFF", fg: "#0071BC", initial: "A", account: null, rate: 0.5 }
]);

// ---- fr.js
window.LUNE_REGIONS.fr = {
  label: "France", city: "Paris", cur: "EUR", lang: "fr",
  text: {
    "Waitrose": "La Grande Épicerie de Paris", "Shake Shack": "Big Fernand", "Dubai Mall": "Forum des Halles", "Mall of the Emirates": "Beaugrenelle", "noon Food": "Cdiscount à volonté", "noon.com": "cdiscount.com",
    "noon": "Cdiscount", "Justlife": "Wecasa", "Careem": "Uber", "spinneys.com": "franprix.fr",
    "Spinneys": "Franprix", "Carrefour": "Auchan", "VOX Cinemas": "Pathé", "VOX": "Pathé", "Etihad Guest Miles": "Flying Blue Miles", "Etihad Guest": "Flying Blue",
    "etihad.com": "airfrance.fr", "Etihad": "Air France", "Talabat": "Uber Eats", "KidZania": "JouéClub", "OliOli": "Cité des sciences", "Yas Waterworld": "Disneyland Paris",
    "Warner Bros. World": "Parc Astérix", "Coca-Cola Arena": "Accor Arena", "Platinumlist": "Fnac Spectacles", "Atlantis The Palm": "Center Parcs",
    "Atlantis": "Center Parcs", "Aquaventure": "Aqua Mundo", "Ritz-Carlton": "Ritz Paris", "Ras Al Khaimah": "Normandy", "Abu Dhabi": "Paris",
    "Dubai": "Paris", "Palm Jumeirah": "Les Bois-Francs", "Yas Island": "Marne-la-Vallée", "Al Quoz": "Belleville", "City Walk": "Le Marais", "Financial Centre": "La Défense",
    "Grand Atrium": "Châtelet", "Al Barsha": "the 16th arrondissement", "GOLD, THEATRE by Rhodes and IMAX": "Pathé Premium and IMAX",
    "summer heat": "grey days", "Wizz Air Abu Dhabi": "Transavia"
  },
  logos: { waitrose: "ld:lagrandeepicerie.com", noon: "ld:cdiscount.com", justmop: "ld:wecasa.fr", careem: "uber", deliveroo: "ld:deliveroo.fr",
    spinneys: "ld:franprix.fr", carrefour: "ld:auchan.fr", vox: "ld:pathe.fr", shakeshack: "ld:bigfernand.com", etihad: "ld:airfrance.fr",
    kidzania: "ld:joueclub.fr", olioli: "ld:cite-sciences.fr", yas: "ld:disneylandparis.com", wbworld: "ld:parcasterix.fr", cocacolaarena: "ld:accorarena.com",
    platinumlist: "ld:fnacspectacles.com", atlantis: "ld:centerparcs.de", ritzrak: "ld:ritzparis.com", talabat: "ld:ubereats.com", wizz: "ld:transavia.com" },
  offers: {
    waitrose: { brand: "La Grande Épicerie de Paris", brandColor: "#1A1A1A", place: "Rue de Sèvres, 7th arrondissement", place2: "Rive Gauche" },
    noon: { brand: "Cdiscount", brandColor: "#2F2FE8" },
    justmop: { brand: "Wecasa", brandColor: "#1A1A1A", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Deliveroo", brandColor: "#00CCBC" },
    spinneys: { brand: "Franprix", brandColor: "#F26722", place: "All Paris stores" },
    carrefour: { brand: "Auchan", brandColor: "#E2001A", place: "Westfield Les 4 Temps, La Défense", place2: "La Défense" },
    vox: { brand: "Pathé", brandColor: "#FFC20E", place: "Pathé Palace, Boulevard des Capucines", place2: "Opéra" },
    shakeshack: { brand: "Big Fernand", brandColor: "#1A1A1A", place: "Rue du Faubourg Poissonnière, 9th arrondissement", place2: "Faubourg Poissonnière" },
    emirates: { brand: "Air France", brandColor: "#002157" },
    wizz: { brand: "Transavia" },
    kidzania: { brand: "JouéClub", brandColor: "#E30613", place: "Village JouéClub, Boulevard des Italiens", place2: "Boulevard des Italiens", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Cité des sciences et de l'industrie", brandColor: "#1A1A1A", place: "30 Avenue Corentin Cariou, La Villette", place2: "La Villette", why: "Hands-on science, good for grey days" },
    yas: { brand: "Disneyland Paris", brandColor: "#1A2A6C", place2: "Marne-la-Vallée", why: "A weekend for four, forty minutes by RER" },
    wbworld: { brand: "Parc Astérix", brandColor: "#E30613", place2: "Plailly, Oise", why: "Rides and shows for four, forty minutes north of Paris" },
    cocacolaarena: { brand: "Accor Arena", brandColor: "#0A0A3C", place2: "Bercy, Paris" },
    platinumlist: { brand: "Fnac Spectacles", brandColor: "#E1A400" },
    atlantis: { brand: "Center Parcs", brandColor: "#00594F", place2: "Les Bois-Francs, Normandy", why: "Aqua Mundo pool passes come with the cottage" },
    ritzrak: { brand: "Ritz Paris", brandColor: "#1F2A44", place2: "Place Vendôme, Paris", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Uber Eats", logo: "ld:ubereats.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "airfrance_fr", kind: "air", regions: ["fr"], name: "Air France Flying Blue", unit: "Flying Blue Miles", unitOne: "Flying Blue Mile", logo: "ld:airfrance.fr", color: "#FFFFFF", fg: "#002157", initial: "A", account: "AF ···· 3092", rate: 0.5 }
]);

// ---- gb.js
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

// ---- hk.js
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

// ---- id.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.id = {
  label: "Indonesia", city: "Jakarta", cur: "IDR", lang: "en",
  text: {
    "Waitrose": "Ranch Market", "Dubai Mall": "Grand Indonesia", "Mall of the Emirates": "Pondok Indah Mall", "noon Food": "GoFood", "noon.com": "tokopedia.com",
    "noon": "Tokopedia", "Amazon": "Shopee", "Justlife": "KliknClean", "Careem": "Gojek", "Deliveroo Plus": "GrabUnlimited", "Deliveroo": "GrabFood", "spinneys.com": "superindo.co.id",
    "Spinneys": "Superindo", "Carrefour": "Transmart", "VOX Cinemas": "Cinema XXI", "VOX": "XXI", "Shake Shack": "Burgreens", "Etihad Guest Miles": "GarudaMiles miles", "Etihad Guest": "GarudaMiles",
    "etihad.com": "garuda-indonesia.com", "Etihad": "Garuda Indonesia", "Talabat": "GoFood", "KidZania": "Toys Kingdom", "Yas Waterworld": "Ancol Dreamland",
    "Warner Bros. World": "Taman Safari", "Coca-Cola Arena": "Gelora Bung Karno", "Platinumlist": "KiosTix", "Atlantis The Palm": "AYANA Bali",
    "Atlantis": "AYANA", "Aquaventure": "the pools", "Ritz-Carlton": "Kempinski", "Ras Al Khaimah": "Bali", "Abu Dhabi": "Jakarta",
    "Dubai": "Jakarta", "Palm Jumeirah": "Jimbaran", "Yas Island": "Ancol", "Al Quoz": "Kemang", "City Walk": "Senopati", "Financial Centre": "Sudirman",
    "Grand Atrium": "Grand Indonesia", "Al Barsha": "Kebayoran Baru", "GOLD, THEATRE by Rhodes and IMAX": "The Premiere and IMAX",
    "flydubai OPEN": "Lion Air", "summer heat": "rainy season", "Wizz Air Abu Dhabi": "Lion Air"
  },
  logos: { waitrose: "ld:ranchmarket.co.id", noon: "ld:tokopedia.com", amazon: "ld:shopee.co.id", justmop: "ld:kliknclean.com", careem: "ld:gojek.com", deliveroo: "ld:grab.com",
    spinneys: "ld:superindo.co.id", carrefour: "ld:transmart.co.id", vox: "ld:21cineplex.com", shakeshack: "ld:burgreens.com", etihad: "ld:garuda-indonesia.com", kidzania: "ld:toyskingdom.co.id",
    yas: "ld:ancol.com", wbworld: "ld:tamansafari.com", cocacolaarena: "ld:gbk.id", platinumlist: "ld:kiostix.com",
    atlantis: "ld:ayana.com", ritzrak: "ld:kempinski.com", talabat: "ld:gofood.co.id", flydubai: "ld:lionair.co.id", wizz: "ld:lionair.co.id" },
  offers: {
    waitrose: { brand: "Ranch Market", brandColor: "#C8102E", place: "Grand Indonesia, Central Jakarta", place2: "Grand Indonesia" },
    noon: { brand: "Tokopedia", brandColor: "#03AC0E" },
    amazon: { brand: "Shopee", brandColor: "#EE4D2D", logo: "ld:shopee.co.id" },
    justmop: { brand: "KliknClean", brandColor: "#3FB8C9", why: "Cleaning runs AED 500 a month" },
    careem: { brand: "Gojek", brandColor: "#00AA13" },
    namshi: { brand: "GrabFood", brandColor: "#00B14F" },
    spinneys: { brand: "Superindo", brandColor: "#E4002B", place: "All Jakarta stores" },
    carrefour: { brand: "Transmart", brandColor: "#E30613", place: "Cilandak, South Jakarta", place2: "Cilandak" },
    vox: { brand: "Cinema XXI", brandColor: "#5A0F2E", place: "Plaza Senayan XXI, Senayan", place2: "Plaza Senayan" },
    shakeshack: { brand: "Burgreens", brandColor: "#1E5631", place: "Menteng, Central Jakarta", place2: "Menteng", qualifies: ["Dine-in, takeaway and delivery orders", "Menteng branch only"] },
    emirates: { brand: "Garuda Indonesia", brandColor: "#0B2C5F" },
    wizz: { brand: "Lion Air" },
    kidzania: { brand: "Toys Kingdom", brandColor: "#E94E1B", place: "Grand Indonesia, Central Jakarta", place2: "Grand Indonesia", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Ancol Dreamland", brandColor: "#0033A0", place2: "Ancol, North Jakarta", why: "A theme park day for four, half an hour away" },
    wbworld: { brand: "Taman Safari", brandColor: "#1E6B3A", place2: "Bogor, West Java", why: "Safari drive and animal shows, four tickets in one booking" },
    cocacolaarena: { brand: "Gelora Bung Karno", brandColor: "#D71920", place2: "Senayan, Jakarta" },
    platinumlist: { brand: "KiosTix", brandColor: "#2E3192" },
    atlantis: { brand: "AYANA", brandColor: "#1BA0D8", place2: "AYANA Bali, Jimbaran", why: "Pools and beach club access come with the room" },
    ritzrak: { brand: "Kempinski", brandColor: "#0B1A33", place2: "Hotel Indonesia Kempinski Jakarta", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "GoFood", logo: "ld:gofood.co.id" }, amazon: { name: "Shopee", logo: "ld:shopee.co.id" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "garuda_id", kind: "air", regions: ["id"], name: "GarudaMiles", unit: "GarudaMiles miles", unitOne: "GarudaMiles mile", logo: "ld:garuda-indonesia.com", color: "#FFFFFF", fg: "#0B2C5F", initial: "G", account: "GA ···· 4410", rate: 0.5 }
]);

// ---- ie.js
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

// ---- in.js
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

// ---- is.js
window.LUNE_REGIONS.is = {
  label: "Iceland", city: "Reykjavik", cur: "ISK", lang: "en",
  text: {
    "Waitrose": "Hagkaup", "Dubai Mall": "Kringlan", "Mall of the Emirates": "Skeifan", "noon Food": "Aha", "noon.com": "elko.is",
    "noon": "Elko", "Amazon": "BYKO", "amazon.ae and amazon.com": "byko.is and BYKO stores", "Justlife": "Heimilisþrif", "Careem": "Hopp", "Uber": "Hopp",
    "Deliveroo Plus": "Wolt+", "Deliveroo": "Wolt", "spinneys.com": "kronan.is", "Spinneys": "Krónan", "Carrefour": "Bónus",
    "VOX Cinemas": "Sambíóin", "VOX": "Sambíóin", "Starbucks": "Te & Kaffi", "Shake Shack": "Metro",
    "Etihad Guest Miles": "Saga Points", "Etihad Guest": "Icelandair Saga Club", "etihad.com": "icelandair.com", "Etihad": "Icelandair",
    "Talabat": "Aha", "KidZania": "Spilavinir", "Yas Waterworld": "Blue Lagoon", "Warner Bros. World": "Whales of Iceland",
    "Coca-Cola Arena": "Harpa", "Platinumlist": "tix.is", "Atlantis The Palm": "Blue Lagoon", "Atlantis": "Blue Lagoon",
    "Aquaventure": "the lagoon", "Ritz-Carlton": "Hotel Holt", "Ras Al Khaimah": "the South Coast", "Abu Dhabi": "Reykjavik",
    "Dubai": "Reykjavik", "Palm Jumeirah": "the Reykjanes Peninsula", "Yas Island": "Kópavogur", "Al Quoz": "Grandi", "City Walk": "Laugavegur",
    "Financial Centre": "Borgartún", "Grand Atrium": "Hafnartorg", "Al Barsha": "Vesturbær", "GOLD, THEATRE by Rhodes and IMAX": "the VIP hall",
    "Qatar Privilege Club": "SAS EuroBonus", "flydubai OPEN": "Wizz Discount Club", "summer heat": "winter cold", "Wizz Air Abu Dhabi": "Wizz Air"
  },
  logos: { waitrose: "ld:hagkaup.is", noon: "ld:elko.is", amazon: "ld:byko.is", justmop: "ld:heimilisthrif.is", careem: "ld:hopp.bike", uber: "ld:hopp.bike",
    deliveroo: "ld:wolt.com", spinneys: "ld:kronan.is", carrefour: "ld:bonus.is", vox: "ld:sambio.is", starbucks: "ld:teogkaffi.is", shakeshack: "ld:metro.is",
    etihad: "ld:icelandair.com", kidzania: "ld:spilavinir.is", yas: "ld:bluelagoon.is", wbworld: "ld:whalesoficeland.is",
    cocacolaarena: "ld:harpa.is", platinumlist: "ld:tix.is", atlantis: "ld:bluelagoon.is", ritzrak: "ld:holt.is", talabat: "ld:aha.is",
    qatar: "ld:flysas.com", flydubai: "ld:wizzair.com", wizz: "ld:wizzair.com" },
  offers: {
    waitrose: { brand: "Hagkaup", brandColor: "#F47B20", place: "Skeifan, Reykjavik", place2: "Skeifan" },
    noon: { brand: "Elko", brandColor: "#0B1A4A", brandFg: "#FFFFFF" },
    amazon: { brand: "BYKO", brandColor: "#0066B3", logo: "ld:byko.is", qualifies: ["Online orders on byko.is", "Paid with your Ajman Bank card ···· 4417"] },
    justmop: { brand: "Heimilisþrif", brandColor: "#00718A", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Hopp", brandColor: "#14202E" },
    namshi: { brand: "Wolt", brandColor: "#009DE0" },
    talabat: { brand: "Te & Kaffi", brandColor: "#4A3328", logo: "ld:teogkaffi.is", place: "Laugavegur 27, Reykjavik", place2: "Laugavegur" },
    spinneys: { brand: "Krónan", brandColor: "#FFD400", place: "All Reykjavik stores" },
    carrefour: { brand: "Bónus", brandColor: "#FFE500", place: "Holtagarðar, Reykjavik", place2: "Holtagarðar" },
    vox: { brand: "Sambíóin", brandColor: "#4DA8E6", place: "Sambíóin Kringlunni, Kringlan", place2: "Kringlan" },
    shakeshack: { brand: "Metro", brandColor: "#FF8A00", place: "Skeifan, Reykjavik", place2: "Skeifan", qualifies: ["Dine-in and takeaway orders", "Skeifan branch only"] },
    emirates: { brand: "Icelandair", brandColor: "#002D72" },
    wizz: { brand: "Wizz Air", city: "Budapest" },
    kidzania: { brand: "Spilavinir", brandColor: "#B5302A", place: "Suðurlandsbraut 48, Reykjavik", place2: "Suðurlandsbraut", deal: "12% back on games and toys", valueNote: "back on board games, puzzles and toys, up to AED 80 a visit", qualifies: ["Games, puzzles and toys bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Café orders and game nights"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on games and toys." } },
    olioli: { hide: true },
    yas: { brand: "Blue Lagoon", brandColor: "#1B3A5C", place2: "Grindavík, Reykjanes", why: "A family day at the lagoon, under an hour away" },
    wbworld: { brand: "Whales of Iceland", brandColor: "#005EAA", place2: "Grandi, Reykjavik", why: "Life-size whale models, four tickets in one booking" },
    cocacolaarena: { brand: "Harpa", brandColor: "#005CFF", place2: "Austurbakki, Reykjavik" },
    platinumlist: { brand: "tix.is", brandColor: "#111111" },
    atlantis: { brand: "Blue Lagoon", brandColor: "#14284B", place2: "Grindavík, Reykjanes Peninsula", why: "Silica Hotel stays come with lagoon entry" },
    ritzrak: { brand: "Hotel Holt", brandColor: "#0E3B43", place2: "Hotel Holt, Bergstaðastræti", why: "A weekend staycation in town" }
  },
  partners: {
    uber: { name: "Hopp", logo: "ld:hopp.bike", where: "Taxi rides and car sharing in the Hopp app" },
    starbucks: { name: "Te & Kaffi", logo: "ld:teogkaffi.is", where: "Any Te & Kaffi café" },
    amazon: { name: "BYKO", logo: "ld:byko.is", where: "byko.is and BYKO stores" }
  },
  gifts: { talabat: { name: "Aha", logo: "ld:aha.is" }, amazon: { name: "BYKO", logo: "ld:byko.is" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "icelandair_is", kind: "air", regions: ["is"], name: "Icelandair Saga Club", unit: "Saga Points", unitOne: "Saga Point", logo: "ld:icelandair.com", color: "#FFFFFF", fg: "#002D72", initial: "I", account: "IS ···· 2207", rate: 0.5 }
]);

// ---- it.js
window.LUNE_REGIONS.it = {
  label: "Italy", city: "Milan", cur: "EUR", lang: "it",
  text: {
    "Waitrose": "Esselunga", "Shake Shack": "Old Wild West", "Dubai Mall": "CityLife Shopping District", "Mall of the Emirates": "Il Centro Arese", "noon Food": "Deliveroo", "noon.com": "subito.it",
    "noon": "Subito", "Justlife": "ProntoPro", "Careem": "Uber", "Deliveroo Plus": "Glovo Prime", "Deliveroo": "Glovo", "spinneys.com": "conad.it",
    "Spinneys": "Conad", "Carrefour": "Bennet", "VOX Cinemas": "The Space Cinema", "VOX": "The Space", "Etihad Guest Miles": "Volare points", "Etihad Guest": "Volare",
    "etihad.com": "ita-airways.com", "Etihad": "ITA Airways", "Talabat": "Just Eat", "KidZania": "Toys Center", "OliOli": "Museo Scienza", "Yas Waterworld": "Gardaland",
    "Warner Bros. World": "Parco Natura Viva", "Coca-Cola Arena": "San Siro", "Platinumlist": "TicketOne", "Atlantis The Palm": "Bluserena",
    "Atlantis": "Bluserena", "Aquaventure": "the pools and kids' club", "Ritz-Carlton": "Bulgari Hotel", "Ras Al Khaimah": "Lake Como", "Abu Dhabi": "Milan",
    "Dubai": "Milan", "Palm Jumeirah": "Puglia", "Yas Island": "Lake Garda", "Al Quoz": "Isola", "City Walk": "Brera", "Financial Centre": "Porta Nuova",
    "Grand Atrium": "Piazza del Duomo", "Al Barsha": "CityLife", "GOLD, THEATRE by Rhodes and IMAX": "recliner seats and IMAX",
    "summer heat": "foggy winter days", "Wizz Air Abu Dhabi": "Neos"
  },
  logos: { waitrose: "ld:esselunga.it", noon: "ld:subito.it", justmop: "ld:prontopro.it", careem: "uber", deliveroo: "ld:glovoapp.it",
    spinneys: "ld:conad.it", carrefour: "ld:bennet.com", vox: "ld:thespacecinema.it", shakeshack: "ld:oldwildwest.it", etihad: "ld:ita-airways.com",
    kidzania: "ld:toyscenter.it", olioli: "ld:museoscienza.org", yas: "ld:gardaland.it", wbworld: "ld:parconaturaviva.it", cocacolaarena: "ld:sansirostadium.com",
    platinumlist: "ld:ticketone.it", atlantis: "ld:bluserena.it", ritzrak: "ld:bulgarihotels.com", talabat: "ld:justeat.it", wizz: "ld:neosair.it" },
  offers: {
    waitrose: { brand: "Esselunga", brandColor: "#1D3E8A", place: "Viale Piave, Porta Venezia", place2: "Porta Venezia" },
    noon: { brand: "Subito", brandColor: "#F9423A" },
    justmop: { brand: "ProntoPro", brandColor: "#1A6FF0", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Glovo", brandColor: "#FFC244" },
    spinneys: { brand: "Conad", brandColor: "#F18A00", place: "All Milan stores" },
    carrefour: { brand: "Bennet", brandColor: "#E2001A", place: "Milan area hypermarkets", place2: "Milan" },
    vox: { brand: "The Space Cinema", brandColor: "#F07D00", place: "The Space Cinema Odeon, Corso Vittorio Emanuele", place2: "Duomo" },
    shakeshack: { brand: "Old Wild West", brandColor: "#B5121B", place: "All Milan restaurants", place2: "Milan" },
    emirates: { brand: "ITA Airways", brandColor: "#0E6B43" },
    wizz: { brand: "Neos" },
    kidzania: { brand: "Toys Center", brandColor: "#E30613", place: "All Milan stores", place2: "Milan", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Museo Scienza", brandColor: "#00475E", place: "Via San Vittore 21, Sant'Ambrogio", place2: "Sant'Ambrogio", why: "Hands-on science, good for foggy days" },
    yas: { brand: "Gardaland", brandColor: "#0B6FD6", place2: "Castelnuovo del Garda, Lake Garda", why: "A weekend for four, under two hours by car" },
    wbworld: { brand: "Parco Natura Viva", brandColor: "#00594F", place2: "Bussolengo, Verona", why: "A safari park and zoo, four tickets in one booking" },
    cocacolaarena: { brand: "San Siro Stadium", brandColor: "#E8862A", place2: "San Siro, Milan" },
    platinumlist: { brand: "TicketOne", brandColor: "#1E2A6B" },
    atlantis: { brand: "Bluserena", brandColor: "#0057B8", place2: "Puglia", why: "Pool and kids' club passes come with the room" },
    ritzrak: { brand: "Bulgari Hotel", brandColor: "#1C1C1C", place2: "Bulgari Hotel Milano, Brera", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Just Eat", logo: "ld:justeat.it" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "ita_it", kind: "air", regions: ["it"], name: "ITA Airways Volare", unit: "Volare points", unitOne: "Volare point", logo: "ld:ita-airways.com", color: "#FFFFFF", fg: "#0E6B43", initial: "I", account: "AZ ···· 6620", rate: 0.5 }
]);

// ---- jo.js
window.LUNE_REGIONS.jo = {
  label: "Jordan", city: "Amman", cur: "JOD", lang: "ar",
  text: {
    "Waitrose": "Cozmo", "Dubai Mall": "Taj Mall", "Mall of the Emirates": "City Mall", "noon Food": "OpenSooq", "noon.com": "opensooq.com",
    "noon": "OpenSooq", "Justlife": "WashyWash", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "safeway.com.jo",
    "Spinneys": "Safeway", "Carrefour": "Leaders Center", "VOX Cinemas": "Taj Cinemas", "VOX": "Taj", "Shake Shack": "Firefly Burger", "Etihad Guest Miles": "Royal Club points", "Etihad Guest": "Royal Club",
    "etihad.com": "rj.com", "Etihad": "Royal Jordanian", "KidZania": "Hamleys", "OliOli": "The Children's Museum", "Yas Waterworld": "Petra",
    "Coca-Cola Arena": "Tzkrti", "Atlantis The Palm": "Kempinski Ishtar Dead Sea",
    "Atlantis": "Kempinski", "Aquaventure": "the pools", "Ritz-Carlton": "Fairmont", "Ras Al Khaimah": "Aqaba", "Abu Dhabi": "Irbid",
    "Dubai": "Amman", "Palm Jumeirah": "the Dead Sea", "Yas Island": "Wadi Musa", "Al Quoz": "Sweifieh", "City Walk": "Abdali Boulevard", "Financial Centre": "Shmeisani",
    "Grand Atrium": "Taj Mall", "Al Barsha": "Abdoun", "GOLD, THEATRE by Rhodes and IMAX": "VIP screens", "Wizz Air Abu Dhabi": "Air Arabia Jordan",
    "وايتروز": "كوزمو", "دبي مول": "تاج مول", "مول الإمارات": "سيتي مول", "دبي": "عمّان", "كارفور": "ليدرز سنتر", "فوكس": "تاج سينما",
    "شيك شاك": "فايرفلاي برجر", "ديليفرو": "طلبات", "الاتحاد للطيران": "الملكية الأردنية", "أتلانتس": "كمبنسكي"
  },
  logos: { waitrose: "ld:cozmo.jo", spinneys: "ld:safeway.com.jo", carrefour: "ld:leaders.jo", noon: "ld:opensooq.com", amazon: "ld:smartbuy-me.com",
    justmop: "ld:washywash.com", careem: "ld:careem.com", deliveroo: "ld:talabat.com", talabat: "ld:talabat.com", vox: "ld:tajcinemas.com", shakeshack: "ld:fireflyburgers.com",
    etihad: "ld:rj.com", wizz: "ld:airarabia.com", kidzania: "ld:hamleys.com", olioli: "ld:cmj.jo", yas: "ld:visitpetra.jo",
    cocacolaarena: "ld:tzkrti.com", atlantis: "ld:kempinski.com", ritzrak: "ld:fairmont.com" },
  offers: {
    waitrose: { brand: "Cozmo", brandColor: "#0D4C8B", place: "Mecca Street, Amman", place2: "Mecca Street" },
    spinneys: { brand: "Safeway", brandColor: "#E31E24", place: "All Amman branches" },
    carrefour: { brand: "Leaders Center", brandColor: "#A3238E", place: "Sweifieh, Amman", place2: "Sweifieh" },
    noon: { brand: "OpenSooq", brandColor: "#3FA535" },
    amazon: { brand: "SmartBuy", brandColor: "#FFD400" },
    justmop: { brand: "WashyWash", brandColor: "#3BB9C9", why: "Laundry and cleaning run AED 1,600 a month" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    vox: { brand: "Taj Cinemas", brandColor: "#111111", place: "Taj Mall, Abdoun", place2: "Taj Mall" },
    shakeshack: { brand: "Firefly Burger", brandColor: "#C8102E", place: "Jabal Amman, Amman", place2: "Jabal Amman", qualifies: ["Dine-in and takeaway orders", "Jabal Amman branch only"] },
    emirates: { brand: "Royal Jordanian", brandColor: "#D32027" },
    wizz: { brand: "Air Arabia Jordan" },
    kidzania: { brand: "Hamleys", brandColor: "#E2001A", place: "Mecca Street, Amman", place2: "Mecca Street", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "The Children's Museum", brandColor: "#111111", place: "King Hussein Park, Amman", place2: "King Hussein Park", why: "A day out for the family, fifteen minutes away" },
    yas: { brand: "Visit Petra", brandColor: "#B5442A", place2: "Wadi Musa", why: "A weekend trip for four, three hours away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Tzkrti", brandColor: "#111111", place2: "Amman" },
    atlantis: { brand: "Kempinski", brandColor: "#0A1530", place2: "The Dead Sea", why: "Pool and beach passes come with the room" },
    ritzrak: { brand: "Fairmont", brandColor: "#1C1C1C", place2: "Fairmont Amman", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" }, amazon: { name: "SmartBuy", logo: "ld:smartbuy-me.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "rj_jo", kind: "air", regions: ["jo"], name: "Royal Jordanian Royal Club", unit: "Royal Club points", unitOne: "Royal Club point", logo: "ld:rj.com", color: "#FFFFFF", fg: "#D32027", initial: "R", account: "RJ ···· 4410", rate: 0.5 }
]);

// ---- jp.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.jp = {
  label: "Japan", city: "Tokyo", cur: "JPY", lang: "en",
  text: {
    "Waitrose": "Seijo Ishii", "Dubai Mall": "Roppongi Hills", "Mall of the Emirates": "Tokyo Midtown", "noon Food": "Demae-can", "noon.com": "rakuten.co.jp",
    "noon": "Rakuten", "Justlife": "CaSy", "Careem": "GO", "Deliveroo Plus": "Uber One", "Deliveroo": "Uber Eats", "spinneys.com": "lifecorp.jp",
    "Spinneys": "Life", "Carrefour": "AEON", "VOX Cinemas": "TOHO Cinemas", "VOX": "TOHO", "Etihad Guest Miles": "JAL miles", "Etihad Guest": "JAL Mileage Bank",
    "etihad.com": "jal.co.jp", "Etihad": "JAL", "Talabat": "Demae-can", "KidZania": "Kiddy Land", "OliOli": "National Museum of Nature and Science", "Yas Waterworld": "Tokyo Disney Resort",
    "Warner Bros. World": "teamLab Planets", "Coca-Cola Arena": "Tokyo Dome", "Platinumlist": "Ticket Pia", "Atlantis The Palm": "Hoshino Resorts",
    "Atlantis": "Hoshino Resorts", "Aquaventure": "the hot springs", "Ritz-Carlton": "Okura", "Ras Al Khaimah": "Hakone", "Abu Dhabi": "Tokyo",
    "Dubai": "Tokyo", "Palm Jumeirah": "Karuizawa", "Yas Island": "Maihama", "Al Quoz": "Shinagawa", "City Walk": "Omotesando", "Financial Centre": "Marunouchi",
    "Grand Atrium": "Roppongi Hills", "Al Barsha": "Setagaya", "GOLD, THEATRE by Rhodes and IMAX": "Premier Box and IMAX",
    "Qatar Privilege Club": "ANA Mileage Club", "flydubai OPEN": "ZIPAIR", "summer heat": "summer humidity", "Wizz Air Abu Dhabi": "ZIPAIR"
  },
  logos: { waitrose: "ld:seijoishii.co.jp", noon: "ld:rakuten.co.jp", justmop: "ld:casy.co.jp", careem: "ld:goinc.jp", deliveroo: "ld:ubereats.com",
    spinneys: "ld:lifecorp.jp", carrefour: "ld:aeon.com", vox: "ld:tohotheater.jp", etihad: "ld:jal.co.jp", kidzania: "ld:kiddyland.co.jp",
    olioli: "ld:kahaku.go.jp", yas: "ld:disney.co.jp", wbworld: "ld:teamlab.art", cocacolaarena: "ld:tokyo-dome.co.jp", platinumlist: "ld:t.pia.jp",
    atlantis: "ld:hoshinoresorts.com", ritzrak: "ld:theokuratokyo.jp", talabat: "ld:demae-can.com", qatar: "ld:ana.co.jp", flydubai: "ld:zipair.net", wizz: "ld:zipair.net" },
  offers: {
    waitrose: { brand: "Seijo Ishii", brandColor: "#A6194B", place: "Seijo, Setagaya", place2: "Seijo" },
    noon: { brand: "Rakuten", brandColor: "#BF0000" },
    justmop: { brand: "CaSy", brandColor: "#4A2C17", why: "Cleaning runs AED 1,200 a month" },
    careem: { brand: "GO", brandColor: "#111111" },
    namshi: { brand: "Uber Eats", brandColor: "#06C167" },
    spinneys: { brand: "Life", brandColor: "#F15A22", place: "All Tokyo stores" },
    carrefour: { brand: "AEON", brandColor: "#B6007A", place: "AEON Style Shinagawa Seaside", place2: "Shinagawa" },
    vox: { brand: "TOHO Cinemas", brandColor: "#C8102E", place: "TOHO Cinemas Shinjuku, Kabukicho", place2: "Shinjuku" },
    shakeshack: { place: "Gaienmae, Minato", place2: "Gaienmae", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Gaienmae branch only"] },
    emirates: { brand: "JAL", brandColor: "#CC0000" },
    wizz: { brand: "ZIPAIR" },
    kidzania: { brand: "Kiddy Land", brandColor: "#E6A817", place: "Omotesando, Harajuku", place2: "Harajuku", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "National Museum of Nature and Science", brandColor: "#EE7700", place: "Ueno Park, Taito", place2: "Ueno Park", why: "A science day out for the family, in the city" },
    yas: { brand: "Tokyo Disney Resort", brandColor: "#1B3A8C", place2: "Maihama, Chiba", why: "A day out for four, half an hour away" },
    wbworld: { brand: "teamLab Planets", brandColor: "#111111", place2: "Toyosu, Tokyo", why: "Walk-through digital art, four tickets in one booking" },
    cocacolaarena: { brand: "Tokyo Dome", brandColor: "#E60012", place2: "Bunkyo, Tokyo" },
    platinumlist: { brand: "Ticket Pia", brandColor: "#1E5BC6" },
    atlantis: { brand: "Hoshino Resorts", brandColor: "#111111", place2: "Karuizawa, Nagano", why: "Hot springs and family stays, an hour by bullet train" },
    ritzrak: { brand: "The Okura Tokyo", brandColor: "#1C1C1C", place2: "The Okura Tokyo, Toranomon", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Demae-can", logo: "ld:demae-can.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "jal_jp", kind: "air", regions: ["jp"], name: "JAL Mileage Bank", unit: "JAL miles", unitOne: "JAL mile", logo: "ld:jal.co.jp", color: "#FFFFFF", fg: "#CC0000", initial: "J", account: "JL ···· 4410", rate: 0.5 },
  { id: "ana_jp", kind: "air", regions: ["jp"], name: "ANA Mileage Club", unit: "ANA miles", unitOne: "ANA mile", logo: "ld:ana.co.jp", color: "#FFFFFF", fg: "#13448F", initial: "A", account: null, rate: 0.5 }
]);

// ---- kw.js
window.LUNE_REGIONS.kw = {
  label: "Kuwait", city: "Kuwait City", cur: "KWD", lang: "ar",
  text: {
    "Waitrose": "Sultan Center", "Dubai Mall": "Salmiya", "Mall of the Emirates": "360 Mall", "Justlife": "Justclean", "Careem": "Careem", "Uber Eats": "Careem Food", "Uber": "Careem",
    "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "oncost.com", "Spinneys": "Oncost", "Carrefour": "LuLu", "VOX Cinemas": "Cinescape", "VOX": "Cinescape",
    "Etihad Guest Miles": "Oasis Club miles", "Etihad Guest": "Oasis Club", "etihad.com": "kuwaitairways.com", "Etihad": "Kuwait Airways", "Talabat": "Talabat",
    "KidZania": "Toys\"R\"Us", "OliOli": "The Scientific Center", "Yas Waterworld": "The Scientific Center", "Warner Bros. World": "The Scientific Center",
    "Coca-Cola Arena": "Jaber Al-Ahmad Cultural Centre", "Atlantis The Palm": "Jumeirah Messilah Beach", "Atlantis": "Jumeirah Messilah", "Aquaventure": "the beach club",
    "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Al Khiran", "Abu Dhabi": "Al Ahmadi", "Dubai": "Kuwait City", "Palm Jumeirah": "Messilah", "Yas Island": "Salmiya",
    "Al Quoz": "Salmiya", "City Walk": "Dasman", "Financial Centre": "Salem Al Mubarak Street", "Grand Atrium": "Al Fanar Mall", "Al Barsha": "South Surra",
    "GOLD, THEATRE by Rhodes and IMAX": "IMAX and VIP halls", "Qatar Privilege Club": "Oasis Club", "flydubai OPEN": "Jazeera Savers", "flydubai": "Jazeera Airways",
    "summer heat": "summer heat", "Wizz Air Abu Dhabi": "Jazeera Airways",
    "وايتروز": "مركز سلطان", "سبينس": "أونكوست", "دبي مول": "السالمية", "مول الإمارات": "مول 360", "دبي": "الكويت", "كارفور": "لولو", "فوكس": "سينسكيب",
    "ديليفرو": "طلبات", "الاتحاد للطيران": "الخطوط الجوية الكويتية", "أتلانتس": "جميرا المسيلة"
  },
  logos: { waitrose: "ld:sultan-center.com", amazon: "ld:ubuy.com.kw", justmop: "ld:justclean.com", careem: "ld:careem.com", uber: "ld:careem.com", deliveroo: "ld:talabat.com",
    spinneys: "ld:oncost.com", carrefour: "ld:luluhypermarket.com", vox: "ld:cinescape.com.kw", etihad: "ld:kuwaitairways.com", kidzania: "ld:toysrus.com.sa",
    olioli: "ld:tsck.org.kw", atlantis: "ld:jumeirah.com", ritzrak: "ld:fourseasons.com", talabat: "ld:talabat.com", qatar: "ld:kuwaitairways.com",
    flydubai: "ld:jazeeraairways.com", wizz: "ld:jazeeraairways.com" },
  offers: {
    waitrose: { brand: "Sultan Center", brandColor: "#F07800", place: "Salmiya, Kuwait City", place2: "Salmiya" },
    amazon: { brand: "Ubuy", brandColor: "#F5A800", deal: "5% back on orders", valueNote: "back on orders, up to AED 100 a month", qualifies: ["Orders on ubuy.com.kw or the Ubuy app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards and wallet top-ups", "Returned items"] },
    justmop: { brand: "Justclean", brandColor: "#4096D2" },
    careem: { brand: "Careem", brandColor: "#00E085", why: "AED 980 on Careem so far this month", status: { tier: "Regular", rate: "15%", line: "15% back on Careem until 30 September", sub: "Earned over 40 rides. Today's 20% sits on top of it." }, qualifies: ["Rides booked in the Careem app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Careem Food orders", "Rides booked after 9pm"] },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    spinneys: { brand: "Oncost", brandColor: "#E00022", place: "All Kuwait branches" },
    carrefour: { brand: "LuLu Hypermarket", brandColor: "#E31E24", place: "Salmiya, Kuwait City", place2: "Salmiya", qualifies: ["In-store spend of AED 400 or more", "Salmiya branch only"] },
    vox: { brand: "Cinescape", brandColor: "#E31B23", place: "360 Mall, South Surra", place2: "360 Mall" },
    shakeshack: { place: "Al Fanar Mall, Salmiya", place2: "Al Fanar Mall", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Al Fanar Mall branch only"] },
    emirates: { brand: "Kuwait Airways", brandColor: "#102A5C" },
    wizz: { brand: "Jazeera Airways", brandColor: "#1A96D4", qualifies: ["Fares and bundles booked at jazeeraairways.com", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Airport-desk purchases", "Jazeera Savers memberships"] },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0062A8", place: "360 Mall, South Surra", place2: "360 Mall", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "The Scientific Center", brandColor: "#0055A4", place: "Salmiya, Kuwait City", place2: "Salmiya", why: "Aquarium and discovery place, good for the summer heat", whyFamily: "Aquarium and discovery place, good for the summer heat" },
    yas: { hide: true },
    wbworld: { hide: true },
    cocacolaarena: { hide: true },
    atlantis: { brand: "Jumeirah Messilah Beach", brandColor: "#1C1C1C", place2: "Messilah, Kuwait", why: "Beach, pools and a kids' club come with the room", whyFamily: "Beach, pools and a kids' club come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Hotel Kuwait at Burj Alshaya", why: "A weekend staycation in town", whyFamily: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" }, amazon: { name: "Ubuy", logo: "ld:ubuy.com.kw" }, uber: { name: "Careem", logo: "ld:careem.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "kuwaitairways_kw", kind: "air", regions: ["kw"], name: "Kuwait Airways Oasis Club", unit: "Oasis Club miles", unitOne: "Oasis Club mile", logo: "ld:kuwaitairways.com", color: "#FFFFFF", fg: "#102A5C", initial: "K", account: "KU ···· 6024", rate: 0.5 }
]);

// ---- mx.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.mx = {
  label: "Mexico", city: "Mexico City", cur: "MXN", lang: "es",
  text: {
    "Waitrose": "La Comer", "Dubai Mall": "Antara Polanco", "Mall of the Emirates": "Centro Santa Fe", "noon Food": "Mercado Libre", "noon.com": "mercadolibre.com.mx",
    "noon": "Mercado Libre", "Justlife": "Cronoshare", "Careem": "Uber", "Deliveroo Plus": "Rappi Pro", "Deliveroo": "Rappi", "spinneys.com": "chedraui.com.mx",
    "Spinneys": "Chedraui", "Carrefour": "Walmart", "VOX Cinemas": "Cinépolis", "VOX": "Cinépolis", "Etihad Guest Miles": "Aeroméxico Rewards points", "Etihad Guest": "Aeroméxico Rewards",
    "etihad.com": "aeromexico.com", "Etihad": "Aeroméxico", "Talabat": "DiDi Food", "KidZania": "Juguetrón", "OliOli": "Papalote Museo del Niño", "Yas Waterworld": "El Rollo",
    "Warner Bros. World": "Acuario Inbursa", "Coca-Cola Arena": "Arena CDMX", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Hotel Xcaret México",
    "Atlantis": "Hotel Xcaret", "Aquaventure": "the parks", "Ritz-Carlton": "Four Seasons", "Ras Al Khaimah": "Valle de Bravo", "Abu Dhabi": "Mexico City",
    "Dubai": "Mexico City", "Palm Jumeirah": "the Riviera Maya", "Yas Island": "Morelos", "Al Quoz": "Roma Norte", "City Walk": "Condesa", "Financial Centre": "Paseo de la Reforma",
    "Grand Atrium": "Antara Polanco", "Al Barsha": "Coyoacán", "GOLD, THEATRE by Rhodes and IMAX": "VIP, 4DX and IMAX",
    "Qatar Privilege Club": "Viva Aerobus Doters", "flydubai OPEN": "Volaris v.club", "summer heat": "rainy season", "Wizz Air Abu Dhabi": "Volaris"
  },
  logos: { waitrose: "ld:lacomer.com.mx", noon: "ld:mercadolibre.com.mx", justmop: "ld:cronoshare.com.mx", careem: "uber", deliveroo: "ld:rappi.com.mx",
    spinneys: "ld:chedraui.com.mx", carrefour: "ld:walmart.com.mx", vox: "ld:cinepolis.com", etihad: "ld:aeromexico.com", kidzania: "ld:juguetron.mx",
    olioli: "ld:papalote.org.mx", yas: "ld:elrollo.com.mx", wbworld: "ld:acuarioinbursa.com.mx", cocacolaarena: "ld:arenacdmx.com", platinumlist: "ld:ticketmaster.com",
    atlantis: "ld:hotelxcaret.com", ritzrak: "ld:fourseasons.com", talabat: "ld:didi-food.com", qatar: "ld:doters.com", flydubai: "ld:volaris.com", wizz: "ld:volaris.com" },
  offers: {
    waitrose: { brand: "La Comer", brandColor: "#F26522", place: "Antara Polanco, Mexico City", place2: "Antara Polanco" },
    noon: { brand: "Mercado Libre", brandColor: "#FFE600" },
    justmop: { brand: "Cronoshare", brandColor: "#00AEEF", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "Rappi", brandColor: "#FF441F" },
    spinneys: { brand: "Chedraui", brandColor: "#F47920", place: "All Mexico City stores" },
    carrefour: { brand: "Walmart", brandColor: "#0071CE", place: "Walmart Supercenter Santa Fe, Mexico City", place2: "Santa Fe" },
    vox: { brand: "Cinépolis", brandColor: "#002A5C", place: "Cinépolis VIP Antara Polanco, Mexico City", place2: "Antara Polanco" },
    shakeshack: { place: "Polanco, Mexico City", place2: "Polanco", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Polanco branch only"] },
    emirates: { brand: "Aeroméxico", brandColor: "#0B2343" },
    wizz: { brand: "Volaris" },
    kidzania: { brand: "Juguetrón", brandColor: "#00A33E", place: "Centro Santa Fe, Mexico City", place2: "Centro Santa Fe", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Papalote Museo del Niño", brandColor: "#009FE3", place: "Bosque de Chapultepec, Mexico City", place2: "Chapultepec", why: "A day out for the family, twenty minutes away" },
    yas: { brand: "El Rollo", brandColor: "#4A3AF0", place2: "Tlayacapan, Morelos", why: "A day of water slides for four, ninety minutes away" },
    wbworld: { brand: "Acuario Inbursa", brandColor: "#0B1F4B", place2: "Nuevo Polanco, Mexico City", why: "Sharks, rays and penguins, four tickets in one booking" },
    cocacolaarena: { brand: "Arena CDMX", brandColor: "#1C1C1C", place2: "Azcapotzalco, Mexico City" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Hotel Xcaret México", brandColor: "#1C1C1C", place2: "Playa del Carmen, Riviera Maya", why: "Park passes come with the room" },
    ritzrak: { brand: "Four Seasons", brandColor: "#1C1C1C", place2: "Four Seasons Hotel Mexico City", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "DiDi Food", logo: "ld:didi-food.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "aeromexico_mx", kind: "air", regions: ["mx"], name: "Aeroméxico Rewards", unit: "Aeroméxico Rewards points", unitOne: "Aeroméxico Rewards point", logo: "ld:aeromexico.com", color: "#FFFFFF", fg: "#0B2343", initial: "A", account: "AM ···· 5207", rate: 0.5 }
]);

// ---- my.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.my = {
  label: "Malaysia", city: "Kuala Lumpur", cur: "MYR", lang: "en",
  text: {
    "Waitrose": "Village Grocer", "Dubai Mall": "Pavilion Kuala Lumpur", "Mall of the Emirates": "Mid Valley Megamall", "noon Food": "ShopeeFood", "noon.com": "shopee.com.my",
    "noon": "Shopee", "Amazon": "Lazada", "Justlife": "ServisHero", "Careem": "Grab", "Deliveroo Plus": "pandapro", "Deliveroo": "foodpanda", "spinneys.com": "jayagrocer.com",
    "Spinneys": "Jaya Grocer", "Carrefour": "Lotus's", "VOX Cinemas": "GSC", "VOX": "GSC", "Etihad Guest Miles": "Enrich Points", "Etihad Guest": "Enrich",
    "etihad.com": "malaysiaairlines.com", "Etihad": "Malaysia Airlines", "Talabat": "ShopeeFood", "KidZania": "Toys\"R\"Us", "OliOli": "Petrosains", "Yas Waterworld": "Sunway Lagoon",
    "Warner Bros. World": "Zoo Negara", "Coca-Cola Arena": "Zepp Kuala Lumpur", "Platinumlist": "Ticket2U", "Atlantis The Palm": "Desaru Coast",
    "Atlantis": "Desaru Coast", "Aquaventure": "the Adventure Waterpark", "Ritz-Carlton": "Mandarin Oriental", "Ras Al Khaimah": "Langkawi", "Abu Dhabi": "Kuala Lumpur",
    "Dubai": "Kuala Lumpur", "Palm Jumeirah": "Desaru", "Yas Island": "Bandar Sunway", "Al Quoz": "Petaling Jaya", "City Walk": "Bangsar", "Financial Centre": "KLCC",
    "Grand Atrium": "Pavilion Kuala Lumpur", "Al Barsha": "Mont Kiara", "GOLD, THEATRE by Rhodes and IMAX": "Gold Class and IMAX",
    "flydubai OPEN": "AirAsia", "summer heat": "monsoon rain", "Wizz Air Abu Dhabi": "AirAsia"
  },
  logos: { waitrose: "ld:villagegrocer.com.my", noon: "ld:shopee.com.my", amazon: "ld:lazada.com.my", justmop: "ld:servishero.com", careem: "ld:grab.com", deliveroo: "ld:foodpanda.my",
    spinneys: "ld:jayagrocer.com", carrefour: "ld:lotuss.com.my", vox: "ld:gsc.com.my", etihad: "ld:malaysiaairlines.com", kidzania: "ld:toysrus.com.my",
    olioli: "ld:petrosains.com.my", yas: "ld:sunwaylagoon.com", wbworld: "ld:zoonegaramalaysia.my", cocacolaarena: "ld:zepp.co.jp", platinumlist: "ld:ticket2u.com.my",
    atlantis: "ld:desarucoast.com", ritzrak: "ld:mandarinoriental.com", talabat: "ld:shopeefood.com.my", flydubai: "ld:airasiagroup.com", wizz: "ld:airasiagroup.com" },
  offers: {
    waitrose: { brand: "Village Grocer", brandColor: "#4E8B2C", place: "Bangsar Village, Kuala Lumpur", place2: "Bangsar Village" },
    noon: { brand: "Shopee", brandColor: "#EE4D2D" },
    amazon: { brand: "Lazada", brandColor: "#0F146D", logo: "ld:lazada.com.my" },
    justmop: { brand: "ServisHero", brandColor: "#FBBF24", why: "Cleaning runs AED 800 a month" },
    careem: { brand: "Grab", brandColor: "#00B14F" },
    namshi: { brand: "foodpanda", brandColor: "#D70F64" },
    spinneys: { brand: "Jaya Grocer", brandColor: "#E3242B", place: "All Kuala Lumpur stores" },
    carrefour: { brand: "Lotus's", brandColor: "#00B2A9", place: "Mutiara Damansara, Petaling Jaya", place2: "Mutiara Damansara" },
    vox: { brand: "GSC", brandColor: "#111111", place: "GSC Mid Valley Megamall", place2: "Mid Valley Megamall" },
    shakeshack: { place: "The Exchange TRX, Kuala Lumpur", place2: "The Exchange TRX", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "The Exchange TRX branch only"] },
    emirates: { brand: "Malaysia Airlines", brandColor: "#1C3D72" },
    wizz: { brand: "AirAsia" },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0066CC", place: "1 Utama, Petaling Jaya", place2: "1 Utama", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Petrosains", brandColor: "#1E3A8A", place: "Suria KLCC, Kuala Lumpur", place2: "Suria KLCC", why: "A science day out for the family, in the city centre" },
    yas: { brand: "Sunway Lagoon", brandColor: "#1E6FD9", place2: "Bandar Sunway, Selangor", why: "A theme park day for four, half an hour away" },
    wbworld: { brand: "Zoo Negara", brandColor: "#1E6B3A", place2: "Ulu Klang, Selangor", why: "Animals and shows, four tickets in one booking" },
    cocacolaarena: { brand: "Zepp Kuala Lumpur", brandColor: "#E60012", place2: "Bukit Bintang City Centre" },
    platinumlist: { brand: "Ticket2U", brandColor: "#A64CA6" },
    atlantis: { brand: "Desaru Coast", brandColor: "#2BA6B5", place2: "Desaru, Johor", why: "Adventure Waterpark passes come with the room" },
    ritzrak: { brand: "Mandarin Oriental", brandColor: "#1C1C1C", place2: "Mandarin Oriental, Kuala Lumpur", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "ShopeeFood", logo: "ld:shopeefood.com.my" }, amazon: { name: "Lazada", logo: "ld:lazada.com.my" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "malaysiaairlines_my", kind: "air", regions: ["my"], name: "Malaysia Airlines Enrich", unit: "Enrich Points", unitOne: "Enrich Point", logo: "ld:malaysiaairlines.com", color: "#FFFFFF", fg: "#1C3D72", initial: "M", account: "MH ···· 4410", rate: 0.5 },
  { id: "airasia_my", kind: "air", regions: ["my"], name: "AirAsia Rewards", unit: "AirAsia points", unitOne: "AirAsia point", logo: "ld:airasiagroup.com", color: "#FFFFFF", fg: "#FF0000", initial: "A", account: null, rate: 0.5 }
]);

// ---- om.js
window.LUNE_REGIONS.om = {
  label: "Oman", city: "Muscat", cur: "OMR", lang: "ar",
  text: {
    "Waitrose": "Sultan Center", "Dubai Mall": "Mall of Oman", "Mall of the Emirates": "Mall of Muscat", "Careem": "OTaxi", "Uber Eats": "Talabat", "Uber": "OTaxi",
    "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "Al Meera stores", "Spinneys": "Al Meera", "Carrefour": "LuLu",
    "VOX Cinemas": "Novo Cinemas", "VOX": "Novo", "Shake Shack": "McDonald's", "Etihad Guest Miles": "Sindbad miles", "Etihad Guest": "Sindbad",
    "etihad.com": "omanair.com", "Etihad": "Oman Air", "Talabat": "Talabat", "KidZania": "Toys\"R\"Us", "OliOli": "Oman Aquarium", "Yas Waterworld": "Marah Land",
    "Warner Bros. World": "Oman Aquarium", "Coca-Cola Arena": "Royal Opera House Muscat", "Atlantis The Palm": "Shangri-La Barr Al Jissah",
    "Atlantis": "Shangri-La Barr Al Jissah", "Aquaventure": "the lazy river", "Ritz-Carlton": "Kempinski", "Ras Al Khaimah": "Jebel Akhdar", "Abu Dhabi": "Sohar",
    "Dubai": "Muscat", "Palm Jumeirah": "Barr Al Jissah", "Yas Island": "Al Qurum", "Al Quoz": "Bausher", "City Walk": "Shatti Al Qurum", "Financial Centre": "Bausher",
    "Grand Atrium": "Bausher", "Al Barsha": "Al Mawaleh", "GOLD, THEATRE by Rhodes and IMAX": "premium halls",
    "Qatar Privilege Club": "Sindbad", "flydubai OPEN": "mOVemore", "flydubai": "SalamAir", "summer heat": "summer heat", "Wizz Air Abu Dhabi": "SalamAir",
    "وايتروز": "مركز سلطان", "سبينس": "الميرة", "دبي مول": "مول عمان", "مول الإمارات": "مول مسقط", "دبي": "مسقط", "كارفور": "لولو", "فوكس": "نوفو",
    "شيك شاك": "ماكدونالدز", "ديليفرو": "طلبات", "الاتحاد للطيران": "الطيران العماني", "أتلانتس": "شانغريلا بر الجصة", "كريم": "أوتاكسي"
  },
  logos: { waitrose: "ld:sultan-center.com", amazon: "ld:markeetex.com", careem: "ld:otaxi.om", uber: "ld:otaxi.om", deliveroo: "ld:talabat.com",
    spinneys: "ld:almeera.com.qa", carrefour: "ld:luluhypermarket.com", vox: "ld:novocinemas.com", shakeshack: "ld:mcdonalds.com", etihad: "ld:omanair.com",
    kidzania: "ld:toysrus.com.sa", yas: "ld:marahland.com", wbworld: "ld:omanaquarium.om", atlantis: "ld:shangri-la.com", ritzrak: "ld:kempinski.com",
    talabat: "ld:talabat.com", qatar: "ld:omanair.com", flydubai: "ld:salamair.com", wizz: "ld:salamair.com" },
  offers: {
    waitrose: { brand: "Sultan Center", brandColor: "#F07800", place: "Al Hail, Muscat", place2: "Al Hail" },
    amazon: { brand: "Markeetex", brandColor: "#E8202A", deal: "5% back on orders", valueNote: "back on orders, up to AED 100 a month", qualifies: ["Orders on markeetex.com or the Markeetex app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards and wallet top-ups", "Returned items"] },
    careem: { brand: "OTaxi", brandColor: "#F05A1A", why: "AED 980 on OTaxi so far this month", status: { tier: "Regular", rate: "15%", line: "15% back on OTaxi until 30 September", sub: "Earned over 40 rides. Today's 20% sits on top of it." }, qualifies: ["Rides booked in the OTaxi app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Rides paid in cash", "Rides booked after 9pm"] },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    spinneys: { brand: "Al Meera", brandColor: "#8CA21E", place: "All Muscat branches", qualifies: ["Friday spend in store", "Paid with your Ajman Bank card ···· 4417"] },
    carrefour: { brand: "LuLu Hypermarket", brandColor: "#E31E24", place: "Bausher, Muscat", place2: "Bausher", qualifies: ["In-store spend of AED 400 or more", "Bausher branch only"] },
    vox: { brand: "Novo Cinemas", brandColor: "#F5C400", place: "Mall of Muscat, Al Mawaleh", place2: "Mall of Muscat" },
    shakeshack: { brand: "McDonald's", brandColor: "#FFC72C", place: "Al Khuwair, Muscat", place2: "Al Khuwair", qualifies: ["Dine-in, takeaway and McDonald's app orders", "Al Khuwair branch only"], excludes: ["Delivery app orders", "Gift cards"] },
    emirates: { brand: "Oman Air", brandColor: "#007A87" },
    wizz: { brand: "SalamAir", brandColor: "#B5C42F", qualifies: ["Fares and bundles booked at salamair.com", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Airport-desk purchases", "mOVemore memberships"] },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0062A8", place: "City Centre Muscat, Al Mawaleh", place2: "City Centre Muscat", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Marah Land", brandColor: "#C8102E", place2: "Al Qurum, Muscat", why: "Rides and games for four, 15 minutes away", whyFamily: "Rides and games for four, 15 minutes away" },
    wbworld: { brand: "Oman Aquarium", brandColor: "#1F5F73", place2: "Mall of Oman, Bausher", why: "Aquarium tunnels and shows, four tickets in one booking", whyFamily: "Aquarium tunnels and shows, four tickets in one booking" },
    cocacolaarena: { hide: true },
    atlantis: { brand: "Shangri-La Barr Al Jissah", brandColor: "#8C6D3F", place2: "Barr Al Jissah, Muscat", why: "Pools and a lazy river come with the room", whyFamily: "Pools and a lazy river come with the room" },
    ritzrak: { brand: "Kempinski", brandColor: "#0A1A33", place2: "Kempinski Hotel Muscat", why: "A weekend staycation in town", whyFamily: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" }, amazon: { name: "Markeetex", logo: "ld:markeetex.com" }, uber: { name: "OTaxi", logo: "ld:otaxi.om" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "omanair_om", kind: "air", regions: ["om"], name: "Oman Air Sindbad", unit: "Sindbad miles", unitOne: "Sindbad mile", logo: "ld:omanair.com", color: "#FFFFFF", fg: "#007A87", initial: "O", account: "WY ···· 5531", rate: 0.5 }
]);

// ---- pk.js
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

// ---- pl.js
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

// ---- qa.js
window.LUNE_REGIONS.qa = {
  label: "Qatar", city: "Doha", cur: "QAR", lang: "ar",
  text: {
    "Waitrose": "Monoprix", "Dubai Mall": "Doha Festival City", "Mall of the Emirates": "Mall of Qatar", "noon Food": "Snoonu Food", "noon.com": "snoonu.com",
    "noon": "Snoonu", "Justlife": "Aldobi", "Careem": "Uber", "Deliveroo Plus": "talabat pro", "Deliveroo": "Talabat", "spinneys.com": "almeera.com.qa",
    "Spinneys": "Al Meera", "Carrefour": "LuLu", "VOX Cinemas": "Novo Cinemas", "VOX": "Novo", "Etihad Guest Miles": "Avios", "Etihad Guest": "Privilege Club",
    "etihad.com": "qatarairways.com", "Etihad": "Qatar Airways", "Talabat": "Talabat", "KidZania": "Toys\"R\"Us", "OliOli": "Angry Birds World", "Yas Waterworld": "Angry Birds World",
    "Warner Bros. World": "Angry Birds World", "Coca-Cola Arena": "Qatar National Convention Centre", "Platinumlist": "Q-Tickets", "Atlantis The Palm": "Hilton Salwa Beach Resort",
    "Atlantis": "Hilton Salwa", "Aquaventure": "Desert Falls", "Ritz-Carlton": "Mandarin Oriental", "Ras Al Khaimah": "Salwa", "Abu Dhabi": "Lusail",
    "Dubai": "Doha", "Palm Jumeirah": "Salwa", "Yas Island": "Doha Festival City", "Al Quoz": "Al Sadd", "City Walk": "Education City", "Financial Centre": "Umm Salal",
    "Grand Atrium": "South Court", "Al Barsha": "Al Rayyan", "GOLD, THEATRE by Rhodes and IMAX": "7 Star and IMAX",
    "Qatar Privilege Club": "Qatar Airways Privilege Club", "flydubai OPEN": "Privilege Club", "flydubai": "Qatar Airways", "summer heat": "summer heat", "Wizz Air Abu Dhabi": "Qatar Airways",
    "وايتروز": "مونوبري", "سبينس": "الميرة", "دبي مول": "دوحة فستيفال سيتي", "مول الإمارات": "مول قطر", "دبي": "الدوحة", "كارفور": "لولو", "فوكس": "نوفو",
    "ديليفرو": "طلبات", "الاتحاد للطيران": "الخطوط الجوية القطرية", "أتلانتس": "هيلتون سلوى", "كريم": "أوبر"
  },
  logos: { waitrose: "ld:monoprix.qa", noon: "ld:snoonu.com", amazon: "ld:ubuy.qa", justmop: "ld:aldobi.com", careem: "uber", deliveroo: "ld:talabat.com",
    spinneys: "ld:almeera.com.qa", carrefour: "ld:luluhypermarket.com", vox: "ld:novocinemas.com", etihad: "ld:qatarairways.com", kidzania: "ld:toysrus.com.sa",
    yas: "ld:angrybirdsworld.qa", cocacolaarena: "ld:qncc.qa", platinumlist: "ld:q-tickets.com", atlantis: "ld:hilton.com", ritzrak: "ld:mandarinoriental.com",
    talabat: "ld:talabat.com", qatar: "ld:qatarairways.com", flydubai: "ld:qatarairways.com", wizz: "ld:qatarairways.com" },
  offers: {
    waitrose: { brand: "Monoprix", brandColor: "#E30613", place: "Doha Festival City, Umm Salal", place2: "Doha Festival City" },
    noon: { brand: "Snoonu", brandColor: "#D50013" },
    amazon: { brand: "Ubuy", brandColor: "#F5A800", deal: "5% back on orders", valueNote: "back on orders, up to AED 100 a month", qualifies: ["Orders on ubuy.qa or the Ubuy app", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards and wallet top-ups", "Returned items"] },
    justmop: { brand: "Aldobi", brandColor: "#3452F2" },
    careem: { brand: "Uber" },
    namshi: { brand: "Talabat", brandColor: "#FF5A00" },
    spinneys: { brand: "Al Meera", brandColor: "#8CA21E", place: "All Doha branches" },
    carrefour: { brand: "LuLu Hypermarket", brandColor: "#E31E24", place: "Al Gharrafa, Doha", place2: "Al Gharrafa", qualifies: ["In-store spend of AED 400 or more", "Al Gharrafa branch only"] },
    vox: { brand: "Novo Cinemas", brandColor: "#F5C400", place: "Mall of Qatar, Al Rayyan", place2: "Mall of Qatar" },
    shakeshack: { place: "Villaggio Mall, Baaya", place2: "Villaggio", qualifies: ["Dine-in, takeaway and Shake Shack app orders", "Villaggio branch only"] },
    emirates: { brand: "Qatar Airways", brandColor: "#5C0632" },
    wizz: { hide: true },
    kidzania: { brand: "Toys\"R\"Us", brandColor: "#0062A8", place: "Doha Festival City, Umm Salal", place2: "Doha Festival City", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { hide: true },
    yas: { brand: "Angry Birds World", brandColor: "#E2231A", place2: "Doha Festival City", why: "Rides and indoor play for four, 20 minutes away", whyFamily: "Rides and indoor play for four, 20 minutes away" },
    wbworld: { hide: true },
    cocacolaarena: { brand: "Qatar National Convention Centre", brandColor: "#9C7A4A", place2: "Education City, Al Rayyan" },
    platinumlist: { brand: "Q-Tickets", brandColor: "#111111" },
    atlantis: { brand: "Hilton Salwa Beach Resort", brandColor: "#002F61", place2: "Salwa Beach", why: "Desert Falls water park passes come with the room", whyFamily: "Desert Falls water park passes come with the room" },
    ritzrak: { brand: "Mandarin Oriental", brandColor: "#1C1C1C", place2: "Mandarin Oriental, Doha", why: "A weekend staycation in town", whyFamily: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Talabat", logo: "ld:talabat.com" }, amazon: { name: "Ubuy", logo: "ld:ubuy.qa" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "qatar_qa", kind: "air", regions: ["qa"], name: "Qatar Airways Privilege Club", unit: "Avios", unitOne: "Avios", logo: "ld:qatarairways.com", color: "#FFFFFF", fg: "#5C0632", initial: "Q", account: "QR ···· 3318", rate: 0.5 }
]);

// ---- se.js
window.LUNE_REGIONS = window.LUNE_REGIONS || {};
window.LUNE_REGIONS.se = {
  label: "Sweden", city: "Stockholm", cur: "SEK", lang: "en",
  text: {
    "Waitrose": "Hemköp", "Dubai Mall": "Mall of Scandinavia", "Mall of the Emirates": "Täby Centrum", "noon Food": "Wolt", "noon.com": "cdon.se",
    "noon": "CDON", "Justlife": "Hemfrid", "Careem": "Uber", "Deliveroo Plus": "foodora PRO", "Deliveroo": "foodora", "spinneys.com": "coop.se",
    "Spinneys": "Coop", "Carrefour": "City Gross", "VOX Cinemas": "Filmstaden", "VOX": "Filmstaden", "Shake Shack": "Max Burgers",
    "Etihad Guest Miles": "EuroBonus points", "Etihad Guest": "SAS EuroBonus", "etihad.com": "flysas.com", "Etihad": "SAS", "Talabat": "Wolt",
    "KidZania": "Lekia", "OliOli": "Junibacken", "Yas Waterworld": "Gröna Lund", "Warner Bros. World": "Skansen",
    "Coca-Cola Arena": "Avicii Arena", "Platinumlist": "Ticketmaster", "Atlantis The Palm": "Liseberg Grand Curiosa Hotel", "Atlantis": "Liseberg",
    "Aquaventure": "Oceana water park", "Ritz-Carlton": "Grand Hôtel", "Ras Al Khaimah": "the archipelago", "Abu Dhabi": "Stockholm",
    "Dubai": "Stockholm", "Palm Jumeirah": "Gothenburg", "Yas Island": "Djurgården", "Al Quoz": "Hammarby Sjöstad", "City Walk": "Biblioteksgatan", "Financial Centre": "Norrmalm",
    "Grand Atrium": "Mall of Scandinavia", "Al Barsha": "Södermalm", "GOLD, THEATRE by Rhodes and IMAX": "Lounge and IMAX",
    "Qatar Privilege Club": "Flying Blue", "flydubai OPEN": "Norwegian Reward", "summer heat": "dark winter", "Wizz Air Abu Dhabi": "Norwegian"
  },
  logos: { waitrose: "ld:hemkop.se", noon: "ld:cdon.se", justmop: "ld:hemfrid.se", careem: "uber", deliveroo: "ld:foodora.se",
    spinneys: "ld:coop.se", carrefour: "ld:citygross.se", vox: "ld:filmstaden.se", shakeshack: "ld:max.se", etihad: "ld:flysas.com", kidzania: "ld:lekia.se",
    olioli: "ld:junibacken.se", yas: "ld:gronalund.com", wbworld: "ld:skansen.se", cocacolaarena: "ld:stockholmlive.com", platinumlist: "ld:ticketmaster.se",
    atlantis: "ld:liseberg.se", ritzrak: "ld:grandhotel.se", talabat: "ld:wolt.com", qatar: "ld:flyingblue.com", flydubai: "ld:norwegian.com", wizz: "ld:norwegian.com" },
  offers: {
    waitrose: { brand: "Hemköp", brandColor: "#E2001A", place: "Klarabergsgatan, Stockholm", place2: "Klarabergsgatan" },
    noon: { brand: "CDON", brandColor: "#00C35A" },
    justmop: { brand: "Hemfrid", brandColor: "#0F3A57", why: "Cleaning runs AED 1,600 a month" },
    careem: { brand: "Uber" },
    namshi: { brand: "foodora", brandColor: "#DF1067" },
    spinneys: { brand: "Coop", brandColor: "#00A443", place: "All Stockholm stores" },
    carrefour: { brand: "City Gross", brandColor: "#0A5CA8", place: "Bromma Blocks, Stockholm", place2: "Bromma Blocks" },
    vox: { brand: "Filmstaden", brandColor: "#C8102E", place: "Filmstaden Sergel, Hötorget", place2: "Hötorget" },
    shakeshack: { brand: "Max Burgers", brandColor: "#D2232A", place: "Drottninggatan, Stockholm", place2: "Drottninggatan" },
    emirates: { brand: "SAS", brandColor: "#0028F0" },
    wizz: { brand: "Norwegian" },
    kidzania: { brand: "Lekia", brandColor: "#E30613", place: "All Stockholm stores", place2: "Stockholm", deal: "12% back on toys", valueNote: "back on toys and sets, up to AED 80 a visit", qualifies: ["Toys and sets bought in store", "Paid with your Ajman Bank card ···· 4417"], excludes: ["Gift cards", "Events and workshops"], game: { kind: "stamps", done: 0, target: 3, unit: "visits", reward: "18% back", note: "Three visits this term gets you 18% back on toys." } },
    olioli: { brand: "Junibacken", brandColor: "#F3DB8E", place: "Galärvarvsvägen 8, Djurgården", place2: "Djurgården", why: "A day out for the family, fifteen minutes away" },
    yas: { brand: "Gröna Lund", brandColor: "#0E5A3A", place2: "Djurgården, Stockholm", why: "A day out for four, fifteen minutes away" },
    wbworld: { brand: "Skansen", brandColor: "#C0392B", place2: "Djurgården, Stockholm", why: "Nordic animals and old Sweden, four tickets in one booking" },
    cocacolaarena: { brand: "Stockholm Live", brandColor: "#C5007C", place2: "Avicii Arena, Johanneshov" },
    platinumlist: { brand: "Ticketmaster", brandColor: "#026CDF" },
    atlantis: { brand: "Liseberg", brandColor: "#0F5132", place2: "Gothenburg", why: "Oceana water park passes come with the room" },
    ritzrak: { brand: "Grand Hôtel", brandColor: "#1C1C1C", place2: "Grand Hôtel, Blasieholmen", why: "A weekend staycation in town" }
  },
  partners: {},
  gifts: { talabat: { name: "Wolt", logo: "ld:wolt.com" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "sas_se", kind: "air", regions: ["se"], name: "SAS EuroBonus", unit: "EuroBonus points", unitOne: "EuroBonus point", logo: "ld:flysas.com", color: "#FFFFFF", fg: "#0028F0", initial: "S", account: "SK ···· 6082", rate: 0.5 }
]);

// ---- tr.js
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

// ---- uz.js
window.LUNE_REGIONS.uz = {
  label: "Uzbekistan", city: "Tashkent", cur: "UZS", lang: "ru",
  text: {
    "Waitrose": "Korzinka", "Dubai Mall": "Tashkent City Mall", "Mall of the Emirates": "Samarkand Darvoza", "noon Food": "Uzum Tezkor", "noon.com": "uzum.uz",
    "noon": "Uzum Market", "Careem": "Yandex Go", "Deliveroo Plus": "Express24 Plus", "Deliveroo": "Express24", "spinneys.com": "makromarket.uz",
    "Spinneys": "Makro", "Carrefour": "Havas", "VOX Cinemas": "Cinematica", "VOX": "Cinematica", "Shake Shack": "Les Ailes", "Starbucks": "Breadly",
    "Etihad Guest Miles": "UzAirPlus miles", "Etihad Guest": "UzAirPlus", "etihad.com": "uzairways.com", "Etihad": "Uzbekistan Airways", "Talabat": "Express24",
    "Warner Bros. World": "Tashkent Zoo", "Coca-Cola Arena": "Humo Arena", "Platinumlist": "iTicket", "Atlantis The Palm": "Amirsoy Resort",
    "Atlantis": "Amirsoy", "Aquaventure": "the resort pools", "Ritz-Carlton": "Hyatt Regency", "Ras Al Khaimah": "Samarkand", "Abu Dhabi": "Samarkand",
    "Dubai": "Tashkent", "Palm Jumeirah": "the Chimgan mountains", "Al Quoz": "Chilanzar", "City Walk": "Tashkent City", "Financial Centre": "Mirabad",
    "Grand Atrium": "Tashkent City Mall", "Al Barsha": "Yunusabad", "GOLD, THEATRE by Rhodes and IMAX": "VIP halls and IMAX",
    "Wizz Air Abu Dhabi": "Qanot Sharq"
  },
  logos: { waitrose: "ld:korzinka.uz", spinneys: "ld:makromarket.uz", carrefour: "ld:havasfood.uz", noon: "ld:uzum.uz", careem: "ld:go.yandex",
    deliveroo: "ld:express24.uz", talabat: "ld:express24.uz", starbucks: "ld:breadly.uz", vox: "ld:cinematica.uz", shakeshack: "ld:lesailes.uz",
    etihad: "ld:uzairways.com", wbworld: "ld:tashkentzoo.uz", cocacolaarena: "ld:humoarena.com", platinumlist: "ld:iticket.az",
    atlantis: "ld:amirsoy.com", ritzrak: "ld:hyatt.com", amazon: "ld:asaxiy.uz", wizz: "ld:qanotsharq.com" },
  offers: {
    waitrose: { brand: "Korzinka", brandColor: "#E4002B", place: "Yunusabad, Tashkent", place2: "Yunusabad" },
    noon: { brand: "Uzum Market", brandColor: "#7000FF" },
    amazon: { brand: "Asaxiy", brandColor: "#006BFF" },
    careem: { brand: "Yandex Go", brandColor: "#FFDD33" },
    namshi: { brand: "Express24", brandColor: "#1A98D5" },
    talabat: { brand: "Breadly", brandColor: "#A78B6A", logo: "ld:breadly.uz", place: "Mirabad, Tashkent", place2: "Mirabad" },
    spinneys: { brand: "Makro", brandColor: "#1DA348", place: "All Tashkent stores" },
    carrefour: { brand: "Havas", brandColor: "#3E7A3E", place: "Chilanzar, Tashkent", place2: "Chilanzar" },
    vox: { brand: "Cinematica", brandColor: "#222222", place: "Tashkent City Mall, Tashkent", place2: "Tashkent City Mall" },
    shakeshack: { brand: "Les Ailes", brandColor: "#FC004A", place: "Chilanzar, Tashkent", place2: "Chilanzar", qualifies: ["Dine-in, takeaway and Les Ailes app orders", "Chilanzar branch only"] },
    emirates: { brand: "Uzbekistan Airways", brandColor: "#0C9050" },
    wizz: { brand: "Qanot Sharq" },
    wbworld: { brand: "Tashkent Zoo", brandColor: "#233F8C", place2: "Yunusabad, Tashkent", why: "Animals, birds and an aquarium, four tickets in one booking" },
    cocacolaarena: { brand: "Humo Arena", brandColor: "#300C58", place2: "Chilanzar, Tashkent" },
    platinumlist: { brand: "iTicket", brandColor: "#FFDD00" },
    atlantis: { brand: "Amirsoy Resort", brandColor: "#134095", place2: "Chimgan mountains, Tashkent region", why: "Pool and mountain passes come with the room" },
    ritzrak: { brand: "Hyatt Regency", brandColor: "#1C1C1C", place2: "Hyatt Regency Tashkent", why: "A weekend staycation in town" },
    justmop: { hide: true }, kidzania: { hide: true }, olioli: { hide: true }, yas: { hide: true }
  },
  partners: {},
  gifts: { talabat: { name: "Express24", logo: "ld:express24.uz" }, amazon: { name: "Asaxiy", logo: "ld:asaxiy.uz" } }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "uzairways_uz", kind: "air", regions: ["uz"], name: "Uzbekistan Airways UzAirPlus", unit: "UzAirPlus miles", unitOne: "UzAirPlus mile", logo: "ld:uzairways.com", color: "#FFFFFF", fg: "#0C9050", initial: "U", account: "HY ···· 4410", rate: 0.5 }
]);

// ---- za.js
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

(function () {
  // resolved lazily: the setup script that defines window.BANK may run after this one
  var R = null, rx = null, ready = false;
  function init() {
    if (ready) return R; ready = true;
    var cfg = window.BANK, r = cfg && window.LUNE_REGIONS[cfg.region];
    if (!r || !r.offers) return null;
    R = r;
    var keys = Object.keys(R.text).sort(function (a, b) { return b.length - a.length; });
    var esc = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
    rx = new RegExp("(^|[^A-Za-z])(" + keys.map(esc).join("|") + ")(?![A-Za-z])", "g");
    return R;
  }
  window.REGION_TEXT = function (s) { return init() && typeof s === "string" ? s.replace(rx, function (m, pre, k) { return pre + R.text[k]; }) : s; };
  window.REGION_LOGO = function (k) { return init() && k && R.logos[k] || k; };
  var T = window.REGION_TEXT;
  function deep(o) { if (Array.isArray(o)) return o.map(deep); if (o && typeof o === "object") { Object.keys(o).forEach(function (k) { if (k !== "id" && k !== "logo" && k !== "key") o[k] = deep(o[k]); }); return o; } return T(o); }
  window.REGION_APPLY = function (D) {
    if (!init()) return;
    for (var hi = D.OFFERS.length - 1; hi >= 0; hi--) { var hv = R.offers[D.OFFERS[hi].id]; if (hv && hv.hide) D.OFFERS.splice(hi, 1); }
    D.OFFERS.forEach(function (o) {
      var ov = R.offers[o.id];
      // brand and places are shown raw; the rest goes through BR (which applies REGION_TEXT) after translation
      ["brand", "place", "place2", "city"].forEach(function (k) { if (o[k]) o[k] = T(o[k]); });
      if (o.logo && R.logos[o.logo]) o.logo = R.logos[o.logo];
      if (ov) { Object.keys(ov).forEach(function (k) { o[k] = ov[k]; }); if (/^ld:/.test(o.logo || "")) o.logoBg = "#FFFFFF"; }
    });
    D.STATEMENT.forEach(function (p) { p.rows.forEach(function (r) { r.brand = T(r.brand); if (r.place2) r.place2 = T(r.place2); }); });
    D.TXNS.forEach(function (x) { x.brand = T(x.brand); });
    for (var i = D.PARTNERS.length - 1; i >= 0; i--) {
      var p = D.PARTNERS[i], po = R.partners[p.id];
      if (po === null) D.PARTNERS.splice(i, 1);
      else if (po) { Object.keys(po).forEach(function (k) { p[k] = po[k]; }); p.color = "#FFFFFF"; }
    }
    D.GIFTCARDS.forEach(function (g) { var go = R.gifts[g.id] || R.gifts[g.logo]; if (go) { g.name = go.name; g.logo = go.logo; g.color = "#FFFFFF"; } });
    Object.keys(D.TRIPS).forEach(function (k) { deep(D.TRIPS[k]); (D.TRIPS[k].flights || []).forEach(function (f) { if (R.logos[f.logo]) f.logo = R.logos[f.logo]; }); });
    Object.keys(D.TAGS || {}).forEach(function (k) { var ov = R.offers[k]; if (ov && ov.brand) D.TAGS[k] = ov.brand.toLowerCase() + " " + D.TAGS[k]; });
  };
})();
