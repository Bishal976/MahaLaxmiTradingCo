# Maha Laxmi Trading — Portfolio Website

Business portfolio website for **Maha Laxmi Trading**, a construction materials supplier based in Banka, Bihar, India. Built as a single-page application to showcase products, services, and contact information.

**Live site:** [mahalaxmitrading.in](https://www.mahalaxmitrading.in)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Routing | React Router DOM v6 |
| Email | EmailJS (client-side) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/MahaLaxmiTradingCo.git
cd MahaLaxmiTradingCo

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and fill in your EmailJS credentials

# 4. Start the development server
npm run dev
```

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your credentials. **Never commit `.env` to version control.**

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID_OWNER` | Template ID for owner notification email |
| `VITE_EMAILJS_TEMPLATE_ID_USER` | Template ID for user confirmation email |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

Get these values from your [EmailJS dashboard](https://www.emailjs.com).

---

## Project Structure

```
MahaLaxmiTradingCo/
├── public/
│   ├── assets/          # Images, icons, webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # React components (Navbar, Hero, About, Products, Contact, Footer)
│   ├── data/            # siteData.ts — all text content and configuration
│   ├── hooks/
│   ├── lib/
│   └── pages/           # Index.tsx (main), NotFound.tsx (404)
├── .env.example         # Environment variable template
├── vercel.json          # Security headers + SPA routing rewrites
└── index.html           # Entry HTML with SEO meta tags and JSON-LD
```

---

## Security

- All security headers (CSP, HSTS, X-Frame-Options, etc.) are configured in `vercel.json`.
- EmailJS credentials are loaded from environment variables — never hardcoded.
- All external links use `rel="noopener noreferrer"`.
- To report a security vulnerability, please contact the developer directly rather than opening a public issue.

---

## Legal Disclaimer & License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for the full text.

> **Important:** The code in this repository is provided for demonstration and educational purposes. While the code is open-source, the branding, logos, and personal/business data (including but not limited to the company name "Maha Laxmi Trading", all logo files, photographs, and contact information) remain the intellectual property of Maha Laxmi Trading and Basuki Nath Singh, and **may not be reused without explicit written permission**.

If you fork this project for your own portfolio site, replace all content in `src/data/siteData.ts`, all images in `public/assets/`, and all references in `index.html` with your own.
