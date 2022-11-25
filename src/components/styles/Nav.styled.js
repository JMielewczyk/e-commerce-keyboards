import styled from "styled-components"

export const StyledNav = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
gap : 15px;
width: 100vw;
height: 60px;
padding: 0 20px;
padding: 0 20px;



.menu-background {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba( 0, 0, 0, 40%);
        width: 100vw;
        height: 100vh;
        transform: translateX(-101vw);
        transition: .3s;
    }
.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    height: 100vh;
    width: 280px;
    padding: 20px;
    .menu-cross {
        height: 20px;
        width: 20px;
    }
    a:nth-of-type(1) {
        margin-top: 30px;
    }
    a {
        color: black;
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
    }
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .hamburger-image{
        width: 25px;
        height: 20px;
    }
     .cart-image, .avatar-image {
        width: 30px;
        height: 30px;
    }
    .logo-image {
        margin-bottom: 5px;
        height: 25px;
    }
}

.title {
    line-height: 25px;
}
.menu-background.active {
    transform: translateX(0);
}

.cart-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    height: calc(280px);
    position: absolute;
    top: 80px;
    left: 10px;
    z-index: 2;
    background-color: white;
    border-radius: 8px;
    transition: .3s ease-in-out;
    transform: translateY(-100vh);
    border: 1px solid black;
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