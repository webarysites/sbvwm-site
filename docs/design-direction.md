# SBV Mini-Site — Design Direction & Build Spec

> **PALETTE SUPERSEDED 2026-08-18.** The client supplied his own brand colours
> (light-purple gradient `#948EFF` → `#564FE8`, neutrals `#353849` / `#596074`,
> white) and asked for the site to move off red. Everything below still describes
> the layout, composition and typographic decisions accurately — only the *hue*
> changed. Wherever this document says burgundy / red / rose, read purple / lilac;
> the live token values are in `site/css/styles.css`. Gold is retained as the one
> accent. The client's logo redesign was still in progress on that date, so the
> logo SVGs here are a temporary recolour of the existing mark.

> **Revision 2026-08-05 (v2, after GPT review of the built site).** The v1 build
> let burgundy become the atmosphere; v2 corrects the execution, not the logic:
> white-dominant environment; burgundy demoted to accent/action + ONE dark moment
> (the closing panel, no longer a full-bleed section); the differentiation section
> is now light with a split composition (copy left, rose-tinted ops panel right);
> the solutions grid became soft cards (radius, subtle shadow, monoline icons,
> per-card proof line) instead of a 1px-bordered table; implementation became
> connected numbered steps with a "what's included" side panel; and a
> punch-to-payroll **flow rail** was added — the honest version of the platform
> visual (typographic chips, not an invented diagram). **Held against the review,
> deliberately:** no teal/sage/blue accent (the no-category-blue ruling stands —
> GPT's own earlier argument), and no stock or AI-generated "operational
> photography" (client photos or none). Icons are now permitted as a single
> coherent hand-drawn monoline set — v1's "no icons" default was revised.

Final agreed direction. Reconciled between Claude Opus 5 and GPT-5.6 (sol);
where we disagreed, the resolution and reasoning are recorded in §9.

Grounded in the archived legacy site (`reference/sbvwm-site/`) and in what is
actually on pointclickcare.com and stripe.com today.

**Scope: a mini-site that feels finished, not phase one of a large build.**

---

## 1. Four findings that shaped this

**SBV's brand color is red and black, not blue.** Theme CSS runs on `#b5222e` /
`#cb0000` with deep maroons (`#470001`, `#400000`) and a warm gold `#f6bc53`.
The logo is a red "SBV" over a black clock face; tagline "Make Your Time Count."
Current font is Open Sans. Any blue palette is a rebrand, not a refresh.

**"Used in over 700 skilled nursing facilities across the US."** On the current
homepage, in a rotating slider outside the main content region — which is why it
was missing from the first content extract. It is the strongest asset the company
has and it is the site's credibility mechanism.

**Both reference sites show zero product UI.** PointClickCare shows software only
through photography of people using it. Stripe uses feature cards, big stats, and
customer logos. Neither leads with a platform diagram.

**PointClickCare's warmth is photography-dependent.** That is the expensive,
slow part — and the one element that cannot be delivered at 70% quality. A
generic stock nurse actively damages credibility; no photo does not.

---

## 2. Design language

> Build an established, calm, typography-led B2B site for skilled nursing — not a
> startup SaaS template, not a clinical healthcare site. **PointClickCare supplies
> the tone** (calm, sector-specific, unhurried). **Stripe supplies the discipline**
> (hierarchy, spacing, modular composition, proof at scale). **SBV supplies the
> identity** (burgundy, the clock mark, operational language, installed-base
> credibility). Deep burgundy `#651725`, controlled action red `#9F2430`, warm
> off-white `#FAF8F6`, white, warm near-black `#231F20`, muted warm gray
> `#6B625F`, thin borders `#E6DFDA`. Set in Inter. Generous but not empty spacing,
> strong left-aligned hierarchy, large readable body type, modest radii, thin
> dividers, no gradients, almost no shadows, only subtle hover and fade motion.
> Visual character comes from the 700+ statistic, the capability grid, one
> burgundy section, and a restrained clock-derived detail. No stock photography,
> no screenshots, no fake UI, no elaborate diagrams.

**Why red, not blue.** Real brand equity across logo, signage, and documents;
changing it turns a fast site into a rebrand; and it is genuinely differentiating
in a category that is wall-to-wall blue and teal. Deepen it — the current
`#b5222e`/`#cb0000` reads as alert/error, which is a liability in healthcare.

**Warm neutrals, not cool grays.** This is the highest-leverage move for getting
PointClickCare's warmth without photography. Cool gray + red reads corporate and
slightly aggressive; warm off-white + deep burgundy reads institutional and calm.

**Gold is optional.** Burgundy plus gold slides easily into hospitality or
financial territory. Prove the palette without it; add it only as a micro-accent
(a rule, a focus state, a clock-hand detail) if the comps genuinely need it.

**Logo stays as-is** for this scope — use the best available vector or
high-resolution asset and give it more surrounding space. Do not quietly redraw
it as part of a website project.

**Typography.** Inter. Open Sans is the incumbent but signals "2016 WordPress
theme," which is exactly the impression we are shedding. Headlines substantial
but not shouty — the 700 figure is the only element that should be genuinely
large. Body copy large enough to read without effort; this audience is not 25.

**Contrast must be verified.** Red on white is the easiest place to fail WCAG AA,
particularly button text and small type.

---

## 3. Photography: none, by decision

Ask the client once whether they can supply authentic operational photography
from their own facilities, set a firm deadline, and proceed without it. Do not
delay the build, and do not fill the gap with generic healthcare stock — that
market is overwhelmingly clinical (doctors, stethoscopes, resident portraits),
which is wrong for an administrative payroll and staffing product.

What keeps the site from feeling cold:

- A substantial typographic hero with controlled line lengths
- The oversized 700+ proof treatment
- Alternating white and warm off-white backgrounds, plus one dark burgundy section
- A disciplined six-capability grid with thin dividers
- A subtle clock-derived device — radial tick marks, a short clock-hand rule, or
  circular cropping — as a recurring detail, never a hero illustration
- Monochrome line icons only if a coherent set is already available; otherwise none

Avoid abstract blobs, isometric artwork, fake dashboards, and "connected
platform" graphics. They fill space and weaken specificity.

**On showing no product UI:** the reference sites are supporting evidence, not
the reason. The real reasons are that the legacy screenshots misrepresent the
quality we are claiming, invented UI is a promise the software must keep at demo
time, and a polished custom diagram is unjustified on this schedule.

---

## 4. Pages and URLs

| URL | Contents |
|---|---|
| `/` | Full scrolling homepage |
| `/support/` | Existing-client support: verified phone/email, portal or ticket entry, support hours if confirmed, remote-support instructions if applicable, one short hardware-support note |
| `/contact/` | Sales and general inquiry — concise form plus verified contact details |
| `/privacy-policy/` | Corrected policy reflecting the actual form, analytics, cookies, processors, and business identity |

No public news page, hardware catalog, product-detail tree, standalone deployment
page, or link to the legacy site.

**Navigation:** Solutions (`/#solutions`) · Implementation & Support
(`/#implementation`) · Contact (`/contact/`) · Client Support (`/support/`).
Client Support visible but not styled as the primary sales CTA.

**Redirects:** map each legacy URL to the most relevant homepage anchor or to
`/support/` — not indiscriminately to the homepage root. `sbvwm.com` stays
canonical; preserve the `sbv360.com` 301.

---

## 5. Homepage sections, in order

**1 — Header and hero.** Logo, compact nav. Eyebrow: *Workforce management for
long-term care*. H1: **Workforce management built for skilled nursing.** Short
supporting line covering time, staffing, payroll preparation, and compliance.
Primary CTA *Talk with SBV*; secondary *Client support*. No decorative element
placed merely to occupy the right side — an asymmetric or centered typographic
composition is stronger.

**2 — Scale proof.** A dedicated, visually dominant block: **700+** skilled
nursing facilities across the United States. Exact wording must be
client-approved. Optionally one restrained secondary fact if verified (supported
employee range, or direct support). This replaces the four-point credibility
strip — do not rebuild that.

**3 — Solutions** (`#solutions`). Six capabilities, one concise outcome-oriented
sentence each, no nested feature inventory:
Time & Attendance · Scheduling & Accruals · Payroll Based Journal ·
Licenses, Health & In-Service Tracking · Payroll Interfaces · Reporting.

**4 — Built specifically for long-term care.** The single dark burgundy section.
Skilled-nursing staffing complexity, facility and multi-facility operations, PBJ
and workforce compliance, payroll-ready time data. Operational language, not
generic HR language. Target takeaway: *they already understand how my facilities
operate.*

**5 — Implementation and deployment** (`#implementation`). Kept together rather
than split into two thin sections. Discover → Configure → Train and launch →
Support. Alongside, briefly state currently supported deployment choices and
payroll integrations — **only after verification**, and with no obsolete
Windows/SQL version requirements.

**6 — Direct support and installed systems.** A compact band, not a full section.
SBV sells and supports directly rather than through resellers (if still
accurate), plus one restrained hardware line: *SBV also supports compatible
time-clock hardware, including existing HandPunch installations.* Name HandPunch
publicly only after confirming SBV still supports it; the model catalog and specs
stay retired.

**7 — Split closing CTA and footer.** *Considering SBV?* → `/contact/` ·
*Already an SBV client?* → `/support/`. Conventional footer: contact details,
privacy link, copyright. No legacy-site link.

---

## 6. Density rule

Each section must hold enough substance to survive on a full-size corporate site.
If a section exists only to create rhythm, cut it. Fewer, fuller sections is what
separates "small and finished" from "unfinished."

---

## 7. What makes this feel finished

Not another section. Operational finish is what carries a mini-site: correct
redirects, a working form with spam protection, verified support routing,
accessibility, responsive behaviour, page metadata, analytics consent where
applicable, and a privacy policy that matches what the site actually does.

---

## 8. Open decision: the "temporary site" notice

The client's original instinct was that the site should insinuate it is
temporary. **Both of us now recommend against it.**

A finished mini-site should not announce that the website is being refreshed.
That is inward-facing project information; visitors do not care, and it invites
the reading *this information may be out of date / this company is mid-transition.*
The site's thinness is only a liability if we point at it — a tight homepage
anchored by a 700-facility proof point reads as focused, not incomplete.

If the client insists, put it in the footer as a single line, where it reads as
housekeeping. Not a top bar, and never in the hero.

---

## 9. Where we disagreed, and how it resolved

| Question | Resolution |
|---|---|
| "65% Stripe / 35% PointClickCare" ratio | **Dropped.** Percentages are not actionable and invite importing Stripe's startup polish. Replaced with role assignment: PCC = tone, Stripe = discipline, SBV = identity. |
| Blue vs red | **Red.** GPT-5.6 fully reversed its earlier navy/blue proposal once the actual brand CSS was on the table. |
| Should 700 be the hero headline? | **No.** Hero states what SBV does and for whom; the 700 block comes immediately after as dominant proof. Keeps the value proposition standing if the number later changes. |
| The "refreshing our site" bar | **Cut.** GPT-5.6 reversed its own earlier recommendation; agreed. See §8. |
| Why no product UI | Conclusion unchanged, **rationale corrected** — truthfulness and scope, not reference-site fidelity. |
| Implementation and deployment as separate sections | **Merged.** Two thin sections read worse than one substantial one. |
| Gold accent | **Downgraded to optional.** Burgundy + gold risks reading hospitality/financial. |

---

## 10. Client confirmations

**Blocks the design:**

1. **Is "over 700 skilled nursing facilities" current** — and are these active
   facilities, cumulative installations, or customer locations? Is "used in" the
   legally accurate formulation, and can they substantiate it? The site leans on
   this; treat it as a release blocker, not copy polish.
2. **Is the red staying?** A move to blue is a rebrand and should be scoped and
   priced as one.
3. **Can they supply real facility photography?** One ask, firm deadline, then proceed.

**Blocks copy, not layout — can run in parallel:**

4. **Skilled nursing specifically, or broader long-term care?** The legacy body
   copy says "managed long term care facilities" while the 700 claim says
   "skilled nursing facilities" — an existing internal inconsistency. Lead with
   the more defensible term; "skilled nursing" aligns with the proof point.
5. **Correct sales phone, support phone, support email, portal, address.** The
   current site contradicts itself: 888-572-8728 on the contact page,
   914.777.2121 in the privacy policy.
6. **Is "over 250 reports" still accurate?** Already published, so already a live
   claim — the question is whether it is still true.
7. **Which payroll systems can be named publicly**, and are all deployment models
   still offered? Is HandPunch still sold and supported?

A clean, modern presentation makes claims feel *more* authoritative, so stale
statistics and integrations become more dangerous here than they were on the old
site — not less.
