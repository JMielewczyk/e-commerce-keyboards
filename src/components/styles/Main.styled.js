import styled from 'styled-components'


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
    background-image: url(/img/startBackground.jpg);
    background-position: center;
    filter: blur(3px);
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
    .startLogo {
        position: absolute;
        top: 5vh;
        left: 5vw;
        filter: brightness(100);
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
        position: absolute;
        bottom: 15vh;
        left: 50vw;
        transform: translateX(-50%);
        width: 50vw;
        height: 60px;
        min-width: 120px;
        background-color: hsl(26, 100%, 55%);
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 700;
    }
}
.product {
    width: 100vw;
    height: 30vh;
}
`