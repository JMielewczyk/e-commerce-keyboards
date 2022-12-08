import React, {useState, useReducer, createContext} from 'react';
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

export const BackgroundContext = createContext(null)

function App() {
  const [startingLayout, setStartingLayout] = useState(true)
  const [cartOpen, setCartOpen] = useState(false)
  const [basket, dispatch] = useReducer(manageBasket, initialBasket)

  const handleStartingLayout = () => {
    setStartingLayout(false)
  }

  const openCart= () => {
    setCartOpen(prevValue => !prevValue)
  }

  return (
    <Router>
      <BackgroundContext.Provider value={{startingLayout, handleStartingLayout}}>
        <GlobalStyles />
        <Nav dispatch={dispatch} basket={basket} cartOpen={cartOpen} openCart={openCart}/>
        <Routes>  
        <Route index element={<HomePage/>} />
        <Route path='/home' element={<HomePage />}/>
        <Route path='/home/:category/' element={<ProductList/>}/>
        <Route path='/home/:category/:product' element={<ProductElement basket={basket} dispatch={dispatch} cartOpen={cartOpen}/>}/>
        <Route path='*' element={<Navigate to="/home" replace/>}></Route>
      </Routes>
      </BackgroundContext.Provider>
    </Router>
  );
}

export default App;