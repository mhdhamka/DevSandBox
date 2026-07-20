# DevSandBox

An interactive developer portfolio showcasing projects with live demos, experimentation space, and interactive code examples.

## 🎯 Vision

DevSandBox is a **modern, interactive portfolio** built for developers who want to showcase their work in action. Rather than static project cards, every project includes live demos, code snippets, and interactive features that let visitors explore your work directly.

## 📚 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

## ✨ Features

### Phase 1 (MVP)
- [ ] **Hero Section** — Eye-catching landing with animated intro
- [ ] **Projects Showcase** — Project cards with live demo links, GitHub links, tech stack badges
- [ ] **About Section** — Professional bio, skills, GitHub stats integration
- [ ] **Navigation** — Smooth scrolling, responsive design
- [ ] **Dark Mode Toggle** — Light/dark theme support

### Phase 2 (Enhanced)
- [ ] **Interactive Code Viewer** — Display code snippets with syntax highlighting
- [ ] **Live Code Sandbox** — Embedded CodeSandbox/StackBlitz iframes for select projects
- [ ] **Blog/TIL Section** — Short-form dev insights, tutorials, learnings
- [ ] **Contact Form** — Email integration for inquiries

### Phase 3 (Advanced)
- [ ] **Project Experiments** — Space to showcase side projects, prototypes, ideas
- [ ] **GitHub Activity Dashboard** — Contribution calendar, stats, recent activity
- [ ] **Resume/PDF Download** — Generate resume using `@react-pdf/renderer`
- [ ] **Analytics** — Track page views, project clicks, time spent

## 📂 Project Structure

```
DevSandBox/
├── src/
│   ├── components/
│   │   ├── Hero.jsx                 # Landing section with typewriter effect
│   │   ├── Navigation.jsx           # Navbar with smooth scroll links
│   │   ├── ProjectCard.jsx          # Reusable project display component
│   │   ├── Projects.jsx             # Projects section container
│   │   ├── About.jsx                # About & skills section
│   │   ├── Contact.jsx              # Contact form
│   │   ├── ThemeToggle.jsx          # Dark/light mode switcher
│   │   └── Footer.jsx               # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx                 # Main landing page
│   │   ├── ProjectDetail.jsx        # Individual project page with code
│   │   └── Experiments.jsx          # Sandbox experiments page (Phase 3)
│   ├── styles/
│   │   ├── index.css                # Global styles
│   │   ├── Hero.css                 # Hero animations
│   │   └── themes.css               # Dark/light mode variables
│   ├── data/
│   │   └── projects.js              # Project data, descriptions, links
│   ├── utils/
│   │   ├── github.js                # GitHub API integration
│   │   └── theme.js                 # Theme helpers
│   ├── App.jsx                      # Main app component
│   └── index.js                     # Entry point
├── public/
│   ├── index.html                   # HTML template
│   └── favicon.ico                  # Site icon
├── Images/                          # Project screenshots, hero images
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mhdhamka/DevSandBox.git
cd DevSandBox

# Install dependencies
npm install

# Start development server
npm start
```

The app runs at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## 🎯 Roadmap

### Week 1-2: Foundation
- [x] Initialize React app structure
- [ ] Create Hero component with typewriter effect
- [ ] Build Navigation bar
- [ ] Set up dark/light theme toggle
- [ ] Create reusable ProjectCard component

### Week 3-4: Content & Features
- [ ] Build About section with skills grid
- [ ] Integrate GitHub calendar (already have dependency)
- [ ] Create Projects section with data file
- [ ] Add Contact form
- [ ] Optimize for mobile responsiveness

### Week 5+: Polish & Enhancement
- [ ] Add page animations (parallax, fade-ins)
- [ ] Implement live code viewers for projects
- [ ] Deploy to GitHub Pages or Vercel
- [ ] Add analytics
- [ ] Create Experiments section for prototypes

## 🛠️ Tech Stack

- **Frontend:** React 17, React Router DOM
- **Styling:** Bootstrap 5, custom CSS
- **Animations:** Typewriter Effect, React Parallax Tilt, react-tsparticles
- **Icons:** React Icons
- **PDF Export:** @react-pdf/renderer
- **HTTP Client:** Axios
- **Testing:** Jest, React Testing Library

## 💡 Contributing

Have ideas? Found a bug? Open an issue or submit a PR!

## 📄 License

MIT License — feel free to use this as inspiration for your own portfolio.

---

**Built with ❤️ by [@mhdhamka](https://github.com/mhdhamka)**
