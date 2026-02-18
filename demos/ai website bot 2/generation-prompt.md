# Website Generation Prompt Template

Use this template when generating websites. Fill in the business details and pick the industry direction.

---

## Input Required

```
Business Name: [name]
Industry: [pick from industry-directions.md]
Phone: [phone number]
Location: [city, state or service area]
Services: [list of main services]
Tagline (optional): [business tagline]
Owner Name (optional): [owner's name]
Email (optional): [email]
Years in Business (optional): [X years]
```

---

## Generation Prompt

```
Create a complete, production-ready single-page website for this business:

=== BUSINESS INFO ===
Business Name: [Business Name]
Industry: [Industry]
Phone: [Phone]
Location: [Location]
Services: [Services]
[Include any optional fields if provided]

=== DESIGN DIRECTION ===
[Copy the full design direction from industry-directions.md for this industry]

=== V3 QUALITY REQUIREMENTS ===
This website MUST include:

1. AOS.js scroll animations
   - Link: https://unpkg.com/aos@2.3.1/dist/aos.css
   - Script: https://unpkg.com/aos@2.3.1/dist/aos.js
   - Init: AOS.init({ duration: 800, once: true });
   - Use data-aos="fade-up" on sections with staggered delays

2. Custom CSS keyframe animations
   - @keyframes fadeInUp for hero content
   - Apply to hero heading/buttons on page load

3. Fixed header with backdrop blur
   - position: fixed; backdrop-filter: blur(10px);
   - Semi-transparent background

4. Premium hover effects
   - Buttons: transform: translateY(-2px); box-shadow increase
   - Cards: transform: translateY(-5px); shadow lift effect

5. Industry-specific design
   - Use ONLY the colors specified above
   - Use ONLY the fonts specified above
   - Match the layout/vibe described

6. Real Unsplash images
   - Use actual Unsplash URLs (not placeholders)
   - Search terms: [relevant to industry]

7. Mobile responsive
   - Works perfectly on phone screens
   - Navigation adapts to mobile

8. Click-to-call phone links
   - <a href="tel:[phone]">[phone]</a>

=== ANTI-SLOP RULES ===
DO NOT use:
- Inter, Roboto, or Arial fonts
- Purple or blue gradients
- Generic taglines like "Your X, Our Passion"
- Emoji in headings
- Placeholder text

DO use:
- Industry-specific fonts from direction above
- Industry-specific colors from direction above
- Real-sounding, human copy
- Specific details about services

=== OUTPUT FORMAT ===
Output a single, complete index.html file that:
- Has all CSS in <style> tags (no external CSS except fonts/AOS)
- Has all JS in <script> tags (no external JS except AOS)
- Works immediately when opened in a browser
- Includes proper meta tags for SEO

Sections to include:
1. Header (fixed, blur, logo, nav, phone)
2. Hero (full-width image, heading, tagline, CTA)
3. Services (grid of service cards with icons)
4. About/Trust (why choose us, experience, guarantees)
5. CTA (strong call to action, phone prominent)
6. Footer (contact info, copyright)
```

---

## Example: Lawn Care Business

```
Create a complete, production-ready single-page website for this business:

=== BUSINESS INFO ===
Business Name: Green Valley Lawn Care
Industry: Lawn Care / Landscaping
Phone: (512) 555-0123
Location: Austin, TX
Services: Lawn Mowing, Landscaping, Tree Trimming, Seasonal Cleanup
Owner: Mike Johnson
Years: 8 years in business

=== DESIGN DIRECTION ===
Vibe: Earthy, outdoorsy, trustworthy
Hero: Full-bleed outdoor photo with gradient overlay, centered text
Layout: Organic shapes, wide sections, before/after potential
Animations: Soft fades, gentle slides (nature-like movement)

Colors:
- Primary: #2d6a4f (forest green)
- Secondary: #40916c (grass green)
- Background: #f0f7f0 (mint cream)
- Accent: #95d5b2 (light sage)

Fonts:
- Headings: Playfair Display
- Body: Work Sans

Unsplash Search: lawn mowing, landscaping, garden maintenance

[Continue with V3 requirements and anti-slop rules...]
```

---

## Quick Industry Lookup

| Industry | Key Colors | Key Fonts |
|----------|-----------|-----------|
| Lawn Care | `#2d6a4f`, `#40916c` | Playfair Display, Work Sans |
| Cleaning | `#0891b2`, `#fbbf24` | Quicksand, Inter |
| Plumbing | `#1e3a5f`, `#00bcd4` | Archivo, DM Sans |
| Handyman | `#1565c0`, `#ff6f00` | Bebas Neue, Source Sans 3 |
| Tree Service | `#1a4731`, `#8b4513` | Oswald, Source Sans 3 |
| Restaurant | `#b8383d`, `#d4a24c` | Playfair Display, Lora |
| Salon | `#6b4c6a`, `#c4a484` | Cormorant Garamond, Montserrat |
| Contractor | `#2c3e50`, `#d35400` | Archivo Black, Roboto Slab |

For full directions, see `industry-directions.md`.
