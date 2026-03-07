# Design Document

## Overview

Il sito web per l'azienda di pulizie italiana sarà un'applicazione web statica costruita con HTML5, CSS3 e JavaScript vanilla per massimizzare le performance. L'architettura seguirà un approccio mobile-first con design system modulare basato su utility CSS per garantire consistenza e manutenibilità.

Il design si concentra su tre pilastri fondamentali:
- **Freschezza e igiene**: palette colori pulita, spaziature ariose, elementi lineari
- **Performance ottimale**: caricamento rapido, immagini ottimizzate, codice minimalista
- **Conversione efficace**: CTA chiare che guidano verso la prenotazione esterna

## Architecture

### Technical Stack
- **Frontend**: HTML5 semantico, CSS3 con custom properties, JavaScript ES6+ vanilla
- **Build System**: Vite.js per bundling e ottimizzazione
- **Deployment**: Sito statico compatibile con Vercel, Netlify, GitHub Pages
- **Configuration**: Sistema centralizzato con file JSON per tutte le variabili aziendali

### File Structure
```
/
├── src/
│   ├── pages/           # File HTML per ogni pagina
│   ├── styles/          # CSS modulare
│   ├── scripts/         # JavaScript utilities
│   ├── assets/          # Immagini, icone, font
│   └── components/      # Componenti riutilizzabili
├── config/
│   └── site-config.json # Configurazione centralizzata
├── public/              # File statici (favicon, manifest, etc.)
└── dist/               # Build output
```

### Configuration System
Tutte le variabili aziendali saranno centralizzate in `config/site-config.json`:

```json
{
  "company": {
    "name": "{{COMPANY_NAME}}",
    "tagline": "{{TAGLINE}}",
    "bookingUrl": "{{BOOKING_URL}}"
  },
  "contact": {
    "phone": "{{PHONE}}",
    "email": "{{EMAIL}}",
    "address": "{{ADDRESS}}",
    "city": "{{CITY}}",
    "province": "{{PROVINCE}}",
    "cap": "{{CAP}}",
    "piva": "{{PIVA}}"
  },
  "business": {
    "serviceAreas": "{{SERVICE_AREAS}}",
    "openingHours": "{{OPENING_HOURS}}"
  },
  "social": {
    "facebook": "{{FB_URL}}",
    "instagram": "{{IG_URL}}",
    "linkedin": "{{LN_URL}}"
  }
}
```

## Components and Interfaces

### Design System

#### Color Palette
- **Primary White**: `#FFFFFF` - Sfondo principale, testo su scuro
- **Light Gray**: `#F6F7F9` - Sfondo sezioni alternate, bordi sottili
- **Fresh Accent**: `#2CC3A5` - CTA primarie, elementi di accento
- **Alternative Accent**: `#2EB797` - Variante verde acqua
- **Blue Accent**: `#3AA1FF` - Link, elementi secondari
- **Warning**: `#FEF3C7` - Stati di attenzione (se necessario)

#### Typography
- **Font Family**: Inter (fallback: system-ui, sans-serif)
- **Scale**: 
  - H1: 2.5rem (mobile) / 3.5rem (desktop)
  - H2: 2rem (mobile) / 2.5rem (desktop)
  - H3: 1.5rem
  - Body: 1rem
  - Small: 0.875rem

#### Spacing System
- **Base unit**: 0.25rem (4px)
- **Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Container max-width**: 1200px
- **Grid gap**: 24px (mobile) / 32px (desktop)

### Core Components

#### Header Component
- **Sticky navigation** con logo, menu principale e CTA "Prenota"
- **Mobile menu** hamburger con overlay full-screen
- **Accessibility**: Focus trap, ARIA labels, keyboard navigation

#### Hero Section
- **Layout**: Testo a sinistra, immagine/pattern a destra
- **CTA hierarchy**: Primaria "Prenota ora", secondaria "Scopri di più"
- **Background**: Pattern SVG sottile con bolle/acqua

#### Service Cards
- **Structure**: Icona lineare, titolo, descrizione breve, CTA
- **Hover states**: Bordo colorato, leggero lift con box-shadow
- **Grid**: 1 colonna (mobile), 2-3 colonne (desktop)

