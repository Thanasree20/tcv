# Thanasree Construction & Valuers Website

A professional, responsive website for Thanasree Construction & Valuers—construction, valuation, and consultancy firm led by Er. M. Srinivasan, Chartered Civil Engineer & Registered Valuer.

## Features

- **6 Core Pages:** Home, About, Services, Empanelment, Careers, Contact
- **Floating WhatsApp** button on all pages
- **Sticky Call + WhatsApp bar** on mobile
- **Contact & Careers forms** (Formspree-ready)
- **Google Maps** embeds for Vellore, Chennai, Salem offices
- **Testimonials, FAQ, Project Gallery**
- **SEO:** Meta tags, Open Graph, Schema.org LocalBusiness
- **Responsive** design for mobile, tablet, desktop

## Setup

### Forms (Formspree)

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create two forms: one for Contact enquiries, one for Careers applications
3. Get each form's endpoint (e.g. `https://formspree.io/f/xxxxx`)
4. Replace the `action` attribute in:
   - `contact.html` – form `id="contact-form"`
   - `careers.html` – form `id="careers-form"`
5. If using different form IDs, update the fetch `action` in `js/forms.js` to match

### Google Maps

The contact page uses address-based embed URLs. For precise locations, replace the iframe `src` in `contact.html` with embed codes from [Google Maps](https://www.google.com/maps) (Share → Embed a map).

### Analytics

Add your Google Analytics 4 or Plausible script in the `<head>` of each HTML file (a placeholder comment is in `index.html`).

## Project Structure

```
├── index.html
├── about.html
├── services.html
├── empanelment.html
├── careers.html
├── contact.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   └── pages/
├── js/
│   ├── main.js
│   ├── forms.js
│   └── empanelment.js
├── data/
│   └── empanelment.json
└── README.md
```

## Running Locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

For the empanelment page to load JSON when opened as `file://`, the fallback list in `empanelment.js` is used. Use a local server for fetch to work.

## Hosting

Deploy to Netlify, Vercel, or GitHub Pages for HTTPS and CDN. Forms can use Netlify Forms if hosting on Netlify.
