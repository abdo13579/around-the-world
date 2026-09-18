# 🌍 Around the World

A modern, responsive web application for exploring countries, capitals, regions, currencies, and languages across the globe. Built with **React 19**, **Vite**, **Tailwind CSS v4**.

---

## ✨ Features

- **🌐 Country Directory**: Browse countries worldwide with instant flag previews, population stats, regions, and capitals.
- **🔍 Real-Time Search**: Search for countries dynamically by name with immediate feedback.
- **🗺️ Region Filter**: Filter countries by continent (Africa, Asia, Europe, Oceania, or All Regions) using a styled custom dropdown powered by `react-select`.
- **📊 Comprehensive Country Details**: Dedicated detail pages (`/:countryName`) featuring:
  - Official Flag
  - Population (formatted with commas)
  - Region & Sub-region
  - Capital City
  - Top Level Domain (TLD)
  - Currencies
  - Spoken Languages
- **🌓 Light & Dark Theme**: Toggle between light and dark modes with persistent user preferences saved to `localStorage`.
- **⚡ Client-Side Caching**: Custom `useFetchData` hook caches API responses in `localStorage` to eliminate redundant network requests and ensure snappy transitions.
- **🎨 Responsive Layout**: Mobile-first grid adapting smoothly from small screens to multi-column desktop views.
- **🚫 User-Friendly Empty States**: Clean custom SVG illustrations when search queries yield no results, alongside a fallback 404 page for invalid routes.

---

## 📁 Project Structure

```text
around-the-world/
├── public/                 # Static public assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── CountryCard.jsx # Single country summary card with flag & info
│   │   ├── CountryList.jsx # Responsive grid rendering country cards
│   │   ├── EmptySearch.jsx # Graphic & message shown when no results match
│   │   ├── Header.jsx      # Top navigation bar containing logo & theme switch
│   │   ├── Logo.jsx        # Brand logo with home navigation link
│   │   ├── RegionMenu.jsx  # Dropdown menu for continent/region filtering
│   │   ├── SearchInput.jsx # Search bar input component
│   │   ├── ThemeToggle.jsx # Light / Dark mode toggle switch
│   │   └── index.js        # Barrel export for components
│   ├── hooks/
│   │   └── useFetchData.js # Fetch hook with localStorage caching layer
│   ├── pages/              # Application route pages
│   │   ├── Country.jsx     # Detailed view for a single country
│   │   ├── Home.jsx        # Homepage with search, filter, and country grid
│   │   ├── Layout.jsx      # Global layout wrapper with Header & Outlet
│   │   ├── NoPage.jsx      # 404 Not Found page
│   │   └── index.js        # Barrel export for pages
│   ├── utils/
│   │   └── countryFilters.js # Helper functions for region filtering logic
│   ├── App.jsx             # Route definitions and application shell
│   ├── index.css           # Tailwind CSS directives & global styling
│   └── main.jsx            # React root entry point
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML entry template with Inter font preloaded
├── package.json            # Project dependencies & npm scripts
├── vite.config.js          # Vite config with React, Compiler, & Tailwind plugins
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0 or higher recommended) and `npm` installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository or navigate to the project root directory:

   ```bash
   cd around-the-world
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📜 Available Scripts

| Command           | Description                                                          |
| :---------------- | :------------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build`   | Bundles and minifies the application into `dist/` for production     |
| `npm run preview` | Runs a local web server to preview the production build              |
| `npm run lint`    | Runs ESLint to check for code quality and syntax issues              |
