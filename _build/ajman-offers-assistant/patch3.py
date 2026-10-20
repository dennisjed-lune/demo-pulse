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

# ================= colours + stamps + currencies round =================
# currencies: every ISO currency (rates from window.FX_RATES / the live rate saved at setup), Intl formatting for the ones without a hand-set symbol
R('GBP: [0.215, "\\u00A3"], SGD: [0.35, "S$"] };', '''GBP: [0.215, "\\u00A3"], SGD: [0.35, "S$"] };
const fxOf = () => { if (!FX[CUR] || (window.BANK && window.BANK.cur === CUR && window.BANK.fx && !FX[CUR].__live)) { const B = window.BANK; const r = (B && B.cur === CUR && B.fx) || (window.FX_RATES || {})[CUR]; if (r) { FX[CUR] = [r, FX[CUR] ? FX[CUR][1] : null]; if (B && B.cur === CUR && B.fx) FX[CUR].__live = true; } } return FX[CUR] ? FX[CUR] : FX.AED; };
const intlCur = v => { try { const loc = NUM_LOCALE[LANG] || "en-US"; const d = new Intl.NumberFormat("en", { style: "currency", currency: CUR }).resolvedOptions().maximumFractionDigits; const fd = Math.abs(v) >= 10 ? 0 : Math.min(d, 2); const p = Math.pow(10, fd); const r = Math.round(v * p) / p; return new Intl.NumberFormat(loc, { style: "currency", currency: CUR, minimumFractionDigits: Number.isInteger(r) ? 0 : fd, maximumFractionDigits: fd }).format(r); } catch (e) { return nf(Math.round(v)) + " " + CUR; } };
const intlSym = () => { try { return new Intl.NumberFormat(NUM_LOCALE[LANG] || "en-US", { style: "currency", currency: CUR }).formatToParts(1).filter(x => x.type === "currency")[0].value; } catch (e) { return CUR; } };''')
t = t.replace('FX[CUR] || FX.AED', 'fxOf()')
R('if (LANG === "ar" && AR_SYM[CUR]) return num', 'if (!f[1]) return intlCur(v); if (LANG === "ar" && AR_SYM[CUR]) return num')
R('const curSym = () => (fxOf())[1].trim();', 'const curSym = () => ((fxOf())[1] || intlSym()).trim();')

# secondary colour = status/display: hero cards, progress fills, stamp/streak dots, step numbers, bullets
_tp0 = t.index('const TIER_PALETTE = {'); _tp1 = t.index('};', _tp0)
_tp = t[_tp0:_tp1]
for a, b in [("var(--accent)", "var(--secondary)"), ("rgba(var(--brand-rgb),", "rgba(var(--s-rgb),")]:
    _tp = _tp.replace(a, b)
_tp = _tp.replace('heroBtnFg: "var(--secondary)"', 'heroBtnFg: "var(--accent-text)"')
t = t[:_tp0] + _tp + t[_tp1:]
t = t.replace('flex: none; background: var(--accent); color', 'flex: none; background: var(--secondary); color')
t = t.replace('linear-gradient(90deg, var(--lune-sea), var(--accent))', 'linear-gradient(90deg, var(--s-400), var(--secondary))')
t = t.replace('height: 100%; border-radius: 999px; background: var(--accent);"></div>', 'height: 100%; border-radius: 999px; background: var(--secondary);"></div>')
t = t.replace('border-radius: 5px 5px 2px 2px; background: var(--accent);', 'border-radius: 5px 5px 2px 2px; background: var(--secondary);')
t = t.replace('width: 20px; height: 20px; border-radius: 50%; background: var(--accent); color', 'width: 20px; height: 20px; border-radius: 50%; background: var(--secondary); color')
t = t.replace('width: 5px; height: 5px; margin-top: 6px; border-radius: 50%; background: var(--accent);', 'width: 5px; height: 5px; margin-top: 6px; border-radius: 50%; background: var(--secondary);')
_g0 = t.index('      // streak'); _g1 = t.index('      // redeem', _g0)
t = t[:_g0] + t[_g0:_g1].replace('"var(--accent)"', '"var(--secondary)"') + t[_g1:]
_d0 = t.index('      // per-merchant progress on detail'); _d1 = t.index('    };\n  }\n}', _d0)
t = t[:_d0] + t[_d0:_d1].replace('"var(--accent)"', '"var(--secondary)"') + t[_d1:]
R('reportSteps: [1, 2, 3].map(i => ({ key: "st" + i, bg: i <= s.reportStep ? "var(--accent)"', 'reportSteps: [1, 2, 3].map(i => ({ key: "st" + i, bg: i <= s.reportStep ? "var(--secondary)"')
# text in the bank colour uses the AA-checked text shade
_b0, _b1 = t.index('</helmet>'), t.index('</x-dc>')
t = t[:_b0] + re.sub(r'(?<![-\w])color: var\(--accent\)', 'color: var(--accent-text)', t[_b0:_b1]) + t[_b1:]

