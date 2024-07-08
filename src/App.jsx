import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Category from './conponent/Category';
import Footer from './Pages/Footer';
import AddToCart from './Pages/AddToCart';

function App() {
  return <div className=' w-[100%] bg-whites'>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/all' element={<Category category="all"/>}></Route>
      <Route path='/tshirts' element={<Category category= "tshirts"/>}></Route>
      <Route path='/hoodies' element={<Category category= "hoodies"/>}></Route>
      <Route path='/sweatshirts' element={<Category category= "sweatshirts"/>}></Route>
      <Route path='/addtocart' element={<AddToCart/>}>
      <Route path=':addtocardId' element={<AddToCart/>}>
      </Route>

      </Route>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    

  </div> 
}

export default App
