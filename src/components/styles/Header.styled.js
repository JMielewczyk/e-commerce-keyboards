import styled from 'styled-components'

export const StyledHeader = styled.header`
width: 100vw;
height: 30vh;
overflow: hidden;
position: relative;
.image-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
        .product-image {
            width: 100%;
            height: 100%;
            object-fit: cover;         
    }  
}

.button-container-previous {
    left: 15px 
}
.button-container-next, .button-container-previous {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        background-color: white;
        border-radius: 100%;
        .button-next, .button-previous {
            width: 40%;
            height: 40%;
    }
}
.cart-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    height: calc(100% - 40px);
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    background-color: white;
    border-radius: 8px;
    transition: .3s ease-in-out;
    transform: translateY(-100vh);
    .cart-header {
        height: 60px;
        padding: 20px;
        border-bottom: 1px solid hsl(220, 14%, 75%);
        font-weight: 700;
    }
    .cart-order {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        color: hsl(219, 9%, 45%);
    }

}
.cart-container.active {
    transform: translateY(0);
}
`