import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Nav from './components/Nav'
import HomePage from './components/pages/home/Home'
import KeyboardsElement from './components/pages/product/keyboards/KeyboardsElement';
import Keycaps from './components/pages/product/keycaps/Keycaps'

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
         <Route index element={<HomePage/>} />
         <Route path='/home' element={<HomePage/>}/>
         <Route path='/home/product/keyboards/:keyboardName' element={<KeyboardsElement cartOpen={cartOpen} />}/>
         <Route path='/home/product/keycaps' element={<Keycaps/>}/>
         <Route path='/home/product/barebonekits' element={<Keycaps/>}/>
         <Route path='/home/product/switches' element={<Keycaps/>}/>
         <Route path='/home/product/prebuiltkeyboards' element={<Keycaps/>}/>
         <Route path='*' element={<Navigate to="/home" replace/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