#### Testimonial Cards
- **Content**: Citazione, nome, rating stelle, foto (opzionale)
- **Layout**: Carousel su mobile, griglia su desktop
- **Schema markup**: Review structured data

#### Footer Component
- **Sections**: Contatti, link utili, social, informazioni legali
- **Responsive**: Stack verticale su mobile, colonne su desktop
- **Legal compliance**: Link privacy, cookie, termini

### Page-Specific Components

#### Pricing Tables
- **Structure**: Servizio, descrizione, prezzo range, incluso/escluso
- **Responsive**: Cards stack su mobile, tabella su desktop
- **CTA integration**: "Prenota" per ogni servizio

#### FAQ Accordion
- **Interaction**: Click/tap per espandere, smooth animation
- **Schema markup**: FAQPage structured data
- **Accessibility**: ARIA expanded states, keyboard navigation

#### Contact Form
- **Fields**: Nome, email, telefono, messaggio, privacy consent
- **Validation**: Client-side con feedback visivo
- **Submission**: Mailto fallback o integrazione servizio esterno
- **Privacy**: Informativa chiara, checkbox obbligatorio

## Data Models

### Site Configuration Model
```typescript
interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    bookingUrl: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    province: string;
    cap: string;
    piva: string;
  };
  business: {
    serviceAreas: string[];
    openingHours: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
```

### Service Model
```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  includes: string[];
  excludes: string[];
  duration: string;
  priceRange: string;
  extras?: string[];
}
```

### Testimonial Model
```typescript
interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service?: string;
  location?: string;
}
```

### FAQ Model
```typescript
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
```

## Error Handling

### Client-Side Error Handling
- **Form validation**: Feedback immediato con messaggi chiari in italiano
- **Network errors**: Fallback per form submission (mailto)
- **404 Page**: Pagina personalizzata con navigazione e CTA
- **JavaScript errors**: Graceful degradation, funzionalità base sempre disponibili

### Performance Error Prevention
- **Image optimization**: WebP con fallback, lazy loading, responsive images
- **CSS optimization**: Critical CSS inline, non-critical async
- **JavaScript optimization**: Code splitting, defer non-critical scripts
- **Caching strategy**: Service worker per risorse statiche

## Testing Strategy

### Performance Testing
- **Lighthouse CI**: Automated testing per ogni build
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Mobile performance**: Test su dispositivi reali e simulati
- **Network conditions**: Test su 3G slow, 4G, WiFi

### Accessibility Testing
- **Automated testing**: axe-core integration
- **Manual testing**: Keyboard navigation, screen reader
- **Color contrast**: Automated verification WCAG AA
- **Focus management**: Visible focus indicators, logical tab order

### Cross-Browser Testing
- **Modern browsers**: Chrome, Firefox, Safari, Edge (ultime 2 versioni)
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Feature detection**: Graceful degradation per funzionalità avanzate

### SEO Testing
- **Meta tags**: Validation per ogni pagina
- **Structured data**: Schema.org markup validation
- **Sitemap**: XML sitemap generation e validation
- **Internal linking**: Verifica link interni e anchor text

## Implementation Architecture

### Build Process
1. **Development**: Vite dev server con hot reload
2. **Build**: Ottimizzazione automatica CSS/JS, image compression
3. **Deploy**: Static site generation con pre-rendering
4. **CI/CD**: Automated testing e deployment

### Content Management
- **Static content**: Markdown files per contenuti lunghi
- **Configuration**: JSON file per dati dinamici
- **Images**: Ottimizzazione automatica con multiple formats
- **Internationalization**: Preparato per future espansioni linguistiche

### Performance Optimizations
- **Critical CSS**: Above-the-fold styles inline
- **Resource hints**: Preload, prefetch per risorse critiche
- **Image optimization**: Responsive images, modern formats
- **Code splitting**: Lazy loading per componenti non critici

### Security Considerations
- **Content Security Policy**: Headers per prevenire XSS
- **HTTPS enforcement**: Redirect automatico
- **External links**: rel="noopener" per sicurezza
- **Form security**: Validation e sanitization input

Questo design garantisce un sito web performante, accessibile e facilmente manutenibile che soddisfa tutti i requisiti specificati, con particolare attenzione alla conversione attraverso le CTA di prenotazione esterna.