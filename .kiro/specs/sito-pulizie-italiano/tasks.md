# Implementation Plan

- [x] 1. Set up project structure and configuration system





  - Create directory structure (src/, config/, public/, dist/)
  - Initialize Vite.js build system with HTML, CSS, JS optimization
  - Create centralized configuration file with all {{VARIABLES}} placeholders
  - Set up package.json with development and build scripts
  - _Requirements: 5.1, 5.2, 5.3_

- [x] 2. Implement core design system and CSS foundation





  - Create CSS custom properties for color palette (#FFFFFF, #F6F7F9, #2CC3A5, #3AA1FF)
  - Implement typography system with Inter font and responsive scales
  - Build spacing system with consistent units (4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px)
  - Create utility classes for layout, spacing, and responsive design
  - _Requirements: 1.4, 4.3_

- [x] 3. Create reusable HTML components and templates




  - Build header component with sticky navigation and mobile menu
  - Create footer component with contact info, legal links, and social media
  - Implement hero section template with CTA hierarchy
  - Build service card component with hover states and CTA integration
  - Create testimonial card component with rating display
  - _Requirements: 2.2, 2.4, 6.1_
-

- [x] 4. Implement homepage with complete content and functionality




  - Create hero section with headline, tagline, and primary CTA "Prenota ora"
  - Build "Perché sceglierci" section with 6 pillars and linear icons
  - Implement services preview section with cards linking to /servizi
  - Create 3-step process section (Richiesta → Intervento → Controllo qualità)
  - Add testimonials section with 6 customer reviews
  - Implement final CTA section with full-width booking button
  - _Requirements: 2.3, 3.1, 6.4_

- [x] 5. Build services page with detailed service information




  - Create service detail cards for all 7 main services (domestiche, uffici, post-ristrutturazione, condominiali, sanificazioni, vetrate, trattamenti pavimenti)
  - Implement service descriptions with includes/excludes/duration/extras for each service
  - Add CTA buttons in each service card linking to {{BOOKING_URL}}
  - Create responsive grid layout for service cards
  - _Requirements: 3.1, 3.2_

- [x] 6. Implement pricing page with transparent pricing tables





  - Create pricing tables with service categories and price ranges in euros
  - Build responsive pricing cards that stack on mobile, table on desktop
  - Add pricing examples for domestic, office, and post-renovation services
  - Implement "Preventivo rapido" box with CTA to {{BOOKING_URL}}
  - Include clear notes about pricing variables (square meters, property condition, frequency)
  - _Requirements: 3.3_

- [x] 7. Create "Chi siamo" page with company information






  - Write and implement mission & values section focusing on reliability, hygiene, sustainability
  - Create team section with professional photos and descriptions
  - Add certifications and insurance information section
  - Include eco-friendly methods and products information
  - Implement "Prenota ora" CTA linking to {{BOOKING_URL}}
  - _Requirements: 6.4_

- [x] 8. Build zone coverage page with service areas






  - Create service areas list using {{SERVICE_AREAS}} configuration
  - Implement textual mini-map of covered municipalities/zones
  - Add "Non trovi la tua zona? Contattaci" message with contact CTA
  - Create responsive layout for area listings
  - _Requirements: 3.4_

- [x] 9. Implement FAQ page with accordion functionality










  - Create 15 frequently asked questions in Italian covering execution, products, keys, timing, cancellations, guarantees
  - Build accessible accordion component with smooth animations
  - Implement Schema.org FAQPage structured data markup
  - Add ARIA expanded states and keyboard navigation support
  - _Requirements: 6.3, 7.3_

- [ ] 10. Create reviews page with customer testimonials
  - Build dedicated testimonials section with customer quotes
  - Implement average rating display with star ratings
  - Add trust badges and credibility indicators
  - Create responsive testimonial grid layout
  - _Requirements: 6.4_

- [ ] 11. Build contact page with form and information
  - Create contact form with fields: name, email, phone, message, privacy consent
  - Implement client-side form validation with Italian error messages
  - Add clickable contact information (tel: for {{PHONE}}, mailto: for {{EMAIL}})
  - Include address display with {{ADDRESS}}, {{CITY}}, {{PROVINCE}}, {{CAP}}
  - Add embedded map or static map image
  - Implement alternative "Prenota ora" CTA to {{BOOKING_URL}}
  - _Requirements: 6.1, 6.2, 9.3_

- [ ] 12. Create legal pages for privacy compliance
  - Build privacy policy page with structured placeholder content
  - Create cookie policy page with GDPR compliance information
  - Implement terms of service page with legal framework
  - Add simple cookie banner with essential preferences
  - Include {{PIVA}} in footer and legal pages
  - _Requirements: 9.1, 9.2, 9.4_

- [ ] 13. Implement SEO optimization and structured data
  - Add unique title and meta description for each page
  - Create H1 hierarchy with single H1 per page and clear H2 structure
  - Implement breadcrumb navigation with semantic markup
  - Add Schema.org LocalBusiness markup with {{ADDRESS}}, {{PHONE}}, opening hours
  - Create Schema.org Service markup for key services
  - Add Schema.org Product/Offer markup for pricing sections
  - Generate sitemap.xml and robots.txt files
  - Implement canonical URLs for all pages
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 14. Add social media integration and OpenGraph meta tags
  - Implement OpenGraph meta tags for all pages with appropriate images
  - Add Twitter Card meta tags for social sharing
  - Create favicon and web app manifest with theme colors
  - Add social media links in footer using {{FB_URL}}, {{IG_URL}}, {{LN_URL}}
  - Optimize social sharing images and preview content
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 15. Implement accessibility features and WCAG AA compliance
  - Add proper ARIA labels and roles throughout the site
  - Implement keyboard navigation support for all interactive elements
  - Create visible focus indicators with proper contrast ratios
  - Add alt attributes for all images with descriptive text
  - Ensure color contrast meets WCAG AA standards (4.5:1 for normal text)
  - Implement semantic HTML structure with proper heading hierarchy
  - Add skip navigation links for screen readers
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 16. Optimize performance and implement Core Web Vitals improvements
  - Implement lazy loading for images with WebP format and fallbacks
  - Create responsive image sets with appropriate sizes
  - Optimize CSS with critical path rendering and async non-critical styles
  - Implement JavaScript code splitting and defer non-critical scripts
  - Add resource hints (preload, prefetch) for critical resources
  - Optimize font loading with font-display: swap
  - Minimize and compress all assets for production build
  - _Requirements: 1.2_

- [ ] 17. Create configuration integration system
  - Build JavaScript utility to load and parse site-config.json
  - Implement template replacement system for all {{VARIABLES}} in HTML
  - Create build-time configuration injection for static generation
  - Add configuration validation to ensure all required variables are present
  - Test configuration system with sample data
  - _Requirements: 5.1, 5.2_

- [ ] 18. Implement mobile-first responsive design
  - Test and optimize all components for mobile devices (320px+)
  - Ensure touch-friendly interactive elements (44px minimum)
  - Optimize mobile navigation with hamburger menu and overlay
  - Test responsive breakpoints (mobile, tablet, desktop)
  - Verify mobile performance and usability
  - _Requirements: 1.1_

- [ ] 19. Add booking CTA integration throughout the site
  - Ensure all "Prenota ora" and "Richiedi un preventivo" buttons link to {{BOOKING_URL}}
  - Add rel="noopener" and target="_blank" to all external booking links
  - Implement consistent CTA styling and positioning across all pages
  - Test booking link functionality and external redirect behavior
  - Verify CTA visibility and accessibility on all devices
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 20. Create documentation and deployment setup
  - Write comprehensive README with setup, configuration, and deployment instructions
  - Document how to modify all {{VARIABLES}} in the configuration file
  - Create deployment guides for Vercel, Netlify, and GitHub Pages
  - Add development workflow documentation
  - Include troubleshooting guide for common issues
  - Test deployment process on at least one static hosting platform
  - _Requirements: 5.3, 5.4_

- [ ] 21. Implement error handling and 404 page
  - Create custom 404 error page with navigation and booking CTA
  - Add graceful JavaScript error handling with fallbacks
  - Implement form submission error handling with user feedback
  - Test error scenarios and ensure site remains functional
  - Add network error handling for external resources
  - _Requirements: 1.2_

- [ ] 22. Final testing and quality assurance
  - Run Lighthouse performance tests to achieve ≥95 score on mobile and desktop
  - Conduct accessibility testing with automated tools and manual keyboard navigation
  - Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
  - Verify all internal and external links work correctly
  - Test responsive design on various device sizes
  - Validate HTML, CSS, and JavaScript for errors
  - Test configuration system with real data
  - Verify all booking CTAs redirect correctly to external URL
  - _Requirements: 1.2, 4.1, 4.2, 4.3, 4.4_