# stamps on the offer card (activated offers with a stamp/visit/streak/challenge card)
R('      onActivate: e => { e.stopPropagation(); this.tap(o.id); }\n    });', '''      onActivate: e => { e.stopPropagation(); this.tap(o.id); },
      ...(() => { const ok = o.game && ["stamps", "visits", "streak", "challenge"].indexOf(o.game.kind) >= 0 && isActive(o.id); const g = ok ? progressOf(o, s.active) : null; const on = !!(g && g.done > 0 && g.done < g.target);
        return { hasStamp: on, stampDots: on ? Array.from({ length: g.target }, (_, i) => ({ key: "sd" + i, bg: i < g.done ? "var(--secondary)" : "var(--s-100)" })) : [],
          stampText: on ? fill(T.moreFor, { n: g.target - g.done, unit: (u => LANG === "en" && g.target - g.done === 1 ? u.replace(/ies$/, "y").replace(/s$/, "") : u)((T.units && T.units[g.unit]) || g.unit), reward: rewardL(g.reward) }) : "", stampCount: on ? g.done + "/" + g.target : "", stampLeft: on ? g.target - g.done : 0 }; })()
    });''')
# (dot row on offer cards removed: punch cards live in 'Almost there' and in the offer detail)
# "Almost there" on home: at most two activated, started cards, closest to done first
R('      activeLine: n === 1 ? T.oneOfferActive : fill(T.offersActive, { n }),', '''      activeLine: n === 1 ? T.oneOfferActive : fill(T.offersActive, { n }),
      almost: OFFERS.filter(o => !o.city).map(decorate).filter(o => o.hasStamp).sort((a, b) => a.stampLeft - b.stampLeft).slice(0, 2).map(o => Object.assign({}, o, { almostLine: o.brand + " \\u00b7 " + o.stampText })),
      hasAlmost: !q && !s.cat && OFFERS.some(o => !o.city && o.game && isActive(o.id) && (g => g.done > 0 && g.done < g.target)(progressOf(o, s.active)) && ["stamps", "visits", "streak", "challenge"].indexOf(o.game.kind) >= 0),''')
_h = t.index('<!-- ============ OFFERS HOME ============ -->')
_k = t.index('<div style="position: sticky; top: 0; z-index: 6; padding: 8px 20px 12px;', _h)
_k = t.rindex('</sc-if>', _h, _k) + len('</sc-if>')
t = t[:_k] + '''
          <sc-if value="{{ hasAlmost }}" hint-placeholder-val="{{ false }}">
            <div style="margin: 4px 20px 12px; display: flex; flex-direction: column; gap: 8px; flex: none;">
              <span style="font-size: 13px; font-weight: 600; color: var(--text-primary);">{{ t.fxAlmost }}</span>
              <sc-for list="{{ almost }}" as="al" hint-placeholder-count="2">
                <div sc-camel-on-click="{{ al.onOpen }}" style="cursor: pointer; display: flex; align-items: center; gap: 12px; min-height: 44px; padding: 11px 14px; border-radius: 16px; background: var(--surface-card); border: 1px solid var(--border-subtle);" style-hover="border-color: var(--border-default);">
                  <div style="width: 36px; height: 36px; border-radius: 11px; overflow: hidden; flex: none; background: {{ al.logoBg }};"><img src="{{ al.logoUrl }}" alt="" style="width: 100%; height: 100%; object-fit: {{ al.logoFit }};"></div>
                  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px;">
                    <span style="font-size: 13px; font-weight: 500; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ al.almostLine }}</span>
                    <div style="display: flex; gap: 4px;"><sc-for list="{{ al.stampDots }}" as="ad" hint-placeholder-count="5"><span style="flex: 1; max-width: 32px; height: 6px; border-radius: 999px; background: {{ ad.bg }};"></span></sc-for></div>
                  </div>
                  <span style="flex: none; font-size: 13px; font-weight: 600; font-variant-numeric: tabular-nums; color: var(--secondary-text);">{{ al.stampCount }}</span>
                </div>
              </sc-for>
            </div>
          </sc-if>''' + t[_k:]
