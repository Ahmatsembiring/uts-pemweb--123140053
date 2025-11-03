"use client"

import "./RecipeCard.css"

function RecipeCard({ recipe, onSelect, onToggleFavorite, isFavorited }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe.strMealThumb || '/placeholder.svg'} alt={recipe.strMeal} className="recipe-image" />
        <button className={`favorite-btn ${isFavorited ? 'favorited' : ''}`} onClick={() => onToggleFavorite(recipe)} title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}>
          ❤️
        </button>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.strMeal}</h3>
        <div className="recipe-meta">
          <span className="recipe-category">{recipe.strCategory}</span>
          <span className="recipe-area">{recipe.strArea}</span>
        </div>
        <button className="view-recipe-btn" onClick={() => onSelect(recipe)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard
