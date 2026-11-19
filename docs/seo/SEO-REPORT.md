# SEO, Local SEO & AI-Search Report – genaidigitalsolution.com

**Date:** 20 Nov 2026 · **Scope:** technical SEO, on-page, local/regional (Northeast India), GEO/AEO, structured data, performance, Search Console, Bing, backlinks
**Legend:** **[M]** measured (source given) · **[A]** assessment/judgement · **[R]** recommendation

Companion files: [`keyword-research.csv`](keyword-research.csv) · [`content-calendar.csv`](content-calendar.csv) · [`backlink-opportunities.csv`](backlink-opportunities.csv) · earlier audits in [`../WEBSITE-AUDIT.md`](../WEBSITE-AUDIT.md)

---

## 1. Executive summary

- **The website is technically sound but Google has not indexed it.** [M – GSC URL Inspection, 20 Nov] The homepage and older pages are "Crawled – currently not indexed". The new `/services/*` URLs are "unknown to Google". Organic visibility collapsed around 8 Oct 2026. [M – GSC: 4 clicks, 808 impressions, avg pos 51.6 over 90 days]
- **Off-page authority is effectively zero.** [M – Bing Webmaster: 0 inbound links, 0 search traffic, no crawl history] This is now the main limit on rankings and indexing, more than anything in the code.
- **The only non-brand traction is local to Guwahati and Assam** ("web development company in assam", pos ~28; "…in guwahati", pos ~31). [M – GSC] These are the priority targets.
- **On the code side:** I fixed or added everything within reach. New regional and pricing pages, legal pages, schema, accessibility fixes, metadata and performance work are all **built and validated locally but not yet deployed** (see §11).

### Scorecard [A]
| Area | Score | Basis |
|---|---|---|
| Technical SEO (crawl/index setup) | 90/100 | [M] 0 critical/high issues in GSC Wizard on-page audit of 11 live pages; Lighthouse SEO 100 |
| Indexation (actual) | 5/100 | [M] 0 of 11 key URLs indexed by Google |
| On-page | 90/100 | [M] unique titles, 1 H1, self-canonicals, 0 missing alt text; titles/descriptions now within limits |
| Structured data | 90/100 | [M] all JSON-LD blocks parse on 15 pages; types match visible content |
| Local / regional SEO | 55/100 | [A] strong pages now, but no verified Google Business Profile or citations yet |
| GEO / AEO readiness | 80/100 | [A] answer-first summaries, crawlable FAQs, llms.txt, AI crawlers allowed |
| Performance (mobile lab) | 63–75/100 | [M] Lighthouse, new build, 3 runs |
| Authority / backlinks | 5/100 | [M] Bing: 0 inbound links |
| **Overall** | **≈ 60/100** | [A] weighted; held back by indexation and authority, not code |

---

## 2. Integrations: what was actually accessible

| Source | Status | Notes |
|---|---|---|
| Google Search Console (via GSC Wizard) | ✅ Full access | Performance, URL Inspection, sitemaps, submit sitemap |
| Bing Webmaster Tools (via GSC Wizard) | ✅ Verified site | Traffic, crawl, links, feeds, keyword demand. All site data is empty (new to Bing) |
| IndexNow | ✅ Key generated, key file live and verified | 16 URLs submitted 20 Nov (HTTP 202 = accepted, not indexed) |
| Google Analytics 4 | ❌ **Not accessible** | Only "Akash RosTec Gaming" (properties/235419766) is readable and it is not linked to this site. The site sends to `G-HJ4TMMBJ9N` (plus GTM `GTM-5LWH544G`); I could not verify which property that is |
| Core Web Vitals (CrUX field data) | ❌ Not configured / too little traffic | Lab measurements used instead |
| PageSpeed Insights API | ❌ Daily anonymous quota exhausted | Ran Lighthouse 12.2.1 locally instead (same engine) |

---

## 3. Technical SEO

### Verified on the live site [M]
- HTTPS enforced (`http → https` 308) and HSTS on (`max-age=63072000`).
- All 11 sitemap URLs return 200. Old location URLs 308 to the new pages. Bing read the sitemap successfully on 19 Nov.
- robots.txt allows search and AI crawlers and blocks `/admin`, `/api/`, `/login`.
- GSC Wizard on-page audit (11 pages): **0 critical, 0 high, 0 medium issues**. 20 low issues, all title/description length (now fixed).
- **`www.genaidigitalsolution.com` does not resolve** (no DNS record). See manual actions.

