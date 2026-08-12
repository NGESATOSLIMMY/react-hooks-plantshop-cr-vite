# Personal Project Showcase App

A responsive, single-page React application that lets a freelance developer, designer, or creative agency showcase their past work. Visitors can browse projects, search/filter them live, view full details on a dedicated page, and the owner can dynamically add new projects — including an uploaded image — right from the browser.

Built as a summative lab project demonstrating core React concepts: component hierarchy, state management, event handling, controlled forms, and client-side routing.

## Features

- **Landing page** displaying a list of projects (title, description, thumbnail image)
- **Add Project form** — dynamically add new projects with a title, description, and an uploaded image
- **Live search** — filters the project list as you type, with an empty-state message when nothing matches
- **Project detail view** — click any project card to navigate to its own page via client-side routing
- **Persistent data** — added projects are saved to `localStorage`, so they survive a page refresh
- **Responsive design** — layout adapts down to mobile-width screens, inspired by the provided mock-up

## Tech Stack

- [React](https://react.dev/) (functional components + hooks)
- [Vite](https://vite.dev/) — build tool and dev server
- [React Router](https://reactrouter.com/) — client-side routing
- Plain CSS (no framework)

## Project Structure

```
src/
├── main.jsx                    # App entry point, wraps App in BrowserRouter
├── App.jsx                     # Owns shared state (projects, search term), defines routes
├── App.css                     # All app styling
├── data/
│   └── projects.js             # Starter/sample project data
└── components/
    ├── Header.jsx               # App title/banner
    ├── ProjectForm.jsx          # Controlled form to add a new project (incl. image upload)
    ├── SearchBar.jsx            # Controlled search input
    ├── ProjectList.jsx          # Renders the (filtered) list of ProjectCards
    ├── ProjectCard.jsx          # Single project preview, links to its detail page
    └── ProjectDetail.jsx        # Full detail view for one project, read via URL param
```

## Component Hierarchy

```
App (owns: projects, searchTerm)
 ├── Header
 └── Routes
      ├── "/"              → ProjectForm, SearchBar, ProjectList → ProjectCard (×n)
      └── "/project/:id"   → ProjectDetail
```

State is lifted up to `App` and passed down as props; child components communicate changes back up via callback functions (`onAddProject`, `onSearchChange`) — a standard "state down, events up" React data flow.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+) and npm installed

### Installation

```bash
git clone <your-repo-url>
cd project-showcase
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Usage

- **Browse projects** on the landing page.
- **Search** using the search bar — the list filters live as you type.
- **View details** by clicking any project card.
- **Add a project** by filling out the Title, Description, and optionally uploading an Image, then clicking Add. The new project appears immediately in the list and persists across page refreshes.

## Known Limitations

- Uploaded images are stored as base64 data URLs in `localStorage`, which has a ~5MB storage limit — fine for a handful of small images, but not meant for large media libraries.
- There is no backend/database — all data lives in the browser's `localStorage`, scoped to a single browser/device.

## Future Improvements

- Edit/delete existing projects
- Backend API + database for multi-device persistence
- Tags/categories and filter-by-tag
- Automated tests with Jest and React Testing Library

## Author

EMMANUEL NGESA