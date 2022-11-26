import styled from 'styled-components'

export const StyledMainHeader = styled.header`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 25vh;
border: 1px solid red;
padding: 10px;
.featured-product-container {
    text-decoration: none;
    width: 70%;
    height: 70%;
}
.featured-product {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    border: 1px solid black;
    border-radius: 20px;
    overflow-y: hidden;
    img {
        position: absolute;
        z-index: 0;
        width: 100%;
        transform: translateY(-25%);
    }
    .keyboard-model, .price {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 2;
        font-size: 22px;
        color: white;
    } .price {
        top: 55px;
    }
}
`