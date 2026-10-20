import re
t = open("template.orig.html").read()
n_ok = 0
def R(old, new, count=1):
    global t, n_ok
    c = t.count(old)
    assert c >= 1, "NOT FOUND: " + old[:90]
    if count == 1:
        assert c == 1, "AMBIGUOUS (%d): %s" % (c, old[:90])
    t = t.replace(old, new); n_ok += 1

# ---------- load the fix strings + Arabic font ----------
R('<script src="16aa446c-3f78-4f74-94d2-3ed7ed049019"></script>',
  '<script src="16aa446c-3f78-4f74-94d2-3ed7ed049019"></script>\n<script src="aa0f1c00-0000-4000-8000-0000000f1c00"></script>')
FONT = "".join('@font-face{font-family:"Plex Arabic";font-style:normal;font-weight:%d;font-display:swap;src:url("%s") format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+08A0-08FF,U+200C-200E,U+FB50-FDFF,U+FE70-FEFC;}\n' % (w, u)
               for w, u in [(400, "aa000400-0000-4000-8000-00000000a400"), (500, "aa000500-0000-4000-8000-00000000a500"), (600, "aa000600-0000-4000-8000-00000000a600")])

# ---------- tokens: contrast-safe orange + greys, Arabic font in the stack ----------
R('''  :root, [data-theme="light"] {
    --font-sans: "Source Sans 3", -apple-system''', FONT + '''  :root, [data-theme="light"] {
    --font-sans: "Source Sans 3", "Plex Arabic", -apple-system''')
R("--accent-hover: #D05E1C;", "--accent-hover: #A3460D;")
R("--accent-press: #B84B14;", "--accent-press: #8A3A10;")
R("--text-secondary: #6E6E73;\n    --text-tertiary: #A1A1A6;", "--text-secondary: #5A5A5F;\n    --text-tertiary: #6E6E73;")
for a, b in [("#E8732A", "#B9500F"), ("#e8732a", "#B9500F"), ("#F39A3B", "#C8581A")]:
    if a in t: R(a, b, count=0)

# ---------- type floor: nothing under 11.5px ----------
for a, b in [("font-size: 9px", "font-size: 11px"), ("font-size: 9.5px", "font-size: 11px"),
             ("font-size: 10px", "font-size: 11.5px"), ("font-size: 10.5px", "font-size: 11.5px"),
             ("font-size: 11px", "font-size: 11.5px")]:
    if a in t: R(a, b, count=0)

# ---------- rail "+" activate: same orange as every other activate, bigger target ----------
R('''style="cursor: pointer; flex: none; width: 28px; height: 28px; border-radius: 50%; background: var(--text-primary); color: #FFFFFF;''',
  '''style="cursor: pointer; flex: none; width: 36px; height: 36px; border-radius: 50%; background: var(--accent); color: #FFFFFF;''')
R('style-hover="background: var(--accent);">', 'style-hover="background: var(--accent-hover);">', count=0)

# ---------- Rewards hero: say what the balance is made of ----------
R('''<span style="font-size: 12px; opacity: .85;">{{ t.lifetime }}</span>''',
  '''<span style="font-size: 12px; opacity: .85;">{{ t.lifetime }}</span>
                <span style="font-size: 12px; opacity: .85;">{{ balanceSub }}</span>''')

# ---------- Rewards: drop "ways to earn" and badges (6 sections -> 4) ----------
i = t.index("{{ t.ways }}"); s0 = t.rindex('<div style="display: flex; flex-direction: column; gap: 11px; flex: none;">', 0, i)
t = t[:s0] + '<sc-if value="{{ showExtras }}" hint-placeholder-val="{{ false }}">' + t[s0:]
i = t.index("{{ earnWays }}"); e0 = t.index("</sc-for>", i); e0 = t.index("</div>", e0) + 6; e0 = t.index("</div>", e0) + 6
t = t[:e0] + "</sc-if>" + t[e0:]
i = t.index("{{ badgeCount }}"); s0 = t.rindex('<div style="display: flex; flex-direction: column; gap: 11px; flex: none;">', 0, i)
t = t[:s0] + '<sc-if value="{{ showExtras }}" hint-placeholder-val="{{ false }}">' + t[s0:]
i = t.index('{{ badges }}', s0); e0 = t.index("</sc-for>", i); e0 = t.index("</div>", e0) + 6; e0 = t.index("</div>", e0) + 6
t = t[:e0] + "</sc-if>" + t[e0:]

