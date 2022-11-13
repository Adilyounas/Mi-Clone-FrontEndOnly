import React from 'react'
import {Link} from "react-router-dom"
import "../Style/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
        <Link className='HotAccessoriesLinks' to="/Music">Music Store</Link>
        <Link className='HotAccessoriesLinks' to="/smartdevice">Smart Devices</Link>
        <Link className='HotAccessoriesLinks' to="/home">Home</Link>
        <Link className='HotAccessoriesLinks' to="/lifestyle">Lifestyle</Link>
        <Link className='HotAccessoriesLinks' to="/mobileacessories">Mobile Accessories</Link>

    </div>
  )
}

export default HotAccessoriesMenu