R('["زيارة", "زيارتان", "زيارات", "زيارة", "زيارة واحدة"]];', '["زيارة", "زيارتان", "زيارات", "زيارة", "زيارة واحدة"], ["رحلة", "رحلتان", "رحلات", "رحلة", "رحلة واحدة"], ["وجبة", "وجبتان", "وجبات", "وجبة", "وجبة واحدة"], ["حجز", "حجزان", "حجوزات", "حجزاً", "حجز واحد"]];')
R('<span style="font-size: 13px; font-weight: 500; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ al.almostLine }}</span>', '<span style="font-size: 13px; font-weight: 500; line-height: 1.35; color: var(--text-primary); text-wrap: pretty;">{{ al.almostLine }}</span>')
# rewards: stamp cards as the same compact list as "Almost there", fullest first
_p0 = t.index('<div class="chips" style="display: flex; gap: 10px; overflow-x: auto; margin: 0 -20px; padding: 0 20px 4px;">\n                <sc-for list="{{ punchCards }}"')
_p1 = t.index('</sc-for>', t.index('{{ pc.line }}')) + len('</sc-for>')
_p1 = t.index('</div>', _p1) + len('</div>')
t = t[:_p0] + '''<div style="display: flex; flex-direction: column; gap: 8px;">
                <sc-for list="{{ punchCards }}" as="pc" hint-placeholder-count="3">
                  <div sc-camel-on-click="{{ pc.onOpen }}" style="cursor: pointer; display: flex; align-items: center; gap: 12px; min-height: 44px; padding: 11px 14px; border-radius: 16px; background: var(--surface-card); border: 1px solid var(--border-subtle);" style-hover="border-color: var(--border-default);">
                    <div style="width: 36px; height: 36px; border-radius: 11px; overflow: hidden; flex: none; background: {{ pc.logoBg }};"><img src="{{ pc.logoUrl }}" alt="" style="width: 100%; height: 100%; object-fit: cover;"></div>
                    <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px;">
                      <span style="font-size: 13px; font-weight: 500; line-height: 1.35; color: var(--text-primary); text-wrap: pretty;">{{ pc.brand }} · {{ pc.line }}</span>
                      <div style="display: flex; gap: 4px;"><sc-for list="{{ pc.dots }}" as="pd" hint-placeholder-count="5"><span style="flex: 1; max-width: 32px; height: 6px; border-radius: 999px; background: {{ pd.bg }};"></span></sc-for></div>
                    </div>
                    <span style="flex: none; font-size: 13px; font-weight: 600; font-variant-numeric: tabular-nums; color: var(--secondary-text);">{{ pc.count }}</span>
                  </div>
                </sc-for>
              </div>''' + t[_p1:]
R('''          bg: i < g.done ? "var(--secondary)" : "transparent",
          border: i < g.done ? "var(--secondary)" : "var(--border-default)", fg: "#FFFFFF"''', '''          bg: i < g.done ? "var(--secondary)" : "var(--s-100)",
          border: i < g.done ? "var(--secondary)" : "var(--s-100)", fg: "#FFFFFF"''')
R('      }).sort((a, b) => b.score - a.score).slice(0, 3).map(({ o, g, live }) => ({', '      }).sort((a, b) => b.score - a.score || (a.g.target - a.g.done) - (b.g.target - b.g.done)).slice(0, 3).map(({ o, g, live }) => ({')
# ux-laws detector: tier pill tap area, search label for screen readers
R('sc-camel-on-click="{{ goRewards }}" style="cursor: pointer; flex: none; display: flex; align-items: center; gap: 6px; padding: 5px 10px 5px 5px;', 'sc-camel-on-click="{{ goRewards }}" style="cursor: pointer; flex: none; display: flex; align-items: center; gap: 6px; padding: 5px 10px 5px 5px; min-height: 40px; box-sizing: border-box;')
R('placeholder="{{ t.search }}"', 'placeholder="{{ t.search }}" aria-label="{{ t.search }}"')


