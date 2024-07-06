import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';

function App() {
  return <div className=' w-[100%] bg-whites'>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
    </Routes>
    </BrowserRouter>
    

  </div> 
}

export default App
