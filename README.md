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

## Schema (small)

- **products** — title, image, designer, price label, shipping note, summary, content, featured
- **pages** — title, hero image/headline/subcopy, CTA, phone, content (Home / About / Trade)
- **brand** taxonomy on products
- Primary menu: Furniture, Brands, Trade, About

Passkey setup in admin is user-only. No production deploy from this project by default.
