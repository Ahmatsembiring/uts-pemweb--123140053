# 
    Website Recipe Search


# Ahmat Prayoga Sembiring (123140053)

A modern recipe discovery application built with React, Vite, and TheMealDB API. Search for recipes from around the world and save your favorites locally.

## Features

- Search recipes by name using TheMealDB API
- View detailed recipe information including ingredients and instructions
- Add/remove recipes from favorites (saved in localStorage)
- Responsive design for mobile, tablet, and desktop
- Beautiful UI with warm, inviting color palette
- YouTube video links for recipes

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Pure CSS** - Styling (no frameworks)
- **TheMealDB API** - Recipe data

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone `<repository-url>`
   cd recipe-search-app
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The app will open at `http://localhost:5173`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

The optimized build will be in the `dist/` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── main.jsx           # Entry point
├── App.jsx            # Main component
├── index.css          # Global styles
├── App.css            # App styles
└── components/
    ├── Header.jsx              # Header with favorites counter
    ├── SearchForm.jsx          # Search input form
    ├── RecipeGrid.jsx          # Grid display for recipes
    ├── RecipeCard.jsx          # Individual recipe card
    ├── RecipeDetail.jsx        # Modal with full recipe details
    ├── FavoritesSection.jsx    # Favorites display page
    └── [Component].css         # Component-specific styles
\`\`\`

## API

This app uses the free TheMealDB API:

- Documentation: https://www.themealdb.com/api.php
- No authentication required
- Rate limits: 1 request per second

## Usage

1. Enter a recipe name in the search box
2. Browse the results
3. Click on a recipe card to view full details
4. Click the heart icon to add/remove from favorites
5. Visit the Favorites page to see all saved recipes

## Future Enhancements

- Filter by category, cuisine, or ingredients
- Recipe rating system
- User accounts with cloud sync
- Recipe sharing functionality
- Dark mode support

## License

MIT License
