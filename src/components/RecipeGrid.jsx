"use client"

import RecipeCard from "./RecipeCard"
import "./RecipeGrid.css"

function RecipeGrid({ recipes, onSelectRecipe, onToggleFavorite, isFavorited }) {
  if (recipes.length === 0) {
    return (
      <div className="empty-state">
        <p>No recipes found. Try searching for something delicious!</p>
      </div>
    )
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelectRecipe}
          onToggleFavorite={onToggleFavorite}
          isFavorited={isFavorited(recipe)}
        />
      ))}
    </div>
  )
}

export default RecipeGrid
