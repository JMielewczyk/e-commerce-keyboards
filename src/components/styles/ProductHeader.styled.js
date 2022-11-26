import styled from 'styled-components'

export const StyledProductHeader = styled.header`
width: 100%;
height: 30vh;
overflow: hidden;
position: relative;
.image-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 20px;
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
        opacity: 0.8;
        cursor: pointer;
        transition: .1s;
        .button-next, .button-previous {
            width: 40%;
            height: 40%; 
    } 
}
.button-container-next:active {
        transform: translate(20%, -50%)
    }
.button-container-previous:active {
        transform: translate(-20%, -50%)
    }
`