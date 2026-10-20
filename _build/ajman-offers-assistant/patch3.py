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

# ================= UX-laws round (app only) =================
# 1. notification: 44px close target, auto-hides after 6s like an iOS banner
R('<span sc-camel-on-click="{{ dismissNotif }}" style="flex: none; font-size: 15px; color: var(--text-tertiary); padding: 0 2px;">×</span>',
  '<span sc-camel-on-click="{{ dismissNotif }}" aria-label="Dismiss" style="cursor: pointer; flex: none; width: 44px; height: 44px; margin: -10px -12px -10px -6px; display: flex; align-items: center; justify-content: center; font-size: 18px; color: var(--text-secondary);">×</span>')
R('if (this.props.showNotification !== false) this.timers.push(setTimeout(() => this.setState({ notif: true }), 1400));',
  'if (this.props.showNotification !== false) { this.timers.push(setTimeout(() => this.setState({ notif: true }), 1400)); this.timers.push(setTimeout(() => this.hideNotif(), 7400)); }')
# 2. active tab: bank-colour tint + bank-colour icon/label instead of a solid black pill
R('''        bg: screen === k ? "var(--lune-teal)" : "transparent",
        fg: screen === k ? "#FFFFFF" : "var(--text-primary)",''', '''        bg: screen === k ? "var(--primary-20)" : "transparent",
        fg: screen === k ? "var(--accent)" : "var(--text-secondary)",''')
# 3. home: the whole screen scrolls (hero card scrolls away), search sticks to the top
_h = t.index('<!-- ============ OFFERS HOME ============ -->')
_o = '<div style="flex: 1; min-height: 0; display: flex; flex-direction: column; animation: screenIn .3s ease both;">'
_k = t.index(_o, _h)
t = t[:_k] + '<div class="feed" style="flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; animation: screenIn .3s ease both;">' + t[_k + len(_o):]
R('<div class="feed" style="flex: 1; min-height: 0; overflow-y: auto; padding: 8px 20px 92px; display: flex; flex-direction: column; gap: 24px;">',
  '<div style="flex: none; padding: 8px 20px 92px; display: flex; flex-direction: column; gap: 24px;">')
R('<div style="padding: 0 20px 12px; flex: none;">', '<div style="position: sticky; top: 0; z-index: 6; padding: 8px 20px 12px; flex: none; background: var(--bg-canvas);">')
R('<div style="display: flex; align-items: center; gap: 12px; padding: 8px 20px 14px; flex: none;', '<div style="position: sticky; top: 0; z-index: 6; background: var(--bg-canvas); display: flex; align-items: center; gap: 12px; padding: 8px 20px 14px; flex: none;')
# 4. offer detail: the end time sits with the value, not below the fold
R('''              <span style="font-size: 13px; color: var(--text-secondary); text-wrap: pretty;">{{ detailValueNote }}</span>
            </div>''', '''              <span style="font-size: 13px; color: var(--text-secondary); text-wrap: pretty;">{{ detailValueNote }}</span>
              <span style="display: flex; align-items: center; gap: 6px; margin-top: 4px; font-size: 12.5px; font-weight: 500; color: {{ detailEndsFg }};"><svg sc-camel-view-box="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="flex: none;"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>{{ detailValidity }}</span>
            </div>''')
R('      detailUrgent: !!(d && d.urgent),', '      detailUrgent: !!(d && d.urgent),\n      detailEndsFg: d && d.urgent ? "var(--urgent)" : "var(--text-secondary)",')
# 5. deal lines in chat cards, stays and the rail use the translated copy
R('railSub: words(BR(o.deal).replace(', 'railSub: LANG !== "en" ? words(mcL(o.deal, T), pts) : words(BR(o.deal).replace(')
R('return { key: id, brand: o.brand, place: o.place2, deal: BR(o.deal), value: o.value,', 'return { key: id, brand: o.brand, place: o.place2, deal: mcL(o.deal, T), value: o.value,')
R('return { key: id, brand: o.brand, deal: words(BR(o.deal), pts),', 'return { key: id, brand: o.brand, deal: words(mcL(o.deal, T), pts),')
R('distance: o.distance || T.nearbyWord,', 'distance: (o.distance ? distL(o.distance, T) : "") || T.nearbyWord,')
# 6. chat map: light, quieter, shorter
R('<div style="position: relative; height: 150px; background: linear-gradient(135deg, #0D2320 0%, #0A1A1C 100%);">',
  '<div style="position: relative; height: 120px; background: linear-gradient(135deg, #F1F3F2 0%, #E7EBE9 100%);">')
R('background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 34px 34px;"></div>',
  'background-image: linear-gradient(rgba(7,3,18,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7,3,18,.06) 1px, transparent 1px), linear-gradient(28deg, transparent 46%, rgba(255,255,255,.9) 46%, rgba(255,255,255,.9) 54%, transparent 54%); background-size: 34px 34px, 34px 34px, 100% 100%;"></div>')
R('border-radius: 999px; background: rgba(7,3,18,.55); backdrop-filter: blur(6px); font-size: 11.5px; font-weight: 500; color: #FFFFFF;">{{ t.mapLabel }}</div>',
  'border-radius: 999px; background: #FFFFFF; border: 1px solid var(--border-subtle); font-size: 11.5px; font-weight: 500; color: var(--text-primary);">{{ t.mapLabel }}</div>')
