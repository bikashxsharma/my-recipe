import React, {useState, useEffect} from "react"
import "./App.css"
import Recipe from "./recipe"

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("apple")

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search recipe e.g potato"
        />
        <button className="search-button">Search</button>
      </form>
      <div className="all-reciepe">
        {recipes.map((recipe, id) => (
          <Recipe key={id} data={recipe.recipe} />
        ))}
      </div>
    </div>
  )
}

export default App
