# SBV Workforce Management — website content reference

Full text + asset capture of the SBV public website, saved for reference while
working on this project.

- **Captured:** 2026-08-04
- **Entry URL requested:** `sbv360.com` → **301 redirects to `https://sbvwm.com/`** (canonical host: `https://www.sbvwm.com/`)
- **Platform:** WordPress
- **Coverage:** all 28 pages in the site's `wp-sitemap-posts-page-1.xml` (the only sitemap the site publishes — there are no blog posts)
- **Assets:** 47 files (screenshots, hardware photos, 1 PDF brochure) in [assets/](assets/)
- **Machine-readable index:** [_index.json](_index.json) — page URL → local file, title, meta description, char count

Each `.md` file keeps its source URL in a header block. Filenames mirror the URL
path with `/` replaced by `__` (e.g. `software__time-attendance__schedules.md` =
`/software/time-attendance/schedules/`).

## Company snapshot

**SBV Workforce Management** — tagline **"Make Your Time Count"**. Sells
industry-specific workforce management software; primary vertical is **managed
long-term care / skilled nursing facilities**. Sold and supported direct (no
resellers). Scales from single-facility to multi-facility clients, 100–10,000
employees.

- 67 Route 59, Suite 313, Spring Valley, New York 10977
- Sales: 888-572-8728 · Fax: 914-517-2517 · Support: support@sbvwm.com

**Tech stack the product runs on:** Microsoft Windows Server 2008+, Microsoft SQL
Server 2008+; clients via Web, Windows, Terminal Services, or Citrix. Deployment
on-prem, on the client's cloud, or SBV-hosted on Microsoft Azure.

**Hardware:** Schlage **HandPunch** biometric hand-geometry time clocks
(HP1000/2000/3000/4000 + first-gen HP-RS), over serial, modem, or ethernet.

**Payroll integrations named:** ADP, Matrix, PayChex, Viventium; plus NY/NJ
long-term-care systems Reliable Health Systems (CHARTS), National Care Systems,
ADL Data Systems.

## Page map

### Top level
| Page | File |
|---|---|
| Home | [home.md](home.md) |
| Software (overview) | [software.md](software.md) |
| Hardware (HandPunch clocks) | [hardware.md](hardware.md) |
| Services (overview) | [services.md](services.md) |
| Deployment | [deployment.md](deployment.md) |
| Contact | [contact.md](contact.md) |
| Support (TeamSupport chat embed — no real content) | [support.md](support.md) |
| News (empty blog) | [news.md](news.md) |
| Privacy Policy (longest page on the site) | [privacy-policy.md](privacy-policy.md) |

### Software modules — `/software/*`
| Module | File |
|---|---|
| Time and Attendance | [software__time-attendance.md](software__time-attendance.md) |
| — Employee Information | [software__time-attendance__employee-information.md](software__time-attendance__employee-information.md) |
| — Time Cards and Hours | [software__time-attendance__time-cards-and-hours.md](software__time-attendance__time-cards-and-hours.md) |
| — Schedules | [software__time-attendance__schedules.md](software__time-attendance__schedules.md) |
| — Calculation Engine | [software__time-attendance__calculation-engine.md](software__time-attendance__calculation-engine.md) |
| — Other Features | [software__time-attendance__other-features.md](software__time-attendance__other-features.md) |
| Scheduling (budget-controlled) | [software__scheduling.md](software__scheduling.md) |
| Accruals | [software__accruals.md](software__accruals.md) |
| Reports | [software__reports.md](software__reports.md) |
| Payroll Interfaces | [software__payroll-interfaces.md](software__payroll-interfaces.md) |
| Payroll Based Journal (CMS XML) | [software__payroll-based-journal.md](software__payroll-based-journal.md) |
| Health Tracking (physical, PPD, MMR) | [software__health-tracking.md](software__health-tracking.md) |
| In Service Tracking | [software__in-service-tracking.md](software__in-service-tracking.md) |
| License Tracking | [software__license-tracking.md](software__license-tracking.md) |

### Services — `/services/*`
| Service | File |
|---|---|
| Implementation | [services__implementation.md](services__implementation.md) |
| Data Extraction | [services__data-extraction.md](services__data-extraction.md) |
| Training | [services__training.md](services__training.md) |
| Support | [services__support.md](services__support.md) |
| Maintenance Contracts | [services__maintenance-contracts.md](services__maintenance-contracts.md) |

## Notes on the capture

- Extraction targets each page's `<main>` / content region, so the repeated site
  header, nav, and footer are not duplicated into every file. Navigation
  structure is reflected in the page map above; contact details live in
  `contact.md`.
- `/support/` renders only a TeamSupport chat widget image — that is the whole
  page, not a capture failure.
- `/news/` has no posts.
- The site's product screenshots are in `assets/` and are referenced inline from
  the module pages by their original absolute `www.sbvwm.com` URLs.
- `assets/TABrochureHC.pdf` is the linked Time & Attendance PDF brochure.
