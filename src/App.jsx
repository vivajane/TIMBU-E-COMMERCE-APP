import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Category from "./conponent/Category";
import Footer from "./Pages/Footer";
import AddToCart from "./Pages/AddToCart";
import Descriptions from "./conponent/Descriptions";
import Reviews from "./conponent/Reviews";
import Support from "./conponent/Support";
import Cart from "./Pages/Cart";
import MyCart from "./Pages/MyCart";

function App() {
  return (
    <div className=" w-[100%] bg-whites">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all" element={<Category category="all" />}></Route>
          <Route
            path="/tshirts"
            element={<Category category="tshirts" />}
          ></Route>
          <Route
            path="/hoodies"
            element={<Category category="hoodies" />}
          ></Route>
          <Route
            path="/sweatshirts"
            element={<Category category="sweatshirts" />}
          ></Route>
          <Route path="/addtocart/:addtocardId" element={<AddToCart />}>
            
              <Route path="description" element={<Descriptions />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="support" element={<Support />} />
            
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/mycart" element={<MyCart/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
