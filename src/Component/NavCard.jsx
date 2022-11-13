import React from 'react'
import "../Style/NavCard.css"
const NavCard = ({image,index,name,price}) => {
  return (
    <div className="navCard">
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard