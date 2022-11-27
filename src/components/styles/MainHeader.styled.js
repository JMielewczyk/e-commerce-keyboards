import styled, { keyframes } from 'styled-components'

const featuredAnimation = keyframes`
        0% {
            opacity: 0;
        }
        10% {
            opacity: 0;
        }
        20% {
            visibility: visible;
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        90% {
            visibility: hidden;
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
`

export const StyledMainHeader = styled.header`
display: flex;
flex-direction: column;
gap: 5%;
align-items: center;
width: 100vw;
height: 45vh;
border: 1px solid red;
padding: 10px;
background-color: #E0E0D1;
.featured-product-container {
    visibility: hidden;
    text-decoration: none;
    width: 90%;
    height: 60%;
    animation: ${featuredAnimation} 3s;
}
.featured-product {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    border-radius: 20px;
    overflow-y: hidden; 
    .keyboard-model, .price {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 1;
        font-size: 22px;
        color: white;
    } .price {
        top: 55px;
    }
    .featured-product-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(3px);
}
}
`