# ================= Profile tab + punch cards in one place + bank watermark =================
# Rewards tab becomes Profile: title + tab label
_r0 = t.index('<!-- ============ REWARDS ============ -->')
_r1 = t.index('<!-- ============ REDEEM ============ -->')
_rs = t[_r0:_r1]
_rs = _rs.replace('letter-spacing: -.03em; color: var(--text-primary);">{{ t.rewards }}</span>', 'letter-spacing: -.03em; color: var(--text-primary);">{{ t.fxProfile }}</span>', 1)
# punch card list leaves Profile (it lives in "Almost there" on Earn)
_pi = _rs.index('{{ t.punch }}'); _ps = _rs.rindex('<div style="display: flex; flex-direction: column; gap: 11px; flex: none;">', 0, _pi)
_pe = _rs.index('<sc-if value="{{ showExtras }}"', _rs.index('{{ punchCards }}')); _pe = _rs.rindex('</div>', 0, _pe) + 6
_rs = _rs[:_ps] + '<sc-if value="{{ showExtras }}" hint-placeholder-val="{{ false }}">' + _rs[_ps:_pe] + '</sc-if>' + _rs[_pe:]
# your cards, right under the balance card
_cards = """<div style="display: flex; flex-direction: column; gap: 10px; flex: none;">
              <span style="font-size: 11.5px; font-weight: 500; letter-spacing: .04em; text-transform: uppercase; color: var(--text-secondary);">{{ t.yourCards }}</span>
              <div style="display: flex; flex-direction: column; border-radius: 18px; overflow: hidden; border: 1px solid var(--border-subtle); background: var(--surface-card);">
                <sc-for list="{{ cards }}" as="c" hint-placeholder-count="3">
                  <div style="display: flex; align-items: center; gap: 12px; padding: 13px 15px; border-bottom: {{ c.sep }};">
                    <div style="width: 34px; height: 24px; border-radius: 5px; background: var(--secondary); display: flex; align-items: flex-end; padding: 3px 4px; flex: none;">
                      <span style="font-size: 7px; font-weight: 500; color: #FFFFFF;">{{ c.last4 }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1px; flex: 1; min-width: 0;">
                      <span style="font-size: 13px; font-weight: 500; color: var(--text-primary);">{{ c.name }} ···· {{ c.last4 }}</span>
                      <span style="font-size: 11.5px; color: var(--text-secondary); text-wrap: pretty;">{{ c.meta }}</span>
                    </div>
                  </div>
                </sc-for>
              </div>
            </div>

            """
_ci = _rs.index('<sc-if value="{{ showExtras }}" hint-placeholder-val="{{ false }}">')
_rs = _rs[:_ci] + _cards + _rs[_ci:]
# help at the end: report missing cashback + FAQs
_help = """<div style="display: flex; flex-direction: column; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-subtle); background: var(--surface-card); flex: none;">
              <div sc-camel-on-click="{{ goReport }}" style="display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 13px 15px; cursor: pointer;" style-hover="background: var(--surface-emerald);">
                <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--surface-muted); color: var(--text-secondary); font-size: 12px; font-weight: 500; display: flex; align-items: center; justify-content: center; flex: none;">!</div>
                <span style="flex: 1; font-size: 12.5px; font-weight: 500; color: var(--text-primary);">{{ t.report }}</span>
                <span style="flex: none; font-size: 14px; color: var(--text-tertiary);">›</span>
              </div>
              <div sc-camel-on-click="{{ goFaq }}" style="display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 13px 15px; cursor: pointer; border-top: 1px solid var(--border-subtle);" style-hover="background: var(--surface-emerald);">
                <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--surface-muted); color: var(--text-secondary); font-size: 12px; font-weight: 500; display: flex; align-items: center; justify-content: center; flex: none;">?</div>
                <span style="flex: 1; font-size: 12.5px; font-weight: 500; color: var(--text-primary);">{{ t.faqs }}</span>
                <span style="flex: none; font-size: 14px; color: var(--text-tertiary);">›</span>
              </div>
            </div>
"""
_hk = _rs.rindex('</div>\n        </div>\n      </sc-if>')
_rs = _rs[:_hk] + _help + '          ' + _rs[_hk:]
t = t[:_r0] + _rs + t[_r1:]
R('      navTabs: [["offers", T.earn], ["redeem", T.redeem], ["rewards", T.rewards]].map(', '      navTabs: [["offers", T.earn], ["redeem", T.redeem], ["rewards", T.fxProfile || T.rewards]].map(')

