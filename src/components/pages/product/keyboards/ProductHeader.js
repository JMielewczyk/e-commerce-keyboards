import React, {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'

import next from '../../../../images/icons/icon-next.svg'
import previous from '../../../../images/icons/icon-previous.svg'

import { StyledProductHeader } from '../../../styles/ProductHeader.styled.js'

const Header = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {product, category} = useParams()
    const [imageIndex, setImageIndex] = useState(0)

    const getData = () => {
        fetch('/data.json')
        .then(response => {
            if(response.ok) {
              return response.json()
            } else {
                throw response
            }
        })
        .then(data => setData(data.products[category]))
        .then(setLoading(false))
        .catch(error => console.log(error)) 
    }

    useEffect(() => {
        getData()
    }, [])

    let images = [];

    const getContentLoaded = () => {
        if(loading === true || data.length === 0) return
        else {
            const thisProduct = data.filter(item => item.name === product)
            images = thisProduct[0].images;
            return (
            <>
                <div className='image-wrapper'>
                    <img className="product-image" src={process.env.PUBLIC_URL + images[imageIndex]} alt="" />
                </div>
                <div onClick={handleSliderNext} className='button-container-next' >
                    <img className='button-next' src={next} alt="" />
                </div>
                <div onClick={handleSliderPrevious} className='button-container-previous' >
                    <img className='button-previous' src={previous} alt="" />
                </div>
            </>        
            )
        }
    }

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
            {getContentLoaded()}
        </StyledProductHeader>
    )
}

export default Header;