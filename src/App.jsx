import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
// import OrderModal from "./conponent/OrderModal";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import MyCartSub from "./conponent/MyCartSub";
import Login from "./Pages/Login";
import Collection from "./Pages/Collection";
import AllCollections from "./Pages/AllCollections";
import Search from "./conponent/Search";
import { useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import CartForm from "./conponent/CartForm";
import ConfirmAdress from "./conponent/ConfirmAdress";
import Profile from "./Pages/Profile";

function App() {
  const [addForm, setAddForm] = useState(() => {
    const stored = localStorage.getItem("form");
    return stored ? JSON.parse(stored) : [];
  });
  const location = useLocation();
  const setLocation = location.pathname.includes("allcollections");
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" max-w-[1440px] mx-auto w-[100%] bg-whites ">
      <ToastContainer />

      <Header />
      {setLocation && <Search />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<Category category="all" />}></Route>
        <Route
          path="/sweatshirts"
          element={<Category category="sweatshirts" />}
        ></Route>
        <Route
          path="/tshirts"
          element={<Category category="tshirts" />}
        ></Route>
        <Route
          path="/hoodies"
          element={<Category category="hoodies" />}
        ></Route>

        <Route path="/addtocart/:addtocardId" element={<AddToCart />}>
          <Route path="description" element={<Descriptions />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/mycartsub" element={<MyCartSub />}></Route>
        <Route path="/mycart" element={<MyCart />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sign" element={<Login />}></Route>
        <Route path="/allcollections" element={<AllCollections />}></Route>

        <Route path="/profile" element={<Profile/>}></Route>
        <Route
          path="/cartform"
          element={<CartForm setAddForm={setAddForm} addForm={addForm} />}
        ></Route>
        <Route
          path="/confirmaddress"
          element={<ConfirmAdress setAddForm={setAddForm} addForm={addForm} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
