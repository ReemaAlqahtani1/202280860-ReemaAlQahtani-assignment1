// =========================
// Helper selector function
// Shorter way to use querySelector
// =========================
const $ = (sel) => document.querySelector(sel);


/* =========================
   DOM Elements References
========================= */
const themeBtn = $("#themeBtn");        // Theme toggle button
const greetingEl = $("#greeting");      // Dynamic greeting text
const yearEl = $("#year");              // Footer year
const form = $("#contactForm");         // Contact form
const statusEl = $("#formStatus");      // Form status message
const navToggle = $(".nav-toggle");     // Mobile menu button
const navMenu = $("#navMenu");          // Navigation menu container


/* =========================
   Skills Data (Static Data Source)
   This array contains all skills displayed
   Each skill has:
   - name
   - level
   - category (used for filtering)
========================= */
const SKILLS = [
  { name: "HTML", level: "Good", category: "frontend" },
  { name: "CSS", level: "Good", category: "frontend" },
  { name: "JavaScript", level: "Good", category: "frontend" },

  { name: "SQL", level: "Good", category: "backend" },
  { name: "Java", level: "Good", category: "backend" },
  { name: "Python", level: "Good", category: "backend" },
  { name: "C", level: "Good", category: "backend" },

  { name: "Git", level: "Good", category: "tools" },
  { name: "GitHub", level: "Good", category: "tools" },
  { name: "IntelliJ IDEA", level: "Good", category: "tools" },
  { name: "MySQL Workbench", level: "Good", category: "tools" },  
  { name: "Streamlit", level: "Good", category: "tools" },
];


/* =========================
   Initialize After DOM Loaded
   Ensures elements exist before JS runs
========================= */
document.addEventListener("DOMContentLoaded", () => {

  // Set current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize dynamic greeting
  setGreeting();

  // Initialize saved theme
  initTheme();

  // Attach event listeners (only if elements exist)
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  if (navToggle) navToggle.addEventListener("click", toggleMobileNav);
  if (navMenu) navMenu.addEventListener("click", closeMobileNavOnLink);
  if (form) form.addEventListener("submit", handleContactSubmit);

  // Initialize skills filtering system
  setupSkillsFilter();
});


/* =========================
   Dynamic Greeting Based on Time
========================= */
function setGreeting() {
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let msg = "Hello!";

  if (hour < 12) msg = "Good morning 👋";
  else if (hour < 18) msg = "Good afternoon 👋";
  else msg = "Good evening 👋";

  greetingEl.textContent = msg;
}


/* =========================
   Theme Management
   Uses localStorage to save preference
========================= */
function initTheme() {
  const saved = localStorage.getItem("theme");

  // Apply saved theme if available
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }

  updateThemeIcon();
}

// Update icon depending on current theme
function updateThemeIcon() {
  if (!themeBtn) return;

  const current = document.documentElement.getAttribute("data-theme");
  themeBtn.textContent = current === "light" ? "🌙" : "☀️";
}

// Toggle between light and dark theme
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon();
}


/* =========================
   Mobile Navigation
   Handles opening & closing menu
========================= */
function toggleMobileNav() {
  if (!navMenu || !navToggle) return;

  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

// Close mobile menu when clicking a link
function closeMobileNavOnLink(e) {
  if (!navMenu || !navToggle) return;

  if (e.target.tagName === "A" && navMenu.classList.contains("is-open")) {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
}


/* =========================
   Contact Form Validation
   Frontend validation only
========================= */
function handleContactSubmit(e) {
  e.preventDefault();
  if (!statusEl) return;

  const name = $("#name")?.value.trim() || "";
  const email = $("#email")?.value.trim() || "";
  const message = $("#message")?.value.trim() || "";

  // Check required fields
  if (!name || !email || !message) {
    statusEl.textContent = "Please fill out all fields.";
    return;
  }

  // Basic email validation using regex
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    statusEl.textContent = "Please enter a valid email address.";
    return;
  }

  // Success message
  statusEl.textContent = `Thanks, ${name}! Your message is ready to be sent.`;
  form.reset();
}


/* =========================
   Skills Filtering System
   - Filters by category
   - Renders dynamically
   - Supports keyboard accessibility
========================= */
function setupSkillsFilter() {

  const filters = document.getElementById("skillsFilters");
  const list = document.getElementById("skillsList");

  if (!filters || !list) return;

  const buttons = Array.from(filters.querySelectorAll("button[data-filter]"));

  // Render skills based on selected filter
  const render = (filter) => {

    const items =
      filter === "all"
        ? SKILLS
        : SKILLS.filter((s) => s.category === filter);

    list.innerHTML = items
      .map(
        (s) => `
          <div class="skill-pill">
            <span class="skill-name">${escapeHtml(s.name)}</span>
            <span class="skill-level">${escapeHtml(s.level)}</span>
          </div>
        `
      )
      .join("");
  };

  // Update active button styling
  const setActive = (filter) => {
    buttons.forEach((b) =>
      b.classList.toggle("is-active", b.dataset.filter === filter)
    );
  };

  // Default filter (All)
  const defaultBtn =
    buttons.find((b) => b.classList.contains("is-active")) || buttons[0];

  const defaultFilter = defaultBtn?.dataset.filter || "all";
  setActive(defaultFilter);
  render(defaultFilter);

  // Click interaction
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;

    const filter = btn.dataset.filter;
    setActive(filter);
    render(filter);
  });

  // Keyboard accessibility (Enter / Space)
  filters.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;

    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;

    e.preventDefault();
    const filter = btn.dataset.filter;
    setActive(filter);
    render(filter);
  });
}


/* =========================
   Security Helper
   Escapes HTML to prevent injection
========================= */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}