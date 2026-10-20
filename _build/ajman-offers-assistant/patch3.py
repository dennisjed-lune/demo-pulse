# Round 3, exec'd from patch.py with t / R in scope.
import os, re, sys
SALES = "--sales" in sys.argv

# ---------- no Emirates, no Apple ----------
R('logo: "emirates", brand: "Emirates", initial: "E", logoBg: "#D8131B", logoFg: "#FFFFFF", brandColor: "#D8131B", channel: "Online",',
  'logo: "etihad", brand: "Etihad", initial: "E", logoBg: "#B48A48", logoFg: "#FFFFFF", brandColor: "#B48A48", channel: "Online",')
R('air: "Emirates", logo: "emirates", color: "#D8131B",', 'air: "Etihad", logo: "etihad", color: "#B48A48",', count=0)
t = re.sub(r'\n  \{ id: "skywards", name: "Emirates Skywards"[^\n]*', '', t)
t = re.sub(r'\n  \{ id: "apple", name: "Apple"[^\n]*', '', t)
R('{ id: "etihad", name: "Etihad Guest", unit: "Etihad Guest Miles", unitOne: "Guest Mile", logo: "etihad", color: "#FFFFFF", fg: "#FFFFFF", initial: "E", account: null,',
  '{ id: "etihad", name: "Etihad Guest", unit: "Etihad Guest Miles", unitOne: "Guest Mile", logo: "etihad", color: "#B48A48", fg: "#FFFFFF", initial: "E", account: "EY ···· 8821",')
R('linked: ["skywards", "bonvoy"]', 'linked: ["etihad", "bonvoy"]')
R('{ key: "h0", brand: "Emirates Skywards", logo: "emirates", initial: "E", logoBg: "#C8102E",', '{ key: "h0", brand: "Etihad Guest", logo: "etihad", initial: "E", logoBg: "#B48A48",')

def airline(x):
    x = x.replace("emirates.com", "etihad.com").replace("طيران الإمارات", "الاتحاد للطيران")
    x = x.replace("Emirates Skywards", "Etihad Guest").replace("Skywards Miles", "Etihad Guest Miles").replace("Skywards Mile", "Guest Mile").replace("Skywards", "Etihad Guest")
    return re.sub(r'(?<!Mall of the )(?<!United Arab )\bEmirates\b(?! NBD)', "Etihad", x)
t = airline(t)
for f in os.listdir("res.orig"):
    if f.endswith(".javascript"):
        open("res/" + f, "w").write(airline(open("res.orig/" + f).read()))

# ---------- themeable brand ----------
END = "--border-strong: #C4C4BF;\n  }"
cut = t.index(END) + len(END)
head, body = t[:cut], t[cut:]
head = head.replace(END, """--border-strong: #C4C4BF;
    --brand-light: #C8581A; --brand-dark: #A3460D; --brand-darker: #8A3A10; --brand-darkest: #5C2609;
    --brand-tint: #F6B36A; --brand-mint: #FCEBDD; --brand-rgb: 232,115,42;
  }""")
for a, b in [("#B9500F", "var(--accent)"), ("#C8581A", "var(--brand-light)"), ("#B84B14", "var(--brand-dark)"), ("#D05E1C", "var(--brand-light)"),
             ("#8A3A10", "var(--brand-darker)"), ("#5C2609", "var(--brand-darkest)"), ("#4A2208", "var(--brand-darkest)"),
             ("#F6B36A", "var(--brand-tint)"), ("#FCEBDD", "var(--brand-mint)"),
             ("rgba(232,115,42,", "rgba(var(--brand-rgb),"), ("rgba(232, 115, 42,", "rgba(var(--brand-rgb),")]:
    body = body.replace(a, b)
t = head + body
R('src="0afcc051-4aa5-49be-93ab-ae446bc4fe9b"', 'src="0afcc051-4aa5-49be-93ab-ae446bc4fe9b" data-bankmark="1"', count=0)
R('src="03a424c6-2156-4454-86ef-2bdcabe45751"', 'src="03a424c6-2156-4454-86ef-2bdcabe45751" data-bankwater="1"', count=0)
R('>Ajman Bank Rewards</span>', '>{{ t.fxRewardsName }}</span>')
R('{{ t.userId }} AJB-20481', '{{ t.fxUserLine }}')
R('.replace(/Люн|露恩|लून/g, "Ajman Bank");',
  '.replace(/Люн|露恩|लून/g, "Ajman Bank").replace(/Ajman Bank|مصرف عجمان/g, m => window.BANK ? (m === "Ajman Bank" ? window.BANK.en : (window.BANK.ar || window.BANK.en)) : m);')
R('      const m = { key: "l" + id, isLune: true, hasText: true, text, dir: rtl ? "rtl" : "ltr" };',
  '      const m = { key: "l" + id, isLune: true, hasText: true, text: BR(text), dir: rtl ? "rtl" : "ltr" };')