# ---------- offer detail: let people turn an activated offer off ----------
R('''                <sc-if value="{{ detailIsOnline }}" hint-placeholder-val="{{ false }}">
                  <div sc-camel-on-click="{{ activateDetail }}"''',
  '''                <sc-if value="{{ detailInStore }}" hint-placeholder-val="{{ true }}">
                  <div sc-camel-on-click="{{ deactivateDetail }}" style="cursor: pointer; flex: none; padding: 10px 14px; border-radius: 999px; border: 1px solid var(--border-default); color: var(--text-primary); font-size: 12px; font-weight: 500; white-space: nowrap;" style-hover="border-color: var(--accent); color: var(--accent);">{{ t.turnOff }}</div>
                </sc-if>
                <sc-if value="{{ detailIsOnline }}" hint-placeholder-val="{{ false }}">
                  <div sc-camel-on-click="{{ activateDetail }}"''')

# ---------- transfer: confirm before an irreversible send ----------
R('''            <sc-if value="{{ xfReady }}" hint-placeholder-val="{{ true }}">
              <div sc-camel-on-click="{{ confirmTransfer }}"''',
  '''            <sc-if value="{{ xfAsk }}" hint-placeholder-val="{{ false }}">
              <div style="display: flex; flex-direction: column; gap: 12px; padding: 16px; margin-bottom: 4px; border-radius: 18px; background: var(--surface-muted); animation: msgIn .25s ease both;">
                <div style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 15px; font-weight: 600; color: var(--text-primary);">{{ xfConfirmTitle }}</span>
                  <span style="font-size: 12.5px; line-height: 1.45; color: var(--text-secondary);">{{ xfConfirmSub }}</span>
                </div>
                <div style="display: flex; gap: 10px;">
                  <div sc-camel-on-click="{{ cancelTransfer }}" style="cursor: pointer; flex: 1; padding: 13px; border-radius: 999px; border: 1px solid var(--border-default); text-align: center; font-size: 14px; font-weight: 500; color: var(--text-primary);">{{ t.fxCancel }}</div>
                  <div sc-camel-on-click="{{ confirmTransfer }}" style="cursor: pointer; flex: 1; padding: 13px; border-radius: 999px; background: var(--accent); color: #FFFFFF; text-align: center; font-size: 14px; font-weight: 500;" style-hover="background: var(--accent-hover);">{{ t.fxConfirmBtn }}</div>
                </div>
              </div>
            </sc-if>
            <sc-if value="{{ xfReadyBtn }}" hint-placeholder-val="{{ true }}">
              <div sc-camel-on-click="{{ askTransfer }}"''')

# ---------- data: statement adds up (August earned = 212, pending = 38), no future dates ----------
R('''    { key: "s1", brand: "noon", initial: "n", logo: "noon", logoBg: "#FEEE00", logoFg: "#2B2B2B", date: "12 Aug", spend: "AED 480 spend", amount: "AED 38", pending: true },
    { key: "s2", brand: "Waitrose", place2: "Dubai Mall", initial: "W", logo: "waitrose", logoBg: "#0A634D", logoFg: "#FFFFFF", date: "9 Aug", spend: "AED 260 spend", amount: "AED 39", pending: false },
    { key: "s3", brand: "Uber", initial: "U", logo: "uber", logoBg: "#000000", logoFg: "#FFFFFF", date: "6 Aug", spend: "AED 96 spend", amount: "AED 19", pending: false },
    { key: "s4", brand: "Spinneys", initial: "S", logo: "spinneys", logoBg: "#E76F2E", logoFg: "#FFFFFF", date: "2 Aug", spend: "AED 310 spend", amount: "AED 31", pending: false }''',
  '''    { key: "s1", brand: "noon", initial: "n", logo: "noon", logoBg: "#FEEE00", logoFg: "#2B2B2B", date: "5 Aug", spend: "AED 475 spend", amount: "AED 38", pending: true },
    { key: "s2", brand: "Waitrose", place2: "Dubai Mall", initial: "W", logo: "waitrose", logoBg: "#0A634D", logoFg: "#FFFFFF", date: "3 Aug", spend: "AED 260 spend", amount: "AED 39", pending: false },
    { key: "s3", brand: "Careem", initial: "C", logo: "careem", logoBg: "#00B140", logoFg: "#FFFFFF", date: "3 Aug", spend: "AED 160 spend", amount: "AED 24", pending: false },
    { key: "s4", brand: "Spinneys", initial: "S", logo: "spinneys", logoBg: "#E76F2E", logoFg: "#FFFFFF", date: "2 Aug", spend: "AED 310 spend", amount: "AED 31", pending: false },
    { key: "s4b", brand: "Carrefour", initial: "C", logo: "carrefour", logoBg: "#FFFFFF", logoFg: "#004E9F", date: "1 Aug", spend: "AED 980 spend", amount: "AED 118", pending: false }''')