# 7. tap targets: icon buttons get a 44px hit area (rail "+" 40px, voice 36px inside the 44px search row); chips at least 40px tall
_b0, _b1 = t.index('</helmet>'), t.index('</x-dc>')
_body = t[_b0:_b1]
_SIZE = {"startVoice": 36, "r.onActivate": 40}
def _fix_btn(m):
    tag, name, st = m.group(0), m.group(1), m.group(2)
    mw = re.search(r'width: (\d+)px; height: (\d+)px', st)
    if mw and int(mw.group(2)) < 44:
        n = _SIZE.get(name, 44)
        return tag.replace(mw.group(0), 'width: %dpx; height: %dpx' % (n, n))
    if name in ("tc.onPick", "cy.onPick", "cc.onPick", "c.onPick", "dc.onPick", "wc.onPick", "pc2.onPick", "sc.onPick", "yc.onPick"):
        return tag.replace('style="cursor: pointer;', 'style="cursor: pointer; min-height: 40px; box-sizing: border-box; display: inline-flex; align-items: center;', 1)
    return tag
_body = re.sub(r'<(?:div|span)[^>]*sc-camel-on-click="\{\{ ([^ ]+) \}\}"[^>]*style="([^"]*)"', _fix_btn, _body)
t = t[:_b0] + _body + t[_b1:]
# 8. bidi: isolate numbers and Latin runs inside RTL text (user ID, partner rows, transfer rate)
R('(p.account || "···· " + (4100 + i * 37))', '"\\u2068" + (p.account || "···· " + (4100 + i * 37)) + "\\u2069"')
R('money(1) + " = " + nf(Math.round(PTS * p.rate * 100) / 100) + " " + unitL)', '"\\u2068" + money(1) + " = " + nf(Math.round(PTS * p.rate * 100) / 100) + " " + unitL + "\\u2069")')
R('money(1) + " = " + nf(Math.round(PTS * xfP.rate * 100) / 100) + " " + xfP.unit)', '"\\u2068" + money(1) + " = " + nf(Math.round(PTS * xfP.rate * 100) / 100) + " " + xfP.unit + "\\u2069")')
# 9. redeem: linked partners first (they are the ones you can transfer to now)
R('      partners: PARTNERS.map((p, i) => {', '      partners: PARTNERS.slice().sort((a, b) => (s.linked.indexOf(b.id) >= 0 ? 1 : 0) - (s.linked.indexOf(a.id) >= 0 ? 1 : 0)).map((p, i) => {')
# 10. tier ladder: unreached tiers readable (was 50% white on the brand colour)
R('fg: TP.cardFg, opacity: reached ? 1 : .5 };', 'fg: TP.cardFg, opacity: reached ? 1 : .78 };')
# 11. language switch re-renders at once (exposed for the outside switch)
R('    this.clock = setInterval(() => this.setState({ tick: Date.now() }), 1000);', '    this.clock = setInterval(() => this.setState({ tick: Date.now() }), 1000);\n    window.__oaRender = () => this.forceUpdate();')
# 12. right keyboard per field
R('sc-camel-on-change="{{ onGcCustom }}"', 'sc-camel-on-change="{{ onGcCustom }}" inputmode="numeric" enterkeyhint="done" autocomplete="off"')
R('sc-camel-on-key-down="{{ onKey }}"', 'sc-camel-on-key-down="{{ onKey }}" enterkeyhint="send" autocomplete="off"')
R('sc-camel-on-key-down="{{ onSearchKey }}"', 'sc-camel-on-key-down="{{ onSearchKey }}" type="search" enterkeyhint="search" autocomplete="off"')
R('sc-camel-on-change="{{ onXfMember }}"', 'sc-camel-on-change="{{ onXfMember }}" autocapitalize="characters" autocomplete="off" spellcheck="false" enterkeyhint="done"')
R('sc-camel-on-change="{{ onReportRef }}"', 'sc-camel-on-change="{{ onReportRef }}" autocapitalize="characters" autocomplete="off" spellcheck="false" enterkeyhint="done"')
# 13. on a real phone the app fills the screen (no phone-in-a-phone frame, no fake status bar)
R('<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px;', '<div class="oa-stage" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px;')
R('<div data-theme="light" style="width: 390px; height: 844px;', '<div class="oa-phone" data-theme="light" style="width: 390px; height: 844px;')
R('style="position: relative; width: 100%; height: 100%; border-radius: 38px;', 'class="oa-screen" style="position: relative; width: 100%; height: 100%; border-radius: 38px;')
R('<div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 26px 4px;', '<div class="oa-status" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 26px 4px;')
R('  .thread::-webkit-scrollbar,', '''  @media (max-width: 500px) {
    .oa-stage { padding: 0 !important; min-height: 100dvh !important; }
    .oa-phone { width: 100vw !important; height: 100dvh !important; border-radius: 0 !important; padding: 0 !important; box-shadow: none !important; }
    .oa-screen { border-radius: 0 !important; padding-top: env(safe-area-inset-top); }
    .oa-status { visibility: hidden; padding-top: 8px !important; }
  }
  .thread::-webkit-scrollbar,''')
# impeccable: tab bar without the hairline + wide-shadow combination
R('border-radius: 28px; background: var(--bg-raised); border: 1px solid var(--border-default); box-shadow: 0 14px 34px rgba(0,46,42,.18), 0 2px 6px rgba(0,46,42,.08);',
  'border-radius: 28px; background: var(--bg-raised); box-shadow: 0 6px 20px rgba(7,3,18,.10), 0 1px 3px rgba(7,3,18,.08);')
