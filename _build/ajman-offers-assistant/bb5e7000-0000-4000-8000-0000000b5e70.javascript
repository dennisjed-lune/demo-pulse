// Lune sales setup: a Lune person enters the bank before the pitch; the Offers Assistant then
// carries that bank's name, logo, colour, language and currency. Loads before the app boots.
(function () {
  var KEY = "lune-oa-bank-v1";
  var TOKEN = "pk_PCfI5A2ISc2tZmQNIql7Ww";
  var PRESETS = [
    { en: "Ajman Bank", font: "Inter", fontAr: "", fontSite: "Inter", ar: "مصرف عجمان", domain: "ajmanbank.ae", color: "#E8732A", color2: "#7A1F2B", cur: "AED" },
    { en: "Emirates NBD", font: "Plus Jakarta Sans", fontAr: "Tajawal", fontSite: "Plus Jakarta Sans + Tajawal", ar: "الإمارات دبي الوطني", domain: "emiratesnbd.com", color: "#0B2D4D", cur: "AED" },
    { en: "ADIB", font: "Open Sans", fontAr: "", fontSite: "Open Sans", ar: "مصرف أبوظبي الإسلامي", domain: "adib.ae", cur: "AED" },
    { en: "FAB", font: "DM Sans", fontAr: "", fontSite: "Circular / FS Matthew (licensed)", ar: "بنك أبوظبي الأول", domain: "bankfab.com", cur: "AED" },
    { en: "Mashreq", font: "Montserrat", fontAr: "Tajawal", fontSite: "Bukra (licensed)", ar: "المشرق", domain: "mashreq.com", color: "#F15A22", cur: "AED" },
    { en: "RAKBANK", font: "Cabin", fontAr: "Vazirmatn", fontSite: "Rakbank Sans (licensed)", ar: "راك بنك", domain: "rakbank.ae", cur: "AED" },
    { en: "Dubai Islamic Bank", font: "Rubik", fontAr: "Rubik", fontSite: "Neo Sans (licensed)", ar: "بنك دبي الإسلامي", domain: "dib.ae", cur: "AED" },
    { en: "CBD", font: "Inter", fontAr: "Cairo", fontSite: "Inter + Cairo", ar: "بنك دبي التجاري", domain: "cbd.ae", cur: "AED" },
    { en: "Emirates Islamic", font: "Plus Jakarta Sans", fontAr: "Noto Naskh Arabic", fontSite: "Plus Jakarta Sans + Noto Naskh Arabic", ar: "الإمارات الإسلامي", domain: "emiratesislamic.ae", cur: "AED" },
    { en: "Wio", font: "Space Grotesk", fontAr: "", fontSite: "wioGrotesk (licensed)", ar: "ويو", domain: "wio.io", cur: "AED" },
    { en: "Al Rajhi Bank", font: "Poppins", fontAr: "Rubik", fontSite: "Poppins + Rubik", ar: "مصرف الراجحي", domain: "alrajhibank.com.sa", cur: "SAR" },
    { en: "SNB", font: "Inter", fontAr: "Noto Kufi Arabic", fontSite: "SNB Font (licensed)", ar: "البنك الأهلي السعودي", domain: "alahli.com", cur: "SAR" },
    { en: "ING", font: "Nunito Sans", fontAr: "", fontSite: "ING Me (licensed)", domain: "ing.com", cur: "EUR", region: "eu" },
    { en: "ABN AMRO", font: "Roboto", fontAr: "", fontSite: "ABN AMRO Sans (licensed)", domain: "abnamro.nl", cur: "EUR", region: "eu" },
    { en: "bunq", font: "DM Sans", fontAr: "", fontSite: "DM Sans", domain: "bunq.com", cur: "EUR", region: "eu" },
    { en: "Revolut", font: "Manrope", fontAr: "", fontSite: "Aeonik Pro (licensed)", domain: "revolut.com", cur: "EUR", region: "eu" },
    { en: "DBS", font: "Open Sans", fontAr: "", fontSite: "Open Sans", domain: "dbs.com.sg", cur: "SGD", region: "asia" },
    { en: "OCBC", font: "Open Sans", fontAr: "", fontSite: "Open Sans", domain: "ocbc.com", cur: "SGD", region: "asia" },
    { en: "UOB", font: "Noto Sans", fontAr: "", fontSite: "Noto Sans", domain: "uob.com.sg", cur: "SGD", region: "asia" }
  ];
  PRESETS.forEach(function (p) { p.region = p.region || "me"; p.ar = p.ar || ""; });
  var REGION_OPTS = [["me", "Middle East"], ["eu", "Europe"], ["asia", "Asia"]];
  var REGION_DEF = { me: { cur: "AED", lang: "ar" }, eu: { cur: "EUR", lang: "en" }, asia: { cur: "SGD", lang: "en" } };
  var LANGS = [["ar", "العربية"], ["en", "English"], ["fr", "Français"], ["es", "Español"], ["pt", "Português"], ["de", "Deutsch"], ["it", "Italiano"], ["hi", "हिन्दी"], ["ur", "اردو"], ["zh", "中文"], ["ru", "Русский"]];
  var FONT_LIST = ["Source Sans 3", "Inter", "Plus Jakarta Sans", "Open Sans", "DM Sans", "Montserrat", "Cabin", "Rubik", "Poppins", "Space Grotesk", "Nunito Sans", "Roboto", "Manrope", "Noto Sans"];
  var FONT_AR = ["IBM Plex Sans Arabic", "Tajawal", "Cairo", "Noto Kufi Arabic", "Noto Naskh Arabic", "Vazirmatn", "Rubik"];
  function fontLink(fams) {
    fams = fams.filter(function (f) { return f && f !== "Source Sans 3" && f !== "IBM Plex Sans Arabic"; });
    if (!fams.length) return;
    var id = "lsu-font-" + fams.join("-").replace(/\W+/g, ""); if (document.getElementById(id)) return;
    var l = document.createElement("link"); l.id = id; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?" + fams.map(function (f) { return "family=" + f.replace(/ /g, "+") + ":wght@400;500;600;700"; }).join("&") + "&display=swap";
    (document.head || document.documentElement).appendChild(l);
  }
  var CURS_TOP = ["AED", "SAR", "BHD", "QAR", "KWD", "OMR", "EUR", "GBP", "USD", "SGD"];
  function curList() {
    var all = Object.keys(window.FX_RATES || {}).concat(CURS_TOP).filter(function (c, i, a) { return a.indexOf(c) === i; });
    var name = function (c) { try { return new Intl.DisplayNames(["en"], { type: "currency" }).of(c); } catch (e) { return c; } };
    var rest = all.filter(function (c) { return CURS_TOP.indexOf(c) < 0; }).sort(function (a, b) { return name(a).localeCompare(name(b)); });
    return CURS_TOP.concat(rest).map(function (c) { return [c, c + " · " + name(c)]; });
  }

  // ---------- colour maths (sRGB <-> OKLCH) ----------
  function hexToRgb(h) { h = h.replace("#", ""); if (h.length === 3) h = h.split("").map(function (c) { return c + c; }).join(""); return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
  function rgbToHex(c) { return "#" + c.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? "0" : "") + v.toString(16); }).join("").toUpperCase(); }
  function lin(v) { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
  function delin(v) { v = v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055; return v * 255; }
  function toOklch(hex) {
    var c = hexToRgb(hex).map(lin);
    var l = Math.cbrt(0.4122214708 * c[0] + 0.5363325363 * c[1] + 0.0514459929 * c[2]);
    var m = Math.cbrt(0.2119034982 * c[0] + 0.6806995451 * c[1] + 0.1073969566 * c[2]);
    var s = Math.cbrt(0.0883024619 * c[0] + 0.2817188376 * c[1] + 0.6299787005 * c[2]);
    var L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s, a = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s, b = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s;
    return [L, Math.sqrt(a * a + b * b), Math.atan2(b, a)];
  }
  function fromOklch(L, C, H) {
    var a = C * Math.cos(H), b = C * Math.sin(H);
    var l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3), m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3), s = Math.pow(L - 0.0894841775 * a - 1.2914855480 * b, 3);
    var r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, bb = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
    return rgbToHex([r, g, bb].map(delin));
  }
  function lum(hex) { var c = hexToRgb(hex).map(lin); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  function contrastWhite(hex) { return 1.05 / (lum(hex) + 0.05); }
  // darken until white text reads at AA (4.5:1 plus a margin); greys and near-whites fall back to near-black
  function usableAccent(hex) {
    var o = toOklch(hex), L = o[0], C = o[1], H = o[2];
    if (C < 0.03 && L > 0.6) return "#1D1D1F";
    var out = fromOklch(L, C, H), i = 0;
    while (contrastWhite(out) < 4.7 && i++ < 60) { L -= 0.01; C = Math.min(C, 0.25); out = fromOklch(L, C, H); }
    return out;
  }
  function palette(hex) {
    var acc = usableAccent(hex), o = toOklch(acc), L = o[0], C = o[1], H = o[2];
    var f = function (dl, cm) { return fromOklch(Math.max(0.08, Math.min(0.98, L + dl)), C * (cm || 1), H); };
    return { accent: acc, hover: f(-0.06), press: f(-0.11), light: f(0.07), dark: f(-0.06), darker: f(-0.12), darkest: f(-0.22),
             tint: fromOklch(0.82, Math.min(C, 0.12), H), mint: fromOklch(0.95, Math.min(C, 0.04), H), rgb: hexToRgb(acc).join(",") };
  }
  function applyTheme(color, font, fontAr) {
    var p = palette(color), r = document.documentElement.style;
    var set = { "--accent": p.accent, "--lune-emerald": p.accent, "--border-emerald": p.accent, "--text-link": p.accent,
      "--accent-hover": p.hover, "--accent-press": p.press, "--brand-light": p.light, "--brand-dark": p.dark, "--brand-darker": p.darker,
      "--brand-darkest": p.darkest, "--brand-tint": p.tint, "--brand-mint": p.mint, "--lune-mint": p.mint, "--brand-rgb": p.rgb,
      "--focus-ring": "rgba(" + p.rgb + ",.35)", "--surface-emerald": "rgba(" + p.rgb + ",.05)",
      "--primary-60": "rgba(" + p.rgb + ",.60)", "--primary-50": "rgba(" + p.rgb + ",.50)", "--primary-40": "rgba(" + p.rgb + ",.40)",
      "--primary-30": "rgba(" + p.rgb + ",.18)", "--primary-20": "rgba(" + p.rgb + ",.12)", "--primary-10": "rgba(" + p.rgb + ",.05)" };
    if (font || fontAr) { fontLink([font, fontAr]); set["--font-sans"] = [font || "Source Sans 3", fontAr && fontAr !== "IBM Plex Sans Arabic" ? fontAr : "", "Plex Arabic", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"].filter(Boolean).map(function (f) { return /^-|Segoe|sans-serif|Blink/.test(f) ? (f === "Segoe UI" ? '"Segoe UI"' : f) : '"' + f + '"'; }).join(", "); }
    Object.keys(set).forEach(function (k) { r.setProperty(k, set[k]); });
    // the phone frame re-declares the theme on [data-theme], so out-rank it with a more specific rule
    var css = "html:root, html [data-theme], html [data-theme=\"light\"] {" + Object.keys(set).map(function (k) { return k + ":" + set[k]; }).join(";") + "}";
    var st = document.getElementById("lsu-theme") || document.createElement("style");
    st.id = "lsu-theme"; st.textContent = css;
    (document.head || document.documentElement).appendChild(st);
    return p;
  }

  // ---------- logo + colour lookup ----------
  function logoUrl(domain) { return "https://img.logo.dev/" + encodeURIComponent(domain) + "?token=" + TOKEN + "&size=200&format=png&retina=true"; }
  function fetchLogo(domain) {
    return fetch(logoUrl(domain)).then(function (r) { if (!r.ok) throw new Error("none"); return r.blob(); }).then(function (b) {
      if (b.size < 2500) throw new Error("placeholder");
      return new Promise(function (res) { var fr = new FileReader(); fr.onload = function () { res(fr.result); }; fr.readAsDataURL(b); });
    });
  }
  function dominantColor(dataUrl) {
    return new Promise(function (res) {
      var img = new Image();
      img.onload = function () {
        var N = 48, c = document.createElement("canvas"); c.width = c.height = N;
        var x = c.getContext("2d"); x.drawImage(img, 0, 0, N, N);
        var d = x.getImageData(0, 0, N, N).data, bins = {}, dark = [0, 0, 0, 0];
        for (var i = 0; i < d.length; i += 4) {
          if (d[i + 3] < 200) continue;
          var r = d[i], g = d[i + 1], b = d[i + 2], mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 510, s = mx === mn ? 0 : (mx - mn) / (255 - Math.abs(mx + mn - 255));
          if (l < 0.5 && s < 0.2) { dark[0] += r; dark[1] += g; dark[2] += b; dark[3]++; }
          if (s < 0.25 || l < 0.12 || l > 0.9) continue;
          var h = Math.round(Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) / Math.PI * 180 / 15);
          var k = bins[h] || (bins[h] = [0, 0, 0, 0, 0]); k[0] += r; k[1] += g; k[2] += b; k[3]++; k[4] += s;
        }
        var best = null, bestH = null; Object.keys(bins).forEach(function (h) { if (!best || bins[h][4] > best[4]) { best = bins[h]; bestH = +h; } });
        var sec = null; Object.keys(bins).forEach(function (h) { var dh = Math.abs(+h - bestH); dh = Math.min(dh, 24 - dh); if (dh >= 3 && bins[h][3] > 12 && bins[h][4] > (best ? best[4] * 0.15 : 0) && (!sec || bins[h][4] > sec[4])) sec = bins[h]; });
        dominantColor.second = sec ? rgbToHex([sec[0] / sec[3], sec[1] / sec[3], sec[2] / sec[3]]) : (dark[3] > 12 && best ? rgbToHex([dark[0] / dark[3], dark[1] / dark[3], dark[2] / dark[3]]) : null);
        if (best && best[3] > 12) return res(rgbToHex([best[0] / best[3], best[1] / best[3], best[2] / best[3]]));
        if (dark[3] > 12) return res(rgbToHex([dark[0] / dark[3], dark[1] / dark[3], dark[2] / dark[3]]));
        res("#1D1D1F");
      };
      img.onerror = function () { res("#1D1D1F"); };
      img.src = dataUrl;
    });
  }
  function guessDomains(name) {
    var p = PRESETS.filter(function (x) { return x.en.toLowerCase() === name.trim().toLowerCase(); })[0];
    if (p) return [p.domain];
    var slug = name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
    return [slug + ".com", slug + ".ae", slug + "bank.com", slug + ".com.sa", slug + ".co.uk"];
  }

  // ---------- boot: apply saved bank before the app renders ----------
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
  if (saved && saved.en) {
    window.BANK = saved;
    applyTheme(saved.color || "#B9500F", saved.font, saved.fontAr);
    if (window.LUNE_PALETTE) window.LUNE_PALETTE();
    try { document.title = saved.en + " Offers Assistant"; } catch (e) {}
  }

  // ---------- setup screen ----------
  var CSS = "\
.lsu{position:fixed;inset:0;z-index:20000;display:flex;align-items:center;justify-content:center;padding:24px 16px;background:#F7F9F8;font-family:'Plus Jakarta Sans',-apple-system,'Segoe UI',sans-serif;color:#070312;overflow:auto}\
.lsu *{box-sizing:border-box}\
.lsu-card{width:100%;max-width:520px;max-height:100%;overflow:auto;background:#fff;border:1px solid #E2E8E6;border-radius:24px;padding:28px 28px 24px;box-shadow:0 30px 80px rgba(0,46,42,.10)}\
.lsu-top{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#0A634D}\
.lsu-dot{width:8px;height:8px;border-radius:50%;background:#10A37F}\
.lsu h1{font-size:26px;line-height:1.15;font-weight:800;letter-spacing:-.02em;margin:10px 0 6px}\
.lsu-sub{font-size:14px;line-height:1.5;color:rgba(7,3,18,.68);margin:0 0 20px}\
.lsu-lbl{display:block;font-size:12px;font-weight:600;color:rgba(7,3,18,.72);margin:0 0 6px}\
.lsu-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 18px}\
.lsu-chip{display:flex;align-items:center;gap:6px;padding:5px 10px 5px 5px;border:1px solid #E2E8E6;border-radius:999px;background:#fff;font:inherit;font-size:12.5px;font-weight:500;color:#070312;cursor:pointer}\
.lsu-chip:hover{border-color:#10A37F;background:rgba(16,163,127,.06)}\
.lsu-chip img{width:20px;height:20px;border-radius:50%;object-fit:contain;background:#fff}\
.lsu-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0 0 14px}\
.lsu-in{width:100%;padding:11px 12px;border:1px solid #C9D3D0;border-radius:12px;font:inherit;font-size:14px;color:#070312;background:#fff;outline:none}\
.lsu-in:focus{border-color:#10A37F;box-shadow:0 0 0 3px rgba(16,163,127,.15)}\
.lsu-brand{display:flex;align-items:center;gap:14px;padding:14px;border:1px solid #E2E8E6;border-radius:16px;margin:4px 0 14px;background:#F7F9F8}\
.lsu-logo{width:56px;height:56px;border-radius:14px;background:#fff;border:1px solid #E2E8E6;display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none;font-weight:700;color:rgba(7,3,18,.4)}\
.lsu-logo img{width:100%;height:100%;object-fit:contain;padding:6px}\
.lsu-meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;font-size:12.5px;color:rgba(7,3,18,.68)}\
.lsu-meta b{font-size:14px;color:#070312;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\
.lsu-col{display:flex;align-items:center;gap:8px}\
.lsu-col input[type=color]{width:34px;height:34px;padding:0;border:1px solid #C9D3D0;border-radius:10px;background:none;cursor:pointer}\
.lsu-prev{display:flex;align-items:center;gap:8px;flex:none}\
.lsu-pill{padding:8px 14px;border-radius:999px;color:#fff;font-size:12.5px;font-weight:600}\
.lsu-seg{display:flex;padding:3px;background:#EEF2F1;border-radius:12px}\
.lsu-seg button{flex:1;padding:8px;border:0;border-radius:9px;background:transparent;font:inherit;font-size:13px;font-weight:500;color:rgba(7,3,18,.68);cursor:pointer}\
.lsu-seg button.on{background:#fff;color:#070312;box-shadow:0 1px 3px rgba(0,0,0,.08)}\
.lsu-more{border:1px solid #E2E8E6;border-radius:16px;padding:12px 14px;margin:0 0 6px}\
.lsu-more summary{cursor:pointer;font-size:13.5px;font-weight:600;list-style:none}\
.lsu-more summary::-webkit-details-marker{display:none}\
.lsu-more summary::before{content:'+ ';color:#0A634D}.lsu-more[open] summary::before{content:'− '}\
.lsu-more summary span{font-weight:500;color:rgba(7,3,18,.55);margin-left:4px}\
.lsu-go{width:100%;margin-top:8px;padding:14px;border:0;border-radius:999px;background:#10A37F;color:#fff;font:inherit;font-size:15px;font-weight:600;cursor:pointer}\
.lsu-go:hover{background:#0E9173}.lsu-go:disabled{background:#C9D3D0;cursor:default}\
.lsu-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:12px;color:rgba(7,3,18,.6)}\
.lsu-foot button{border:0;background:none;font:inherit;font-size:12px;color:#0A634D;cursor:pointer;padding:4px}\
.lsu-msg{font-size:12px;color:rgba(7,3,18,.6)}.lsu-msg.warn{color:#9A3412}\
.lsu-fab{position:fixed;top:16px;left:16px;z-index:19000;display:flex;align-items:center;gap:8px;padding:7px 12px 7px 8px;border:1px solid rgba(0,0,0,.08);border-radius:999px;background:rgba(255,255,255,.85);backdrop-filter:blur(8px);font-family:'Plus Jakarta Sans',-apple-system,sans-serif;font-size:12px;font-weight:600;color:#070312;cursor:pointer;opacity:.55;transition:opacity .2s}\
.lsu-fab:hover,.lsu-fab:focus-visible{opacity:1}\
.lsu-fab img{width:22px;height:22px;border-radius:50%;object-fit:contain;background:#fff}\
@media (max-width:480px){.lsu-row{grid-template-columns:1fr}.lsu-card{padding:22px 18px}}\
@media (max-width:500px){.lsu-fab{top:4px;left:8px;padding:3px 9px 3px 4px;font-size:0;gap:0;opacity:.7}.lsu-fab img{width:20px;height:20px}.lsu-fab::after{content:'Setup';font-size:11.5px;margin-left:5px}}";

  function el(tag, attrs, html) { var e = document.createElement(tag); Object.keys(attrs || {}).forEach(function (k) { if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }); if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function openSetup() {
    if (document.querySelector(".lsu")) return;
    var st = saved || {};
    var S = { logoFor: (st.en || "").toLowerCase(), en: st.en || "", ar: st.ar || "", domain: st.domain || "", logo: st.logo || "", color: st.color || "", lang: st.lang || "ar", cur: st.cur || "AED", region: st.region || "me", color2: st.color2 || "", font: st.font || "", fontAr: st.fontAr || "", fontSite: st.fontSite || "", customer: st.customer || "", rewards: st.rewards || "", debit: st.debit || "", credit: st.credit || "", busy: false, msg: "" };
    var wrap = el("div", { class: "lsu", role: "dialog", "aria-modal": "true", "aria-label": "Demo setup" });
    wrap.innerHTML = '<div class="lsu-card">\
<div class="lsu-top"><span class="lsu-dot"></span>Lune · Pulse demo setup</div>\
<h1>Which bank are you pitching?</h1>\
<p class="lsu-sub">The offers assistant takes on this bank\'s name, logo and colour. Only you see this screen.</p>\
<span class="lsu-lbl">Region</span><div class="lsu-seg lsu-reg" style="margin-bottom:14px"></div>\
<span class="lsu-lbl">Quick pick</span><div class="lsu-chips"></div>\
<div class="lsu-row"><div><label class="lsu-lbl" for="lsu-en">Bank name</label><input class="lsu-in" id="lsu-en" placeholder="e.g. Emirates NBD" autocomplete="off"></div>\
<div><label class="lsu-lbl" for="lsu-ar">Arabic name (optional)</label><input class="lsu-in" id="lsu-ar" dir="rtl" placeholder="الاسم بالعربية" autocomplete="off"></div></div>\
<label class="lsu-lbl" for="lsu-dom">Website (for the logo)</label><input class="lsu-in" id="lsu-dom" placeholder="bank.com" autocomplete="off">\
<div class="lsu-brand"><div class="lsu-logo"></div><div class="lsu-meta"><b class="lsu-name">No bank yet</b><span class="lsu-msg"></span>\
<div class="lsu-col"><input type="color" id="lsu-col" aria-label="Primary colour, for buttons" title="Primary: buttons"><input type="color" id="lsu-col2" aria-label="Secondary colour, for cards and progress" title="Secondary: cards and progress"><span class="lsu-hex"></span></div></div>\
<div class="lsu-prev"><span class="lsu-pill">Activate</span></div></div>\
<p class="lsu-msg lsu-regnote" style="margin:-4px 0 14px"></p>\
<div class="lsu-row"><div><label class="lsu-lbl" for="lsu-lang">Language</label><select class="lsu-in" id="lsu-lang"></select></div>\
<div><label class="lsu-lbl" for="lsu-cur">Currency</label><select class="lsu-in" id="lsu-cur"></select></div></div>\
<div class="lsu-row"><div><label class="lsu-lbl" for="lsu-font">Font</label><select class="lsu-in" id="lsu-font"></select></div>\
<div><label class="lsu-lbl" for="lsu-far">Arabic font</label><select class="lsu-in" id="lsu-far"></select></div></div>\
<p class="lsu-msg lsu-fontnote" style="margin:-4px 0 14px"></p>\
<details class="lsu-more"' + ((st.customer || st.rewards || st.debit || st.credit) ? " open" : "") + '><summary>Make it theirs <span>optional</span></summary>\
<div class="lsu-row" style="margin-top:12px"><div><label class="lsu-lbl" for="lsu-cust">Customer first name</label><input class="lsu-in" id="lsu-cust" placeholder="e.g. Sara" autocomplete="off"></div>\
<div><label class="lsu-lbl" for="lsu-rw">Rewards programme name</label><input class="lsu-in" id="lsu-rw" placeholder="e.g. Plus Rewards" autocomplete="off"></div></div>\
<div class="lsu-row"><div><label class="lsu-lbl" for="lsu-db">Debit card name</label><input class="lsu-in" id="lsu-db" placeholder="e.g. Infinite Debit" autocomplete="off"></div>\
<div><label class="lsu-lbl" for="lsu-cr">Credit card name</label><input class="lsu-in" id="lsu-cr" placeholder="e.g. Platinum Credit" autocomplete="off"></div></div>\
<p class="lsu-msg" style="margin:-4px 0 4px">The assistant greets the customer by name, and the bank\'s own programme and card names replace the generic ones.</p></details>\
<button class="lsu-go" type="button">Start the demo</button>\
<div class="lsu-foot"><span>Saved on this browser for next time.</span><button type="button" class="lsu-reset">Reset to Ajman Bank</button></div></div>';
    var $ = function (s) { return wrap.querySelector(s); };
    var en = $("#lsu-en"), ar = $("#lsu-ar"), dom = $("#lsu-dom"), col = $("#lsu-col"), cur = $("#lsu-cur");
    function fillCur() { var list = curList(); if (cur.options.length >= list.length) return; cur.innerHTML = ""; list.forEach(function (c) { cur.appendChild(el("option", { value: c[0] }, esc(c[1]))); }); cur.value = S.cur; }
    fillCur(); var curTry = 0, curIv = setInterval(function () { fillCur(); if ((window.FX_RATES && cur.options.length > 20) || ++curTry > 40) clearInterval(curIv); }, 150);
    function render() {
      en.value !== S.en && (en.value = S.en); ar.value !== S.ar && (ar.value = S.ar); dom.value !== S.domain && (dom.value = S.domain);
      cur.value = S.cur;
      $(".lsu-logo").innerHTML = S.logo ? '<img alt="">' : esc((S.en || "?").charAt(0));
      if (S.logo) $(".lsu-logo img").src = S.logo;
      $(".lsu-name").textContent = S.en || "No bank yet";
      var m = $(".lsu-msg"); m.textContent = S.busy ? "Looking up the logo…" : S.msg; m.className = "lsu-msg" + (/^No |placeholder/i.test(S.msg) ? " warn" : "");
      var acc = S.color ? usableAccent(S.color) : "#C9D3D0";
      col.value = S.color ? S.color : "#B9500F"; $("#lsu-col2").value = S.color2 || "#7A1F2B";
      $(".lsu-hex").textContent = S.color ? (acc.toUpperCase() !== S.color.toUpperCase() ? S.color + " → " + acc + " (darkened for readable text)" : acc) : "Colour comes from the logo";
      $(".lsu-pill").style.background = acc;
      $("#lsu-lang").value = S.lang;
      $("#lsu-font").value = S.font || "Source Sans 3"; $("#lsu-far").value = S.fontAr || "IBM Plex Sans Arabic";
      fontLink([S.font, S.fontAr]);
      $(".lsu-name").style.fontFamily = '"' + (S.font || "Source Sans 3") + '", sans-serif';
      $(".lsu-fontnote").textContent = S.fontSite ? (/licensed/.test(S.fontSite) ? "Their website uses " + S.fontSite.replace(" (licensed)", "") + ", a licensed font. Closest free match: " + S.font + "." : "Same font as their website: " + S.fontSite + ".") : "Pick the font closest to the bank's website.";
      $(".lsu-go").disabled = !S.en.trim() || S.busy;
      $(".lsu-reg").innerHTML = REGION_OPTS.map(function (r) { return '<button type="button" data-r="' + r[0] + '" class="' + (S.region === r[0] ? "on" : "") + '">' + r[1] + "</button>"; }).join("");
      [].forEach.call(wrap.querySelectorAll(".lsu-chip"), function (c) { c.style.display = c.getAttribute("data-region") === S.region ? "" : "none"; });
      var city = (window.LUNE_REGIONS && window.LUNE_REGIONS[S.region] || {}).city;
      $(".lsu-regnote").textContent = S.region === "me" ? "Offers from UAE merchants." : "Offers from " + city + " merchants, in " + S.cur + ".";
    }
    function lookup(domains, keepColor) {
      S.busy = true; S.msg = ""; render();
      var tryNext = function (i) {
        if (i >= domains.length) { S.busy = false; S.logo = ""; S.domain = ""; S.color = ""; S.logoFor = S.en.trim().toLowerCase(); S.msg = "No logo found. Type the bank's website below."; render(); return; }
        fetchLogo(domains[i]).then(function (data) {
          S.domain = domains[i]; S.logo = data; S.logoFor = S.en.trim().toLowerCase();
          dominantColor.second = null; return (keepColor ? Promise.resolve(S.color) : dominantColor(data)).then(function (c) { S.color = c; if (!keepColor) S.color2 = dominantColor.second || ""; S.busy = false; S.msg = "Logo from " + domains[i]; render(); });
        }).catch(function () { tryNext(i + 1); });
      };
      tryNext(0);
    }
    PRESETS.forEach(function (p) {
      var b = el("button", { type: "button", class: "lsu-chip", "data-region": p.region }, '<img alt="" src="' + logoUrl(p.domain) + '">' + esc(p.en));
      b.onclick = function () { S.en = p.en; S.ar = p.ar; S.cur = p.cur; S.region = p.region; S.color = p.color || ""; S.color2 = p.color2 || ""; S.font = p.font || ""; S.fontAr = p.fontAr || ""; S.fontSite = p.fontSite || ""; S.lang = p.region === "me" ? (S.lang === "en" ? "en" : "ar") : "en"; lookup([p.domain], !!p.color); };
      $(".lsu-chips").appendChild(b);
    });
    en.oninput = function () { S.en = en.value; render(); };
    en.onchange = function () {
      var name = S.en.trim(); if (!name || name.toLowerCase() === S.logoFor) return;
      var p = PRESETS.filter(function (x) { return x.en.toLowerCase() === name.toLowerCase(); })[0];
      S.ar = p ? p.ar : ""; S.color = p && p.color ? p.color : ""; S.font = p ? p.font : ""; S.fontAr = p ? p.fontAr : ""; S.fontSite = p ? p.fontSite : ""; if (p) { S.cur = p.cur; S.region = p.region; }
      lookup(guessDomains(name), !!(p && p.color));
    };
    ar.oninput = function () { S.ar = ar.value; };
    dom.onchange = function () { S.domain = dom.value.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, ""); if (S.domain) lookup([S.domain]); };
    col.oninput = function () { S.color = col.value; render(); };
    var col2 = $("#lsu-col2"); col2.oninput = function () { S.color2 = col2.value; render(); };
    cur.onchange = function () { if (cur.value) S.cur = cur.value; };
    [["#lsu-cust", "customer"], ["#lsu-rw", "rewards"], ["#lsu-db", "debit"], ["#lsu-cr", "credit"]].forEach(function (f) { var i = $(f[0]); i.value = S[f[1]]; i.oninput = function () { S[f[1]] = i.value; }; });
    $(".lsu-reg").onclick = function (e) { var r = e.target.getAttribute && e.target.getAttribute("data-r"); if (r && r !== S.region) { S.region = r; S.cur = REGION_DEF[r].cur; S.lang = REGION_DEF[r].lang; render(); } };
    var ls = $("#lsu-lang"); LANGS.forEach(function (l) { ls.appendChild(el("option", { value: l[0] }, l[1])); }); ls.onchange = function () { S.lang = ls.value; };
    var fs = $("#lsu-font"); FONT_LIST.forEach(function (f) { fs.appendChild(el("option", { value: f }, f === "Source Sans 3" ? "Source Sans 3 (default)" : f)); }); fs.onchange = function () { S.font = fs.value; S.fontSite = ""; render(); };
    var fa = $("#lsu-far"); FONT_AR.forEach(function (f) { fa.appendChild(el("option", { value: f }, f === "IBM Plex Sans Arabic" ? "IBM Plex Sans Arabic (default)" : f)); }); fa.onchange = function () { S.fontAr = fa.value; render(); };
    $(".lsu-go").onclick = function () {
      if (!S.en.trim()) return;
      var go = $(".lsu-go"); go.disabled = true; go.textContent = "Getting the " + S.cur + " rate…";
      var done = false, finish = function (fx) {
        if (done) return; done = true;
        var cfg = { en: S.en.trim(), ar: S.ar.trim(), domain: S.domain, logo: S.logo, color: S.color || "#1D1D1F", color2: S.color2, lang: S.lang, cur: S.cur, fx: fx || (window.FX_RATES || {})[S.cur] || null, region: S.region, font: S.font, fontAr: S.fontAr, fontSite: S.fontSite, customer: S.customer.trim(), rewards: S.rewards.trim(), debit: S.debit.trim(), credit: S.credit.trim() };
        try { sessionStorage.setItem(KEY + "-go", "1"); } catch (e) {}
        try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) { alert("This browser blocked saving the setup. Try a normal (non-private) window."); return; }
        location.reload();
      };
      setTimeout(function () { finish(null); }, 3000);
      fetch("https://open.er-api.com/v6/latest/AED").then(function (r) { return r.json(); }).then(function (d) { finish(d && d.rates && d.rates[S.cur]); }).catch(function () { finish(null); });
    };
    $(".lsu-reset").onclick = function () { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); };
    wrap.addEventListener("keydown", function (e) { if (e.key === "Escape" && saved) wrap.remove(); });
    document.body.appendChild(wrap);
    render();
    setTimeout(function () { en.focus(); }, 50);
  }

  function mount() {
    var s = document.createElement("style"); s.textContent = CSS; document.head.appendChild(s);
    // every new visit starts at setup (pre-filled with the last bank); a reload during the same pitch goes straight back in
    var started = false; try { started = sessionStorage.getItem(KEY + "-go") === "1"; } catch (e) {}
    if (!saved) { openSetup(); return; }
    if (!started) openSetup();
    var fab = el("button", { type: "button", class: "lsu-fab", title: "Change the bank for this demo" },
      (saved.logo ? '<img alt="">' : "") + "Demo setup · " + esc(saved.en));
    if (saved.logo) fab.querySelector("img").src = saved.logo;
    fab.onclick = openSetup;
    document.body.appendChild(fab);
  }
  // the bundle swaps the whole document after unpacking, so wait for the app root before mounting
  var tries = 0;
  (function wait() {
    if (document.body && document.querySelector("[data-theme]")) mount();
    else if (tries++ < 200) setTimeout(wait, 50);
  })();
  window.LuneSetup = { open: openSetup, palette: palette, usableAccent: usableAccent };
})();
