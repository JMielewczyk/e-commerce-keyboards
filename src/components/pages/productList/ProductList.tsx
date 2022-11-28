import React from 'react'
import {useParams} from 'react-router-dom'


const ProductList = () => {
    const { category } = useParams()
    return (
        <div>List of products</div>
    )
}

export default ProductList;