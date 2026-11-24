# Sai Kiran & Tejasree — Wedding Invitation

English and Telugu wedding invitation for 12 December 2026, built with React, TanStack Start, TypeScript, Tailwind CSS, and Motion.

## Run locally

```sh
nvm use
npm install
npm run dev
```

Open the local URL printed by Vite. The Node version is recorded in `.nvmrc`.

## Personalize

Edit `src/config/wedding.ts` for names, family details, events, venue, Google Maps link, music, and photos. Put couple photos in `public/photos/` and add their paths to the `photos` array. An empty array displays the framed placeholder.

Original illustrations are resolved through `src/config/artwork.ts` and stored in `public/assets/original/` with their original filenames.

## Checks

```sh
npm test
npm run build
```

This project originated in Lovable. Follow `AGENTS.md` when editing or reconnecting it to Lovable.
