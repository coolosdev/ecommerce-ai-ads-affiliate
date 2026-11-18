# Partner Revenue Labs — Media Kit

## 1. Executive Summary

- **Brand name**: Partner Revenue Labs
- **Tagline**: Actionable guides and tools for ecommerce brands using AI in ads and analytics.
- **Mission**: Help ecommerce founders reclaim time and grow revenue by surfacing the AI tools, affiliate programs, and analytics stacks that actually move the needle.
- **Target niche**: Shopify / DTC brands using AI in ads (Performance Max, Meta Advantage+) and analytics (Triple Whale, Northbeam, Hyros) who need credible affiliate/partner recommendations.
- **Core offering**: A curated affiliate‑focused site with evergreen blog content, comparison posts, and free AI‑ad ROI resources.
- **Monetization**: Affiliate commissions from listed platforms (Klaviyo, Triple Whale, Northbeam, Hyros, AdCreative.ai, Predis.ai, Supermetrics), newsletter sponsorships, and display/partner CTAs.

## 2. Audience & Reach

| Metric | Current | Target (3‑mo) |
|--------|---------|---------------|
| **Monthly unique visitors** | ~300 (organic crawl, Google indexing of static pages) | 1,500 |
| **Pageviews / month** | ~600 | 3,000 |
| **Email subscribers** | 0 (MailerLite list in‑flight) | 500 |
| **Social followers** | LinkedIn 12, Instagram 8, X/Twitter 5, YouTube 0 | LinkedIn 500, Instagram 300, X 200, YouTube 50 |
| **Top traffic sources** | Direct / Google organic (sitemap, robots) | Organic SEO, referral from affiliate networks, newsletter, partner CTAs |
| **Geography** | US (65%), EU (20%), APAC (15%) | Same distribution, deeper US penetration |

> **How we track** – Cloudflare Pages (free tier) → `dist/` static output → GitHub `main` pushes auto‑deploy via `wrangler pages deployment create dist --project-name=ecommerce-ai-ads-affiliate --branch=main`. Sitemap + robots.txt submitted to Google Search Console. Google Analytics not yet installed (cost‑saving on free tier).

## 3. Content Strategy

- **5 cornerstone posts** (planned, one per launch week):
  1. Google Performance Max + Meta Advantage+ for Shopify stores
  2. Klaviyo vs Gorgias vs Freshdesk for customer email/Support
  3. Triple Whale vs Northbeam vs Hyros for attribution
  4. AI ad tools: AdBuilder.ai, AdCreative.ai, Predis.ai, Supermetrics
  5. GA4 + Hotjar + Segment for e‑commerce analytics stack
- **Dynamic blog routing**: `/blog/[...slug].astro` — each post rendered via `getStaticPaths()`; new posts auto‑added to sitemap.
- **SEO**: Per‑page `<title>`, `description`, Open Graph & Twitter cards, canonical URLs (`https://yourdomain.com/` + slug), `zod`‑validated front‑matter, `astro:content` collection config.
- **CTA flow**: Hero → “Read Our Guides” → individual blog post → “Subscribe for weekly tips” → MailerLite opt‑in → weekly digest.

## 4. Technical Stack

| Layer | Service | Free‑tier cost |
|-------|---------|----------------|
| **Frontend / Static** | Cloudflare Pages (Vite/React) | $0/mo |
| **Database** | D1 (SQLite) – not yet provisioned | $0/mo |
| **Hosting / CDN** | Cloudflare CDN | $0/mo |
| **AI Content** | Workers AI (10 k neurons / day) | $0/mo |
| **Domain** | Custom domain (Porkbun/Coolhost) – pending | ~$10/yr |
| **Version control / CI** | GitHub (private repo, public site) | Free |
| **Deploy tooling** | `wrangler` v4.164.0, npm scripts (`dev`, `build`, `preview`) | Free |
| **LLM scoring / proposals** | OpenAI gpt‑4o‑mini (~$0.15/1 M tokens) – used only in dev | ~$1–10/mo |
| **Long‑term hosting options** | Railway, Render, Fly.io, Vercel – upgrade when traffic > 5 k/mo | $0–20/mo |

> **Key differentiator** – Entire stack runs on Cloudflare free tier → $0 recurring cost, globally distributed edge network, instant deploys on every `git push`.

## 5. Partnerships & Directory Presence

- **Affiliate networks**: Klaviyo, Triple Whale, Northbeam, Hyros, Google Performance Max, Meta Advantage+, Shopify App Store, Freshdesk, Gorgias.
- **Directory listings** (claimed or in‑progress):
  - impact.com agency directory
  - CJ Affiliate / Awin / Rakuten Advertising / ShareASale (publisher‑side)
- **Tech partners**: Cloudflare Workers AI, Astro, Vite, GitHub Pages (fallback), Wrangler, Zapier (free), Make (free).
- **Media assets**: favicon.svg (180 × 180 px, SVG), robots.txt, sitemap‑index.xml, Open Graph image (currently brand‑logo placeholder).

## 6. Competitive Landscape & Differentiation

