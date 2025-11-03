"use client"

import "./Header.css"

function Header({ favoritesCount, onFavoritesClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">RecipeFind</h1>
          <p className="header-subtitle">Discover delicious recipes from around the world</p>
        </div>
        <button className="favorites-btn" onClick={onFavoritesClick}>
          <span className="favorites-icon">♥</span>
          <span className="favorites-count">{favoritesCount}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
