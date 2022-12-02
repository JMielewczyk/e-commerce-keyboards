import React from 'react'

import { StyledAbout } from '../../styles/About.styled'

const About = () => {
    return (
        <StyledAbout>
        <div className='about-wrapper'>
            <p className="title">About Us</p>
            <p className='information'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab aliquid, dicta quisquam illo ex maxime libero blanditiis dolores sed. Suscipit accusamus ipsum excepturi! Fugiat nesciunt sunt et ducimus ea.</p>
        </div>
        </StyledAbout>
    )
}
export default About;