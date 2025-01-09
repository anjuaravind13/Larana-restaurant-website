import React, { useState } from "react";
import './SearchMeal.css';

function SearchMeal() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const searchMeal = (name) => {
    if (!name.trim()) {
      setMeals([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
          setError("No meals found.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching meals. Please try again later.");
        setLoading(false);
      });
  };

  const fetchMealDetails = (mealId) => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setSelectedMeal(data.meals[0]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching meal details.");
        setLoading(false);
      });
  };

  return (
    <div className="search-meal-container">
      <h1>Search for a Meal</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter meal name..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            searchMeal(e.target.value);
          }}
          className="search-input"
        />
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !selectedMeal && (
        <div className="meal-results">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="meal-card"
              onClick={() => fetchMealDetails(meal.idMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="meal-image"
              />
              <div className="meal-info">
                <h2 className="meal-name">{meal.strMeal}</h2>
                <p className="meal-category">{meal.strCategory}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedMeal && (
        <div className="meal-details">
        <button className="back-button" onClick={() => setSelectedMeal(null)}>
          Back to Results
        </button>
        <h1>{selectedMeal.strMeal}</h1>
        <img
          src={selectedMeal.strMealThumb}
          alt={selectedMeal.strMeal}
          className="meal-details-image"
        />
        <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
        <p><strong>Area:</strong> {selectedMeal.strArea}</p>
        <p><strong>Instructions:</strong> {selectedMeal.strInstructions}</p>
        <h2>Ingredients:</h2>
        <ul>
          {Array.from({ length: 20 }, (_, i) => ({
            ingredient: selectedMeal[`strIngredient${i + 1}`],
            measure: selectedMeal[`strMeasure${i + 1}`],
          }))
            .filter((item) => item.ingredient && item.ingredient.trim() !== "")
            .map((item, index) => (
              <li key={index}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
        </ul>
      
        {/* Display video trailer if YouTube link is available */}
        {selectedMeal.strYoutube && (
          <div className="video-container">
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.split("v=")[1]}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      
        {/* Display tutorial link */}
        {!selectedMeal.strYoutube && (
          <a
            href={selectedMeal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="meal-link"
          >
            Watch Tutorial
          </a>
        )}
      </div>
      
      
      )}
    </div>
  );
}

export default SearchMeal;
