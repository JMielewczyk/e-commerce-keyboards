import React, { useState}  from 'react'
import { useParams } from 'react-router-dom'

// import image1 from '../images/product/image-product-1.jpg'
// import image2 from '../images/product/image-product-2.jpg'
// import image3 from '../images/product/image-product-3.jpg'
// import image4 from '../images/product/image-product-4.jpg'

import next from '../../../images/icons/icon-next.svg'
import previous from '../../../images/icons/icon-previous.svg'

import { keyboards } from '../../../data/keyboards'



import { StyledHeader } from '../../styles/Header.styled.js'

const Header = () => {
    const {keyboardName} = useParams()
    const [imageIndex, setImageIndex] = useState(0)

    const product: any = keyboards.filter(item => {
        if(item.name === keyboardName) {
            return item
        }
    })
    const images = product[0].images;

    const handleSliderNext = () => {
        if(imageIndex === images.length - 1) {
            return setImageIndex(0)
        }
        setImageIndex(prevValue => prevValue + 1)
        console.log('nextSlide')
    }

    const handleSliderPrevious = () => {
       if(imageIndex === 0) {
        return setImageIndex(images.length - 1)
       } 
       setImageIndex(prevValue => prevValue -1)
    }
    
    return (
        <StyledHeader>
            <div className='image-wrapper'>
                <img className="product-image" src={process.env.PUBLIC_URL + images[imageIndex]} alt="" />
            </div>
            <div onClick={handleSliderNext} className='button-container-next' ><img className='button-next' src={next} alt="" /></div>
            <div onClick={handleSliderPrevious} className='button-container-previous' ><img className='button-previous' src={previous} alt="" /></div>
        </StyledHeader>
    )
}

export default Header;