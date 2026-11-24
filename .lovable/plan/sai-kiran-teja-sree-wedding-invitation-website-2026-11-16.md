# Sai Kiran & Teja Sree — Wedding Invitation Website

## Scope
A single immersive, mobile-first invitation page at `/` inspired by the Framer reference (layout, motion, layering) and a traditional Telugu invitation (maroon, antique gold, ivory parchment, temple borders, Ganesha).

## Phase 1 — Reference analysis
- Fetch the reference site (screenshots at 390px and desktop + page markup) and document sections, fonts, animation patterns and image layers in `public/assets/asset-manifest.json`.
- Reference artwork is from a commercial template, so it will not be copied. All artwork will be original, generated in a matching style. Anything that could not be inspected will be reported.

## Phase 2 — Original assets (separate layered files)
Generated images: parchment texture, temple arch frame, gold corner ornaments, maroon floral garlands (left/right), marigold/jasmine strands, Ganesha line art, mandap illustration, bride-and-groom motif, kalash/diya icons, per-event card backgrounds (wedding, dinner, haldi, mehendi, etc.).

## Phase 3/4 — Sections and motion
1. Opening gate: closed temple doors with names; "Open Invitation" button swings the doors open and starts the music (user interaction).
2. Divine blessings: Ganesha art, శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు, floating petals.
3. Invitation reveal: శుభ వివాహ ఆహ్వానం, English + Telugu names, invitation text, both families.
4. Events: swipeable cards (Swiper) — Muhurtham 7:29 PM and Dinner 7:00 PM, Dec 12 2026, SS Convention Hall. Haldi/Pellikuthuru/Pellikoduku/Mehendi/Reception exist in config but stay hidden until filled in.
5. Our story: framed photo placeholders with parallax, no invented story.
6. Muhurtham and venue: date, time, Google Maps button (search link for "SS Convention Hall, Mylavaram").
7. Countdown: live days/hours/minutes/seconds to 2026-12-12 19:29 Asia/Kolkata.
8. Blessings and RSVP: closing message, WhatsApp RSVP button.
9. Footer: names, date, "Forever begins here."
- Floating music button (starts muted; play/pause; loops).
- Scroll reveal, parallax, swaying garlands; all reduced under reduced-motion.

## Design
Deep maroon, antique gold, ivory parchment. Fonts: Great Vibes-style calligraphy for names, Cormorant Garamond for text, Noto Serif Telugu for Telugu.

## Needed from you (placeholders until then)
- WhatsApp RSVP number
- Couple photos
- The two physical invitation images (were not attached)
- Music file (a licensed track) — the button will be ready for it
- Dates/venues for the other functions

## Technical details
- `src/config/wedding.ts` holds all names, events, times, RSVP number, map link, audio path.
- Components in `src/components/wedding/*`, motion via `motion`, carousel via `swiper`.
- Countdown logic in a pure helper with a vitest test (target instant = 2026-12-12T13:59:00Z).
- Assets go in `src/assets/` (imported as images, lazy loaded); manifest at `public/assets/asset-manifest.json`.
- Head metadata on `/` with title, description, OG tags.
