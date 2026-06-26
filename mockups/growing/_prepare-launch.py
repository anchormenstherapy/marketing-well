#!/usr/bin/env python3
"""
Growing Minds — launch path-flip.

The site was built to preview at  marketingwell.ca/mockups/growing/  so every
internal link is prefixed with /mockups/growing and the pages use
<base href="/mockups/growing/">.  When the site is deployed at the root of
https://www.growingmindscounselling.com/  those prefixes must become "/".

Run this ONCE, from inside the growing/ folder, right before you push to the
client's repo:

    python3 _prepare-launch.py

After it runs:
  - <base href> becomes "/"
  - every /mockups/growing/<page>  ->  /<page>
  - every /mockups/growing#section ->  /#section
  - every relative  <page>.html    ->  /<page>   (clean URL)
  - index.html -> /

NOTE: once run, the marketingwell.ca/mockups/growing preview will no longer
work (that's expected — the links are now root-relative). Delete this file
before committing if you like; it is harmless either way.
"""
import os, re, glob

os.chdir(os.path.dirname(os.path.abspath(__file__)))
files = glob.glob("*.html") + glob.glob("post/*.html")


def convert(t: str) -> str:
    # 1. base href -> root
    t = t.replace('<base href="/mockups/growing/">', '<base href="/">')
    # 2. absolute preview links
    t = t.replace('href="/mockups/growing/', 'href="/')
    t = t.replace('href="/mockups/growing#', 'href="/#')
    t = t.replace('href="/mockups/growing"', 'href="/"')
    # 3. relative .html page links -> clean root-relative (handles post/ too)
    t = re.sub(
        r'href="(index|[a-z0-9/_-]+)\.html(#[a-z0-9-]+)?"',
        lambda m: 'href="/' + ('' if m.group(1) == 'index' else m.group(1)) + (m.group(2) or '') + '"',
        t,
    )
    return t


changed = 0
for f in files:
    s = open(f, encoding="utf-8").read()
    o = convert(s)
    if o != s:
        open(f, "w", encoding="utf-8").write(o)
        changed += 1

print(f"Path-flip complete. Updated {changed} files for root deployment.")
print("Internal links are now root-relative (/page, /#section). Ready to push.")