t = t.replace('langCode(this.props.language)', '(window.DEMO_LANG || (window.BANK && window.BANK.lang) || langCode(this.props.language))')
R('CUR = s.currency || this.props.currency || "AED";', 'CUR = s.currency || (window.BANK && window.BANK.cur) || this.props.currency || "AED";')
if SALES:
    R('<script src="aa0f1c00-0000-4000-8000-0000000f1c00"></script>',
      '<script src="bb5e7000-0000-4000-8000-0000000b5e70"></script>\n<script src="bb5e7001-0000-4000-8000-0000000b5e71"></script>\n<script src="aa0f1c00-0000-4000-8000-0000000f1c00"></script>')
    t = t.replace('<meta charset="utf-8">', '<meta charset="utf-8"><title>Offers Assistant · demo</title>', 1)

R('const FULL_BLEED_LOGOS = ["emirates", "deliveroo"];', 'const FULL_BLEED_LOGOS = ["etihad", "deliveroo"];')
t = t.replace('"dishoom","eataly","etihad","flydubai"', '"dishoom","eataly","flydubai"')
# urgency badges: one AA-safe red that sits with any bank colour (was the grocery-category orange at 3:1)
t = t.replace("--brand-rgb: 232,115,42;\n  }", "--brand-rgb: 232,115,42; --urgent: #B42318;\n  }", 1)
t = t.replace("var(--cat-grocery)", "var(--urgent)")

# ---------- region hooks (no-ops unless the sales setup defines REGION_*) ----------
R('const logoUrl = k => k ? ((window.__resources && window.__resources["logo_" + k]) || "assets/logos/" + k + ".png") : "";',
  'const logoUrl = k => { if (k && window.REGION_LOGO) k = window.REGION_LOGO(k); if (!k) return ""; if (/^ld:/.test(k)) return "https://img.logo.dev/" + k.slice(3) + "?token=pk_PCfI5A2ISc2tZmQNIql7Ww&size=200&format=png&retina=true"; return (window.__resources && window.__resources["logo_" + k]) || "assets/logos/" + k + ".png"; };')
t = t.replace('FULL_BLEED_LOGOS.indexOf(o.logo) >= 0 ?', '(FULL_BLEED_LOGOS.indexOf(o.logo) >= 0 || /^ld:/.test(o.logo || "")) ?')
R('GBP: [0.215, "\\u00A3"] };', 'GBP: [0.215, "\\u00A3"], SGD: [0.35, "S$"] };')
R('  renderVals() {\n    const s = this.state;', '  renderVals() {\n    if (window.REGION_APPLY && !OFFERS.__region) { OFFERS.__region = true; window.REGION_APPLY({ OFFERS, STATEMENT, TXNS, GIFTCARDS, PARTNERS, TRIPS, CATEGORY_RATES, TAGS }); }\n    const s = this.state;')
R('const BR = v => (v || "")', 'const BR = v => (window.REGION_TEXT ? window.REGION_TEXT(v || "") : (v || ""))')
R('      spentRows: spent.map((r, i) => Object.assign({}, r, {', '      spentRows: spent.map((r, i) => Object.assign({}, r, { brand: BR(r.brand),')

# money: two decimals under 10 (9.50, not 9.5)
R('const num = nf(v >= 10 ? Math.round(v) : Math.round(v * 10) / 10);', 'const r2 = Math.round(v * 100) / 100; const num = v >= 10 || Number.isInteger(r2) ? nf(Math.round(v)) : r2.toLocaleString(NUM_LOCALE[LANG] || "en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });')

R('Object.keys(window.UI_FIX || {}).forEach(k => { if (UI[k]) Object.assign(UI[k], window.UI_FIX[k]); });',
  'Object.keys(window.UI_FIX || {}).forEach(k => { if (UI[k]) Object.assign(UI[k], window.UI_FIX[k]); }); if (window.UI_PERSONALIZE) window.UI_PERSONALIZE(UI);')
R('text: (pack && pack.prompt) || T.voicePrompt || "What are you after? Tell me a shop, a category, or where you\'re headed \\u2014 or pick one of these.",',
  'text: (window.BANK && window.BANK.customer ? (lang === "ar" ? "أهلاً " : "Hi ") + window.BANK.customer + ". " : "") + ((pack && pack.prompt) || T.voicePrompt || "What are you after? Tell me a shop, a category, or where you\'re headed \\u2014 or pick one of these."),')

R('const curify = s => (s || "").replace(', 'const curify = s => (s || "").replace(/(\\d[\\d,.\\u202f\\u00a0 ]*\\d|\\d)\\s?AED\\b/g, (m, n) => money(parseFloat(n.replace(/[\\s\\u202f\\u00a0,]/g, "")))).replace(')
# raw deal strings (rail subtitle, stays, nearby) also get the regional names
R('railSub: words(o.deal.replace(', 'railSub: words(BR(o.deal).replace(')
R('return { key: id, brand: o.brand, place: o.place2, deal: o.deal, value: o.value,', 'return { key: id, brand: o.brand, place: o.place2, deal: BR(o.deal), value: o.value,')
R('return { key: id, brand: o.brand, deal: words(o.deal, pts),', 'return { key: id, brand: o.brand, deal: words(BR(o.deal), pts),')