R('''date: "28 Jul", spend: "AED 620 spend", amount: "AED 31", pending: false },''',
  '''date: "28 Jul", spend: "AED 620 spend", amount: "AED 12", pending: false },''')
R('''date: "24 Jul", spend: "AED 88 spend", amount: "AED 22", pending: false },''',
  '''date: "24 Jul", spend: "AED 88 spend", amount: "AED 13", pending: false },''')
R('''{ key: "s8", brand: "Deliveroo", initial: "D", logo: "deliveroo", logoBg: "#00CCBC", logoFg: "#FFFFFF", date: "18 Jul", spend: "AED 300 spend", amount: "AED 30", pending: false }''',
  '''{ key: "s8", brand: "Careem", initial: "C", logo: "careem", logoBg: "#00B140", logoFg: "#FFFFFF", date: "16 Jul", spend: "AED 200 spend", amount: "AED 30", pending: false }''')
# missing-cashback list: purchases that are not already in the earned list
R('''{ id: "x1", brand: "Spinneys", logo: "spinneys", offer: "spinneys", date: "2 Aug", aed: 310, rate: 10, online: false, days: 6 },''',
  '''{ id: "x1", brand: "Shake Shack", logo: "shakeshack", offer: "shakeshack", date: "31 Jul", aed: 140, rate: 20, online: false, days: 6 },''')
R('''{ id: "x3", brand: "Carrefour", logo: "carrefour", offer: "carrefour", date: "30 Jul", aed: 420, rate: 12, online: false, days: 9 },''',
  '''{ id: "x3", brand: "VOX Cinemas", logo: "vox", offer: "vox", date: "28 Jul", aed: 160, rate: 15, online: false, days: 9 },''')

# ---------- Starbucks: one end date, no conflicting weekend challenge ----------
R('''{ id: "talabat", flash: true, expiresAt: "6 August 2026 at 23:00", endsIn: "Ends 11pm", urgent: true, game: { kind: "challenge", done: 1, target: 3, unit: "orders", deadline: "Ends Sunday", reward: "AED 20 bonus", note: "Three orders this weekend earns an extra AED 20 on top of the 15%." }, brand: "Starbucks",''',
  '''{ id: "talabat", flash: true, expiresAt: "6 August 2026 at 23:00", endsIn: "Ends 11pm", urgent: true, brand: "Starbucks",''')
R('''qualifies: ["Orders in store or in the app", "Your next two orders"],''',
  '''qualifies: ["Orders in store or in the app", "Up to two orders today"],''')
# one payout rule everywhere
R('howPaid: "Paid monthly, capped at AED 100"', 'howPaid: "Paid within 14 days of checkout"')
R('howPaid: "Paid weekly, capped at AED 60"', 'howPaid: "Paid within 3 days"')
R('''a: "No. Every Ajman Bank card you hold earns automatically, including supplementary cards. There's nothing to register."''',
  '''a: "No card registration needed. Activate each offer once, then pay with any Ajman Bank card you hold, including supplementary cards."''')

# ---------- logic ----------
# Arabic plural agreement + currency suffix cleanup
R('''const fill = (s, o) => Object.keys(o).reduce((t, k) => t.split("{" + k + "}").join(o[k]), s || "");''',
  '''const AR_PL = [["يوم", "يومان", "أيام", "يوماً", "يوم واحد"], ["عرض", "عرضان", "عروض", "عرضاً", "عرض واحد"], ["طلب", "طلبان", "طلبات", "طلباً", "طلب واحد"], ["متجر", "متجران", "متاجر", "متجراً", "متجر واحد"], ["زيارة", "زيارتان", "زيارات", "زيارة", "زيارة واحدة"]];
const arPl = s => AR_PL.reduce((t, f) => t.replace(new RegExp("(^|[^\\\\d.,])(\\\\d+)\\\\s(" + f.slice(0, 4).join("|") + ")(?![\\\\u0600-\\\\u06FF])", "g"), (m, pre, num, w) => { const n = parseInt(num, 10); return pre + (n === 1 ? f[4] : n === 2 ? f[1] : n <= 10 ? n + " " + f[2] : n + " " + f[3]); }), s);
const fill = (s, o) => { const r = Object.keys(o).reduce((t, k) => t.split("{" + k + "}").join(o[k]), s || ""); return LANG === "ar" ? arPl(r) : r; };''')
R('''.replace(/(\\d[\\d,]*(?:\\.\\d+)?)\\s?درهم/g,''', '''.replace(/(\\d[\\d,]*(?:\\.\\d+)?)\\s?(?:دراهم|درهماً|درهمًا|درهما|درهم)/g,''')

