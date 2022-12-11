import styled from 'styled-components'

export const StyledLoggedIn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
flex-grow: 1;
max-width: 100%;
margin: 20px;
border-radius: 8px;
background-color: #EDF2F7;
.loggedIn-txt {
    text-align: center;
    font-size: 1.5rem;
} 
.logOut-button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #C53030;
    font-weight: 700;
}
`