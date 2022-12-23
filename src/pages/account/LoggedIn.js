//Hooks
import React, { useContext } from 'react';

//Context
import { BackgroundContext } from '../../App';

//Styles
import { P15 } from '../../styles/elements/P15';
import { Button } from '../../styles/elements/Buttons/Button';
import { CartWrapp } from '../../styles/elements/CartWrapp';
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';

const LoggedIn = () => {
  const { setIsLogged } = useContext(BackgroundContext);
  return (
    <WrappFlexGrow>
      <CartWrapp>
        <P15>{`You're logged in!`}</P15>
        <Button onClick={() => setIsLogged(false)}>Log Out</Button>
      </CartWrapp>
    </WrappFlexGrow>
  );
};

export default LoggedIn;
