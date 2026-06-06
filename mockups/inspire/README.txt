Inspire Wellness Therapy — Homepage (Modern Minimal)
=====================================================

WHAT'S IN HERE
--------------
A self-contained static website. Just upload the entire contents of this
folder to your web server (preserving the folder structure) and it will work.

  index.html              ← the homepage (open this / set as your site root)
  modern-minimal.jsx      ← page layout & content
  data.js                 ← all editable copy: team, services, FAQ, insurers, etc.
  icons.js                ← inline icons
  _ds/                    ← design system (fonts, colours, components) — do not rename
  assets/images/          ← hero photo, team portraits, closing photo

HOW TO DEPLOY
-------------
1. Upload everything in this folder to your server's web root
   (e.g. public_html/) — keep the folder structure exactly as-is.
2. Visit your domain. index.html is the entry point.

That's it — no build step or server-side software required. The page is
plain HTML/CSS/JS and loads its libraries from a public CDN, so the server
only needs to serve static files.

EDITING CONTENT LATER
---------------------
Most text (team names/titles, services, FAQ, insurers, phone/email/address)
lives in data.js — edit that file and re-upload it.

NOTES / NEXT STEPS
------------------
• Every "Book" button points to your JaneApp discovery-call link.
• "Meet [Name]" links and the "Explore … therapy" links currently point to "#"
  — wire them to real bio/service pages when those exist.
• This build compiles the page in the browser (via Babel + React from a CDN),
  which is great for review and works on any host. For a production site you
  may eventually want a precompiled/optimized build for best load speed & SEO —
  happy to prepare that when you're ready.
