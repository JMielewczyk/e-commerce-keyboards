import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Nav from './components/Nav'
import HomePage from './components/pages/home/Home'
import ProductList from './components/pages/productList/ProductList'
import ProductElement from './components/pages/product/keyboards/ProductElement';

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
         <Route path='/home/:category/' element={<ProductList/>}/>
         <Route path='/home/:category/:product' element={<ProductElement cartOpen={cartOpen}/>}/>
         <Route path='*' element={<Navigate to="/home" replace/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