# brand: run after all string packs merge, rewrite values only (keys stay as lookup keys), Arabic gets the Arabic name
R('''    if (window.UI4 && window.UI4.en && window.UI4.en.months && !UI.__l10n) { Object.keys(window.UI4).forEach(k => { if (UI[k]) Object.assign(UI[k], window.UI4[k]); }); UI.__l10n = true; }''',
  '''    if (window.UI4 && window.UI4.en && window.UI4.en.months && !UI.__l10n) { Object.keys(window.UI4).forEach(k => { if (UI[k]) Object.assign(UI[k], window.UI4[k]); }); Object.keys(window.UI_FIX || {}).forEach(k => { if (UI[k]) Object.assign(UI[k], window.UI_FIX[k]); }); Object.keys(UI).forEach(k => { const en = (window.UI_FIX || {}).en || {}; if (UI[k] && typeof UI[k] === "object") Object.keys(en).forEach(x => { if (UI[k][x] === undefined) UI[k][x] = en[x]; }); }); UI.__l10n = true; UI.__brand = false; }''')
R('''    if (!UI.__brand) { const rn = v => v.replace(/Lune/g, "Ajman Bank").replace(/لون|Люн|露恩|लून|لیون/g, "Ajman Bank"); const rb = o => { if (!o || typeof o !== "object") return; Object.keys(o).forEach(k => { let v = o[k]; if (typeof v === "string") v = rn(v); else if (v && typeof v === "object") rb(v); const nk = rn(k); if (nk !== k) delete o[k]; o[nk] = v; }); }; rb(UI); ["UI4","MERCHANT_L10N"].forEach(n => rb(window[n])); UI.__brand = true; }''',
  '''    if (!UI.__brand) { const rb = o => { if (!o || typeof o !== "object") return; Object.keys(o).forEach(k => { const v = o[k]; if (typeof v === "string") o[k] = BR(v); else if (v && typeof v === "object") rb(v); }); }; rb(UI); rb(L10N); ["UI4","MERCHANT_L10N"].forEach(n => rb(window[n])); UI.__brand = true; }
    try { document.documentElement.lang = lang; } catch (e) {}''')
R('''const mcL = (s, T) => { if (!s) return ""; if (LANG === "en") return curify(s); const d = MC(); return curify(d && d[s] ? d[s] : s); };''',
  '''const BR = v => (v || "").replace(/(^|[^\\u0600-\\u06FF])(لون بالس|لون|لیون)(?![\\u0600-\\u06FF])/g, "$1مصرف عجمان").replace(/[\\u0600-\\u06FF][^.!?؟]*?\\bLune( Pulse)?\\b/g, m => m.replace(/Lune( Pulse)?/, "مصرف عجمان")).replace(/Lune Pulse/g, "Ajman Bank offers").replace(/Lune/g, "Ajman Bank").replace(/Люн|露恩|लून/g, "Ajman Bank");
const mcL = (s, T) => { if (!s) return ""; if (LANG === "en") return BR(curify(s)); const d = MC(); return BR(curify(d && d[s] ? d[s] : s)); };''')

# drop venues that don't fit an Islamic bank's offer list
R('''const STATEMENT = [''', '''["soho", "iris", "zerogravity"].forEach(id => { const i = OFFERS.findIndex(o => o.id === id); if (i >= 0) OFFERS.splice(i, 1); });

const STATEMENT = [''')
R('''const NEW_THIS_WEEK = ["shakeshack", "platinumlist", "yas", "iris"];''', '''const NEW_THIS_WEEK = ["shakeshack", "platinumlist", "yas"];''')

# assistant: answer "how much cashback do I have?" instead of refusing it
R('''    if (/قريب|حولي|بالجوار|المول/.test(t)) return "near";''',
  '''    if (/كم (استرداد|رصيد|كاش)|رصيدي|how much (cashback|money|do i have)|my (cashback|balance)|^balance|what'?s my balance/.test(t)) return "balance";
    if (/قريب|حولي|بالجوار|المول/.test(t)) return "near";''')
