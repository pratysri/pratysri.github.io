# MVP Development Tasks for WAPH Profile Website

Each task below is atomic, focused, and testable. This list follows the project architecture in `architecture.md`.

---

## 🏗️ Setup

### Task 1: Create GitHub Repository
- **Start:** Log in to GitHub
- **Action:** Create public repo `your-username.github.io`
- **End:** Repo exists and is accessible at `https://your-username.github.io`

### Task 2: Clone Repository Locally
- **Start:** Open terminal
- **Action:** `git clone` the repo to local development environment
- **End:** Local folder `your-username.github.io/` exists

---

## 🧱 HTML Structure

### Task 3: Create `index.html` Skeleton
- **Start:** Inside the repo folder
- **Action:** Add `index.html` with basic HTML5 structure
- **End:** Page loads with a visible "Hello World" heading

### Task 4: Create `waph.html` Skeleton
- **Start:** In the same folder
- **Action:** Add second HTML page for WAPH course overview
- **End:** Page shows title “WAPH Course Page”

---

## 🎨 Styling & Layout

### Task 5: Add Bootstrap via CDN
- **Start:** Edit `index.html`
- **Action:** Link Bootstrap CSS and JS in `<head>` and `<body>`
- **End:** Bootstrap-styled elements render correctly

### Task 6: Apply Theme (e.g., "Simply Me")
- **Start:** Copy theme HTML into `index.html`
- **Action:** Customize layout to include header, sections, footer
- **End:** Page looks like a personal site with dummy content

---

## 🧑‍💼 Personal Profile Content

### Task 7: Add Personal Info Section
- **Start:** Edit `<section id="about">`
- **Action:** Insert name, headshot, contact info
- **End:** Visible on page with photo properly sized (150x150)

### Task 8: Add Resume Section
- **Start:** Create `resume/` folder
- **Action:** Add a downloadable `resume.pdf` and link it in HTML
- **End:** Clicking the link downloads your resume

### Task 9: Add Education, Experience, Skills
- **Start:** Use Bootstrap rows/columns or lists
- **Action:** Add your background info with headings
- **End:** Clearly separated sections appear on the site

---

## 🔗 Link to Course Page

### Task 10: Add Navigation to `waph.html`
- **Start:** Edit nav/footer of `index.html`
- **Action:** Add anchor link to `waph.html`
- **End:** Clicking the link loads the course page

---

## 📈 Tracking

### Task 11: Embed Flag Counter
- **Start:** Go to [flagcounter.com](https://flagcounter.com/)
- **Action:** Generate HTML and paste in `index.html` footer
- **End:** Visitor count image appears

---

## ⏱️ JavaScript Features

### Task 12: Digital Clock
- **Start:** Create `js/clocks.js`
- **Action:** Implement digital clock using `setInterval()`
- **End:** Live digital time updates every second

### Task 13: Analog Clock
- **Start:** In same file or new SVG/canvas element
- **Action:** Render analog clock using JS logic
- **End:** Hands move correctly based on current time

### Task 14: Show/Hide Email
- **Start:** Create `js/toggle.js`
- **Action:** Toggle div visibility on button click using jQuery
- **End:** Email appears/disappears on click

### Task 15: Add Joke API Integration
- **Start:** Create `js/jokeapi.js`
- **Action:** Fetch a joke every 60 seconds, insert into DOM
- **End:** Joke updates in-place without reloading

### Task 16: Add XKCD Comic API
- **Start:** Create `js/xkcd.js`
- **Action:** Fetch latest comic and show it with alt text
- **End:** Comic image visible with correct caption

---

## 🍪 Cookie Handling

### Task 17: Visitor Cookie Logic
- **Start:** Create `js/cookies.js`
- **Action:** On load, check and set cookie for last visit
- **End:** First-time or last-visit message shows accordingly

---

## 🧪 Finalization

### Task 18: Test Full Site Locally
- **Start:** Open site in browser
- **Action:** Click every link and test every feature
- **End:** All features work as expected

### Task 19: Push to GitHub
- **Start:** Use `git add`, `commit`, `push`
- **Action:** Deploy final site to GitHub Pages
- **End:** Page live at `https://your-username.github.io`

### Task 20: Export PDFs for Submission
- **Start:** Open browser print dialog
- **Action:** Print `index.html`, `waph.html`, and source code to PDF
- **End:** Three PDF files ready for submission

