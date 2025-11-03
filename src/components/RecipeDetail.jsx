"use client"

import { useEffect } from "react"
import "./RecipeDetail.css"

function RecipeDetail({ recipe, onClose, onToggleFavorite, isFavorited }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Extract ingredients and measurements
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure })
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <img src={recipe.strMealThumb || '/placeholder.svg'} alt={recipe.strMeal} className="modal-image" />
          <button className={`modal-favorite-btn ${isFavorited ? 'favorited' : ''}`} onClick={() => onToggleFavorite(recipe)}>
            ❤️
          </button>
        </div>

        <div className="modal-body">
          <h1 className="modal-title">{recipe.strMeal}</h1>

          <div className="modal-meta">
            <span className="meta-item">
              <strong>Category:</strong> {recipe.strCategory}
            </span>
            <span className="meta-item">
              <strong>Cuisine:</strong> {recipe.strArea}
            </span>
          </div>

          <div className="modal-section">
            <h2 className="section-title">Ingredients</h2>
            <ul className="ingredients-list">
              {ingredients.map((item, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-name">{item.ingredient}</span>
                  <span className="ingredient-measure">{item.measure}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h2 className="section-title">Instructions</h2>
            <p className="instructions-text">{recipe.strInstructions}</p>
          </div>

          {recipe.strYoutube && (
            <div className="modal-section">
              <h2 className="section-title">Video Tutorial</h2>
              <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="video-link">
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail
