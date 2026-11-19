# Website Audit – genaidigitalsolution.com

**Date:** 19 Nov 2026 · **Scope:** front-end, design/UX, conversion, SEO, lead pipeline

## TL;DR – why there are no leads

There were three compounding failures. Fixing only one of them would not have worked.

| # | Problem | Impact |
|---|---------|--------|
| 1 | **Contact form emails fail (`535 Authentication failed`)** but the API still told visitors "Message sent!". Leads were not saved anywhere. | Every enquiry was **silently lost** |
| 2 | **Main hero buttons did nothing** ("Start Your Project" / "View Our Work" had no link). On mobile, the hero was blank for ~5 s and the text was cut off. | Interested visitors had no working path to act |
| 3 | **Almost no search visibility.** GSC: ~110 impressions/week, avg. position 44–70, only for the brand name. 5 of 11 pages shared the homepage's title, there were no canonicals, and the OG image was a 404. | Very few prospects find the site at all |

---

## 1. Lead pipeline (critical)

| Finding | Fix (done) |
|---|---|
| SMTP login fails with the current Brevo key, yet the API returned `201 success` | API now returns an error when the lead was neither saved nor emailed. The visitor is told to use WhatsApp/phone, and full lead details are logged so they can be recovered from Vercel logs |
| Leads never stored (Mongo models and admin pages existed, but nothing wrote to them) | Leads are saved to MongoDB whenever `MONGODB_URI` is set |
| `<Toaster />` never mounted, so every error/success toast was invisible | Mounted in root layout |
| Raw user input inserted into admin email HTML (injection) | All values HTML-escaped |
| Sender was the admin Gmail address via Brevo (fails DMARC, so it lands in spam) | New `SMTP_FROM` env var for a domain address |
| No bot protection | Honeypot field |
| No conversion tracking | `generate_lead`, `contact_whatsapp`, `contact_call` and `cta_click` events sent to GA4/GTM |

### ⚠️ You must do these (I can't)
1. **Brevo → SMTP & API → generate a new SMTP key.** Update `SMTP_USER` / `SMTP_PASS` in `.env` **and in Vercel → Settings → Environment Variables**.
2. In Brevo, **verify the domain** `genaidigitalsolution.com` and set `SMTP_FROM=info@genaidigitalsolution.com`.
3. **Add `MONGODB_URI`** (a free MongoDB Atlas cluster is fine). Leads are then stored even if email fails, and `/admin/contacts` starts working.
4. **Check Vercel logs** for past `Contact form error` / `Email send error` entries to see how many enquiries were lost.
5. Primary call number: **+91 93653 39460**. WhatsApp and alternate call number: **+91 91811 88734** (edit in `lib/site.ts`).
6. In GA4, mark **`generate_lead`** as a key event (Admin → Events).

## 2. Design & UX

| Finding | Fix (done) |
|---|---|
| Hero copy was generic buzzwords ("digital ecosystems that power tomorrow's enterprises"): no location, audience or outcome | New H1 "Websites, apps & AI software that bring you customers", a Guwahati location eyebrow, and a concrete promise (fixed quote, weekly demo, support) |
| Hero CTAs were dead buttons | "Get a free quote" → form, "Chat on WhatsApp", "See our work" |
| Mobile hero: container 566 px wide on a 375 px screen, so text was clipped | `w-full min-w-0` containment. Verified there's no horizontal overflow |
| Hero H1 started at `opacity:0` behind stacked CSS and Framer animations, which hurt LCP | H1 renders immediately. Animations respect `prefers-reduced-motion` |
| Two full-screen WebGL canvases (Aurora + "floating 3D toy shapes") | Removed the 3D shapes. Aurora toned down |
| **Zero real work shown on the homepage** | New "Recent work" section with HashView (UK app), AI Video Analytics, B2B e-commerce app and School Management |
| No explanation of how working together goes | New 4-step "How it works" section |
| Service cards were not clickable | Each card links to its service landing page (this also helps SEO) |
| CTA form asked for an "enterprise email" only, which put off SMB buyers | Short quote form: name, phone/WhatsApp, optional email, need. WhatsApp hand-off after submit |
| No persistent contact option | Desktop: floating WhatsApp button. Mobile: sticky Call · WhatsApp · Free quote bar |
| "Join **hundreds** of businesses" vs About page "**15+** clients" | Contradiction removed. Hero proof strip uses the About page numbers |
| "One of only 2 AI companies in Guwahati" repeated 7× | Replaced. The claim is unverifiable and easy for a prospect to disprove |
| Contact page: email and phone not clickable, "Book a Call" dead, budget had no currency, services list incomplete | All clickable. WhatsApp/Call buttons added. ₹ budget bands plus an international option. Full service list |
| Footer: `/blog` and `/careers` 404, `/#about` and `/services#design` broken | Fixed links. Newsletter replaced with name/address/phone (NAP) and a WhatsApp button |
| Broken React logo in tech carousel. Duplicate project `id: 11`. Debug `console.log`s in nav | Fixed |

## 3. SEO

| Finding | Fix (done) |
|---|---|
| About, Contact, Projects, Services and Car Dealerships were client components, so they had **no title, description or canonical** and all reused the homepage title | Split into server `page.tsx` with unique metadata |
| No canonical on the homepage | Added (per page only, so it doesn't leak into child pages) |
| `og-image.jpg` 404, so shared links on WhatsApp/LinkedIn had no preview | Generated `opengraph-image` (1200×630) |
| `/services/ai-automation` was a duplicate of `/ai-solutions-guwahati` with a canonical pointing to it, yet listed in the sitemap | 308 redirect, removed from sitemap and links |
| Homepage title didn't target winnable keywords | "Software & App Development Company in Guwahati \| Gen AI Digital Solutions" |
| Sitemap `lastModified: new Date()` on every request (Google ignores it) | Fixed date and real priorities |
| Off-topic "Clutch by Cliste" car-dealership page diluted relevance | `noindex, follow` |
| Schema used a personal Gmail address. No `WebSite` entity | Domain email, `WebSite` entity with name variants |
| `lang="en"` | `en-IN` |
| `images.unoptimized: true` served 300–650 KB PNGs raw | Next image optimisation (AVIF/WebP) enabled |

### Strategic SEO note: the brand name
"Gen AI Digital Solutions" collides with the generic category "generative AI solutions", so **you will not rank for your brand-like queries**. GSC confirms this: "gen ai solutions" sits at position ~70, competing against IBM, Google and others. Your winnable keywords are **local and service-specific** ("app development company Guwahati", "website design Guwahati", "CRM software Assam"). The site now targets those.

## 4. Off-site actions (highest ROI after the SMTP fix)

1. **Google Business Profile.** Create or verify it with the exact same name/phone/address as the footer. For local agencies this usually drives more leads than organic results. Add a real street address to `components/SEC/json-ld.tsx`; "Guwahati" alone is weak.
2. **Get 5–10 genuine Google reviews** from past clients. Then replace the homepage testimonials with real names, companies and photos. The current ones have no company names, which reads as invented.
3. **Case studies.** Turn HashView and the Video Analytics platform into full pages (problem → solution → result with numbers). Proof is the main thing that converts agency leads.
4. **Directory listings:** Clutch, GoodFirms, JustDial, IndiaMART, Sulekha. Use consistent NAP everywhere.
5. **Search Console:** resubmit `sitemap.xml` and request indexing for the homepage and 5 service pages after deploying.
6. Clean the repo: the scraped `tab_*.html`, `scrape_*.py/js` and `parse_search.js` files at the root aren't used.

---

## Update – national positioning, SEO & AI search (round 2)

**Positioning:** the site now targets clients **across India and worldwide**. Guwahati appears only as the HQ address (footer, contact page, schema, `llms.txt`), which keeps Google Business Profile / nearby-client visibility without limiting national rankings.

| Change | Detail |
|---|---|
| New national service URLs | `/services/web-development`, `/services/mobile-app-development`, `/services/custom-software-development`, `/services/crm-erp-development`, `/services/ai-solutions`. All content lives in `lib/services-data.ts` |
| Old URLs → permanent redirects | `/web-development-company-guwahati`, `/mobile-app-development-guwahati`, `/software-development-assam`, `/crm-erp-development-assam`, `/ai-solutions-guwahati`, `/services/ai-automation` |
| Titles/descriptions | "… Company in India" and international buyers, instead of "… in Guwahati, Assam" |
| Structured data per service page | `Service` (with min price + areas served), `FAQPage`, `BreadcrumbList`. Organization schema gained `knowsAbout`, `slogan`, team size |
| FAQ answers crawlable | All FAQs (service pages, homepage, contact) use native `<details>`, so answers are in the HTML instead of appearing only after a click |
| Answer-first summaries | Each service page opens with a 3-sentence "at a glance" block (cost, timeline, what you get). This is the format Google AI Overviews / ChatGPT / Perplexity quote |
| Homepage FAQ | 6 company-level Q&As with `FAQPage` schema ("Where are you based…", "How much does an app cost…") |
| `robots.txt` | Explicitly allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot and others. Blocks `/admin`, `/api/`, `/login` |
| `/llms.txt` | Plain-text company profile for AI assistants, generated from the service data |
| Internal links | `/services` hub cards link to each detail page. Each service page links to the other four |
| Homepage images | Static imports with built-in blur previews, eager loading, 256–640px sizes |

### After deploying – do these to speed up indexing
1. **Google Search Console → Sitemaps:** resubmit `sitemap.xml`, then use **URL Inspection → Request indexing** for the homepage and the 5 `/services/...` pages.
2. **Bing Webmaster Tools:** add the site (import from GSC in one click). ChatGPT search and Microsoft Copilot rely heavily on Bing's index, so this is the fastest lever for AI-search visibility.
3. Keep the **Google Business Profile** at the Guwahati address with category "Software company" and service areas set to India.
4. **Get mentioned elsewhere.** AI engines cite companies that other sites talk about: Clutch, GoodFirms, DesignRush, LinkedIn company page posts, guest articles and client case studies. This matters more for AI answers than anything on your own site.
5. Expect **6–12 weeks** before national rankings move. "Web development company India" is highly competitive, while long-tail queries ("React Native app development cost India", "custom CRM with WhatsApp integration") will move first.

---

## Round 3 – Google Search Console & Bing findings (20 Nov 2026)

### What Search Console shows
- **Zero pages are indexed.** URL Inspection: homepage, /services and four location pages are "Crawled – currently not indexed". /mobile-app-development-guwahati is "Discovered – not indexed". /about, /projects and /contact are "Unknown to Google".
- **Impressions collapsed around 8 Oct 2026** (20–40/day → 0–4/day) as Google dropped the pages. 90-day totals: 4 clicks, 808 impressions, avg position 51.6.
- **The only non-brand traction is local:** "web development company in guwahati" (pos ~31, 92 impr.), "web development company in assam" (~28), "web development agency in guwahati" (~37). Brand queries ("gen ai solutions") sit at 70–75.
- **Sitemap:** last read by Google on 7 Oct, with 1 error and 1 warning (the old sitemap listed `/services/ai-automation`, which canonicalised to another page).

### Changes made
- **Kept one local page** at `/web-development-company-guwahati` (same URL, so its history is preserved) with unique Guwahati/Assam content. It isn't a copy of the national page. The other 4 location URLs still 301 to the national pages.
- **IndexNow key generated** in GSC Wizard. The key file `public/ee87832f00b6bd459147c9fa62af8d8c.txt` is added and goes live on deploy.
- **GSC Wizard:** brand keywords set (so brand and non-brand traffic report separately) and sitemap registered.

### Bing – not yet connected
GSC Wizard has **no Bing Webmaster API key**, so Bing crawl, backlink and keyword data can't be read yet. In Bing Webmaster Tools go to **Settings (gear) → API access → API Key → Generate**, then paste it into GSC Wizard's settings.

### Post-deploy checklist (in this order)
1. Deploy, then confirm these load on the live domain: `/services/web-development`, `/web-development-company-guwahati`, `/llms.txt`, `/ee87832f00b6bd459147c9fa62af8d8c.txt`.
2. **Google:** resubmit `sitemap.xml`, then **URL Inspection → Request indexing** for: `/`, `/web-development-company-guwahati`, `/services/web-development`, `/services/mobile-app-development`, `/services/ai-solutions`, `/projects`, `/contact`. Google allows only ~10 manual requests a day, so start with these.
3. **Bing / IndexNow:** submit all sitemap URLs via IndexNow (instant notification to Bing, Yandex and Seznam), and submit the sitemap in Bing Webmaster.
4. **Backlinks (the main reason Google isn't indexing):** the site has almost no external links. Get 5–10 quickly:
   Google Business Profile, LinkedIn company page, Clutch, GoodFirms, DesignRush, JustDial, IndiaMART, Sulekha, your Facebook/Instagram bios, and a "Website by Gen AI Digital Solutions" footer link on client sites (HashView, etc.).
5. Re-check indexing in 7–14 days.