# drop VOX (bad logo: logo.dev serves the MAF group mark); Europe/Asia keep the slot as Pathé / Shaw Theatres
R('    if (window.REGION_APPLY && !OFFERS.__region) {', '''    if (!OFFERS.__vox) { OFFERS.__vox = true; const reg = window.BANK && window.BANK.region; if (reg !== "eu" && reg !== "asia") { const vi = OFFERS.findIndex(o => o.id === "vox"); if (vi >= 0) OFFERS.splice(vi, 1); } }
    if (window.REGION_APPLY && !OFFERS.__region) {''')
R('{ id: "x3", brand: "VOX Cinemas", logo: "vox", offer: "vox", date: "28 Jul", aed: 160, rate: 15, online: false, days: 9 },',
  '{ id: "x3", brand: "KidZania", logo: "kidzania", offer: "kidzania", date: "28 Jul", aed: 160, rate: 12, online: false, days: 9 },')

# Browse: a "Punch cards" tile listing every offer with a punch card (started ones first, closest to done)
R('    } else if (s.cat === "Online") {', '''    } else if (s.cat === "Punch") {
      const PK = ["stamps", "visits", "streak", "challenge"];
      const hits = OFFERS.filter(o => o.game && PK.indexOf(o.game.kind) >= 0 && !o.city);
      const left = o => { const g = progressOf(o, s.active); return isActive(o.id) && g.done > 0 ? g.target - g.done : 99; };
      hits.sort((a, b) => left(a) - left(b) || a.rank - b.rank);
      const punchOf = o => { const g = progressOf(o, s.active), live = isActive(o.id), n = live ? g.target - g.done : g.target;
        const unit = (u => LANG === "en" && n === 1 ? u.replace(/ies$/, "y").replace(/s$/, "") : u)((T.units && T.units[g.unit]) || g.unit);
        return { showPunch: true, punchDots: Array.from({ length: g.target }, (_, i) => ({ key: "pp" + i, bg: live && i < g.done ? "var(--secondary)" : "var(--s-100)" })),
          punchText: live ? fill(T.moreFor, { n, unit, reward: rewardL(g.reward) }) : fill(T.activateStart, { n, unit, reward: rewardL(g.reward) }) }; };
      groups = [{ key: "punch", title: T.fxPunch, note: fill(T.catAll, { n: hits.length }), items: hits.map(o => Object.assign(decorate(o), punchOf(o))) }];
    } else if (s.cat === "Online") {''')
R('const TILE_T = { "Nearby": T.nearby,', 'const TILE_T = { "Punch": T.fxPunch || "Punch cards", "Nearby": T.nearby,')
R('})).concat([{ key: "Online", label: T.online || "Online",', '''})).concat([{ key: "Punch", label: T.fxPunch || "Punch cards", icon: ((window.__resources && window.__resources["icon_savings"]) || "assets/icons/savings.svg"), count: fill(T.nOffers || "{n} offers", { n: OFFERS.filter(o => o.game && ["stamps", "visits", "streak", "challenge"].indexOf(o.game.kind) >= 0 && !o.city).length }), onPick: () => this.setState({ cat: "Punch", query: "" }) }, { key: "Online", label: T.online || "Online",''')
R('<span style="font-size: 12px; color: var(--text-secondary);">{{ o.deal }}</span>', '''<span style="font-size: 12px; color: var(--text-secondary);">{{ o.deal }}</span>
                        <sc-if value="{{ o.showPunch }}" hint-placeholder-val="{{ false }}">
                          <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 5px; margin-top: 5px;">
                            <div style="display: flex; gap: 4px;"><sc-for list="{{ o.punchDots }}" as="pp" hint-placeholder-count="5"><span style="width: 18px; height: 6px; border-radius: 999px; background: {{ pp.bg }};"></span></sc-for></div>
                            <span style="font-size: 11.5px; line-height: 1.35; color: var(--secondary-text); text-wrap: pretty;">{{ o.punchText }}</span>
                          </div>
                        </sc-if>''')

