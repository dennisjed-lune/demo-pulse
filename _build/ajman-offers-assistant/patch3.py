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
R('{{ t.userId }} AJB-20481', '{{ t.userId }} 2048-1193')
R('.replace(/Люн|露恩|लून/g, "Ajman Bank");',
  '.replace(/Люн|露恩|लून/g, "Ajman Bank").replace(/Ajman Bank|مصرف عجمان/g, m => window.BANK ? (m === "Ajman Bank" ? window.BANK.en : (window.BANK.ar || window.BANK.en)) : m);')
R('      const m = { key: "l" + id, isLune: true, hasText: true, text, dir: rtl ? "rtl" : "ltr" };',
  '      const m = { key: "l" + id, isLune: true, hasText: true, text: BR(text), dir: rtl ? "rtl" : "ltr" };')
t = t.replace('langCode(this.props.language)', '((window.BANK && window.BANK.lang) || langCode(this.props.language))')
R('CUR = s.currency || this.props.currency || "AED";', 'CUR = s.currency || (window.BANK && window.BANK.cur) || this.props.currency || "AED";')
if SALES:
    R('<script src="aa0f1c00-0000-4000-8000-0000000f1c00"></script>',
      '<script src="bb5e7000-0000-4000-8000-0000000b5e70"></script>\n<script src="aa0f1c00-0000-4000-8000-0000000f1c00"></script>')
    t = t.replace('<meta charset="utf-8">', '<meta charset="utf-8"><title>Offers Assistant · demo</title>', 1)

R('const FULL_BLEED_LOGOS = ["emirates", "deliveroo"];', 'const FULL_BLEED_LOGOS = ["etihad", "deliveroo"];')
t = t.replace('"dishoom","eataly","etihad","flydubai"', '"dishoom","eataly","flydubai"')
# urgency badges: one AA-safe red that sits with any bank colour (was the grocery-category orange at 3:1)
t = t.replace("--brand-rgb: 232,115,42;\n  }", "--brand-rgb: 232,115,42; --urgent: #B42318;\n  }", 1)
t = t.replace("var(--cat-grocery)", "var(--urgent)")
