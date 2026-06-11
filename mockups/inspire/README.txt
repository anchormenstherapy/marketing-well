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

3. The homepage works with OR without the trailing slash:
     https://www.marketingwell.ca/mockups/inspire
     https://www.marketingwell.ca/mockups/inspire/
   Interior pages open as a clean URL or with .html:
     https://www.marketingwell.ca/mockups/inspire/therapy
     https://www.marketingwell.ca/mockups/inspire/therapy.html

PAGES
-----
- index.html   Homepage (Modern Minimal)
- therapy.html Anxiety therapy — specialty page template
- bio.html     Meet Alysha — therapist bio template
- emdr.html    EMDR — modality page template

Everything shares ONE site.css, ONE _ds/ folder, and ONE assets/ folder,
so uploading the whole folder each time keeps them all in sync.
