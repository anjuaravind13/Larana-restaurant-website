import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MealDetails.css";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../redux/redux";
import axios from "axios";
import { useParams } from "react-router-dom";

function MealDetails() {
  const [meals, setMeals] = useState([]);
  // const [category, setCategory] = useState("Seafood");

  const { category } = useParams();

  // let count = useSelector((state) => {
  //   return state.counter.value;
  // });
  // let list = useSelector((state) => state.meals.value);
  // let dispatch = useDispatch();

  // const handleAddToCart = (item) => {
  //   dispatch(increase(item));
  // };

  // const handleClearCart = (item) => {
  //   dispatch(decrease(item));
  // };

  useEffect(() => {
    if (!category) return;

    axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((result) => {
        setMeals(result.data.meals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return (
    // <div className="meal-details">
    //   {/* <h1>Meal Details</h1> */}
    //   <div className="container1">
    //     <h2>Yummy ! {list.strCategory}</h2>
    //     <img src={list.strCategoryThumb} alt="" />
    //     <p>{list.strCategoryDescription}</p>
    //     <p>increase - {count}</p>

    //     <button
    //       onClick={() => handleAddToCart(list)}
    //       className="add-to-cart-btn">
    //       +
    //     </button>

    //     <button
    //       onClick={() => handleClearCart(list)}
    //       className="remove-frm-cart-btn"
    //     >-</button>
    //   </div>

    <div className="meal-details">
    <h1>{category} Meals</h1>
    <div className="meal-container">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="meal-item">
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
        </div>
      ))}
    </div>
  </div>
    // </div>
  );
}

export default MealDetails;
