import "../Style/Offers.css"
import Offer from "./Offer.jsx"
import React from 'react'

const Offers = ({offer}) => {
    return (
        <div className="offersSection">
            {
                offer.map((items,index) => {
                    return (
                        <Offer key={items.image} index={index} src ={items.image} link={items.url} />
                    )
                })
            }
        </div>
    )
}

export default Offers