# banner (hero cards) in the bank's exact colour, text colour chosen for contrast; buttons use a darker shade
t = t.replace('flex: none; background: var(--secondary); color: #FFFFFF; box-shadow:', 'flex: none; background: var(--banner); color: var(--banner-ink); box-shadow:')
# search-bar assistant button: the bank logo fills the circle
R('''<img src="0afcc051-4aa5-49be-93ab-ae446bc4fe9b" data-bankmark="1" alt="Ask Ajman Bank" style="width: 78%; height: 78%; display: block;">''',
  '''<img src="0afcc051-4aa5-49be-93ab-ae446bc4fe9b" data-bankmark="1" data-fill="1" alt="Ask Ajman Bank" style="width: 100%; height: 100%; display: block; object-fit: cover; border-radius: 50%;">''')
# notification: round icon, bank logo fills it (runs after data-bankmark was added to the img)
R('<div style="width: 30px; height: 30px; border-radius: 9px; background: #FFFFFF; border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; flex: none; overflow: hidden;"><img src="0afcc051-4aa5-49be-93ab-ae446bc4fe9b" data-bankmark="1" alt="" style="width: 78%; height: 78%; display: block;">',
  '<div style="width: 34px; height: 34px; border-radius: 50%; background: #FFFFFF; border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; flex: none; overflow: hidden;"><img src="0afcc051-4aa5-49be-93ab-ae446bc4fe9b" data-bankmark="1" data-fill="1" alt="" style="width: 100%; height: 100%; display: block; object-fit: cover; border-radius: 50%;">')

# points vs cashback: the in-demo toggle (window.DEMO_UNIT) wins, then the setup choice (BANK.unit), then the prop
t = t.replace('(s.unit || this.props.rewardCurrency || "cashback")', '(window.DEMO_UNIT || s.unit || (window.BANK && window.BANK.unit) || this.props.rewardCurrency || "cashback")')
t = t.replace('(this.state.unit || this.props.rewardCurrency || "cashback")', '(window.DEMO_UNIT || this.state.unit || (window.BANK && window.BANK.unit) || this.props.rewardCurrency || "cashback")')
# points mode: bonuses in points, banner label with pending in points
R('return fill(U.bonusV || "{v} bonus", { v: money(parseFloat(m[1])) });', 'return fill(U.bonusV || "{v} bonus", { v: window.__ptsMode ? ptsOf(parseFloat(m[1])) : money(parseFloat(m[1])) });')
R('      heroLabel: pts ? T.pointsWord + " " + T.cashbackEarnedMonth : fill(T.fxHeroLabel, { p: fmt(38, pts) }),', '      heroLabel: fill(pts ? T.fxHeroLabelPts : T.fxHeroLabel, { p: fmt(38, pts) }),')
_rv = t.index('  renderVals() {')
t = t[:_rv] + t[_rv:].replace('    LANG = lang;', '    LANG = lang; window.__ptsMode = pts;', 1)

# points: 100 points per 1 unit of the SELECTED currency (was 100 per AED in every currency)
R('const ptsOf = n => nf(Math.round(n * PTS)) + " " + (U4().pts || "pts");', 'const ptsOf = n => nf(Math.round(n * fxOf()[0] * PTS)) + " " + (U4().pts || "pts");')
R('const rateOf = pct => { const f = fxOf(); return Math.round(pct / 100 * PTS / f[0]); };', 'const rateOf = pct => Math.round(pct / 100 * PTS * 10) / 10;')
R('const gcAed = s.gcCustom ? (pts ? gcCustomNum / PTS : gcCustomNum / (fxOf())[0]) : s.gcDenom;', 'const gcAed = s.gcCustom ? (pts ? gcCustomNum / PTS / (fxOf())[0] : gcCustomNum / (fxOf())[0]) : s.gcDenom;')
# partner rates in points mode: 1 pt is now 1/100 of the local unit; miles per AED stay the same
t = t.replace('fill(T.ptEquals || "1 pt = {r} {u}", { r: p.rate, u: unitL })', 'fill(T.ptEquals || "1 pt = {r} {u}", { r: nf(Math.round(p.rate / fxOf()[0] * 100) / 100), u: unitL })')
t = t.replace('fill(T.ptEquals || "1 pt = {r} {u}", { r: xfP.rate,', 'fill(T.ptEquals || "1 pt = {r} {u}", { r: nf(Math.round(xfP.rate / fxOf()[0] * 100) / 100),')
R('rateLine: (pts ? fill(T.pointsEq, { v: money(1) }) + " · " : "") + T.neverExpire,', 'rateLine: (pts ? fill(T.pointsEq, { v: money(1 / fxOf()[0]) }) + " · " : "") + T.neverExpire,')

