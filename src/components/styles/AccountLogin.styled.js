import styled from 'styled-components'

export const StyledAccountLogin = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
flex-grow: 1;
width: 100%;
height: 50vh;
padding: 20px;
.account-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    border-radius: 8px;
    background-color: #EDF2F7;
    width: 100%;
    height: 100%;
    max-height: 400px;
    .account-details-txt {
       font-size: 1.5rem;
       font-weight: 400;
    }
    .form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        label {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 0.9rem;
            input {
                border: none;
                border-radius: 8px;
                height: 50px;
            }
        }
        .submit-button {
            height: 50px;
            border: none;
            border-radius: 8px;
            background-color: #4299E1;
            color: white;
        }
    }
}
`