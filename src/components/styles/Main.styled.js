import styled from 'styled-components'

import keycapsImage from '../../images/products/keycaps.jpg'
import bareboneImage from '../../images/products/barebone.jpg'
import switchesImage from '../../images/products/switches.jpg'
import prebuiltImage from '../../images/products/prebuilt.jpg'

export const StyledMain = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
.keycaps-container, .barebonekits-container, .switches-container, .keyboards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    background-position: center;
    background-size: cover;
    text-decoration: none;
       .text {
        color: white;
        font-size: 2rem;
    }
}

.keycaps-container {
    background-image: url(${keycapsImage});
}
.barebonekits-container {
    background-image: url(${bareboneImage});
}
.switches-container {
    background-image: url(${switchesImage});
}
.keyboards-container {
    background-image: url(${prebuiltImage});
}

.products-keyboards {
    width: 100vw;
    height: 30vh;
}
`