# Specification

## Summary
**Goal:** Build a luxury, modern, mobile-first Spice Lux marketing website with key brand sections, WhatsApp enquiry CTAs, and a contact form persisted to a Motoko canister.

**Planned changes:**
- Create responsive UI sections/pages: Home (headline “Spice Lux – Luxury You Can Taste”, CTAs: Order Now / Bulk Enquiry / Contact Us, and 3 feature callouts), About, Products (2 product cards), Why Choose, Testimonials, Contact.
- Apply a consistent luxury visual theme using deep red, matte black, gold highlights, and natural green accents across typography and components.
- Implement a sticky navbar with links to all sections and a responsive mobile menu.
- Build Products cards for Green Cardamom and Black Pepper with images, provided-style descriptions, grades/weights, elegant hover effects, and “Enquire Now” buttons.
- Add WhatsApp deep-link integration for Order Now / enquiry CTAs with prefilled messages (including product name when relevant).
- Implement Contact section with a validated contact form, clickable phone/email, WhatsApp button, and Google Maps embed.
- Persist contact submissions (name, contact, message, timestamp) to a single Motoko actor; add a query method to fetch saved submissions for verification.
- Add subtle animations and SEO-friendly semantic structure (headings, meta title/description, accessible landmarks) while keeping performance fast.
- Organize code with a clean structure and concise comments around WhatsApp and form submission flow.
- Add generated static image assets under `frontend/public/assets/generated` and use them in the hero and product cards with descriptive alt text.

**User-visible outcome:** Users can browse the Spice Lux site on mobile/desktop, view product highlights and testimonials, open WhatsApp with prefilled enquiry messages from CTAs, and submit the contact form successfully with confirmation (and stored submissions on the backend).
