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
`