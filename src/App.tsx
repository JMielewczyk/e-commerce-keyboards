import React, {useState} from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'

import GlobalStyles from './components/styles/Global.styled';



function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const openCart: any = () => {
    console.log('openCart')
    setCartOpen(prevValue => !prevValue)
  }
  return (
    <>
      <GlobalStyles />
      <Nav openCart={openCart}/>
      <Header cartOpen={cartOpen}/>
      <Main/>
    </>
  );
}

export default App;
