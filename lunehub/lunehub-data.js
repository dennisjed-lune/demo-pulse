/* LuneHub — demo data generator v3
   Account: Dubai Retail Group · 2,000 customers · ~300k transactions
   Multi-country / multi-currency · full Lune enrichment fields per transaction.
   Customers have a brand-affinity subset (not everyone on every brand).
   Seeded so figures are stable across reloads. */
(function () {
  function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  var rand = mulberry32(20260622);
  function ri(n) { return Math.floor(rand() * n); }
  function fmtInt(n) { return Math.round(n).toLocaleString('en-US'); }
  function fmtAmt(n) { return n.toLocaleString('en-US', { maximumFractionDigits: 2 }); }
  function fmt2(n) { return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

  var BASE = 'AED';
  var FX = { AED: 1, SAR: 0.979, QAR: 1.008, KWD: 11.93, OMR: 9.54, BHD: 9.74, USD: 3.6725, GBP: 4.66, EUR: 3.99, INR: 0.044, EGP: 0.0755 };
  var COUNTRIES = {
    UAE: { name: 'United Arab Emirates', code: 'ARE', cur: 'AED', cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Al Ain'] },
    KSA: { name: 'Saudi Arabia', code: 'SAU', cur: 'SAR', cities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca'] },
    QAT: { name: 'Qatar', code: 'QAT', cur: 'QAR', cities: ['Doha', 'Al Rayyan'] },
    KWT: { name: 'Kuwait', code: 'KWT', cur: 'KWD', cities: ['Kuwait City', 'Hawalli'] },
    OMN: { name: 'Oman', code: 'OMN', cur: 'OMR', cities: ['Muscat', 'Salalah'] },
    BHR: { name: 'Bahrain', code: 'BHR', cur: 'BHD', cities: ['Manama', 'Riffa'] },
    USA: { name: 'United States', code: 'USA', cur: 'USD', cities: ['New York', 'San Francisco', 'Seattle'] },
    GBR: { name: 'United Kingdom', code: 'GBR', cur: 'GBP', cities: ['London', 'Manchester'] },
    FRA: { name: 'France', code: 'FRA', cur: 'EUR', cities: ['Paris', 'Nice'] },
    IND: { name: 'India', code: 'IND', cur: 'INR', cities: ['Mumbai', 'Bengaluru', 'Delhi'] },
    EGY: { name: 'Egypt', code: 'EGY', cur: 'EGP', cities: ['Cairo', 'Alexandria'] }
  };
  var SCOPE = {
    uae: [['UAE', 100]],
    gcc: [['UAE', 70], ['KSA', 12], ['QAT', 8], ['KWT', 5], ['OMN', 3], ['BHR', 2]],
    global: [['UAE', 55], ['USA', 18], ['GBR', 10], ['IND', 8], ['EGY', 5], ['FRA', 4]],
    travel: [['UAE', 60], ['GBR', 10], ['IND', 10], ['KSA', 8], ['EGY', 6], ['FRA', 6]]
  };
  function pickCountry(scope) {
    var arr = SCOPE[scope], tot = 0, i;
    for (i = 0; i < arr.length; i++) tot += arr[i][1];
    var r = rand() * tot;
    for (i = 0; i < arr.length; i++) { r -= arr[i][1]; if (r <= 0) return arr[i][0]; }
    return arr[0][0];
  }

  var CATMETA = {
    Groceries: { c: '#2F8C82', sub: 6, mcc: '5411' }, Shopping: { c: '#C2796C', sub: 9, mcc: '5651' },
    Electronics: { c: '#3E5C9C', sub: 5, mcc: '5732' }, Dining: { c: '#C8A878', sub: 7, mcc: '5812' },
    Travel: { c: '#0F4F47', sub: 4, mcc: '4722' }, Transportation: { c: '#6B8693', sub: 8, mcc: '4121' },
    Entertainment: { c: '#8A6B7E', sub: 6, mcc: '7832' }, Services: { c: '#5E7A8A', sub: 5, mcc: '4814' },
    'Financial Services': { c: '#1C645D', sub: 4, mcc: '6012' }, Wellness: { c: '#7FA8A1', sub: 7, mcc: '5912' }
  };
  var SUBCATS = {
    Groceries: ['Supermarkets', 'Convenience Stores', 'Specialty Food', 'Bakeries'],
    Shopping: ['Department Stores', 'Fashion & Apparel', 'Online Marketplace', 'Footwear'],
    Electronics: ['Consumer Electronics', 'Computers', 'Mobile & Accessories'],
    Dining: ['Restaurants', 'Fast Food', 'Cafes', 'Food Delivery'],
    Travel: ['Airlines', 'Hotels', 'Travel Agencies'],
    Transportation: ['Ride Hailing', 'Fuel', 'Tolls & Parking'],
    Entertainment: ['Cinemas', 'Theme Parks', 'Events'],
    Services: ['Telecom', 'Utilities', 'Professional Services'],
    'Financial Services': ['Banking', 'Insurance', 'Investments'],
    Wellness: ['Pharmacies', 'Fitness', 'Personal Care']
  };
  var TRANSFER_SUBS = ['Money Transfers to Others', 'Salary Credit', 'ATM Withdrawal', 'Bill Payment', 'Card to Card Transfer', 'Government Fees'];
  var CARBON = { Travel: 0.18, Transportation: 0.12, Electronics: 0.06, Shopping: 0.04, Groceries: 0.03, Dining: 0.025, Services: 0.02, Entertainment: 0.02, 'Financial Services': 0.005, Wellness: 0.02 };

  var LOCS = { UAE: ['Mall of the Emirates', 'The Dubai Mall', 'Dubai Marina', 'Deira City Centre', 'Yas Mall AUH', 'City Centre Sharjah'] };
  // name, category, color, weight, avgAED, descTemplate, scope, arabic, url
  var BRANDS = [
    ['Carrefour', 'Groceries', '#2F8C82', 9, 180, 'CARREFOUR {loc}', 'uae', 'كارفور', 'carrefouruae.com'],
    ['Lulu Hypermarket', 'Groceries', '#3E7A72', 7, 150, 'LULU HYPERMARKET {city}', 'uae', 'لولو هايبر ماركت', 'luluhypermarket.com'],
    ['Spinneys', 'Groceries', '#4E9488', 4, 230, 'SPINNEYS {city}', 'uae', 'سبينس', 'spinneys.com'],
    ['Union Coop', 'Groceries', '#5E7A72', 3, 160, 'UNION COOP {city}', 'uae', 'جمعية الاتحاد', 'unioncoop.ae'],
    ['Marhaba Mart', 'Groceries', '#1C645D', 6, 120, 'MARHABA MART {city}', 'uae', 'مرحبا مارت', 'marhabamart.ae'],
    ['Noon', 'Shopping', '#C2796C', 7, 240, 'NOON.COM {city}', 'global', 'نون', 'noon.com'],
    ['Amazon', 'Shopping', '#B0682E', 7, 210, 'AMAZON {ctry} PAYMENTS', 'global', 'أمازون', 'amazon.ae'],
    ['Namshi', 'Shopping', '#9C5A6B', 4, 320, 'NAMSHI.COM {city}', 'gcc', 'نمشي', 'namshi.com'],
    ['Centrepoint', 'Shopping', '#A8453E', 3, 380, 'CENTREPOINT {city}', 'uae', 'سنتربوينت', 'centrepointstores.com'],
    ['Max Fashion', 'Shopping', '#B05A52', 3, 190, 'MAX FASHION {city}', 'uae', 'ماكس', 'maxfashion.com'],
    ['Ounass', 'Shopping', '#7E5A6B', 2, 1200, 'OUNASS.COM {city}', 'gcc', 'أناس', 'ounass.ae'],
    ['Sharaf DG', 'Electronics', '#3E5C9C', 4, 850, 'SHARAF DG {city}', 'gcc', 'شرف دي جي', 'sharafdg.com'],
    ['Apple Store', 'Electronics', '#2E4A7C', 3, 1800, 'APPLE STORE {city}', 'global', 'آبل', 'apple.com'],
    ['Jumbo Electronics', 'Electronics', '#4E6CAC', 2, 720, 'JUMBO ELECTRONICS {city}', 'uae', 'جامبو', 'jumbo.ae'],
    ['Talabat', 'Dining', '#C8A878', 8, 75, 'TALABAT.COM {city}', 'gcc', 'طلبات', 'talabat.com'],
    ['Deliveroo', 'Dining', '#3E9C9C', 5, 85, 'DELIVEROO {city}', 'gcc', 'دليفرو', 'deliveroo.ae'],
    ['Shake Shack', 'Dining', '#9C8A5E', 3, 95, 'SHAKE SHACK {city}', 'gcc', 'شيك شاك', 'shakeshack.ae'],
    ['Starbucks', 'Dining', '#1E6B52', 6, 38, 'STARBUCKS {city}', 'gcc', 'ستاربكس', 'starbucks.ae'],
    ['KFC', 'Dining', '#A8453E', 4, 55, 'KFC {city}', 'gcc', 'كنتاكي', 'kfc.ae'],
    ['Emirates', 'Travel', '#0F4F47', 5, 2600, 'EMIRATES {city}', 'travel', 'طيران الإمارات', 'emirates.com'],
    ['Etihad Airways', 'Travel', '#84713E', 3, 2400, 'ETIHAD AIRWAYS {city}', 'travel', 'الاتحاد للطيران', 'etihad.com'],
    ['flydubai', 'Travel', '#2F7A6E', 3, 900, 'FLYDUBAI {city}', 'travel', 'فلاي دبي', 'flydubai.com'],
    ['Air Arabia', 'Travel', '#A8453E', 3, 650, 'AIR ARABIA {city}', 'travel', 'العربية للطيران', 'airarabia.com'],
    ['Careem', 'Transportation', '#1E7A5E', 7, 32, 'CAREEM {city}', 'gcc', 'كريم', 'careem.com'],
    ['Uber', 'Transportation', '#2C2C30', 5, 38, 'UBER TRIP {city}', 'global', 'أوبر', 'uber.com'],
    ['ENOC', 'Transportation', '#6B8693', 5, 160, 'ENOC STATION {city}', 'uae', 'إينوك', 'enoc.com'],
    ['ADNOC', 'Transportation', '#5E7A8A', 5, 170, 'ADNOC {city}', 'uae', 'أدنوك', 'adnocdistribution.ae'],
    ['Salik', 'Transportation', '#84908C', 4, 20, 'SALIK TOLL GATE {city}', 'uae', 'سالك', 'salik.ae'],
    ['VOX Cinemas', 'Entertainment', '#8A6B7E', 4, 90, 'VOX CINEMAS {city}', 'uae', 'فوكس سينما', 'voxcinemas.com'],
    ['Emaar Entertainment', 'Entertainment', '#7E5A6B', 2, 260, 'EMAAR ENTERTAINMENT {city}', 'uae', 'إعمار للترفيه', 'emaarentertainment.com'],
    ['Etisalat e&', 'Services', '#5E7A8A', 5, 320, 'ETISALAT e& {city}', 'uae', 'اتصالات', 'etisalat.ae'],
    ['du', 'Services', '#6B8693', 4, 280, 'DU TELECOM {city}', 'uae', 'دو', 'du.ae'],
    ['DEWA', 'Services', '#4E6C7C', 4, 540, 'DEWA UTILITY {city}', 'uae', 'ديوا', 'dewa.gov.ae'],
    ['Emirates NBD', 'Financial Services', '#1C645D', 3, 1500, 'EMIRATES NBD {city}', 'uae', 'بنك الإمارات دبي الوطني', 'emiratesnbd.com'],
    ['Aster Pharmacy', 'Wellness', '#7FA8A1', 4, 110, 'ASTER PHARMACY {city}', 'gcc', 'صيدلية آستر', 'asterpharmacy.com'],
    ['Fitness First', 'Wellness', '#5E8A82', 2, 300, 'FITNESS FIRST {city}', 'uae', 'فيتنس فيرست', 'fitnessfirstme.com']
  ];
  var pool = [];
  BRANDS.forEach(function (b, i) { for (var k = 0; k < b[3]; k++) pool.push(i); });
  var brandMeta = {};
  BRANDS.forEach(function (b) { brandMeta[b[0]] = { ar: b[7], url: b[8], cat: b[1] }; });

  var END = new Date(2026, 5, 22);            // 22 Jun 2026
  var WIN_START = new Date(2026, 4, 11);      // overview window day 0 (11 May)
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtDate(d) { return d.getDate() + ' ' + MON[d.getMonth()] + ' ' + d.getFullYear(); }

  var transactions = [];
  var byBrand = {}, byCat = {}, byCountry = {}, monthCat = {};
  var dayCounts = []; for (var i = 0; i < 31; i++) dayCounts.push(0);
  var idc = 89000000, refc = 158000000;
  var TRANSFER_RATE = 0.22;

  // banks: ADIB (on-us, the bank's own card) + off-us banks linked by the customer via Open Finance
  var BANK_ON = 'ADIB', BANKS_OFF = ['FAB', 'Emirates NBD'];
  var bankData = {};
  function bd(bk) { return bankData[bk] || (bankData[bk] = { byBrand: {}, byCat: {}, cust: {}, spend: 0, txAll: 0 }); }
  var panelSpend = { ADIB: 0, FAB: 0, 'Emirates NBD': 0 }, panelCount = 0;

  function emitEnriched(bank, c, affList, d, isPanel) {
    var b = BRANDS[affList[ri(affList.length)]];
    var ck = pickCountry(b[6]), C = COUNTRIES[ck], cur = C.cur;
    var city = C.cities[ri(C.cities.length)];
    var aed = Math.max(2, b[4] * (0.4 + rand() * 1.6));
    var local = aed / FX[cur];
    var raw2 = b[5].replace('{loc}', LOCS.UAE[ri(LOCS.UAE.length)]).replace('{city}', city).replace('{ctry}', C.code);
    transactions.push([String(idc++), raw2, b[0], b[2], b[1], fmtDate(d), '-' + fmtAmt(local), cur, C.name, C.code, CATMETA[b[1]].mcc, c, bank]);
    // combined (all-banks) aggregates
    var bb = byBrand[b[0]] || (byBrand[b[0]] = { spend: 0, tx: 0, cust: {}, color: b[2], cat: b[1] }); bb.spend += aed; bb.tx++; bb.cust[c] = 1;
    var cc = byCat[b[1]] || (byCat[b[1]] = { spend: 0, tx: 0, cust: {}, color: CATMETA[b[1]].c }); cc.spend += aed; cc.tx++; cc.cust[c] = 1;
    var co = byCountry[C.name] || (byCountry[C.name] = { spend: 0, tx: 0, code: C.code, cur: cur }); co.spend += aed; co.tx++;
    var mk = d.getFullYear() + '-' + d.getMonth(), mc = monthCat[mk] || (monthCat[mk] = {}); mc[b[1]] = (mc[b[1]] || 0) + aed;
    // per-bank aggregates
    var P = bd(bank);
    var pb = P.byBrand[b[0]] || (P.byBrand[b[0]] = { spend: 0, tx: 0, cust: {}, color: b[2], cat: b[1] }); pb.spend += aed; pb.tx++; pb.cust[c] = 1;
    var pc = P.byCat[b[1]] || (P.byCat[b[1]] = { spend: 0, tx: 0, cust: {}, color: CATMETA[b[1]].c }); pc.spend += aed; pc.tx++; pc.cust[c] = 1;
    P.cust[c] = 1; P.spend += aed; P.txAll++;
    if (isPanel) panelSpend[bank] += aed;
  }

  for (var c = 0; c < 2000; c++) {
    var aff = {}, affList = [], want = 6 + ri(9), guard = 0;
    while (affList.length < want && guard < 80) { var bi = pool[ri(pool.length)]; if (!aff[bi]) { aff[bi] = 1; affList.push(bi); } guard++; }
    var roll = rand(), n;
    if (roll < 0.5) n = 30 + ri(70); else if (roll < 0.85) n = 100 + ri(140); else n = 240 + ri(260);
    var linked = rand() < 0.42; if (linked) panelCount++;
    var offBank = BANKS_OFF[rand() < 0.55 ? 0 : 1];

    for (var t = 0; t < n; t++) {
      var off = ri(196), d = new Date(END.getTime() - off * 86400000);
      var di = Math.round((d.getTime() - WIN_START.getTime()) / 86400000);
      if (di >= 0 && di < 31) dayCounts[di]++;   // overview = ADIB's own usage
      if (rand() < TRANSFER_RATE) {
        var amtT = Math.max(5, Math.round((10 + rand() * rand() * 6000) * 100) / 100);
        var raw = rand() < 0.12 ? '' : 'Electron-Ref#20000000000' + (refc++);
        transactions.push([String(idc++), raw, '', '#6B8693', 'Transfer', fmtDate(d), '-' + fmtAmt(amtT), 'AED', 'United Arab Emirates', 'ARE', '', c, BANK_ON]);
        var PA = bd(BANK_ON); PA.cust[c] = 1; PA.txAll++;
        continue;
      }
      emitEnriched(BANK_ON, c, affList, d, linked);
    }
    // off-us spend for opted-in (linked) customers — visible via Open Finance
    if (linked) {
      var nOff = Math.round(n * (0.3 + rand() * 0.45));
      for (var o = 0; o < nOff; o++) emitEnriched(offBank, c, affList, new Date(END.getTime() - ri(196) * 86400000), true);
    }
  }

  function nKeys(o) { return Object.keys(o.cust).length; }
  function bySpendIdx(i) { return function (a, b) { return parseFloat(b[i].replace(/[^0-9.]/g, '')) - parseFloat(a[i].replace(/[^0-9.]/g, '')); }; }
  function brandsArr(bmap) { return Object.keys(bmap).map(function (k) { var b = bmap[k], cn = nKeys(b); return [k, b.color, b.cat, 'AED ' + fmtInt(b.spend), fmtInt(b.tx), fmtInt(cn), 'AED ' + fmt2(cn ? b.spend / cn : 0)]; }).sort(bySpendIdx(3)); }
  function catsArr(cmap) { return Object.keys(cmap).map(function (k) { var c = cmap[k], cn = nKeys(c); return [k, c.color, 'AED ' + fmtInt(c.spend), fmtInt(c.tx), fmtInt(cn), CATMETA[k].sub]; }).sort(bySpendIdx(2)); }

  var brands = brandsArr(byBrand);
  var categories = catsArr(byCat);
  var countries = Object.keys(byCountry).map(function (k) { var c = byCountry[k]; return { name: k, code: c.code, cur: c.cur, spend: c.spend, tx: c.tx }; }).sort(function (a, b) { return b.spend - a.spend; });

  var totalSpend = 0; Object.keys(byCat).forEach(function (k) { totalSpend += byCat[k].spend; });
  var topCats = categories.slice(0, 7).map(function (r) { return r[0]; });
  var months = [['Dec 2025', 2025, 11], ['Jan 2026', 2026, 0], ['Feb 2026', 2026, 1], ['Mar 2026', 2026, 2], ['Apr 2026', 2026, 3], ['May 2026', 2026, 4], ['Jun 2026', 2026, 5]];
  var spendMonths = months.map(function (m) {
    var mc = monthCat[m[1] + '-' + m[2]] || {};
    return [m[0], topCats.map(function (cat) { return Math.round(mc[cat] || 0); })];
  });
  var curList = {}; transactions.forEach(function (r) { curList[r[7]] = 1; });

  // ---- customer demographics: age / gender / nationality (per customer index) ----
  var rd = mulberry32(70707);
  function wpool(arr) { var p = []; arr.forEach(function (x) { for (var i = 0; i < x[1]; i++) p.push(x[0]); }); return p; }
  var AGE_BANDS = [['18–24', 18, 24, 15], ['25–34', 25, 34, 32], ['35–44', 35, 44, 26], ['45–54', 45, 54, 16], ['55–64', 55, 64, 8], ['65+', 65, 72, 4]];
  var ageBandPool = wpool(AGE_BANDS.map(function (b, i) { return [i, b[3]]; }));
  var genPool = wpool([['Male', 58], ['Female', 40], ['Undisclosed', 2]]);
  var natPool = wpool([['Indian', 28], ['Emirati', 16], ['Pakistani', 12], ['Egyptian', 9], ['Filipino', 8], ['British', 6], ['Bangladeshi', 5], ['Jordanian', 4], ['Lebanese', 4], ['Saudi', 3], ['Other', 5]]);
  var customers = [];
  for (var cix = 0; cix < 2000; cix++) {
    var bnd = AGE_BANDS[ageBandPool[Math.floor(rd() * ageBandPool.length)]];
    customers.push({ a: bnd[1] + Math.floor(rd() * (bnd[2] - bnd[1] + 1)), g: genPool[Math.floor(rd() * genPool.length)], n: natPool[Math.floor(rd() * natPool.length)] });
  }

  // per-bank aggregates for the analytics bank/source toggle
  function bankKpi(P) { var cn = nKeys(P); return { customers: cn, transactions: P.txAll, spend: P.spend, spendPerCustomer: cn ? P.spend / cn : 0 }; }
  var bankAgg = { all: { categories: categories, brands: brands, kpi: { customers: 2000, transactions: transactions.length, spend: totalSpend, spendPerCustomer: totalSpend / 2000 } } };
  [BANK_ON].concat(BANKS_OFF).forEach(function (bk) { var P = bd(bk); bankAgg[bk] = { categories: catsArr(P.byCat), brands: brandsArr(P.byBrand), kpi: bankKpi(P) }; });
  var panelTotal = (panelSpend.ADIB + panelSpend.FAB + panelSpend['Emirates NBD']) || 1;
  var shareOfWallet = { ADIB: panelSpend.ADIB / panelTotal, FAB: panelSpend.FAB / panelTotal, 'Emirates NBD': panelSpend['Emirates NBD'] / panelTotal };
  var adib = bd(BANK_ON);

  window.LH_DATA = {
    currency: BASE,
    currencies: Object.keys(curList),
    countries: countries,
    countryMeta: COUNTRIES,
    brandMeta: brandMeta,
    subcats: SUBCATS,
    transferSubs: TRANSFER_SUBS,
    carbon: CARBON,
    fx: FX,
    customers: customers,
    ageBands: AGE_BANDS.map(function (b) { return [b[0], b[1], b[2]]; }),
    banks: [BANK_ON].concat(BANKS_OFF),
    bankAgg: bankAgg,
    shareOfWallet: shareOfWallet,
    panelSize: panelCount,
    kpi: { customers: nKeys(adib), transactions: adib.txAll, spend: adib.spend, spendPerCustomer: nKeys(adib) ? adib.spend / nKeys(adib) : 0, quota: 600000 },
    categories: categories,
    brands: brands,
    transactions: transactions,
    overviewBars: dayCounts,
    spendMonths: spendMonths,
    spendColors: topCats.map(function (cat) { return CATMETA[cat].c; }),
    spendLegend: topCats.slice()
  };
})();
