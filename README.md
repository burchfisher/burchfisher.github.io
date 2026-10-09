# G. Burch Fisher's Website

Static academic website for G. Burch Fisher at the University of Maryland Center for Environmental Science.

The ribbon design is the live homepage. The globe design remains available at `explorer.html`, and `comparison.html` links to both versions.

## Editing

Edit the source files in `mockups/`. Shared content lives in `site-content.js` and `publications.js`. The two designs have separate scripts and share the Explorer stylesheet.

Run `node scripts/build-site.mjs` to create the publishable site in `dist/`. Open `dist/index.html` to preview the live homepage locally. No dependencies or server are required.

Pushing to `main` publishes the site through GitHub Actions and GitHub Pages. Only the generated site is deployed; content audits and retired HTML mockups are not published as website pages.

## Domain

The initial deployment uses the repository's GitHub Pages address. The existing burchfisher.com domain and Weebly site are unchanged. A custom domain can be configured separately when ready.

## Content

Paper PDFs, supplementary archives, and images are stored locally so the website does not depend on Weebly. Publications and third-party material retain their original rights and licenses. This repository does not grant a blanket license to redistribute those materials.
