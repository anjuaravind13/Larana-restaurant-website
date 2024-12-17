import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MealDetails.css";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../redux/redux";
import axios from "axios";

function MealDetails() {
  const [meal, setMeal] = useState([]);
  const [category, setCategory] = useState("Seafood");

  let count = useSelector((state) => {
    return state.counter.value;
  });
  let list = useSelector((state) => state.meals.value);
  let dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(increase(item));
  };

  const handleClearCart = (item) => {
    dispatch(decrease(item));
  };

  // useEffect(() => {
  //   if (!category) return;

  //   axios
  //     .get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  //     .then((result) => {
  //       setMeal(result.meals.categories);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [category]);

  return (
    <div className="meal-details">
      {/* <h1>Meal Details</h1> */}
      <div className="container1">
        <h2>Yummy ! {list.strCategory}</h2>
        <img src={list.strCategoryThumb} alt="" />
        <p>{list.strCategoryDescription}</p>
        <p>increase - {count}</p>

        <button
          onClick={() => handleAddToCart(list)}
          className="add-to-cart-btn">
          +
        </button>

        <button
          onClick={() => handleClearCart(list)}
          className="remove-frm-cart-btn"
        >-</button>
      </div>

      {/* <div>
        {meals.map((obj) => {
          return(
            <div>
            {obj.strMeal}
          </div>
          )
        })}
      </div> */}
    </div>
  );
}

export default MealDetails;
