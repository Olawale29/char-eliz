# CharEliz Nominees Consolidated Services Limited

Corporate website for CharEliz Nominees Consolidated Services Limited — procurement, construction, real estate and consultancy services.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

## Project structure

- `src/app` — routes (home, about, services, projects, projects/[slug], team, contact)
- `src/components` — UI, section and motion components
- `src/lib/data` — company, services, projects and team content (single source of truth, no hardcoded copy in components)
- `public/images` — brand assets, team headshots, illustrative service/project imagery

## Contact form email

The contact form (`src/components/contact-form.tsx` → `src/app/api/contact/route.ts`) sends email via SMTP. Copy `.env.example` to `.env.local` and fill in real SMTP credentials:

```
SMTP_HOST=
SMTP_PORT=465
SMTP_USER=
SMTP_PASSWORD=
CONTACT_TO_EMAIL=info@charelizng.com
CONTACT_FROM_EMAIL=
```

Without these set, the form still validates and submits successfully, but enquiries are only logged server-side rather than emailed.
