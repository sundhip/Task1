# Sundhip Portfolio

## Overview

A professional, responsive 3-page developer portfolio website created for **Sundhip**, showcasing expertise in Artificial Intelligence, Robotics, and Full-Stack Development. This project is built as part of **Soft Nexis Internship Task 1** (Environment Setup & Static Website Deployment).

Live site url: https://sundhip.github.io/Task1/

---

## Features

- **Responsive Design**: Mobile-friendly navigation with custom CSS drawer menu (hamburger menu toggle). Responsive layout using CSS Grid (`repeat(auto-fit, minmax(300px, 1fr))`) and Flexbox.
- **Modern Dark Tech Theme**: Styled with a customized dark palette:
  - Background: `#0f172a`
  - Cards: `#1e293b`
  - Primary Accent: `#38bdf8`
  - Success Accent: `#22c55e`
  - Text: `#f8fafc`
- **Glassmorphism Effects**: Translucent sticky header bar with custom backdrop-filter blur.
- **Interactive Hover Effects**: Sleek button translates, glow effects on cards, and underlines on links.
- **Semantic HTML5 Elements**: Proper usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags for SEO and accessibility.
- **Dynamic Contact Form**: Form intercept using vanilla JavaScript displaying an interactive successful delivery popup notification.
- **Project Showcases**: Features details on three key projects:
  1. **OrganXcell**: Organ Matching & Transplant Management System (Django/Python).
  2. **EvolveAura**: Gamified Self Improvement Platform (React/Node.js/MongoDB).
  3. **Sensor Analysis**: Glass & Plastic Detection using Capacitive Sensors (Arduino/C++).

---

## Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Variables, Flexbox, Grid, Animations, Media Queries.
- **JavaScript (ES6)**: Dom manipulation, mobile drawer toggles, and form submission validation.
- **Git / GitHub Pages**: Version control workflow and cloud hosting.

---

## Folder Structure

```bash
portfolio-site/
├── index.html        # Home Page (Hero, Projects, Skills Preview)
├── about.html        # About Page (Education Timeline, Skills Categories, Achievements)
├── contact.html      # Contact Page (Contact form & Social Connect)
├── README.md         # Documentation
├── styles/
│   └── main.css      # Custom styles stylesheet
├── js/
│   └── menu.js       # Menu drawer logic & contact alert
└── images/
    ├── profile.jpg   # Developer profile photo
    ├── organxcell.png # OrganXcell project dashboard preview
    ├── evolveaura.png # EvolveAura app mockup preview
    └── vit.jpg       # VIT Chennai campus visual representation
```

---

## Installation & Local Execution

To run this project locally, simply clone the repository and open any of the HTML pages in your browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/sundhip/Task1.git
   ```
2. Navigate into the directory:
   ```bash
   cd Task1
   ```
3. Open `index.html` in your favorite web browser, or launch it using VS Code **Live Server** extension.

---

## Deployment

This website is hosted live on GitHub Pages. To deploy updates:

```bash
git add .
git commit -m "Deployment ready"
git push -u origin main
```

Configure GitHub Pages under:
`Settings` -> `Pages` -> Build and deployment -> branch: `main` -> folder: `/ (root)`.

---

## Author

**Sundhip**
- B.Tech CSE Student, Vellore Institute of Technology, Chennai.
- GitHub: [github.com/sundhip](https://github.com/sundhip)