R('''        : key === "fallback" ? fill(''',
  '''        : key === "balance" ? fill(T.fxBalanceReply || "You have {bal} available.", { bal: fmt(Math.max(0, BALANCE - (this.state.redeemed || 0) + (this.state.transferred ? 20 : 0)), pts), m: fmt(212, pts), p: fmt(38, pts) })
        : key === "fallback" ? fill(''')

# state: transfer confirm flag + deactivate
R('''  activate(id) {''', '''  deactivate(id) { this.setState(s => ({ active: s.active.filter(x => x !== id) })); }
  activate(id) {''')

# render values
R('''      heroLabel: (pts ? T.pointsWord : T.cashbackWord) + " " + T.cashbackEarnedMonth,''',
  '''      heroLabel: pts ? T.pointsWord + " " + T.cashbackEarnedMonth : fill(T.fxHeroLabel, { p: fmt(38, pts) }),''')
R('''      stmtEarnedWord: pts ? T.addedBal : T.paidAcct,''', '''      stmtEarnedWord: T.addedBal,''')
R('''        kind: r.kind === "gift" ? T.giftCard : T.transferPoints,''', '''        kind: r.kind === "gift" ? T.giftCard : T.transferPoints,''')
R('''      balanceSub: fill(T.balanceSub, { n: ACTIVE_COUNT }) + " " + fill(T.worth, { v: pts ? money(balance) : ptsOf(balance) }),''',
  '''      balanceSub: fill(T.fxBalanceSub, { m: fmt(212, pts), p: fmt(38, pts) }),
      showExtras: false,''')
R('''      activateDetail: () => { if (d) this.activate(d.id); },''',
  '''      activateDetail: () => { if (d) this.activate(d.id); },
      deactivateDetail: () => { if (d) this.deactivate(d.id); },''')
R('''      chatPlaceholder: pack ? pack.placeholder : "Ask Lune about your offers",''', '''      chatPlaceholder: T.fxChatPh || "Ask about your offers",''')
R('''      }).sort((a, b) => b.score - a.score).slice(0, 6).map(({ o, g, live }) => ({''', '''      }).sort((a, b) => b.score - a.score).slice(0, 3).map(({ o, g, live }) => ({''')
R('''      xfReady: !!xfP && xfLinked && !s.xfDone,''',
  '''      xfReady: !!xfP && xfLinked && !s.xfDone,
      xfReadyBtn: !!xfP && xfLinked && !s.xfDone && !s.xfAsk,
      xfAsk: !!xfP && xfLinked && !s.xfDone && !!s.xfAsk,
      askTransfer: () => this.setState({ xfAsk: true }),
      cancelTransfer: () => this.setState({ xfAsk: false }),
      xfConfirmTitle: xfP ? fill(T.fxConfirmTitle || "Send {get} to {name}?", { get: "\u2068" + Math.round(xfAmt * PTS * xfP.rate).toLocaleString(NUM_LOCALE[LANG] || "en-US") + " " + xfP.unit + "\u2069", name: "\u2068" + xfP.name + "\u2069" }) : "",
      xfConfirmSub: fill(T.fxConfirmSub || "{v} leaves your balance.", { v: fmt(xfAmt, pts) }),''')
R('''      confirmTransfer: () => this.setState(st => ({ xfDone: true,''', '''      confirmTransfer: () => this.setState(st => ({ xfDone: true, xfAsk: false,''')
R('''onPick: () => this.setState({ screen: "transfer", xfPartner: p.id, xfDone: false, xfAmount: 100, xfMember: "" }) };''',
  '''onPick: () => this.setState({ screen: "transfer", xfPartner: p.id, xfDone: false, xfAsk: false, xfAmount: 100, xfMember: "" }) };''')


# chat header: Arabic bank name in Arabic, and the pill shows the same balance the assistant quotes
R('letter-spacing: -.01em;">Ajman Bank</div>', 'letter-spacing: -.01em;">{{ t.fxBankName }}</div>')
i = t.index('{{ t.watching }}'); j = t.index('{{ earnedValue }}', i)
t = t[:j] + '{{ balanceValue }}' + t[j + len('{{ earnedValue }}'):]

R('letter-spacing: .08em; text-transform: uppercase; opacity: .85;">{{ heroLabel }}</span>', 'opacity: .9;">{{ heroLabel }}</span>')

exec(open("patch3.py").read())
open("template.html", "w").write(t)
print("ok, edits:", n_ok)
