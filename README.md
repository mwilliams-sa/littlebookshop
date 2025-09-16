# littlebookshop

**Theme & Purpose**

The Little Bookshop is a simple single-page site designed to showcase a curated collection of books.
The theme uses a soft lilac accent to create a warm, modern, and welcoming feel.

Purpose:

Provide visitors with a small but interactive online bookstore demo.

Showcase featured books, allow browsing of details, and encourage newsletter sign-ups.

Practice building a Vue + Vue Router app without bundlers, deployed easily via GitHub Pages.

**Structure of the Site**

Header & Navigation
Persistent at the top with links to Home, About, and Contact.

Home Page

Intro blurb about the shop

Search bar to filter books by title/author

Grid of featured book cards with covers, prices, and links to details

Book Details Page

Larger cover, title, author, price, and description

Links back to browse more or contact

About Page
Short description of the bookshop.

Contact Page
Contact details for visitors.

Newsletter Modal
Pop-up inviting users to subscribe.

All views are powered by Vue Router’s hash mode, which works smoothly on GitHub Pages.

**Challenges & Solutions**

Import errors (import from "vue")
Problem: Browser could not resolve bare module specifiers.
Solution: Switched to CDN-hosted Vue and Vue Router builds (unpkg.com), removing the need for a bundler.

File complexity
Problem: Multiple .js component files led to import path issues.
Solution: Refactored to a single index.html with all components inline, simpler for GitHub Pages deployment.

Styling & branding
Problem: Needed a consistent theme.
Solution: Applied a lilac palette with reusable CSS variables for colors, buttons, and card layouts.

Newsletter popup persistence
Problem: Popup reappearing every reload.
Solution: Used localStorage to remember dismissal or sign-up.

**Accessibility & Semantic HTML**

Used semantic elements (<header>, <nav>, <main>, <section>, <h1>–<h3>, <p>).
All interactive elements (<a>, <button>, <input>, <form>) include accessible labels.
Provided alt text for all book cover images.
Added ARIA roles/labels to the newsletter modal (role="dialog", aria-modal="true", aria-labelledby).
Ensured keyboard accessibility:
Search bar shortcut (press /)
Focus states styled via CSS
High-contrast lilac accent ensures text is legible on backgrounds.
