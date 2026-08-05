# SBV Workforce Management — mini-site

A self-contained static site for SBV Workforce Management, workforce software for skilled nursing facilities. Built per `docs/design-direction.md` in the repo root. Typography-led, no photography by design.

## Structure

- `index.html` — homepage
- `privacy-policy/index.html` — privacy policy, transcribed verbatim from the legacy site
- `css/styles.css` — all styling
- `js/main.js` — reveal-on-enter animation only; no external dependencies
- `fonts/inter-var.woff2` — Inter variable typeface (latin subset, self-hosted)
- `assets/` — logo.jpg and logo-white.png (legacy site rasters)

## How to run

Any static host works. For local testing:

```bash
python -m http.server
```

Then open `http://localhost:8000`. No build step, no dependencies, no CDN calls.

Internal paths are **relative, not root-relative**, so opening the `.html` files
straight off disk (`file://`) also renders correctly and navigates between pages.
`rel=canonical` on each page keeps the clean URL (`/`, `/privacy-policy/`)
authoritative regardless of how the file was reached. One caveat under `file://`:
the font *preload* logs a CORS error because `crossorigin` preloads are blocked on
that protocol — the `@font-face` fetch still succeeds and Inter renders. The
preload is correct over HTTP; don't remove it to silence a local-only warning.

## Progressive enhancement

- All content is fully visible without JavaScript
- Reveal animation states apply only when `html.js` class is present (set by main.js)
- Respects `prefers-reduced-motion` media query
- Handles `forced-colors` mode

## Pending before launch

- Verify the "700+ facilities" figure and its wording
- **Verify "Over 250 reports"** — now a headline claim on the Reporting card.
  Taken verbatim from the legacy Reports page, so it is already published, but
  the copy rewrite promoted it from absent to prominent. Confirm it still holds.
- Confirm HandPunch support statement
- Payroll-provider names (ADP, PayChex, Viventium) were removed from the
  Payroll Interfaces card by the copy rewrite, which describes the process
  instead. Nothing on the page names a provider now, so there is no longer a
  provider list to verify — reinstate only if the client wants them named.
- `/contact/` and `/support/` pages still to be built (all CTAs currently use on-page anchors + `tel:` / `mailto:` so nothing dead-ends)
- Redirect map from legacy URLs still to be configured
- **Privacy policy needs legal review before launch** — see below

## Privacy policy — transcription note

`/privacy-policy/` reproduces the legacy policy (last updated November 29, 2023)
without substantive edits. Legal text is the client's counsel's call, not the
designer's, so nothing was silently rewritten. Changes limited to:

- Heading levels demoted one step so the page has a single `<h1>`
- Definitions set as a `<dl>` instead of bolded bullet fragments
- Source typo "the us e of the Service" → "the use of the Service"
- Contact section: the dead cross-link to `/support/` was replaced with the
  mailing address; the phone number is unchanged

**Three issues to raise with the client — all pre-existing, none introduced here:**

1. **The policy covers the mobile app, not the website.** It defines *Service*
   as *the Application* — "SBV Mobile Workforce." Nothing in it addresses the
   website, its contact form, cookies, or analytics. It is currently the
   footer-linked policy for a site it does not describe.
2. **The phone number contradicts the rest of the site.** The policy lists
   914.777.2121; every other page lists 888-572-8728. Both are now published
   under the same domain.
3. **The date will read as stale.** November 29, 2023 on an otherwise new site
   invites the question of what else is out of date.

The fix is a policy rewritten to cover the website — which is drafting and
review work, not a design task.

## Logo note

Assets are small legacy rasters (169×124 / 153×111). Request vector or hi-res logo from client for crisper rendering.

---

## Cold review findings — 2026-08-05

Three independent reviewers read the built site with no knowledge of the project
history (buyer lens, source-truthfulness lens, system-coherence lens).

### Fixed in this pass
- **Duplicated journey.** The hero card and the flow rail told the same
  punch-to-payroll sequence in adjacent sections, with different step counts and
  wording; the hero version was `aria-hidden` decoration duplicating real
  content. Hero card removed; the flow rail is now the single place it is told.
- **Liability wording.** "CMS compliance" implied the product guarantees a
  facility is compliant — the archive only supports that it *generates the
  required XML*. Reworded to "CMS Payroll-Based Journal submission."
- **HandPunch promise.** Stated unconditionally; the source conditions clock
  support on a maintenance contract. Now qualified.
- Verbatim payroll-provider sentence appeared twice — removed from the proof band.
- "PPD and immunization records" narrowed to "PPD and MMR records" (what the
  source actually names).
- Dead CSS (`.btn--light`, orphaned `.close__aside`), three hand-coded dash-bullet
  variants unified into one `.dash`, radii and brand tints moved into tokens,
  section background alternation repaired.

### Open — needs the client, not the designer
A buyer running several facilities cannot qualify themselves from this page.
Ranked by what it costs:

1. **No pricing or contract terms of any kind.** Not even a range or a "starts at."
2. **No named references, logos, or case studies** behind the 700+ figure.
3. **No security or HIPAA statement**, despite the page advertising that the
   system holds physicals, PPD and MMR records. This is the most conspicuous
   omission for this industry — the buyer lens flagged it unprompted.
4. **No implementation timeline.** The four steps have no duration attached.
5. **No support hours or response-time expectation** for "payroll runs tomorrow
   and it's broken."
6. **No way to see the software** — no screenshots, no demo, no trial.
7. **No company background** — years in business, ownership, size.
8. **No data-ownership/export answer** for buyers worried about leaving.
9. **No EHR/clinical integration mention** (PointClickCare, MatrixCare) — common
   in this sector.

### Positioning question
The site says **skilled nursing** throughout. SBV's own site describes its market
as *"managed long term care facilities"* — the 700 figure is genuinely about
skilled nursing, so nothing is false, but if they still sell into assisted living
we are narrowing their market for them. Confirm before launch.
