import React from 'react'
import ProductReviewCard from "./ProductReviewCard.jsx"
import "../Style/ProductReview.css"

const ProductReview = ({productReview}) => {
    return (
        <div className="Productreviews">
            {
                productReview.map((items, index) => {
                  return  <ProductReviewCard price={items.price} name={items.name} images={items.image} review={items.review} index={index} key={items.image} />
                })
            }
        </div>
    )
}

export default ProductReview