# tiers: Black is shown as Diamond; Profile explains how to move up
R('    const tier = TIERS[tierName] || TIERS.Gold;', '    const tier = TIERS[tierName] || TIERS.Gold;\n    const TL = n => n === "Black" ? (T.fxDiamond || "Diamond") : n;')
for a, b in [('tier: tier.next }', 'tier: TL(tier.next) }'), ('tier: tier.next,', 'tier: TL(tier.next),'), ('tier: tierName }', 'tier: TL(tierName) }'),
             ('      tierName: tierName,', '      tierName: TL(tierName),'), ('return { key: name, name, need:', 'return { key: name, name: TL(name), need:')]:
    t = t.replace(a, b)
_tp0 = t.index('const TIER_PALETTE = {'); _tb = t.index('      Black:', _tp0); _te = t.index('\n    };', _tb)
_bl = t[_tb:_te]
for a, b in [('badgeBg: "#1C1F23", badgeFg: "var(--brand-tint)"', 'badgeBg: "#DCEFF8", badgeFg: "#163447"'),
             ('badgeBg: "#1C1F23", badgeFg: "var(--s-100)"', 'badgeBg: "#DCEFF8", badgeFg: "#163447"'),
             ('cardBg: "linear-gradient(135deg, #2A2E33 0%, #15181C 50%, #0A0C0F 100%)", cardFg: "#F4F6F3"', 'cardBg: "linear-gradient(135deg, #F4FBFF 0%, #CDE7F5 50%, #9FC8E0 100%)", cardFg: "#123044"')]:
    _bl = _bl.replace(a, b)
t = t[:_tb] + _bl + t[_te:]
R('      tierPerk: perkFor(tierName, T, pts),', '''      tierPerk: perkFor(tierName, T, pts),
      tierRule: T.fxTierRule,
      tierLadder: ["Silver", "Gold", "Platinum", "Black"].map((name, i, arr) => {
        const need = TIER_NEED[name], cur = name === tierName, isNext = name === tier.next, reached = need <= tier.earned && !cur;
        const metal = { Silver: "#C3CAD2", Gold: "#C9A227", Platinum: "#A9BDBC", Black: "#9FC8E0" }[name];
        return { key: "tl" + name, name: TL(name), initial: TL(name).charAt(0), metal,
          need: need ? fill(T.fxTierNeed, { v: fmt(need, pts) }) : T.fxTierStart, perk: perkFor(name, T, pts) || TIERS[name].perk,
          isCurrent: cur, isNext, isReached: reached, isLater: !cur && !isNext && !reached,
          status: cur ? T.fxYouHere : isNext ? fill(T.fxToGo, { v: fmt(tier.at - tier.earned, pts) }) : reached ? "\\u2713" : "",
          pct: tierPct + "%", rowBg: cur ? "var(--p-50)" : "transparent", sep: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none" };
      }),''')
# ladder labels follow the banner text colour (white was unreadable on bright banners)
R('<span style="font-size: 11.5px; font-weight: 500; letter-spacing: .04em; text-transform: uppercase; color: #FFFFFF; opacity: {{ ts.opacity }};">{{ ts.name }}</span>',
  '<span style="font-size: 11.5px; font-weight: 500; letter-spacing: .04em; text-transform: uppercase; color: var(--banner-ink); opacity: {{ ts.opacity }};">{{ ts.name }}</span>')
