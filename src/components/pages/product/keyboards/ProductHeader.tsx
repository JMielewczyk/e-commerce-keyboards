import React, { useState}  from 'react'
import { useParams } from 'react-router-dom'

import next from '../../../../images/icons/icon-next.svg'
import previous from '../../../../images/icons/icon-previous.svg'

import { products } from '../../../../data/products'



import { StyledProductHeader } from '../../../styles/ProductHeader.styled.js'

const Header = () => {
    const {product} = useParams()
    const [imageIndex, setImageIndex] = useState(0)

    const productFilter: any = products[0].keyboards.filter(item => {
        if(item.name === product) {
            return item
        }
    })
    const images = productFilter[0].images;

    const handleSliderNext = () => {
        if(imageIndex === images.length - 1) {
            return setImageIndex(0)
        }
        setImageIndex(prevValue => prevValue + 1)
    }

    const handleSliderPrevious = () => {
       if(imageIndex === 0) {
        return setImageIndex(images.length - 1)
       } 
       setImageIndex(prevValue => prevValue -1)
    }

    return (
        <StyledProductHeader>
            <div className='image-wrapper'>
                <img className="product-image" src={process.env.PUBLIC_URL + images[imageIndex]} alt="" />
            </div>
            <div onClick={handleSliderNext} className='button-container-next' ><img className='button-next' src={next} alt="" /></div>
            <div onClick={handleSliderPrevious} className='button-container-previous' ><img className='button-previous' src={previous} alt="" /></div>
        </StyledProductHeader>
    )
}

export default Header;