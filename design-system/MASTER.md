# Portfolio Design System — MASTER

Source of truth for Yash Wanvari's portfolio. Adapted from Wordsmith Brand Book V1.0 (2026).
The portfolio uses Wordsmith's editorial/literary-press visual language without using
Wordsmith's logos or trademarks. The portfolio's own YW mark stays.

---

## Voice

Like a good editor, not a thesaurus. Direct (not curt). Specific (not generic).
Confident (not bossy). Quiet (not bland). No emoji-as-decoration. No exclamation
marks for emphasis. No "✨" hype language.

## Palette — ink, paper, one green

Color does work; it doesn't decorate. Reach for the green only when it does
functional work (suggestion state, focus, accent on a period mark).

**Light (Paper) mode**

| Token            | Hex       | Use                                  |
|------------------|-----------|--------------------------------------|
| `--paper`        | `#FFFFFF` | Page surface                         |
| `--paper-warm`   | `#F5EFE6` | Editorial cards, asides, postcards   |
| `--text`         | `#0D1320` | Foreground prose                     |
| `--text-muted`   | `#4A5468` | Secondary prose                      |
| `--text-soft`    | `#6B7385` | Eyebrows, metadata                   |
| `--strike`       | `#9AA0AC` | Struck-through old text              |
| `--rule`         | `rgba(13,19,32,0.10)` | Hairline rules           |
| `--suggest-bg`   | `#E8F5E9` | Accepted-text background             |
| `--suggest-fg`   | `#1E5631` | Accepted-text accent                 |
| `--suggest-ink`  | `#173B2E` | Suggestion ink                       |

**Dark (Ink) mode** flips ink↔paper using the same tokens — see `App.vue`.

## Typography

Serif for the page, sans for the app, mono for metadata. Never mix serif body
with the app's UI sans.

- `--font-serif` — **Newsreader** / Iowan Old Style / Hoefler Text / Garamond / Georgia
  — headlines, manuscript body, pull quotes, project descriptions.
- `--font-sans` — **Inter** / system sans — buttons, menus, side panels,
  any chrome. Never inside the manuscript.
- `--font-mono` — **JetBrains Mono** / SF Mono / Menlo — eyebrows, page numbers,
  metadata, "PARAGRAPH · ¶ 12" labels, technology tags.

## Signature interaction: the diff

The portfolio's hero contains `WritingAnimation.vue` — the literal Wordsmith
suggestion pattern adapted as the centerpiece animation.

- Phase 1: type the "rough draft" sentence in serif with a blinking caret
- Phase 2: editor's note fades in alongside the paragraph (mono, indented rule)
- Phase 3: old text strikes through in `--strike` grey (`scaleX` animation)
- Phase 4: new text types in beside it on `--suggest-bg`, italicized, flip-in 3D
- Phase 5: `Accept · Reject · Explain` actions fade in (primary green, then secondaries)
- Phase 6: Accept flashes a focus ring, the paragraph fades, counter advances

Cycles through four "before → after" suggestions about Yash's work.

## Patterns

- **Eyebrow** — `.editorial-eyebrow` — mono, uppercase, 0.18em tracking, used
  above every section title (e.g. `CHAPTER 02 · ABOUT`).
- **Hairline rule** — `.editorial-rule` — 1px in `--rule`, separates editorial blocks.
- **Period accent** — `.period` — the final period in a heading is colored in
  the suggestion green. The single decorative move allowed.
- **Section masthead** — eyebrow + hairline rule + display heading + serif lede.
- **Card** — paper background, single rule border, 4px radius, hover lifts to
  `--text-muted` border. No drop shadows, no gradients, no glow.
- **Buttons**
  - Primary: filled `--text`, paper text, 3–4px radius, sans, 0 letter-spacing.
  - Secondary: outlined rule border.
  - Action (Accept): filled `--suggest-ink` on light / `--suggest-fg` on dark.
- **Project entry** — `ENTRY · 01 · 2026` mono eyebrow, serif title, serif body,
  mono uppercase tags, arrow-top-right icon for live, lock icon for private.
- **Colophon** — `dt` mono uppercase labels, `dd` serif values — used for
  the "Quick facts" sidebar in About.
- **Dispatch** — current work surfaced as a bordered list with pulse dot
  signal, "IN PROGRESS · DISPATCHED FROM THE DESK" eyebrow.
- **Postcard** — image-left, meta-right card with origin + education.
- **Sign-off** — italic serif quote at the foot of every page.

## Do / Don't (portfolio adaptation)

| Do | Don't |
|----|-------|
| Show prose with serif body, mono metadata, sans chrome | Mix serif body with UI sans |
| Use `--suggest-fg` green only on the period accent, the Accept state, focus rings, and signal dots | Recolor links, badges, or icons with the green to mean "interactive" |
| Treat the work as the subject — quiet by default | Stack emojis, exclamation marks, gradient text, glow shadows |
| Make every button reversible and obvious | Use icon-only buttons inside editorial frames |
| Animate via opacity / transform / scale-x | Animate width/height; layout-shifting hovers |
| Stay below 4 colors on screen at once | Reintroduce the rainbow project accents |

## Stack notes

- Vue 2.6 + Vuetify 2.1, Vuex store gates `light` ↔ `dark` via `--theme-ink` class.
- All Wordsmith tokens are CSS custom properties on `:root` and `#app.theme-ink`,
  so dark mode is a single class swap.
- Dev server: `NODE_OPTIONS=--openssl-legacy-provider ./node_modules/.bin/vue-cli-service serve`.
