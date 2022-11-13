import React from 'react'
import "../Style/ProductReviewCard.css"


const ProductReviewCard = ({price,name,images,review,index}) => {
  return (
    <div className="ProductReviewCard">
        <img src= {images} alt={`${index} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard