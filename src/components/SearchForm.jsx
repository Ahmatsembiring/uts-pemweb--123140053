"use client"

import { useState } from "react"
import "./SearchForm.css"

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search recipes by name (e.g., Pasta, Pizza, Chicken)..."
          value={query}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
      <p className="search-hint">Start typing to find your favorite recipes</p>
    </form>
  )
}

export default SearchForm
