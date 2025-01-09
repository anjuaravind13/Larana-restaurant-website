import React, { useEffect, useState } from "react";
import './Category.css';

function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Seafood");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null); // For selected meal details

  // Fetch categories on mount
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories || []))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch meals when the selected category changes
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setMeals(data.meals || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching meals:", error);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  // Fetch details of a selected meal
  const fetchMealDetails = (mealId) => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]); // API returns an array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meal details:", error);
        setLoading(false);
      });
  };

  return (
    <div className="category-app-container">
      <h1 className="category-header">Meal Categories</h1>

      {/* Category Selector */}
      <select
        className="category-selector"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option
            className="category-option"
            key={category.idCategory}
            value={category.strCategory}
          >
            {category.strCategory}
          </option>
        ))}
      </select>

      {loading && <p className="category-loading">Loading...</p>}

      {selectedMeal ? (
        <div className="meal-details-container">
          <button
            className="meal-back-button"
            onClick={() => setSelectedMeal(null)}
          >
            Back to Meals
          </button>
          <h2 className="meal-title">{selectedMeal.strMeal}</h2>
          <img
            className="meal-image"
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            width="300"
          />
          <p className="meal-category">
            <strong>Category:</strong> {selectedMeal.strCategory}
          </p>
          <p className="meal-area">
            <strong>Area:</strong> {selectedMeal.strArea}
          </p>
          <p className="meal-instructions">
            <strong>Instructions:</strong> {selectedMeal.strInstructions}
          </p>
          <h3 className="meal-ingredients-header">Ingredients:</h3>
          <ul className="meal-ingredients-list">
            {Array.from({ length: 20 }, (_, i) => ({
              ingredient: selectedMeal[`strIngredient${i + 1}`],
              measure: selectedMeal[`strMeasure${i + 1}`],
            }))
              .filter((item) => item.ingredient)
              .map((item, index) => (
                <li className="meal-ingredient-item" key={index}>
                  {item.ingredient} - {item.measure}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        // Display Meals List
        <div className="meals-container">
          <h2 className="meals-header">Meals in {selectedCategory}</h2>
          <ul className="meals-list" style={{ listStyle: "none", padding: 0 }}>
            {meals.map((meal) => (
              <li
                className="meal-item"
                key={meal.idMeal}
                onClick={() => fetchMealDetails(meal.idMeal)}
              >
                <img
                  className="meal-thumbnail"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width="100"
                />
                <p className="meal-name">{meal.strMeal}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Category;
