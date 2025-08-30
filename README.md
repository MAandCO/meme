# Ma & Co Accountants – Landing Page (Next.js + Tailwind)

A modern, professional, SEO-optimized landing page for a UK accountancy firm specializing in tax planning, compliance automation, and financial strategy.

## Features
- Hero with strong CTA
- Service grid (tax, AI bookkeeping, payroll, property tax, strategy)
- About section (digital-first, rigorous honesty, sparring-partner mindset)
- Testimonials (cards)
- SEO/Blog preview
- Full Blog: listing + post pages with SEO metadata and JSON-LD
- FAQ + JSON-LD schema (LocalBusiness + FAQPage)
- Contact form (client-side handler)
- Sticky nav + footer, mobile-first responsive
- Chatbot placeholder for future AI advisor

## Quick Start
1. Install dependencies:
   - npm install
2. Run dev server:
   - npm run dev
3. Open http://localhost:3000

### Email Setup (Nodemailer)
- This project sends contact form emails via SMTP. Add an `.env.local` file (see `.env.example`).
- Works with common providers via SMTP:
  - SendGrid SMTP: `SMTP_HOST=smtp.sendgrid.net`, `SMTP_PORT=587`, `SMTP_USER=apikey`, `SMTP_PASS=<your_sendgrid_api_key>`
  - Mailgun SMTP: `SMTP_HOST=smtp.mailgun.org`, `SMTP_PORT=587`, `SMTP_USER=postmaster@<your-domain>`, `SMTP_PASS=<mailgun_smtp_password>`
  - Postmark SMTP: `SMTP_HOST=smtp.postmarkapp.com`, `SMTP_PORT=587`, `SMTP_USER=<postmark_server_token>`, `SMTP_PASS=<postmark_server_token>`
  - AWS SES SMTP: Create SMTP creds in SES console, then `SMTP_HOST=email-smtp.<region>.amazonaws.com`, `SMTP_PORT=587`, `SMTP_USER=<smtp_username>`, `SMTP_PASS=<smtp_password>`
- Test endpoint: `GET /api/email/test?to=<your@email>` returns JSON with send result.

## Update These Placeholders
- Business details in schema (name, URL, address, phone, openingHours)
- Social links and legal pages (Privacy Policy)
- Form handling (`/api/contact`) if you want server-side processing

## Tech
- Next.js (App Router)
- TailwindCSS
- TypeScript

## Project Structure
- src/app/layout.tsx – Global layout + metadata
- src/app/page.tsx – Landing page content and schema
- src/app/blog/page.tsx – Blog index
- src/app/blog/[slug]/page.tsx – Blog post page (static params)
- src/content/posts.ts – Blog post content (typed JSON)
- src/components/NavBar.tsx – Sticky nav with anchors
- src/components/Chatbot.tsx – Floating chat widget (placeholder)
- src/components/Footer.tsx – Footer w/ links & socials
- src/components/TeamGallery.tsx – Photo grid using Unsplash placeholders
- src/styles/globals.css – Tailwind + custom styles/animations

## Notes
- Images use simple SVG/gradients to avoid external config. Replace with your assets when ready.
- `next.config.js` sets `images.unoptimized = true` for portability; adjust if you use Next/Image with remote hosts.
- Team photos use `source.unsplash.com` placeholders. To use your real photos, add them under `public/images/` and update `TeamGallery.tsx` sources.
- Included sample team photos in `public/images/` from Unsplash (free to use). Attribution appreciated but not required under the Unsplash License.
- Blog uses Tailwind Typography for pleasant reading. Adjust via prose classes in `[slug]/page.tsx`.
- If you don’t configure SMTP, the API uses Nodemailer’s `jsonTransport` so submissions succeed and are logged without sending.
