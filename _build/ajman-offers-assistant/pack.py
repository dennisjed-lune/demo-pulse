import re,json,base64,gzip,os,sys
SRC="/Users/dennisjedburgh/Downloads/Ajman Bank Offers Assistant.html"
OUT=sys.argv[1] if len(sys.argv)>1 else "/Users/dennisjedburgh/code/ux/pulse-demo/ajman-offers-assistant.html"
s=open(SRC).read()
man_m=re.search(r'(<script type="__bundler/manifest">)(.*?)(</script>)',s,re.S); man=json.loads(man_m.group(2))
for uid,e in man.items():
    f=[x for x in os.listdir("res") if x.startswith(uid)]
    if not f: continue
    new=open("res/"+f[0],"rb").read(); old=open("res.orig/"+f[0],"rb").read()
    if new!=old:
        e["data"]=base64.b64encode(gzip.compress(new) if e.get("compressed") else new).decode(); print("res patched",f[0])
for f in os.listdir("res"):
    uid=f.split(".")[0]
    mime={"javascript":"application/javascript","woff2":"font/woff2"}.get(f.split(".")[-1])
    if uid not in man and mime:
        man[uid]={"mime":mime,"compressed":False,"data":base64.b64encode(open("res/"+f,"rb").read()).decode()}; print("res added",f)
tpl=open("template.html").read()
out=s[:man_m.start(2)]+json.dumps(man)+s[man_m.end(2):]
tpl_m=re.search(r'(<script type="__bundler/template">)(.*?)(</script>)',out,re.S)
out=out[:tpl_m.start(2)]+json.dumps(tpl).replace("</","<\\/")+out[tpl_m.end(2):]
out=out.replace("<title>Bundled Page</title>","<title>Ajman Bank Offers Assistant</title>",1)
open(OUT,"w").write(out); print("wrote",OUT,len(out))
