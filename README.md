# El Duende del Crater

Official website for **El Duende del Crater**, an independent Panamanian craft beer brand made in El Valle de Anton, Panama.

The site presents the brand, the Duende universe, real photography, demo beer cards, and contact channels for personal orders and business inquiries.

## Production Site

- Vercel: https://alfonsodelag-el-duende-del-crater.vercel.app
- GitHub: https://github.com/alfonsodelag/el-duende-del-crater

## Content Status

The site already includes:

- Official logo in the header, hero, footer, and sharing preview image.
- Real photos in the hero, brewer section, and community gallery.
- WhatsApp: `6337-0513`.
- Instagram: `@duendedelcrater`.
- Structure for beer catalog, featured batch, points of sale, events, and B2B opportunities.

Information still needed before the content can be considered final:

- Public email, if the brand wants one listed.
- Real beer catalog: names, styles, ABV, IBU, tasting notes, formats, availability, batches, and label/product images.
- Brewer details: name, short bio, brewing philosophy, and social links.
- Official brand story and Duende legend.
- Confirmed points of sale.
- Market, event, or collaboration calendar.
- Business details: wholesale formats, minimum orders, delivery/service area, and contact process.

## Stack

- Astro
- TypeScript
- Vue islands where the original base template still requires them
- Tailwind CSS / modern CSS
- Vercel adapter
- Storyblok integration remains from the base template, while the current home page uses local data in `src/data`

## Main Structure

```text
src/
  components/layout/      Header and footer for the Duende site
  components/sections/    Home page sections
  components/ui/          Small reusable components
  data/                   Local brand and demo beer data
  layouts/                Duende site layout
  pages/index.astro       Main home page
  styles/duende.css       Brand styles
public/images/            Logo, real photos, and sharing preview image
```

## Commands

Install dependencies:

```bash
npm install
```

Run local development:

```bash
npm run dev
```

Validate and build production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Deploy

The Vercel project is:

```text
alfonsodelag-el-duende-del-crater
```

Manual production deploy from this folder:

```bash
vercel deploy --prebuilt --prod --yes --project alfonsodelag-el-duende-del-crater
```

If code changes were made, run this first:

```bash
npm run build
```

## Development Notes

- Do not invent product data, prices, availability, distributors, or testimonials.
- Any provisional content must stay marked as `TODO` or `DEMO`.
- The site represents a craft beer brand, not a restaurant, bar, or taproom.
- Keep the logo as the official asset; do not redraw or recolor it.
