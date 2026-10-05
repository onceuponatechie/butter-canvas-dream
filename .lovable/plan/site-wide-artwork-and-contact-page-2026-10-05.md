# Site-wide artwork and contact page

## What will change
- Extend the locally bundled hero artwork behind the homepage content, using soft overlays so every section remains readable and each card keeps its contrast.
- Remove the extra full-width black footer surround so only the rounded black footer panel remains.
- Add a premium `/contact` page with Essy’s portrait, availability and project-fit details, a polished contact form, and direct email access.
- Point the header “Say hi” and footer “Book a coffee” actions to `/contact`, while preserving the existing single-page navigation elsewhere.

## Technical details
- Reuse the existing local `hero-cover.webp`; no external image dependency.
- Keep contact submission lightweight by opening a pre-addressed email with the visitor’s completed details, avoiding an unrequested backend.
- Add unique contact-page metadata and update the route architecture rule to allow this single intentional secondary page.

## Verification
- Check homepage and contact page at desktop and mobile widths for image coverage, text contrast, footer edges, navigation, form behavior, overflow, and runtime errors.
