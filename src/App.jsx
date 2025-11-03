"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchForm from "./components/SearchForm"
import RecipeGrid from "./components/RecipeGrid"
import RecipeDetail from "./components/RecipeDetail"
import FavoritesSection from "./components/FavoritesSection"
import "./App.css"

function App() {
  const [recipes, setRecipes] = useState([])
  const [favorites, setFavorites] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFavorites, setShowFavorites] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("recipeFavorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("recipeFavorites", JSON.stringify(favorites))
  }, [favorites])

  const searchRecipes = async (query) => {
    if (!query.trim()) {
      setRecipes([])
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await response.json()
      setRecipes(data.meals || [])
    } catch (error) {
      console.error("Error fetching recipes:", error)
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }

  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.idMeal === recipe.idMeal)
      if (isFavorite) {
        return prev.filter((fav) => fav.idMeal !== recipe.idMeal)
      } else {
        return [...prev, recipe]
      }
    })
  }

  const isFavorited = (recipe) => {
    return favorites.some((fav) => fav.idMeal === recipe.idMeal)
  }

  return (
    <div className="app">
      <Header favoritesCount={favorites.length} onFavoritesClick={() => setShowFavorites(!showFavorites)} />

      {!showFavorites ? (
        <>
          <SearchForm onSearch={searchRecipes} />
          {loading && <div className="loading">Loading recipes...</div>}
          <RecipeGrid
            recipes={recipes}
            onSelectRecipe={setSelectedRecipe}
            onToggleFavorite={toggleFavorite}
            isFavorited={isFavorited}
          />
        </>
      ) : (
        <FavoritesSection favorites={favorites} onSelectRecipe={setSelectedRecipe} onToggleFavorite={toggleFavorite} />
      )}

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onToggleFavorite={toggleFavorite}
          isFavorited={isFavorited(selectedRecipe)}
        />
      )}
    </div>
  )
}

export default App
