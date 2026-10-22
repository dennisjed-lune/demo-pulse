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
