# Astrologer Aslam Khan Ji – static website

Redesigned, optimized drop-in replacement for the original HTML site.

- Same sections in the same order, same text, same phone/WhatsApp links.
- Same image names and paths (`foody2/img/01.jpg`, `02.jpg`, `03.jpg`, `001.jpg`, `002.jpg`, `003.jpg`, `gif.gif`, `contact.gif`, `product-*.jpg`, `blog-*.jpg`, …). To change a photo, overwrite the file with the same name.
- Hero section is an auto-playing slider using `01.jpg`, `02.jpg`, `03.jpg` (arrows, dots, swipe, pauses on hover).

## Upload
Upload `index.html` and the `foody2/` folder (`css/style.css`, `js/main.js`, `img/`). The old `jquery-3.4.1.min.js`, `npm/`, `ajax/` and `foody2/lib/` folders are no longer needed.

## What was optimized
- Removed jQuery, Bootstrap, Owl Carousel, WOW.js, Font Awesome and Bootstrap Icons (~400 KB of CSS/JS/fonts) – replaced with one small CSS file, ~3 KB of vanilla JS and inline SVG icons.
- Product, blog, testimonial, icon and logo images recompressed (same names, same dimensions): image total ~3.8 MB → ~1.9 MB. Unused `bg.png` (777 KB) and `gov*.jpg` dropped.
- `width`/`height` on every image (no layout shift), lazy loading below the fold, first slide preloaded.
- Non-blocking Google Fonts, meta description, Open Graph tags and JSON-LD schema.
- Deprecated `<marquee>` replaced with a CSS ticker; respects “reduce motion”.
