import styled from 'styled-components'

export const StyledFooter = styled.footer`
margin: 0 -20px -20px -20px;
width: 100vw;
color: white;
background-color: black;
padding: 10px;
padding-top: 20px;
padding-bottom: 20px;
.footer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    .company-name {
        font-size: 32px;
    }
    .annotation, .information {
        color: grey;
    }
    .creator {
        cursor: pointer;
        color: grey;
        text-decoration: none;
    }
    .socials-wrapper {
        display: flex;
        justify-content: center;
        gap: 20px;
        a {
            cursor: pointer;
            color: grey;
            font-size: 28px;
        }
    }
}
`