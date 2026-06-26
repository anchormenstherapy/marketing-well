import re, glob
D = "/Users/JordanCaron/Documents/GitHub/marketing-well/mockups/growing"
files = glob.glob(D + "/*.html") + glob.glob(D + "/post/*.html")

def convert(t):
    t = t.replace('<base href="/mockups/growing/">', '<base href="/">')
    t = t.replace('href="/mockups/growing/', 'href="/')
    t = t.replace('href="/mockups/growing#', 'href="/#')
    t = t.replace('href="/mockups/growing"', 'href="/"')
    t = re.sub(
        r'href="(index|[a-z0-9/_-]+)\.html(#[a-z0-9-]+)?"',
        lambda m: 'href="/' + ('' if m.group(1) == 'index' else m.group(1)) + (m.group(2) or '') + '"',
        t,
    )
    return t

n = 0
for f in files:
    s = open(f, encoding="utf-8").read()
    o = convert(s)
    if o != s:
        open(f, "w", encoding="utf-8").write(o)
        n += 1
print("Updated", n, "files for root deployment")
