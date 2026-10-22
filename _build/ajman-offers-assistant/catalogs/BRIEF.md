# Country merchant catalogs for the Offers Assistant sales demo

The demo is a bank's card-linked offers app. A salesperson picks the bank's country. Every offer slot then shows a real brand **from that country** (not a regional or neighbouring-country brand). Each country is one JS file.

Read the two examples first: `_us_example.js` (English country) and `_ksa_example.js` (Arabic country, with Arabic name map in `text`).

## Output

For each country ISO code `xx` (lowercase), write `xx.js` in this folder:

```js
window.LUNE_REGIONS.xx = {
  label: "Germany", city: "Berlin", cur: "EUR", lang: "de",
  text: { ... }, logos: { ... }, offers: { ... }, partners: {}, gifts: { ... }
};
window.LUNE_AIRLINES = (window.LUNE_AIRLINES || []).concat([
  { id: "lufthansa_de", kind: "air", regions: ["xx"], name: "Lufthansa Miles & More", unit: "Miles & More miles", unitOne: "Miles & More mile", logo: "ld:lufthansa.com", color: "#FFFFFF", fg: "#05164D", initial: "L", account: "LH ···· 4410", rate: 0.5 }
]);
```

- Use the **same shape and the same `text` keys** as `_us_example.js`. Values are the local equivalents. `text` keys are UAE source strings that get replaced everywhere in the app (brands, places, loyalty names, domains).
- `city`: the country's main commercial city. All `place` / `place2` values are real places in that city.
- `cur`: ISO 4217 code. `lang`: one of ar, en, fr, es, pt, de, it, hi, ur, zh, ru (the app's languages). Pick the main local one if it is in that list, else `en`.
- Arabic-default countries (`lang: "ar"`): also add Arabic keys to `text` like `_ksa_example.js` does (Arabic UAE names → Arabic local names).
- Money in copy stays written in AED (for example `"up to AED 80 a visit"`). The app converts it. Do not convert.
- `LUNE_AIRLINES`: 1 or 2 airline loyalty programmes **of that country** (flag carrier first; it is shown as the linked account, so give it an `account` like "XX ···· 1234"; the second gets `account: null`). `id` must be unique: `<airline>_<iso>`. `rate` 0.5 for miles. `fg` = brand colour.

## Offer slots (keep ids; replace the brand with a local one of the same kind)

| slot id | kind of brand |
|---|---|
| waitrose | premium supermarket (in store) |
| spinneys | second supermarket chain |
| carrefour | hypermarket / big-box store |
| noon | biggest local online marketplace |
| amazon | Amazon if it operates there, else the 2nd online marketplace (set brand) |
| justmop | home cleaning / home services app |
| careem | ride-hailing app used there (`logos.careem`: "uber" if Uber, else "ld:domain") |
| namshi | food delivery app (brand is "Deliveroo" in UAE source; text keys "Deliveroo", "Deliveroo Plus", "Talabat") |
| talabat | coffee chain: keep Starbucks if it operates there (no override needed), else a local coffee chain |
| washmen | sportswear: keep Nike (no override) |
| vox | cinema chain |
| shakeshack | burger chain: keep Shake Shack if present (only override place/place2/qualifies), else a local burger chain |
| emirates | flag airline (offer) — text keys "Etihad", "etihad.com", "Etihad Guest", "Etihad Guest Miles" |
| wizz | low-cost airline of that country |
| kidzania | toy store (copy the toy-store override shape from the US example: deal/valueNote/qualifies/excludes/game) |
| olioli | kids museum / science centre (or `{ hide: true }` if no good logo) |
| yas | theme park or water park reachable from the city |
| wbworld | second family attraction: zoo, aquarium, park (or `{ hide: true }`) |
| cocacolaarena | main concert arena |
| platinumlist | ticketing platform |
| atlantis | family resort with pool / water park |
| ritzrak | luxury hotel in the city (staycation) |

`gifts.talabat`: the food-delivery brand `{ name, logo }`. If Amazon is replaced, add `gifts.amazon` too.
In `qualifies`, keep the phrase "Paid with your Ajman Bank card ···· 4417" exactly (the app rewrites it).

## Logos (house rule: no bad logos in demos)

- Logos come from logo.dev: `https://img.logo.dev/<domain>?token=pk_PCfI5A2ISc2tZmQNIql7Ww&size=200&format=png&retina=true`. In the JS write `"ld:<domain>"`.
- **Download every logo and look at it** (Read the PNG). Reject: blurry or pixelated, a generic placeholder letter or globe, the wrong company, a parent-company mark instead of the brand, a tiny wordmark lost in white space, or a near-empty image. Try other domains (country TLD, .com, app domain). If no domain gives a good logo, choose another real local brand of the same kind.
- Tip: make one contact sheet per country with Python PIL so you can review all logos in one image.
- `brandColor`: the brand's real main colour (hex).

## Quality

- Brands must be real and actually operate in that country today. No invented brands. No brand from a neighbouring country.
- Plain English copy. No em or en dashes.
- Check syntax: `node -e 'global.window={LUNE_REGIONS:{}};require("./xx.js");console.log(Object.keys(window.LUNE_REGIONS.xx.offers).length)'` (copy to /tmp/x.js first if needed).
- Final reply: one line per country: ISO, city, cur, lang, and any slots you hid or brands you swapped because of bad logos.
