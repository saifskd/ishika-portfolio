# Ishika — creative portfolio

An editorial graphic design portfolio built on the existing Next.js 14 Pages Router, React 18, Framer Motion, React Icons and custom CSS.

## Run locally

From this directory:

```sh
npm install
npm run dev
npm run lint
npm run build
npm start
```

## Content and artwork

All profile, navigation, contact, experience, education, expertise, skills and project content lives in `data/portfolioData.js`.

Original-quality project images are in `public/images/projects/`. Next.js generates responsive image variants; gallery images retain their original proportions and load lazily. The project dialog uses larger variants. Shadow Ethos contains both the cover and landscape mockup.

There are **13 project records and 12 published projects, displayed as 19 artwork cards**. `Chasing the Yeti` has `assetPending: true` because `Option 2.jpg.jpeg` was absent from the supplied folder. No placeholder artwork is published. To activate it:

1. Add the actual cover to `public/images/projects/chasing-the-yeti-book-cover.jpg`.
2. Set its thumbnail and images array in the data file, including the actual width, height and descriptive alt text.
3. Remove `assetPending: true` (or set it to false).

The separately mentioned `Product Photo Editing img.png` is also missing; it is not one of the nine specified projects.

To add another project, add its image assets and a record with a unique id, title, category, filter, subtitle, description, thumbnail and images. Each image has src, alt, width and height. Optional fields include tools, video, url, featured and orientation. Set filter to one of the existing filter labels, or add a label to filters. Avoid unconfirmed clients, dates, outcomes and software attribution.

## Direct contact and configuration

The Contact section provides clickable email and phone cards. No contact form, contact API or mail-service setup is required. The unused mail dependency and its environment settings have been removed.

`.env.example` only contains `NEXT_PUBLIC_SITE_URL`. Set it to the confirmed production origin before deployment. Canonical and Open Graph URLs, robots sitemap reference and sitemap entries are emitted only when it is configured.

## Resume and privacy

`public/files/ishika-cv-2026.pdf` is a public copy of the supplied four-page CV with the residential address securely redacted. All four pages were visually reviewed and address text absence verified. The original supplied PDF is untouched. Download Resume uses the local PDF and download attribute.

## Implementation

Existing pages and component boundaries are retained. Banner, Navbar, Footer, ThemeContainer, Project and ContactSection now use Ishika's design and data. ProjectGallery adds filters and a native modal dialog (keyboard focus containment, Escape dismissal, focus restoration). About includes experience, education, skills, languages and interests. The theme persists in localStorage. Motion honors reduced-motion preferences.

Removed: old developer artwork, portrait and logo directories; old favicons, Google verification, static sitemap/robots and framework placeholder assets; unused legacy styles; Cursor and TransitionScreen; sample hello API; unrelated wallsbazaar-users API and MongoDB helper; stale environment file. Removed the unused mongodb dependency. The unused mail dependency was also removed after switching to direct contact. No npm packages added. The project folder name is preserved to avoid disrupting existing local setup.

## Verification

- `npm run lint`: no warnings or errors.
- `npm run build`: passes.
- Browser checks at 1920, 1440, 1366, 1024, 768, 430, 390 and 360px on Home and About: no horizontal overflow.
- All category filters; Shadow Ethos two-image dialog, Escape and focus restoration; theme persistence; mobile menu; resume HTTP/PDF response; direct email and telephone links; 404, robots and sitemap checked.
- No old portfolio identity remains in application source/content or package metadata.

Fonts use Playfair Display and Inter through Google Fonts, with local serif/sans-serif fallbacks if the network is unavailable. A restricted build environment may report that font stylesheet optimization was skipped; this does not fail the build.

## Branding assets

The supplied images are stored unchanged:

- `public/images/branding/ishika-logo-dark.png`
- `public/images/branding/ishika-logo-light.png`
- `public/images/branding/ishika-icon.png`
- `public/images/profile/ishika-profile.png`

`components/BrandLogo.js` shares the responsive logo across Navbar and Footer. CSS uses the existing `data-theme` attribute to show the dark logo in light mode and the light logo in dark mode. The About portrait retains its full original proportions. Next.js Image serves responsive variants without changing the stored originals. `_document.js` uses the supplied PNG favicon and touch icon.

Production builds use `.next-production`, while development uses `.next`, so running a development server cannot overwrite production build artifacts. The usual npm build/start commands remain unchanged.

## Additional artwork collection

All 11 new images are copied unchanged to `public/images/projects/` and are visible individually in Selected Work. Eight related Oishi Flavours images share one central project and one eight-image lightbox. Each artwork card opens that collection at its matching image. Together with three standalone product concepts, these are four new grouped projects, not eleven unrelated client projects.

| Uploaded file | Stored asset |
| --- | --- |
| Poster 2.jpg.jpeg | lakshmi-akarshan-sindoor-concept.jpg |
| sauce image 2.jpg.jpeg | oishi-sauce-product-visual.jpg |
| post 9.jpg.jpeg | oishi-sauce-taste-the-love.jpg |
| post 7.jpg.jpeg | oishi-cookie-flavour-selection.jpg |
| post 5.jpg.jpeg | oishi-apple-cinnamon-cookie.jpg |
| post 4.jpg.jpeg | oishi-sweeten-your-day.jpg |
| post 2.jpg.jpeg | oishi-playful-cookie-poster.jpg |
| MENU FOR INSTA 3.jpg.jpeg | oishi-gourmet-menu.jpg |
| IMG 3.jpg.jpeg | oishi-dark-chocolate-cookie.jpg |
| perfume.jpg.jpeg | oud-dominian-perfume-concept.jpg |
| lotion.jpg.jpeg | velour-strawberry-lotion-concept.jpg |

For a related series, set `showAllArtworks: true` on its project record to show each image as a gallery card while keeping its project data and detail gallery grouped. Add a title, descriptive alt text and actual dimensions to each image.
