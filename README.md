# The Kalyani Adventure Guide

An independent, mobile-first field guide for students living around JIS College of Engineering, Kalyani. This is not an official college website.

## Website

https://varmad07.github.io/suru_kalyani/

Open `index.html` directly to use the guide locally. No framework, installation, build process or backend is required. Google Fonts are optional; Maps and source links need internet access. All editorial destination photos are embedded in the HTML.

## Features

- Searchable places, food filters, respectful cultural notes and six Kolkata route ideas.
- Local favourites, first-week and food checklists, a graduation bucket list, day plans and private notes.
- Group budget calculator, JSON backup/restore, accessible dialogs, responsive photo cards and a photo viewer.
- Open Graph and Twitter metadata using the supplied banner at `assets/share-banner.png`.

Share the website URL, rather than the GitHub repository URL, to use the website's banner. Platforms choose their own crop and may cache previews. The supplied artwork is used unchanged as promotional artwork, not as verified photographic evidence of particular locations.

## Publishing

GitHub Pages should publish from `main`, repository root. `.nojekyll` enables plain static-file hosting. If the repository or hostname changes, update the canonical URL, Open Graph URL/image, Twitter image, PUBLIC_GUIDE_URL, robots.txt and sitemap.xml together.

## Content and privacy

Design updated 2 October 2026. Place research checked 1 October 2026. Dates indicate source checks, not live operating status. Unmeasured distances, unknown admission information, menu uncertainty and planning allowances are explicitly labelled. Recheck current venue notices before travelling.

Progress is stored only in this browser's localStorage. Nothing is sent to a backend. Moving from a local file or another domain to this site does not automatically move progress: export a backup and restore it here.

## Image credits

The banner was supplied by the project owner and is preserved unchanged. Credits and licence links for the Wikimedia photographs are included in the website's Sources / Photo notebook section. Resized or cropped photographs retain their stated licences. No photographer or institution endorses the guide. Do not assume that one blanket licence covers all image assets.

## Updating and checks

Edit the `places` dataset in `index.html`; preserve stable IDs so saved favourites remain valid. Cite current sources and distinguish verified prices from personal budget targets. Keep research dates accurate when making cosmetic edits.

Run `node checks/validate.mjs` to check JavaScript syntax, local sharing assets and static metadata. Browser-check search, saved progress, dialogs and a narrow phone layout after interactive changes.

