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
├── resume.html       # Printable A4 Resume Page
├── README.md         # Documentation
├── styles/
│   └── main.css      # Custom styles stylesheet
├── js/
│   └── menu.js       # Menu drawer logic & contact alert
└── images/
    ├── profile.jpg   # Developer profile photo
    ├── organxcell.png # OrganXcell project dashboard preview
    ├── evolveaura.png # EvolveAura app mockup preview
    ├── sensor.jpg    # Sensor Analysis System preview
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

### Option 1: Netlify (Recommended)
This website can be easily deployed to **Netlify** using any of the following methods:

- **GitHub Integration (Auto-redeploy on Push)**:
  1. Log in to the [Netlify App Dashboard](https://app.netlify.com/).
  2. Click **Add new site** -> **Import from an existing project**.
  3. Choose **GitHub** and authorize access.
  4. Select the `Task1` repository.
  5. Leave the build settings blank (Build Command: empty, Publish Directory: `.` or root).
  6. Click **Deploy Site**. Every time you run `git push`, Netlify will automatically build and publish your updates!

- **Netlify Drop (Zero Setup Drag & Drop)**:
  1. Visit [Netlify Drop](https://app.netlify.com/drop).
  2. Drag and drop the entire `E:\portfolio-site` folder directly into the browser upload box.

- **Netlify CLI (Command Line)**:
  1. Log in via terminal: `npx netlify login`
  2. Initialize connection: `npx netlify init` (create or link a site)
  3. Deploy to production: `npx netlify deploy --prod` (specify `.` as the publish directory)

### Option 2: GitHub Pages
To host using GitHub Pages, navigate to your repository at `https://github.com/sundhip/Task1` on GitHub:
1. Go to **Settings** -> **Pages**.
2. Under "Build and deployment", set the source to **Deploy from a branch**.
3. Select the `main` branch and folder `/ (root)`.
4. Click **Save**. Your site will be published at `https://sundhip.github.io/Task1/`.

---

## Author

**Sundhip**
- B.Tech CSE Student, Vellore Institute of Technology, Chennai.
- GitHub: [github.com/sundhip](https://github.com/sundhip)
