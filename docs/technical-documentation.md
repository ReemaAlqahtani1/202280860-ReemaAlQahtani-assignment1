# Technical Documentation

**Assignment 1 – Personal Portfolio Website**

---

## Overview

This project is a responsive personal portfolio website built using:

- HTML5  
- CSS3  
- Vanilla JavaScript  

The purpose of the project is to demonstrate foundational web development skills including semantic structure, responsive design, interactivity, accessibility, and structured file organization.

The final version includes dynamic sections, theme switching, a skills filtering system, and improved UI styling.

---

## Project Structure

    assignment-1/
    │
    ├── README.md
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   └── images/
    │           ├── profile-placeholder.png
    │           ├── project-placeholder-1.png
    │           └── project-placeholder-2.png
    ├── docs/
    │     ├── ai-usage-report.md
    │     └── technical-documentation.md
    └── .gitignore

---

## HTML Architecture

The website uses semantic HTML elements for clarity and structure:

- `<header>` – Navigation bar  
- `<main>` – Main content container  
- `<section>` – About, Skills, Projects, Contact  
- `<article>` – Project cards  
- `<form>` – Contact form  
- `<footer>` – Footer  

---

## Main Sections

### 1. About Section

- Dynamic greeting based on time of day  
- Professional introduction  
- Profile image  
- Call-to-action buttons  

---

### 2. Skills Section (Newly Added)

A dynamic skills section was implemented with filtering functionality.

Features:

- Categorized skills (Frontend, Backend, Tools)
- Filter buttons using `data-filter`
- JavaScript-based dynamic rendering
- Active state highlighting
- Keyboard accessibility support (Enter / Space)
- Glass-style segmented filter buttons

Skills are stored in a JavaScript array:

```js
const SKILLS = [
  { name: "HTML", level: "Good", category: "frontend" }
];
```

Skills are dynamically rendered into the DOM using template strings.

---

### 3. Projects Section

- Two structured project cards:
  - Pantrix: Smart Recipe Recommendation
  - Horse Riding Management System
- Each card includes:
  - Image
  - Title
  - Description
  - Links (Demo & GitHub)

Images maintain consistent proportions using `aspect-ratio` and `object-fit` to ensure responsiveness across devices.

---

### 4. Contact Section

- Name field
- Email field
- Message textarea (fixed size, no resize)
- Submit button
- Dynamic status feedback message

---

## CSS Implementation

### Styling Strategy

- CSS variables defined in `:root`
- Light/Dark theme using `[data-theme="light"]`
- Glassmorphism styling for filter buttons
- Flexbox for layout alignment
- CSS Grid for hero and project layout
- Media queries for responsiveness

### Image Responsiveness

Project images use:

- `aspect-ratio`
- `object-fit`
- Responsive grid behavior

This ensures consistent layout across desktop, tablet, and mobile devices.

---

## JavaScript Features

### 1. DOM Helper Function

```js
const $ = (sel) => document.querySelector(sel);
```

Simplifies element selection.

---

### 2. Dynamic Footer Year

Automatically updates the footer year:

```js
new Date().getFullYear();
```

---

### 3. Time-Based Greeting

Displays:

- Good morning
- Good afternoon
- Good evening

Based on the current system time.

---

### 4. Theme Toggle

- Switches between light and dark mode
- Stores preference in `localStorage`
- Restores theme on reload
- Updates theme icon dynamically

---

### 5. Mobile Navigation

- Uses `classList.toggle()`
- Updates `aria-expanded`
- Closes when a link is clicked

---

### 6. Contact Form Validation

- Prevents default submission
- Checks required fields
- Validates email using regex
- Displays feedback
- Resets form on success

---

### 7. Skills Filter System 

- Uses event delegation
- Filters skills based on selected category
- Dynamically updates the DOM
- Adds keyboard accessibility
- Includes safe rendering using `escapeHtml()`

```js
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
```

This improves security and prevents unintended HTML injection.

---

## Accessibility Features

- `aria-expanded` for mobile navigation
- `aria-live="polite"` for form feedback
- Proper `<label>` associations
- Skip link for keyboard users
- Keyboard support for skill filters

---

## Browser Testing

Tested on:

- Google Chrome
- Safari
- Microsoft Edge

Responsive behavior verified using browser DevTools.

---

## Future Improvements

- Backend integration for contact form
- Add animations and transitions
- Expand projects section dynamically
- Add skill proficiency indicators (progress bars)
- Deploy using GitHub Pages

---

## Summary

This project demonstrates:

- Semantic HTML structure
- Responsive and adaptive CSS design
- Interactive JavaScript functionality
- Dynamic content rendering
- Accessibility considerations
- Structured documentation

The implementation focuses on clarity, maintainability, responsiveness, and professional presentation.
