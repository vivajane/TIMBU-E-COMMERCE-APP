import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Category from './conponent/Category';

function App() {
  return <div className=' w-[100%] bg-whites'>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/all' element={<Category/>}></Route>
      <Route path='/tshirts' element={<Category/>}></Route>
      <Route path='/hoodies' element={<Category/>}></Route>
      <Route path='/sweatshirts' element={<Category/>}></Route>
      
    </Routes>
    </BrowserRouter>
    

  </div> 
}

export default App
