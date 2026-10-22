set -e
cd "$(dirname "$0")"
# the base file defines window.LUNE_REGIONS and REGION_APPLY; each catalog file adds one country
python3 - <<'PY'
import glob, os
base = open("regions.base.js").read()
i = base.index("(function () {")
parts = [base[:i]]
for f in sorted(glob.glob("../catalogs/[a-z][a-z].js")):
    parts.append("// ---- " + os.path.basename(f) + "\n" + open(f).read().rstrip() + "\n")
parts.append(base[i:])
open("res/bb5e7001-0000-4000-8000-0000000b5e71.javascript", "w").write("\n".join(parts))
PY
cp res/bb5e7001-0000-4000-8000-0000000b5e71.javascript /tmp/chk.js && node --check /tmp/chk.js
node -e 'global.window={};global.URL={};require("/tmp/chk.js");const R=window.LUNE_REGIONS;for(const k in R){const o=R[k].offers||{};const h=Object.keys(o).filter(i=>o[i].hide);console.log(k.padEnd(5),(R[k].label||"").padEnd(22),R[k].cur,R[k].lang,Object.keys(o).length,h.length?"hidden:"+h.join(","):"")};console.log("airlines",(window.LUNE_AIRLINES||[]).length)'
