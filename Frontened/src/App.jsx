import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} menuRef={menuRef} />
      <Routes>
        <Route path='/' element={<Home menuRef={menuRef} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </>
  );
}

export default App;