# "How to move up" in Profile, right under the balance card (before Your cards)
_r0 = t.index('<!-- ============ REWARDS ============ -->')
_yc = t.index('{{ t.yourCards }}', _r0); _ys = t.rindex('<div style="display: flex; flex-direction: column; gap: 10px; flex: none;">', _r0, _yc)
t = t[:_ys] + '''<div style="display: flex; flex-direction: column; gap: 10px; flex: none;">
              <div style="display: flex; flex-direction: column; gap: 3px;">
                <span style="font-size: 11.5px; font-weight: 500; letter-spacing: .04em; text-transform: uppercase; color: var(--text-secondary);">{{ t.fxTierHow }}</span>
                <span style="font-size: 12px; line-height: 1.45; color: var(--text-tertiary); text-wrap: pretty;">{{ tierRule }}</span>
              </div>
              <div style="display: flex; flex-direction: column; border-radius: 18px; overflow: hidden; border: 1px solid var(--border-subtle); background: var(--surface-card);">
                <sc-for list="{{ tierLadder }}" as="tl" hint-placeholder-count="4">
                  <div style="display: flex; flex-direction: column; gap: 8px; padding: 13px 15px; border-bottom: {{ tl.sep }}; background: {{ tl.rowBg }};">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <div style="width: 30px; height: 30px; border-radius: 50%; flex: none; background: {{ tl.metal }}; color: #1D1D1F; display: flex; align-items: center; justify-content: center; font-size: 12.5px; font-weight: 700;">{{ tl.initial }}</div>
                      <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px;">
                        <span style="font-size: 13.5px; font-weight: 600; color: var(--text-primary);">{{ tl.name }}</span>
                        <span style="font-size: 12px; color: var(--text-secondary); text-wrap: pretty;">{{ tl.need }}</span>
                        <span style="font-size: 12px; color: var(--text-tertiary); text-wrap: pretty;">{{ tl.perk }}</span>
                      </div>
                      <sc-if value="{{ tl.isCurrent }}" hint-placeholder-val="{{ false }}"><span style="flex: none; padding: 4px 9px; border-radius: 999px; background: var(--accent); color: #FFFFFF; font-size: 11.5px; font-weight: 600; white-space: nowrap;">{{ tl.status }}</span></sc-if>
                      <sc-if value="{{ tl.isNext }}" hint-placeholder-val="{{ false }}"><span style="flex: none; font-size: 12px; font-weight: 600; color: var(--secondary-text); white-space: nowrap;">{{ tl.status }}</span></sc-if>
                      <sc-if value="{{ tl.isReached }}" hint-placeholder-val="{{ false }}"><span style="flex: none; width: 24px; height: 24px; border-radius: 50%; background: var(--s-100); color: var(--secondary-text); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700;">{{ tl.status }}</span></sc-if>
                    </div>
                    <sc-if value="{{ tl.isNext }}" hint-placeholder-val="{{ false }}">
                      <div style="height: 6px; border-radius: 999px; overflow: hidden; background: var(--s-100); margin-left: 42px;"><div style="width: {{ tl.pct }}; height: 100%; border-radius: 999px; background: var(--secondary);"></div></div>
                    </sc-if>
                  </div>
                </sc-for>
              </div>
            </div>

            ''' + t[_ys:]

# tier progress on the banner: line in the banner's text colour over a faint track of it, readable on any bank colour
t = re.sub(r'(<div style="height: [56]px; border-radius: 999px; overflow: hidden; )background: rgba\(255,255,255,\.22\);(">\s*<div style="width: \{\{ tierPct \}\}; height: 100%; border-radius: 999px; )background: \{\{ tierCardBg \}\};',
           r'\1background: color-mix(in srgb, var(--banner-ink) 22%, transparent);\2background: var(--banner-ink);', t)
# banner's outline button follows the banner text colour too
R('border: 1px solid rgba(255,255,255,.55); background: rgba(255,255,255,.12); color: #FFFFFF; text-align: center; font-size: 13px; font-weight: 500; white-space: nowrap;" style-hover="background: rgba(255,255,255,.2);">{{ t.statementBtn }}',
  'border: 1px solid color-mix(in srgb, var(--banner-ink) 55%, transparent); background: color-mix(in srgb, var(--banner-ink) 8%, transparent); color: var(--banner-ink); text-align: center; font-size: 13px; font-weight: 500; white-space: nowrap;" style-hover="background: color-mix(in srgb, var(--banner-ink) 16%, transparent);">{{ t.statementBtn }}')
