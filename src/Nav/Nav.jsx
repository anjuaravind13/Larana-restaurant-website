import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  let count = useSelector((state) => {
    return state.counter.value;
  });
  let navigate = useNavigate();

  return (
    <div className="navBar">
      <div className="menu">
        <ul className="list">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="dropdown">
            <a href="#menu" className="dropbtn">
              Menu
            </a>
            <div className="dropdown-content">
              {/* <a href="#list-all-mealbycategories"> */}
              <a href="" onClick={()=> navigate("/category")}>
                {" "}
                <img src="./dd-menu-img1.jpg" alt="Menu Vertical" />
                Menu by categories
              </a>
              <a href="#" onClick={()=> navigate("/area")}>
                <img src="./dd-menu-img3.jpg" alt="" />
                Menu By Area
              </a>
              <a href="#" onClick={()=> navigate("/searchmeal")}>
                <img src="./big-mac.jpg" alt="" />
                Menu By Meal
              
              </a>
              <a href="#" onClick={() => navigate("/searchbyletter")}>
                <img src="./Strawberries-Romanoff.jpg" alt="" />
                Menu all meals by first letter
                {/* <img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2024/03/dd-menu-img4.jpg" alt="" /> */}
              </a>
            </div>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#landing">Landing</a>
          </li>
        </ul>
      </div>
      <div className="navBar-button">
        <button className="count-button" onClick={() => navigate("/cart")}>
        <span className="button-icon"></span>
        <span className="button-count">{count}</span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
