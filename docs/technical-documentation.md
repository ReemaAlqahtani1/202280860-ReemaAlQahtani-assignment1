# Technical Documentation

**Assignment 1 -- Personal Portfolio Website**

------------------------------------------------------------------------

## Overview

This project is a responsive personal portfolio website built using:

-   HTML5\
-   CSS3\
-   Vanilla JavaScript

The goal of the project is to demonstrate foundational web development
skills including semantic structure, responsive design, and basic
interactivity.

------------------------------------------------------------------------

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
    │           ├── profile-placeholderpng
    │           ├── project-placeholder-1.png
    │           └── project-placeholder-2.png
    ├── docs/
    │     ├── ai-usage-report.md
    │     └── technical-documentation.md
    └── .gitignore

------------------------------------------------------------------------

## HTML Architecture

The website uses semantic HTML elements:

-   `<header>` -- Navigation bar\
-   `<main>` -- Main content\
-   `<section>` -- About, Projects, Contact\
-   `<article>` -- Project cards\
-   `<form>` -- Contact form\
-   `<footer>` -- Footer

### Main Sections

### 1. About Section

-   Dynamic greeting message
-   Short introduction
-   Profile image

### 2. Projects Section

-   Two project cards
-   Each card includes:
    -   Image
    -   Title
    -   Description
    -   Links (Demo & GitHub)

### 3. Contact Section

-   Name field
-   Email field
-   Message textarea
-   Submit button
-   Status message

------------------------------------------------------------------------

## CSS Implementation

### Styling Strategy

-   CSS variables defined in `:root`
-   Theme switching using `[data-theme="light"]`
-   Flexbox for navigation layout
-   CSS Grid for hero and project cards
-   Media queries for responsiveness

### Responsive Breakpoints

  Screen Size   Behavior
  ------------- ---------------------------------
  ≤ 900px       Hero and cards stack vertically
  ≤ 720px       Navigation becomes collapsible

------------------------------------------------------------------------

## JavaScript Features

### DOM Selection

A helper function simplifies querying elements:

``` js
const $ = (sel) => document.querySelector(sel);
```

------------------------------------------------------------------------

### Dynamic Footer Year

Automatically updates the current year:

``` js
new Date().getFullYear();
```

------------------------------------------------------------------------

### Time-Based Greeting

Displays a greeting based on the current time:

-   Morning
-   Afternoon
-   Evening

------------------------------------------------------------------------

### Theme Toggle

-   Switches between light and dark modes
-   Stores user preference using `localStorage`
-   Restores theme on reload

------------------------------------------------------------------------

### Mobile Navigation

-   Uses `classList.toggle()` for menu visibility
-   Updates `aria-expanded` attribute
-   Closes menu when a link is clicked

------------------------------------------------------------------------

### Contact Form Validation

-   Prevents default submission
-   Checks required fields
-   Validates email format using regex
-   Displays feedback message
-   Resets form on success

------------------------------------------------------------------------

## Accessibility Features

-   `aria-expanded` for navigation toggle
-   `aria-live="polite"` for form feedback
-   Proper `<label>` and input associations
-   Skip link for keyboard navigation

------------------------------------------------------------------------

## Browser Testing

Tested on:

-   Google Chrome
-   Safari
-   Microsoft Edge

No major issues detected.

------------------------------------------------------------------------

## Future Improvements

-   Backend integration for form submission
-   Improved animations
-   Dynamic project loading
-   Deployment via GitHub Pages

------------------------------------------------------------------------

## Summary

This project demonstrates:

-   Clean semantic HTML
-   Responsive CSS design
-   JavaScript interactivity
-   Structured file organization
-   Responsible AI-assisted development

The implementation prioritizes clarity, responsiveness, and
maintainability.
