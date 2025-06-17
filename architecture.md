# Project Architecture: WAPH Individual Project 1

This document outlines the **file and folder structure**, **purpose of each component**, and **state/service management** for the Professional Profile Website hosted on GitHub Pages.

---

## 📁 Folder Structure

```
waph-profile/
├── index.html              # Main personal profile page
├── waph.html               # WAPH course description and projects
├── css/
│   └── style.css           # Custom styles (optional, overrides Bootstrap)
├── js/
│   ├── clocks.js           # Digital and analog clock scripts
│   ├── jokeapi.js          # Fetch and display JokeAPI content
│   ├── xkcd.js             # Fetch and display XKCD comics
│   ├── toggle.js           # Show/hide email logic
│   └── cookies.js          # Visitor cookie tracking logic
├── images/
│   ├── headshot.jpg        # 150x150 headshot image
│   └── favicon.ico         # Optional favicon
├── resume/
│   └── resume.pdf          # Downloadable resume file
├── assets/
│   └── [optional]          # Any other fonts/images/graphics
├── README.md               # Project overview (for GitHub repo)
└── architecture.md         # This file
```

---

## 🧩 Purpose of Each Part

### `index.html`

- Homepage containing:
  - Name, photo, resume
  - Contact info, experience, skills
  - JavaScript features (clocks, jokes, cookies)
  - Link to `waph.html`

### `waph.html`

- Overview of WAPH course
- Summary of labs, hackathons, and learning

### `css/style.css`

- Custom overrides to the Bootstrap theme (if needed)

### `js/` folder

| File         | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| `clocks.js`  | Renders live digital & analog clocks                   |
| `jokeapi.js` | Fetches and displays new joke every minute             |
| `xkcd.js`    | Fetches and displays XKCD comic                        |
| `toggle.js`  | Enables show/hide functionality for email              |
| `cookies.js` | Manages "first visit" vs. "return visit" using cookies |

### `images/`

- Stores all static image assets including headshot

### `resume/`

- Folder to hold downloadable PDF resume

---

## 🧠 State and Data Flow

### 🔹 Local State

- Clock, email toggle, and API data are updated dynamically via DOM manipulation in JavaScript.

### 🔹 Persistent State

- Visitor tracking via **JavaScript cookies**:
  - Stores `lastVisit` timestamp
  - Read on load and conditionally renders welcome message

### 🔹 External Services

| Service                                       | Role                 |
| --------------------------------------------- | -------------------- |
| **JokeAPI** (`https://v2.jokeapi.dev`)        | Fetches JSON jokes   |
| **XKCD API** (`https://xkcd.com/info.0.json`) | Fetches latest comic |
| **Flag Counter / Google Analytics**           | Tracks page visits   |

---

## 🔌 How Services Connect

### API Calls

- JokeAPI and XKCD are accessed via `fetch()` or jQuery's `$.get()`
- Responses are parsed from JSON and injected into the DOM

### Cookies

- `document.cookie` is used to store and read timestamps
- JS logic in `cookies.js` decides whether to display a first-time or return-visit message

### Tracker Embed

- HTML snippet (script/image) from Flag Counter or Google Analytics is embedded in `index.html`

---

## ✅ Deployment

- Hosted via **GitHub Pages**
- Public repo named: `pratysri.github.io`
- Deployment URL: `https://pratysri.github.io`
