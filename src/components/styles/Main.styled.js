import styled from 'styled-components'

import backgroundImage from '../../images/startBackground/start-background-light.jpg'

export const StyledMain = styled.main`
width: 100%;
height: calc(100vh - 60px); // 60px - Navigation height
border: 1px solid black;
.startBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat; 
    background-size: 100vh;
    z-index: 2;
    transition: .3s;
    &.active {
        transform: translateX(100vw);
    }
}
.startLayout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    transition: .3s;
    &.active {
        transform: translateX(100vw);
    }
    .company-name {
        position: absolute;
        top: 15px;
        left: 15px;
    }
    .startText {
        position: absolute;
        bottom: 30vh;
        left: 50vw;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight:700;
        
    }
    .btnGetStarted {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 15vh;
        left: 50vw;
        transform: translateX(-50%);
        width: 150px;
        height: 60px;
        min-width: 120px;
        background-color: #E0E0D1;
        color: grey;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
        border-right: 5px solid #BDBDAF;
        border-bottom: 5px solid #CCCCBE;
        border-left: 5px solid #ADADA1;
        border-top: 5px solid #ADADA1;
        box-shadow: 0 0 7px black;
        transition: .1s;
        .enter-symbol {
            font-size: 22px;
            position: absolute;
            top: 56%;
            left: 65%;
            transform: translateY(-50%);
        }
    }
    .btnGetStarted:active {
        transform: translateX(-50%) scale(0.95);
        box-shadow: 0 0 7px 1px black;
        .enter-symbol {
            transform: translateY(-49.6%);
        }
        }
}
.product {
    width: 100vw;
    height: 30vh;
}
`