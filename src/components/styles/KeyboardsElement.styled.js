import styled from 'styled-components'


export const StyledKeyboardsElement = styled.main`
display: flex;
flex-direction: column;
justify-content: space-around;
/* gap: 25px; */
width: 100vw;
min-height: calc(100vh - 60px); // 60px is the Nav height
padding: 10px;
.company-name {
    color: hsl(26, 100%, 55%);
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
}
.keyboard-title {
    font-size: 32px;
}
.keyboard-description {
    color: hsl(219, 9%, 45%);
}
.price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .discounted-price-container {
        display: flex;
        align-items: center;
        gap: 25px;
        .discount {
            padding: 5px;
            border-radius: 8px;
            background-color: hsl(25, 100%, 94%);
            color: hsl(26, 100%, 55%);
            font-weight: 700;
        }
    }
    .old-price {
        font-weight: 700;
        color: hsl(220, 14%, 75%);
        text-decoration: line-through;
    }
}
.actual-price {
    font-size: 28px;
    font-weight: 700;
}
.amount-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: hsl(223, 64%, 96%);
    height: 50px;
    padding: 25px;
    overflow-y: hidden;
    .amount {
        font-weight: 700;
    }
}
.addToCartBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: hsl(26, 100%, 55%);
    color: white;
    font-weight: 700;
    font-size: 16px;
    img {
        filter: brightness(100)
    }
}
`