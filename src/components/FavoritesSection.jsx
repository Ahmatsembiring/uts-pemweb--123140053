"use client"

import RecipeCard from "./RecipeCard"
import "./FavoritesSection.css"

function FavoritesSection({ favorites, onSelectRecipe, onToggleFavorite }) {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <p className="empty-message">No favorite recipes yet. Start adding your favorites!</p>
      </div>
    )
  }

  return (
    <div className="favorites-section">
      <div className="favorites-header">
        <h2>My Favorite Recipes</h2>
        <p className="favorites-count">Total: {favorites.length}</p>
      </div>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={onSelectRecipe}
            onToggleFavorite={onToggleFavorite}
            isFavorited={true}
          />
        ))}
      </div>
    </div>
  )
}

export default FavoritesSection
