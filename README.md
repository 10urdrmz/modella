# hive (modella)

EmDash storefront inspired by [Hive Modern](https://hivemodern.com/) — mobile-first designer furniture, content editable in EmDash admin.

## Develop

```bash
npm install
npm run dev
```

- Public site: http://localhost:4321/
- Admin: http://localhost:4321/_emdash/admin

SQLite database: `data.db` (created on first request). Seed: `seed/seed.json`.

## Schema (admin-managed)

- **products** — title, image, designer, price, shipping, summary, content, featured; tagged with **brand** + **category**
- **pages** — Home / About / Trade (hero, CTA, phone, content)
- **contact** — showroom location, address, phone, hours (`Contact & Location` → entry `main`); used in footer Contact column, `/contact`, About, Trade
- **footer** — newsletter copy, column headings, bottom brand, social URLs (`Footer` → entry `main`)
- **Menus → Footer — Support / Footer — Account** — footer link lists
- **category_pages** — hub & subcategory copy + hero/tile image paths (`/category/{slug}`)
- **category** taxonomy — hierarchical (Furniture → Seating, Accessories → Clocks, …)
- **brand** taxonomy — Cassina, Moroso, Flos, Herman Miller
- **Menus → Primary Navigation** — header links (Furniture, Lighting, Accessories, …)

Edit categories, menus, and demo products in `/_emdash/admin`. Reseed with:

```bash
npx emdash seed seed/seed.json --on-conflict=update
```

Passkey setup in admin is user-only. No production deploy from this project by default.
