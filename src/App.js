import React, {useState, useReducer} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Nav from './components/Nav'
import HomePage from './components/pages/home/Home'
import ProductList from './components/pages/productList/ProductList'
import ProductElement from './components/pages/product/ProductElement';

import { manageBasket } from './reducers/cartReducer';

import GlobalStyles from './components/styles/Global.styled';

const initialBasket = [
  { name: 'Your basket is empty'}
]

function App() {

  const [cartOpen, setCartOpen] = useState(false)
  const [basket, dispatch] = useReducer(manageBasket, initialBasket)



  const openCart= () => {
    setCartOpen(prevValue => !prevValue)
  }

  return (
    <Router>
        <GlobalStyles />
        <Nav dispatch={dispatch} basket={basket} cartOpen={cartOpen} openCart={openCart}/>
        <Routes>
         <Route index element={<HomePage/>} />
         <Route path='/home' element={<HomePage/>}/>
         <Route path='/home/:category/' element={<ProductList/>}/>
         <Route path='/home/:category/:product' element={<ProductElement basket={basket} dispatch={dispatch} cartOpen={cartOpen}/>}/>
         <Route path='*' element={<Navigate to="/home" replace/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
