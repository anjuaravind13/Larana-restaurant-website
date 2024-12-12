import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/redux";
import MealDetails from "./MealDetails/MealDetails";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";
import Ourteam from "./Ourteam/Ourteam";
import SearchByLetter from "./SearchByLetter/SearchByLetter";
import Footer from "./Footer/Footer";

import './App.css'

function App() {
  return (
    <div>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mealDetails" element={<MealDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/searchbyletter" element={<SearchByLetter />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
