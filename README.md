<h1 align="center">alhanabi.com</h1>

<p align="center">
  <strong>The personal website of Ali Al-Hanabi</strong><br>
  IT Manager &nbsp;|&nbsp; Head of Technology
</p>

<p align="center">
  <em>Leading technology. Connecting strategy with execution.</em>
</p>

<p align="center">
  <a href="https://www.alhanabi.com">Visit the live website</a>
</p>

---

This repository holds the source of [www.alhanabi.com](https://www.alhanabi.com), an executive portfolio for technology leadership. It presents professional experience, selected initiatives, an operating philosophy, and ways to get in touch, in English and Arabic.

The site is leadership first and technology second. Employer-related initiatives are described at a general level, and no internal figures are published.

## Sections

| Page | Purpose |
|---|---|
| **Home** | Positioning, the five areas of responsibility, and an overview of how I work |
| **About** | Career story, how I lead, and operating values |
| **Work** | Professional initiatives described at a general level, and independent projects such as ShareAdd and Ali OS |
| **Resume** | Five leadership pillars, career timeline, credentials, and a downloadable CV in PDF |
| **Philosophy** | The principles behind how I approach technology and operations |
| **Notes** | Short essays on technology, operations, and clear systems |
| **Contact** | Professional inquiries and collaboration |

## Features

- **Bilingual:** full English and Arabic content, with right-to-left layout for Arabic. The language choice is remembered in the visitor's own browser.
- **Responsive:** designed for phones, tablets, and desktops.
- **Search and sharing metadata:** canonical links, Open Graph tags, structured data (schema.org `Person`, `WebSite`, and `WebPage`), a sitemap, and a `robots.txt`.
- **Web app metadata:** a manifest and icon set.
- **Custom 404 page** and a downloadable CV.
- **No analytics or tracking scripts.** The only third-party resource the pages load is the font stylesheet from Google Fonts.

## Technology

- Plain HTML, CSS, and JavaScript. There is no framework, no bundler, no package manager, and no build step.
- Fonts: Inter, Schibsted Grotesk, and Tajawal (for Arabic), loaded from Google Fonts.
- Identity assets as SVG; project screenshots as WebP.

## Deployment

The live site is served by **Cloudflare**, as a Cloudflare Worker with static assets, configured in [`wrangler.toml`](wrangler.toml). The Worker is connected to this repository through Cloudflare Workers Builds, so a push to the `main` branch is built and deployed automatically.

- Only files that are listed in [`.assetsignore`](.assetsignore) are published. It is an allowlist: every file is excluded by default, and each public page, script, style, and asset is re-included explicitly. Repository files such as this README and `wrangler.toml` are not published.
- The repository's `github.io` address is not the production host; it redirects to `www.alhanabi.com`.

## Run it locally

No installation is needed. From the repository root, start any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. The local server shows every file in the folder; the deployed site publishes only the allowlist above.

## Repository layout

```
index.html, about.html, work.html,
resume.html, philosophy.html,
notes.html, contact.html, 404.html   Pages
styles.css                           Styles, including right-to-left rules
script.js                            Home page: rendering, language switching, interactions
site-pages.js                        Inner pages: language switching, English and Arabic text
profile-data.js                      Profile data used by the home page
assets/                              Photo, icons, identity SVGs, CV PDF, screenshots
sitemap.xml, robots.txt              Search metadata
site.webmanifest                     Web app manifest
wrangler.toml, .assetsignore         Cloudflare Worker and static asset configuration
```

## Updating content

The home page reads its profile data from `profile-data.js` and renders it with `script.js`. The inner pages keep their text in the HTML and in the English and Arabic dictionaries in `site-pages.js`. To publish a new public file, add it to `.assetsignore`; files that are not listed are not deployed.

## Rights

© Ali Al-Hanabi. All rights reserved.
