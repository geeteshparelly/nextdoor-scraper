# V3 Quality Standards

Every website generated MUST include these elements. No exceptions.

---

## Required Technologies

### AOS.js (Animate On Scroll)
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init({ duration: 800, once: true });</script>
```

Use on sections and cards:
```html
<section data-aos="fade-up">
<div class="card" data-aos="fade-up" data-aos-delay="100">
```

### Google Fonts
Always load industry-specific fonts via CDN:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Required CSS Features

### 1. Custom Keyframe Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}
```

### 2. Backdrop Blur Header
```css
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}
```

### 3. Premium Hover Effects
```css
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
```

### 4. Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

### 5. Mobile Responsive
```css
@media (max-width: 768px) {
  .hero h1 { font-size: 2.5rem; }
  .services-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  /* etc. */
}
```

---

## Required HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Business Name] | [Tagline]</title>
  <meta name="description" content="[Business description for SEO]">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
  
  <!-- AOS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  
  <style>
    /* All CSS here */
  </style>
</head>
<body>
  <header>
    <!-- Fixed header with backdrop blur -->
  </header>
  
  <section class="hero">
    <!-- Full-width hero with animation -->
  </section>
  
  <section class="services" data-aos="fade-up">
    <!-- Services grid -->
  </section>
  
  <section class="about" data-aos="fade-up">
    <!-- About/trust section -->
  </section>
  
  <section class="cta" data-aos="fade-up">
    <!-- Call to action -->
  </section>
  
  <footer>
    <!-- Contact info, copyright -->
  </footer>
  
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 800, once: true });
  </script>
</body>
</html>
```

---

## Required Elements

### Hero Section
- [ ] Full-width background image (Unsplash)
- [ ] Gradient or dark overlay for text readability
- [ ] Business name as H1
- [ ] Tagline or value proposition
- [ ] Primary CTA button (usually "Call Now" or "Get Quote")
- [ ] Phone number (click-to-call on mobile)
- [ ] Entry animation (fadeInUp or similar)

### Header
- [ ] Fixed position
- [ ] Backdrop blur effect
- [ ] Logo/business name
- [ ] Navigation links (anchor to sections)
- [ ] Phone number or CTA button
- [ ] Mobile-responsive (hamburger or simplified)

### Services Section
- [ ] Clear heading
- [ ] Grid or list of services
- [ ] Icons or images for each service
- [ ] Hover effects on cards
- [ ] AOS scroll animation

### Trust/About Section
- [ ] Why choose this business
- [ ] Years of experience, certifications, guarantees
- [ ] Owner photo optional
- [ ] Stats or trust badges

### CTA Section
- [ ] Strong call to action
- [ ] Phone number prominent
- [ ] Contact form optional
- [ ] Contrasting background color

### Footer
- [ ] Business name
- [ ] Phone number (click-to-call)
- [ ] Email
- [ ] Address/service area
- [ ] Copyright year

---

## Image Guidelines

### Unsplash URLs
Use direct Unsplash URLs:
```html
<img src="https://images.unsplash.com/photo-XXXXX?w=1200&q=80" alt="Description">
```

Or for backgrounds:
```css
background-image: url('https://images.unsplash.com/photo-XXXXX?w=1920&q=80');
```

### Image Search Terms
- Always use industry-specific search terms
- Prefer action shots over stock-looking poses
- Match the business vibe (local, professional, friendly, etc.)

---

## Anti-Slop Checklist

Before delivering, verify:

- [ ] NO Inter, Roboto, or Arial fonts
- [ ] NO purple/blue generic gradients
- [ ] NO "Your [X], Our Passion" taglines
- [ ] NO emoji in headings
- [ ] NO placeholder text ("Lorem ipsum")
- [ ] NO generic stock photo feel
- [ ] DOES have industry-specific colors
- [ ] DOES have industry-specific fonts
- [ ] DOES have real-sounding copy
- [ ] DOES have all animations working
- [ ] DOES have click-to-call phone links
- [ ] DOES work on mobile

---

## Quality Levels

### Minimum (Must Have)
- AOS animations on sections
- Backdrop blur header
- Hover effects on buttons
- Mobile responsive
- Industry colors/fonts

### Good (Should Have)
- Custom keyframe animations
- Staggered AOS delays
- Premium card hover effects
- Smooth scroll
- Real Unsplash images

### Excellent (Aim For)
- Unique layout for industry
- Creative section transitions
- Before/after or gallery features
- Interactive elements
- Micro-interactions on hover
