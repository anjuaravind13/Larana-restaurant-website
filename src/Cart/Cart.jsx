import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, clearCart } from "../redux/redux";
import "./cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(decrease(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0),
    0
  );
  

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.idCategory} className="cart-item">
                <img
                  src={item.strCategoryThumb}
                  alt="Meal"
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h2>{item.strCategory}</h2>
                  <p>Price: ${item.price || "N/A"}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.idCategory)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <button onClick={handleClearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Cart;
