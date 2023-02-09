//Hooks
import React, { useContext } from 'react';

//Context
import { BackgroundContext } from '../../App';

//Styles
import { P15 } from '../../styles/elements/P15';
import { Button } from '../../styles/elements/Buttons/Button';
import { CartWrapp } from '../../styles/elements/CartWrapp';
import { WrappFlexGrow } from '../../styles/elements/WrappFlexGrow';

//utils
import { auth } from '../../utils/firebase';

const LoggedIn = () => {
  const { setIsLogged, userCredential, setUserCredential } = useContext(BackgroundContext);
  return (
    <WrappFlexGrow>
      <CartWrapp>
        <P15>{`You're logged in!`}</P15>
        <P15>Account email: {userCredential}</P15>
        <Button
          onClick={async () => {
            try {
              const result = await auth.signOut();
              if (!result) {
                setUserCredential('');
                setIsLogged(false);
              }
            } catch (error) {
              console.log(error);
            }
          }}>
          Log Out
        </Button>
      </CartWrapp>
    </WrappFlexGrow>
  );
};

export default LoggedIn;
