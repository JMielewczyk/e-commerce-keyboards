//Hooks
import React, { useContext } from 'react';

//Context
import { BackgroundContext } from '../../App';

//Styles
import { Wrapper } from '../../styles/elements/Wrapper';
import { P15 } from '../../styles/elements/P15';
import { Button } from '../../styles/elements/Buttons/Button';

const LoggedIn = () => {
  const { setIsLogged } = useContext(BackgroundContext);
  return (
    <Wrapper>
      <P15>{`You're logged in!`}</P15>
      <Button onClick={() => setIsLogged(false)}>Log Out</Button>
    </Wrapper>
  );
};

export default LoggedIn;
