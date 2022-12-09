import React, {useContext} from 'react'

import { BackgroundContext } from '../../../App'

import { StyledLoggedIn } from '../../styles/LoggedIn.styled'

const LoggedIn = () => {
    const {setIsLogged} = useContext(BackgroundContext)
    return (
        <StyledLoggedIn>
            <p className='loggedIn-txt'>You're logged in!</p>
            <button onClick={() => setIsLogged(false)} className='logOut-button'>Log Out</button>
        </StyledLoggedIn>
    )
}

export default LoggedIn;