### Fixed in this round (built and validated, awaiting deploy)
| Fix | Detail |
|---|---|
| Titles ≤ ~65 chars, descriptions ≤ 160 | All 15 pages; no duplicates [M – local validation script] |
| Meta keywords tag removed | Ignored by Google; Bing treats it as a possible spam signal |
| Unused web fonts removed | Dancing Script and Caveat were loaded on every page but used nowhere |
| Analytics deferred | GTM and GA now load `lazyOnload`. Same tags and IDs, no tracking removed or duplicated |
| WebGL background not downloaded on phones | New `components/aurora-bg.tsx` gates the import as well as the render |
| Accessibility | Slider and select labels; WhatsApp button contrast (#25D366 → #15803d, now passes AA); low-contrast text fixed |
| Sitemap | 15 URLs (adds Northeast, Pricing, Privacy, Terms) |

---

## 4. Performance (Lighthouse 12.2.1, mobile emulation, 3 runs each) [M]

| Metric | Live site today | New build (local server) |
|---|---|---|
| Performance score | 54–61 | **63–75** |
| First Contentful Paint | 3.0–3.3 s | **1.0–1.3 s** |
| Largest Contentful Paint | 5.4–5.7 s | **3.0–3.9 s** |
| Total Blocking Time | 470–700 ms | 600–1,290 ms (noisy) |
| CLS | 0 | 0 |
| Accessibility | 89 | **100** |
| SEO | 100 | 100 |

**Caveats:** the new build ran on a local server sharing the CPU with the test, which inflates TBT. Google's tag scripts cost ~700 ms of main-thread time in both versions. **TBT/INP are not verified as improved.** Re-measure on the live site after deploying.
**[R]** The site loads both GTM (`GTM-5LWH544G`) and a direct gtag (`G-HJ4TMMBJ9N`). If the GTM container also fires GA4 for the same ID, page views are counted twice and the extra script costs ~400–500 ms. Check the GTM container and keep only one.
**[R]** The GTM container fires a Google Ads conversion tag (AW-17909411135) that sets a third-party cookie. Keep it if you run Ads; otherwise remove it in GTM.

---

## 5. Keyword research and mapping

Full sheet: [`keyword-research.csv`](keyword-research.csv) (44 keywords, each marked measured or not measured).

- **P1, measured local:** "web development company in guwahati / assam" and 10 close variants → `/web-development-company-guwahati` (one page only, so they don't compete with each other).
- **P1, pricing intent:** "how much does a website / app cost in India" → `/pricing` (new).
- **P2, Northeast region:** Shillong, Agartala, Imphal, Aizawl, Kohima, Gangtok and Itanagar variants → `/northeast-india` (new, one page).
- **P2–P3, national services:** each service keyword maps to exactly one `/services/*` page.
- **P4, do not chase:** "gen ai solutions / genai solution(s)" (pos 67–75). The brand name collides with a generic category.
- **Data limits:** Bing's India keyword demand is very sparse (0–10 impressions/week). No paid volume tool was available, so search volumes outside your own GSC data are **not measured**.

## 6. Competitor analysis [M – live search results, 20 Nov]

- **"web development company in Guwahati":** results are dominated by **directories**: IndiaMART (several listings), GoodFirms city and Assam lists, Clutch, DesignRush and TechBehemoths. Agencies visible through those listings include Weberex, Softnue, SiteZaa, Riverrun Digital, Sitemaker Lab, Prism Infosys, ABiG Studio and Codepilot.
- **"app development company Assam / Northeast":** GoodFirms and TechBehemoths lists, BuiltIn "software companies in Guwahati" lists, plus Riverrun Digital, AxomTechie, Prismabit, ABiG Studio, Assam Technologies and NIRVIAN.
- **"website design company Shillong":** almost entirely IndiaMART listings (Techsoul, S.S. Netcom, Marketing Wire, Intown Solutions), plus a **Delhi** agency ranking with thin city pages.
- **Takeaway [A]:** the fastest route into these results is **being listed on the directories that already rank** (they also give you your first backlinks). Competitor sites are small; one strong regional page plus reviews can compete. Backlink counts for competitors weren't available (no Ahrefs/Semrush access).

## 7. Local SEO: Northeast India and India

**Implemented**
- `/web-development-company-guwahati`: the local page, kept at its original URL to preserve its history.
- `/northeast-india` (new): **one** regional page covering all 8 states, each with different, realistic business context. It states clearly that the only office is in Guwahati and delivery elsewhere is remote. No invented offices, clients or addresses. `Service` schema lists all 8 states in `areaServed`.
- Organisation schema is now `ProfessionalService` (a LocalBusiness subtype), with the 8 states plus India/UK/US as service areas and both phone numbers.
- Name, address and phone are consistent in the footer, contact page, schema and llms.txt.

**Deliberately not done:** per-city or per-state doorway pages (8+ near-duplicates). They're thin content and conflict with Google's guidelines.

**Strategy [R]**
1. **Northeast:** Google Business Profile in Guwahati; directory listings with NAP identical to the footer; 3–5 Google reviews from real clients; publish 2–3 regional case studies or guides (calendar), each linking to `/northeast-india`.
2. **Rest of India:** national `/services/*` pages plus `/pricing`. Grow through case studies, comparison guides and directory reviews. National head terms are highly competitive, so expect long-tail wins first.

## 8. GEO / AEO (AI search)

**Implemented and verified locally [M]**
- Answer-first "at a glance" summary on every service and regional page (cost, timeline, what's included).
- FAQs on service, regional, homepage, contact and pricing pages are all in the server HTML (native `<details>` or plain text), not hidden until a click. Mirrored in `FAQPage` schema.
- `/pricing`: concrete, quotable prices and timelines taken only from the business's own published pricing.
- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Bingbot, Applebot and others.
- `/llms.txt` lists the key facts: one office in Guwahati, the 8 states served, the services, pricing and selected work.
- Entity consistency: the same name, alternate names, phone and `sameAs` profiles across schema and pages.

**Not promised:** AI citations or AI Overview placement. These depend mostly on indexing and third-party mentions (§10). Bing's index matters for ChatGPT search and Copilot.

**[R]** Add a named author/founder (a `Person` with a LinkedIn link) on the About page and on future guides. Not done because I don't have verified founder details.

## 9. Structured data [M – local validation of 15 pages]

| Page type | Types |
|---|---|
| All pages | `Organization` + `ProfessionalService` (with `@id`), `WebSite` |
| Homepage | + `FAQPage` |
| Service / regional / Guwahati pages | + `Service` (areaServed, min price where published), `FAQPage`, `BreadcrumbList` |
| Pricing | + `WebPage`, `OfferCatalog` (min prices), `FAQPage`, `BreadcrumbList` |

All blocks parse as valid JSON. No ratings, reviews or credentials are marked up, because none are verified.
**[R]** The schema address uses `streetAddress: "Guwahati"` and `postalCode: "781001"` (pre-existing). Replace them with your real street address and PIN code, or confirm them; an incorrect PIN weakens local signals.
**[R]** After deploying, run 2–3 URLs through Google's Rich Results Test.

## 10. Backlinks and off-page

[M – Bing] **0 inbound links recorded.** Prioritised list in [`backlink-opportunities.csv`](backlink-opportunities.csv) (17 legitimate opportunities, no paid links or link networks). Start with: Google Business Profile, GoodFirms, Clutch, IndiaMART, JustDial, DesignRush, LinkedIn, and footer credits on client sites.

## 11. Search engine actions taken [M]

| Action | Result |
|---|---|
| GSC sitemap resubmitted (20 Nov) | Accepted; pending Google download. The "1 error" shown is from Google's 7 Oct read of the old sitemap |
| IndexNow: 16 URLs (live pages + old URLs so engines see the redirects) | 202 accepted, key verified. **Not** confirmation of indexing |
| GSC Wizard Indexing Tracker | 13 key URLs tracked (hourly inspection) |
| GSC Wizard annotation | "Site relaunch" on 19 Nov, for before/after comparison |
| GSC Wizard brand keywords | Set, so brand and non-brand traffic report separately |

## 12. Completed changes (this round, uncommitted)
New: `app/northeast-india`, `app/pricing`, `app/privacy-policy`, `app/terms`, `components/static-page-shell.tsx`, `components/aurora-bg.tsx`, `docs/seo/*`.
Changed: metadata in `app/layout.tsx`, `lib/services-data.ts` and page files; `components/SEC/*` (deferred loading, schema); footer and nav links; `app/sitemap.ts`; `app/llms.txt/route.ts`; accessibility in `components/ui/slider.tsx`, `roi-calculator-section.tsx`, `cta-section.tsx`, `process-section.tsx`, `hero-section.tsx`; WhatsApp colour across components.

## 13. Manual actions and permissions still required
1. **Deploy** this round (commit, push, Vercel), then confirm `/pricing`, `/northeast-india`, `/privacy-policy` and `/terms` return 200. After that, submit those 4 URLs via IndexNow; I can do it through GSC Wizard.
2. **Google Search Console → URL Inspection → Request indexing** (the API can't do this): `/`, `/web-development-company-guwahati`, `/northeast-india`, `/pricing`, `/services/web-development`, `/services/mobile-app-development`.
3. **DNS:** add a `www` CNAME to Vercel and set it to redirect to the root domain.
4. **GA4:** link the property behind `G-HJ4TMMBJ9N` in GSC Wizard (or grant access), then mark `generate_lead` as a key event.
5. **GTM:** check for duplicate GA4 tagging (§4) and decide on the Google Ads tag.
6. **Google Business Profile and Bing Places:** create and verify them with NAP identical to the footer.
7. **Schema address:** provide the real street address and PIN code.
8. **Legal review** of the Privacy Policy and Terms (drafts, not legal advice).
9. **CrUX API key** in GSC Wizard, so real-user Core Web Vitals can be tracked once traffic exists.
10. **Content:** write the calendar topics with real examples and client permission. Nothing was auto-published.
11. If not already done: rotate the Brevo SMTP key and set `MONGODB_URI` (from the first audit), so leads are delivered and stored.
