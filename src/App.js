//Hooks
import React, { useState, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Nav from './components/Nav';
import HomePage from './pages/home/Home';
import AccountLogin from './pages/account/AccountLogin';
import LoggedIn from './pages/account/LoggedIn';
import Shipping from './pages/shipping/Shipping';
import Payment from './pages/payment/Payment';
import OrderCompleted from './pages/orderCompleted/OrderCompleted';
import ProductList from './pages/productList/ProductList';
import ProductElement from './pages/product/Product';
import Footer from './components/Footer';

//Reducers
import { manageBasket } from './reducers/cartReducer';

//Styles
import GlobalStyles from './styles/Global.styled';
import { MainWrapper } from './styles/elements/MainWrapper';

const initialBasket = [{ name: 'Your basket is empty' }];

export const BackgroundContext = createContext(null);

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [startLayout, setStartingLayout] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [basket, dispatch] = useReducer(manageBasket, initialBasket);

  const toggleCart = () => {
    setIsCartOpen((prevValue) => !prevValue);
  };

  const renderAccount = () => {
    if (isLogged) {
      return <LoggedIn />;
    } else {
      return <AccountLogin />;
    }
  };

  return (
    <MainWrapper>
      <Router>
        <BackgroundContext.Provider
          value={{
            startLayout,
            setStartingLayout,
            isLogged,
            setIsLogged,
            dispatch
          }}>
          <GlobalStyles />
          <Nav
            dispatch={dispatch}
            basket={basket}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            toggleCart={toggleCart}
          />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/account" element={renderAccount()} />
            <Route path="/shipping" element={isLogged ? <Shipping /> : renderAccount()} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orderCompleted" element={<OrderCompleted />} />
            <Route path="/home/:category/" element={<ProductList />} />
            <Route path="/home/:category/:product" element={<ProductElement basket={basket} />} />
            <Route path="*" element={<Navigate to="/home" replace />}></Route>
          </Routes>
          <Footer />
        </BackgroundContext.Provider>
      </Router>
    </MainWrapper>
  );
}

export default App;
