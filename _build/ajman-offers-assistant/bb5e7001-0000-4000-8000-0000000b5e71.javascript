// Regional offer catalogs for the sales setup. Offer ids stay the same (every flow keys on them);
// only brand, logo, place and local copy change. "ld:<domain>" logos load from logo.dev.
window.LUNE_REGIONS = {
  me: { label: "Middle East", city: "Dubai", cur: "AED" },
  eu: {
    label: "Europe", city: "Amsterdam", cur: "EUR", lang: "en",
    text: {
      "Waitrose": "Lidl", "Shake Shack": "Five Guys", "Dubai Mall": "Kalverstraat", "Mall of the Emirates": "Zuidas",
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
      carrefour: { brand: "Albert Heijn", brandColor: "#00A0E2", place: "Zuidas, Amsterdam Zuid", place2: "Zuidas", qualifies: ["In-store spend of AED 400 or more", "Zuidas branch only"] },
      vox: { brand: "Pathé", brandColor: "#FFC20E", place: "Tuschinski, Reguliersbreestraat", place2: "Tuschinski", qualifies: ["Standard seats, booked at the counter or in the Pathé app", "Pathé Tuschinski only"] },
      shakeshack: { brand: "Five Guys", brandColor: "#D51E3A", place: "Leidseplein, Amsterdam", place2: "Leidseplein", qualifies: ["Dine-in, takeaway and Five Guys app orders", "Leidseplein branch only"] },
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
    partners: { etihad: { name: "Flying Blue", unit: "Flying Blue Miles", unitOne: "Flying Blue Mile", logo: "ld:flyingblue.com", account: "FB ···· 8821" },
      qatar: { name: "British Airways Avios", unit: "Avios", unitOne: "Avios", logo: "ld:avios.com" },
      flydubai: { name: "Lufthansa Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:milesandmore.com" } },
    gifts: { talabat: { name: "Thuisbezorgd", logo: "ld:thuisbezorgd.nl" } }
  },
  asia: {
    label: "Asia", city: "Singapore", cur: "SGD", lang: "en",
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
    partners: { etihad: { name: "KrisFlyer", unit: "KrisFlyer miles", unitOne: "KrisFlyer mile", logo: "ld:singaporeair.com", account: "KF ···· 8821" },
      qatar: { name: "Asia Miles", unit: "Asia Miles", unitOne: "Asia Mile", logo: "ld:cathaypacific.com" },
      flydubai: null },
    gifts: { talabat: { name: "foodpanda", logo: "ld:foodpanda.sg" }, amazon: { name: "Lazada", logo: "ld:lazada.sg" }, uber: { name: "Grab", logo: "ld:grab.com" } }
  }
};

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
    D.OFFERS.forEach(function (o) {
      var ov = R.offers[o.id];
      deep(o);
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
