INSPIRE WELLNESS THERAPY — WEBSITE BUILD
=========================================

HOW TO DEPLOY (read this first)
-------------------------------
1. Upload the ENTIRE contents of this folder to your /inspire/ directory,
   overwriting everything. Don't cherry-pick files — just replace the whole
   folder each time. That guarantees every page has the files it needs.

2. Keep the folder structure exactly as-is:
   /inspire/
     index.html        <- homepage
     therapy.html      <- Anxiety (specialty template)
     bio.html          <- Alysha (therapist bio template)
     emdr.html         <- EMDR (modality template)
     site.css, *.jsx, data.js, icons.js   <- shared code (every page needs these)
     _ds/              <- design system (do not rename; the leading _ matters)
     assets/           <- images
     .nojekyll         <- leave this here (GitHub Pages needs it)

3. ALWAYS open pages WITH the trailing slash or the .html:
     https://www.marketingwell.ca/mockups/inspire/            (homepage)
     https://www.marketingwell.ca/mockups/inspire/therapy     (or therapy.html)
   Opening ".../inspire" WITHOUT the trailing slash can show a blank page,
   because the browser then looks for the shared files one folder too high.
   If the homepage is blank, add the "/" -> ".../inspire/".

PAGES
-----
- index.html   Homepage (Modern Minimal)
- therapy.html Anxiety therapy — specialty page template
- bio.html     Meet Alysha — therapist bio template
- emdr.html    EMDR — modality page template

Everything shares ONE site.css, ONE _ds/ folder, and ONE assets/ folder,
so uploading the whole folder each time keeps them all in sync.