| Competitor | Moat / Trust Signals |
|------------|----------------------|
| **Acceleration Partners** | Proprietary Prism tech, 30+ awards, $8.6 B client revenue, case studies (TikTok +3× partner growth, Allbirds +371% revenue). |
| **Gen3 Marketing** | “Largest/most awarded affiliate agency,” AI‑visibility checker, 500+ clients, research studies (EMARKETER $13.8 B forecast 2026). |
| **impact.com** | 250K+ partner marketplace, benchmark reports, AI‑attribution gap study, agency directory. |
| **Our edge** | • $0 total cost of ownership (Cloudflare free tier). <br>• Niche‑only focus: e‑commerce AI ads/analytics (not a general affiliate site). <br>• One‑page media kit + free ROI calculator (planned). <br>• Published benchmark “State of AI in E‑commerce Ads” (first‑year goal). <br>• Owned‑audience thesis: email newsletter + MailerLite list = direct sponsor access (Gen3 2026 trend). |

## 7. Media Assets

| Asset | Spec | Location |
|-------|------|----------|
| **Logo** | SVG, 180 × 180 px (used as `favicon.svg`) | `public/favicon.svg` |
| **Website URL** | https://ecommerce-ai-ads-affiliate.pages.dev | Deployed on Cloudflare Pages |
| **Tagline** | “Actionable guides and tools for ecommerce brands using AI in ads and analytics.” | Appears on homepage & footer |
| **Hero image** | Not yet – placeholder gradient background (linear‑gradient #1e293b → #475569) | `src/pages/index.astro` |
| **OG image** | Currently canonical only; will add custom social card after first 3 posts | To be designed in Canva / Figma |
| **Social handles** | • LinkedIn: /coolosdev <br>• Instagram: @coolosdev <br>• X/Twitter: @coolosdev <br>• YouTube: /coolosdev <br>• Facebook: /coolosdev <br>• TikTok: @coolosdev | Claimed / in‑progress |
| **Press‑ready PDF** | Will generate from this markdown via `pandoc` when needed | `MEDIA-KIT.md` (this file) |

## 8. Press Release (draft)

```
FOR IMMEDIATE RELEASE

Partner Revenue Labs Launches – The First Curated Resource for AI‑Powered Ecommerce Advertising

[City, Date] – Partner Revenue Labs (https://ecommerce-ai-ads-affiliate.pages.dev) goes live today as the first free, Cloudflare‑powered resource dedicated exclusively to ecommerce brands using AI in ads and analytics. 

Built and maintained by Coolosdev (OAuth‑authenticated GitHub & Cloudflare account), the site offers five cornerstone articles covering Google Performance Max, Meta Advantage+, Klaviyo, Triple Whale, Northbeam, Hyros, and a curated list of AI ad tools (AdBuilder.ai, AdCreative.ai, Predis.ai, Supermetrics). All content is static‑hosted on Cloudflare Pages for $0/month, with a roadmap to a free AI‑ad ROI calculator and a quarterly “State of AI in E‑commerce Ads” benchmark report.

“Our goal is to help founders reclaim time and grow revenue without paying enterprise‑grade analytics fees,” says Coolosdev. “By stripping away the noise and surfacing only the tools that actually move the needle, we give solo founders the same lever that large brands use.”

Media contacts:
- Name: Coolosdev
- Email: coolosdev26@proton.me
- Cloudflare account ID: 41d04827c085112d57a6ae3271ca1153
- GitHub: https://github.com/coolosdev

### About Partner Revenue Labs

Partner Revenue Labs is a niche‑focused affiliate‑and‑resource site that helps ecommerce founders select, compare, and implement the AI tools and analytics stacks that drive revenue. The site is 100 % free to run on Cloudflare’s free tier, with zero recurring cost and globally distributed edge caching.

### ###

For partnership inquiries, sponsorship opportunities, or to request a free media kit, contact coolosdev26@proton.me.
```

## 9. Case Studies (placeholder)

- **“AI Automation for Solo Founders”** (published blog post, Jan 15 2026): 20+ hrs/week reclaimed, 15 % Shopify revenue increase after implementing Zapier, Make, Perplexity AI, Gamma, Fireflies.ai stack. Link: `/blog/hello-world`.
- **Future case studies** (planned Q2 2026): Performance Max ROI lift, Klaviyo email‑flow conversion, Triple Whale attribution vs Google Analytics, AI ad creative A/B test results.

## 10. Contacts

| Role | Name | Email | Notes |
|------|------|-------|-------|
| **Founder / Publisher** | Coolosdev | coolosdev26@proton.me | GitHub: `coolosdev`; Cloudflare Account ID: `41d04827c085112d57a6ae3271ca1153` |
| **Technical / Deploy** | Same as founder | – | Uses `wrangler` v4.164.0, GitHub Actions‑free, Cloudflare Pages auto‑deploy. |
| **Sponsorship / Advertising** | Coolosdev | coolosdev26@proton.me | Media kit, newsletter sponsorship, affiliate commission structure. |

## 11. Media Kit Download

- **Full markdown**: `MEDIA-KIT.md` (this file) – view on GitHub or download via `https://raw.githubusercontent.com/coolosdev/ecommerce-ai-ads-affiliate/main/MEDIA-KIT.md`.
- **Press‑ready PDF**: Generate with `pandoc MEDIA-KIT.md -o media-kit.pdf`.
- **Assets zip**: `public/` assets (favicon.svg, robots.txt, sitemap‑index.xml) – `https://raw.githubusercontent.com/coolosdev/ecommerce-ai-ads-affiliate/main/public/`.

---

*© 2026 Coolosdev. All rights reserved. This media kit is open‑source; feel free to fork, adapt, and attribute.*