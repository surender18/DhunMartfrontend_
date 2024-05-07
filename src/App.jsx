import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import Earphone from './Components/Earphone/Earphone';
import Headphone from './Components/Headphone/Headphone';
import Speaker from './Components/Speakers/Speaker';
import Midpage from './Components/Midpage/Midpage';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

const App=() =>{
 

  return (
   <div className="app">
    <Navbar/>
    <Routes >
      < Route path='/' element={<Home />}/>
      {/* <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/> */}
      </Routes >
    <Footer />
    </div>
  )
}

export default App
