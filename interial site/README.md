# Foresight Associates — Luxury Architecture & Interior Design

> **"Quiet Luxury — Architecture in Its Purest Form."**  
> An award-winning, complete, bespoke web experience built for Foresight Associates, an architecture and interior design practice based in Vadodara (Baroda), Gujarat, India.

---

## 1. Studio Information & Published Credits

* **Business Name:** Foresight Associates
* **Location:** Vadodara (Baroda), Gujarat, India
* **Design Principals:**
  * Shivali Agrawal
  * Kunal Patel
  * Azaz Saleh
* **Official Social Channels:**
  * [Instagram Profile (@foresight_associates)](https://www.instagram.com/foresight_associates/)
  * [Facebook Page](https://www.facebook.com/p/Foresight-Associates-100063882672737/)
* **Verified Published Projects:**
  1. **Pramukh Villa (2024)** · *Atladra, Vadodara* (~3,400 sq. ft.) — Greenery, exposed concrete, rustic brick, fluted glass. Published on *Volume Zero* & *The Architect's Diary*. Photography by **Tejas Shah Photography**.
  2. **Vairaag (2022)** · *Bill Road, Vadodara* (~3,690 sq. ft.) — Modern-rustic suburban villa, raw concrete, exposed brick, laser-cut Corten steel jalis. Selected for *Volume Zero Hot 100*. Photography by **Tejas Shah Photography**.
  3. **Shayonam (2023)** · *Vadodara, Gujarat* (~9,795 sq. ft.) — Four-level luxury residence, "artful nucleus of modern and ethnic design", central skylit atrium, teak woodwork, CNC motifs. Published on *The Architect's Diary* (text by Nishal Sevak). Photography by **Tejas Shah Photography**.
  4. **Isha Developers Office (2022)** · *Vadodara, Gujarat* (~1,500 sq. ft.) — Permanent commercial site office, sloping roof, exposed brick, Kota stone, open-to-sky courtyard with overhead cast-iron jali. Published on *Volume Zero*. Photography by **Sagar Bhavsar**.

---

## 2. Creative Direction & Aesthetic Standards

* **Palette:**
  * Warm Ivory: `#F6F3ED` (Primary surface background)
  * Chalk White: `#FCFBF8` (Editorial canvas)
  * Deep Charcoal: `#252522` (Primary typography & nocturnal philosophy sections)
  * Muted Olive: `#797B64` (Restrained architectural accents)
  * Sandstone: `#C9B9A4` (Warm earth tone)
  * Earth Brown: `#8C725B` (Terracotta & natural wood complement)
  * Fine Border: `#DCD7CE` (Hairline architectural grid dividers)
* **Typography:**
  * Headings: **Cormorant Garamond** (Editorial serif, delicate italic styling)
  * Interface, Navigation & Body: **Inter** (Crisp, modern, high-legibility geometric sans)
* **Layout Principles:**
  * Asymmetrical editorial compositions
  * Generous negative space and 1px architectural lines
  * Full-bleed verified photography
  * Accessible high-resolution lightbox gallery with keyboard navigation (Esc, ArrowLeft, ArrowRight)
  * Zero generic rounded cards, no bright gradients, no synthetic stock images

---

## 3. Project File Structure

```
foresight-associates/
│
├── index.html                   # Cinematic homepage (Sections A through I)
├── projects.html                # Filterable portfolio (All, Residential, Commercial, Interiors)
├── about.html                   # Studio history, philosophy & design principals
├── services.html                # Practice areas, scope & 4-stage methodology
├── contact.html                 # Interactive project enquiry form & studio information
├── privacy-policy.html          # Ethical studio privacy policy
├── 404.html                     # Custom luxury 404 error page
│
├── projects/
│   ├── pramukh-villa.html       # Pramukh Villa detailed monograph & 6-photo gallery
│   ├── vairaag.html             # Vairaag Villa detailed monograph & 6-photo gallery
│   ├── shayonam.html            # Shayonam Residence detailed monograph & 6-photo gallery
│   └── isha-developers-office.html # Isha Developers Office detailed monograph & 6-photo gallery
│
├── assets/
│   ├── css/
│   │   ├── reset.css            # Modern CSS reset & reduced-motion overrides
│   │   ├── variables.css        # Design tokens: palette, fluid typography, transitions
│   │   ├── global.css           # Typography hierarchy, focus indicators, scrollbars
│   │   ├── layout.css           # Header, hero, editorial grids, dark philosophy, footer
│   │   ├── components.css       # Buttons, cards, filter pills, lightbox, form controls
│   │   ├── animations.css       # IntersectionObserver scroll reveals, luxury timings
│   │   ├── pages.css            # Detail page metadata strips, service rows, policy layout
│   │   └── responsive.css       # Mobile, tablet, laptop, and desktop breakpoints
│   │
│   ├── js/
│   │   ├── main.js              # Application entry point & copyright year injector
│   │   ├── navigation.js        # Header scroll observer, active link highlighter, mobile drawer
│   │   ├── animations.js        # IntersectionObserver for smooth scroll reveals
│   │   ├── project-data.js      # Structured JavaScript export of verified project records
│   │   ├── project-filters.js   # Dynamic category filtering with real imagery & empty state
│   │   ├── gallery.js           # Lightbox viewer with keyboard & touch navigation
│   │   ├── contact-form.js      # Form validation, anti-spam honeypot, and API dispatcher
│   │   └── utilities.js         # HTML escaping, slug parsers, path helpers
│   │
│   └── images/
│       └── projects/
│           ├── pramukh-villa/   # 6 high-resolution authentic photographs (Tejas Shah)
│           ├── vairaag/         # 6 high-resolution authentic photographs (Tejas Shah)
│           ├── shayonam/        # 6 high-resolution authentic photographs (Tejas Shah)
│           └── isha-developers-office/ # 6 high-resolution authentic photographs (Sagar Bhavsar)
│
├── components/
│   ├── header.html              # Reusable header fragment
│   └── footer.html              # Reusable footer fragment
│
├── data/
│   ├── projects.json            # Structured JSON project database
│   └── services.json            # Structured JSON architectural offerings
│
├── server/
│   ├── server.js                # Dual-mode HTTP server & Contact API (Express or Native Node)
│   ├── package.json             # Backend dependencies & npm scripts
│   ├── .env.example             # Environment configuration template
│   └── enquiries.json           # Local persistent store for received project enquiries
│
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # Canonical XML sitemap for SEO
└── README.md                    # Complete project documentation
```

---

## 4. How to Run Locally

### Option A: Complete Web Server + Contact API (Recommended)

The included Node server in `server/server.js` serves both the static luxury frontend and provides the `/api/contact` enquiry endpoint.

1. Open your terminal in the project directory:
   ```bash
   node server/server.js
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

*Note: `server/server.js` is engineered to run seamlessly with standard Node.js (v16+) with zero required dependencies. If you wish to install Express and Nodemailer for production SMTP email sending, simply run `npm install` inside `server/`.*

### Option B: Any Static Web Server

You can also serve the frontend using any standard static server (e.g., Python or VSCode Live Server):

```bash
# Using Python 3:
python -m http.server 8080

# Or using npx:
npx serve .
```
Then visit `http://localhost:8080`.

---

## 5. Contact API & Enquiry Handling

* **Endpoint:** `POST /api/contact`
* **Features:**
  * Client-side & server-side input validation
  * Honeypot anti-spam field (`website_url`)
  * In-memory IP rate limiting (10 submissions per 15 minutes)
  * HTML sanitization preventing XSS injection
  * Persistent storage in `server/enquiries.json` with reference IDs (e.g., `ENQ-1729688400000-A1B2C3`)
  * Configurable SMTP dispatch via `.env` (compatible with SendGrid, Amazon SES, Postmark, or Gmail)

---

## 6. Free Deployment Guide (Vercel & Static Hosts)

### Option 1: One-Click Vercel Deployment (Windows)
Double-click `deploy-vercel.bat` in the project root:
1. It automatically builds `assets/css/style.css` via `node build-css.js`.
2. It launches the official Vercel CLI (`npx -y vercel --prod`).
3. If not logged in, Vercel will open your browser to log in (100% free Hobby plan).
4. Your site will be deployed and live with a global SSL URL (e.g. `https://foresight-associates.vercel.app`).

### Option 2: Vercel Web Dashboard (Drag-and-Drop or GitHub)
1. Go to [vercel.com](https://vercel.com) and log in to your free account.
2. Click **Add New... > Project**.
3. Import your project (or push to GitHub and import).
4. In **Project Settings**:
   * **Framework Preset:** `Other`
   * **Build Command:** `npm run build` (or `node build-css.js`)
   * **Output Directory:** `.` (root directory)
5. Click **Deploy**. Vercel will bundle the CSS and publish the site instantly.

### Why CSS Works Flawlessly:
* `vercel.json` specifies `"outputDirectory": "."` so Vercel serves the root assets folder directly instead of defaulting to a missing `public/` directory.
* `assets/css/style.css` is a unified production stylesheet combining all 8 CSS modules in cascade order.
* Root-relative paths (`/assets/css/style.css`) resolve correctly across root pages and clean subdirectory URLs (`/projects/pramukh-villa`).

### Deploying the Backend API (Free)

To enable live server-side email dispatch and enquiry logging:
1. Deploy the `server/` directory to **Render**, **Railway**, or **Fly.io**.
2. Set environment variables based on `server/.env.example`.
3. In `assets/js/contact-form.js`, point the fetch endpoint to your deployed backend URL.

---

## 7. Compliance, Accessibility & Performance

* **Accessibility:** WCAG AA contrast compliance, visible `:focus-visible` outlines, accessible ARIA roles, skiplinks, screen-reader status alerts, and `prefers-reduced-motion` animation suppression.
* **SEO:** Open Graph tags, canonical URLs, semantic HTML5 landmarks, Schema.org `ArchitecturalFirm` JSON-LD microdata, XML sitemap, and descriptive alt text.
* **Performance:** Native `loading="lazy"` below-the-fold images, fluid responsive clamp scaling, zero heavy third-party framework overhead, and fast vanilla JavaScript.

