import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home1.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMealDetails } from "../redux/redux";
import { increase } from "../redux/redux";
import Nav from "../Nav/Nav";
import Ourteam from "../Ourteam/Ourteam";
import Footer from "../Footer/Footer";

function Home() {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let count = useSelector((state) => {
    return state.counter.value;
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((result) => {
        console.log(result);
        setCategories(result.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(obj) {
    dispatch(setMealDetails(obj));
    navigate("/mealDetails");
  }

  // const handleAddToCart = (item) => {
  //   dispatch(increase(item));
  // };

  const handleAddToCart = (item) => {
    dispatch(increase(item));
  };

  function pageOurTeam() {
    navigate("/ourteam");
  }

  return (
    <div className="home">
      <div className="top-section">
        <Nav />
        {/* <img src="./images/top-section.jpg" alt="" /> */}
      </div>
      <br />
      <div className="concept-vision">
        <img src="./images/concept&vision.png" alt="" />
      </div>
      <br />

      <div className="ctn" id="list-all-mealbycategories">
        <div className="meals-db">
          <div className="top">
            <h1>Whats your favourite meal?</h1>
          </div>
          <div className="meal-container">
            {categories.map((obj) => {
              return (
                <div
                  key={obj?.idCategory}
                  className="meal-card"
                  onClick={() => {
                    handleCardClick(obj);
                  }}
                >
                  <img
                    src={obj?.strCategoryThumb}
                    alt="Meal-image"
                    className="meal-img"
                  />
                  <h2>{obj?.strCategory}</h2>
                  <p>{obj?.strCategoryDescription}</p>

                  <button
                    onClick={() => handleAddToCart(obj)}
                    className="add-to-cart-btn"
                  >
                    add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <div className="bestseller-seller-of-the-week">
        <h1 className="bestseller-seller-of-the-week-h1">
          BEST SELLER IN THIS WEEK
        </h1>
        <img src="./images/best-seller-of-the-week.png" alt="" />
      </div>
      <div className="meet-our-team-btn">
        <button onClick={pageOurTeam}>Meet Our Team</button>
      </div>
      <br />
      <div>
        {/* <footer>
          <div className="footer-top-area">
            <div className="footer-top-area-col-1">
              <h5>CONTACT US</h5>
              <p>
                T. <a href="tel:+123440567899">+12 344 0567899</a>
                <br />
                M. <a href="">ala@example.com</a>
              </p>
            </div>
            <div className="footer-top-area-col-2"></div>
            <div className="footer-top-area-col-3"></div>
          </div>
          <div className="footer-bottom-area"></div>
        </footer> */}
      </div>
      <br />
    </div>
  );
}

export default Home;
