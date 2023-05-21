import React from "react";
import "../Style/StarProduct.css";

const StarProduct = ({ startProduct }) => {
  return (
    <div className="starProduct">
      <a href={startProduct[0].url}>
        <img src={startProduct[0].image} alt="" />
      </a>

      <a href={startProduct[1].url}>
        <img src={startProduct[1].image} alt="" />
      </a>

      <a href={startProduct[2].url}>
        <img src={startProduct[2].image} alt="" />
      </a>
    </div>
  );
};

export default StarProduct;
