# Design Specification (DESIGN.md)
## Vision & Principles

The CloudOver website must convey professionalism, stability, and innovation. The design principles are rooted in minimalism, clarity, and trust.

**Core Principles:**
1.  **Clarity First:** Information hierarchy must be immediately obvious. Less is more.
2.  **Trustworthy Aesthetic:** Use a professional palette that inspires confidence (deep blues, clean whites/grays).
3.  **Performance Driven:** Visual complexity must not compromise loading speed or Core Web Vitals scores.

## Accessibility Rules (WCAG 2.1 AA Compliance)

The website is strictly required to meet WCAG 2.1 Level AA standards. All components must adhere to:

*   **Color Contrast:** Text and interactive elements must maintain a contrast ratio of at least 4.5:1 against their background.
*   **Keyboard Navigability:** All interactive elements (buttons, links, forms) must be fully navigable using only the keyboard (Tab/Enter). Focus states must be clearly visible.
*   **Semantic HTML:** Use correct semantic tags (`<header>`, `<nav>`, `<h1>` through `<h6>`, etc.) to aid screen readers and SEO crawlers.
*   **ARIA Attributes:** Use ARIA roles and attributes judiciously for complex UI components (e.g., modals, tabs).

## Visual Identity Guidelines

*   **Color Palette:** Primary Blue (`#0056b3`), Secondary Accent (Light Teal, `#28a745`), Neutral Gray Scale.
*   **Typography:** A clean, professional sans-serif typeface (e.g., Inter or system font stack) for maximum readability on all screen sizes.
*   **Imagery:** High-quality, abstract, and modern photography; minimal reliance on stock clichés.

## Component Posture (Atomic Design Approach)

Components will follow an Atomic Design structure to ensure consistency and reusability:

1.  **Atoms:** Basic elements (Buttons, Input Fields, Icons).
2.  **Molecules:** Groups of atoms (Search Bar, Navigation Link Group).
3.  **Organisms:** Complex components (Header/Navbar, Hero Section).
4.  **Templates:** Page layouts (defines structure without specific content).
5.  **Pages:** Specific instances of templates populated with final content (Home Page, Contact Page).

This modular approach ensures that a change to an Atom propagates correctly across the entire application.