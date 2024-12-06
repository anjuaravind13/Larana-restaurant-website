import React from "react";
import { useSelector } from "react-redux";
import './MealDetails.css'
import { useDispatch } from 'react-redux'
import { increase } from "../redux/redux";

function MealDetails() {
    let count = useSelector((state)=> {return state.counter.value})
  let list = useSelector((state) => state.meals.value);
  let dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
    dispatch(increase(item)); 
  };

  return (
    <div className="meal-details">
        <h1>Meal Details</h1>
      <div className="container1">
        <h2>Yummy ! {list.strCategory}</h2>
        <img src={list.strCategoryThumb} alt="" />
        <p>{list.strCategoryDescription}</p>
        <p>increase - {count}</p>

        <button
                onClick={() => handleAddToCart(list)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
        {/* <button onClick={()=>{dispatch(increase(item))}}>add to cart</button> */}

        
      </div>
    </div>
  );
}

export default MealDetails;
