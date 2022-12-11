import styled from 'styled-components'

export const StyledPayment = styled.main`
display: flex;
width: 100%;
height: 100%;
flex-grow: 1;
padding: 20px;
.payment-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    padding: 20px;
    gap: 20px;
    background-color: #EDF2F7;
    .payment-details-txt {
        font-size: 1.5rem;
    }
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex-grow: 1;
        .container {
            display: flex;
            gap: 10px;
        }
        label {
            display: flex;
            flex-direction: column;
            font-size: 0.9rem;
            input{
                height: 50px;
                border: none;
                border-radius: 8px;
            }
        }
        .expiration-labels-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            .slash {
                color: grey;
                font-size: 2rem;
                width: 2rem;
            }
        }
        .cancel-button, .submit-button {
            width: 100%;
            height: 50px;
            border-radius: 8px;
        }
        .submit-button {
            border: none;
            background-color: #4299E1;
            color: white;
        }
        .cancel-button {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none; 
            color: black;
            border: 1px solid black;
        }
    }
}
`