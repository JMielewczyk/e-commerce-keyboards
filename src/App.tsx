import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Nav from './components/Nav'
import HomePage from './components/pages/home/Home'
import KeyboardsElement from './components/pages/product/KeyboardsElement';

import GlobalStyles from './components/styles/Global.styled';

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const openCart: any = () => {
    setCartOpen(prevValue => !prevValue)
  }
  return (
    <Router>
        <GlobalStyles />
        <Nav cartOpen={cartOpen} openCart={openCart}/>
        <Routes>
         <Route path='/home' element={<HomePage/>} ></Route>
         <Route path='/home/product/keyboards/:keyboardName' element={<KeyboardsElement cartOpen={cartOpen} />}></Route>
         <Route path='*' element={<Navigate to="/home" replace/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
