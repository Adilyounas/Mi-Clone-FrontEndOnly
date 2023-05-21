import React from "react";
import HotItemCard from "./HotItemCard.jsx";
import "../Style/HotAccessories.css";

const HotAccessories = ({
  music,
  smartDevice,
  home,
  lifeStyle,
  mobileAccessories,
}) => {
  return (
    <div className="HotAccessories">

      <div>
        {music &&
          music.map((items, index) => {
            return (
              <HotItemCard
                key={items.image}
                name={items.name}
                price={items.price}
                image={items.image}
                index={index}
              />
            );
          })}

        {/* .............................. */}

        {smartDevice &&
          smartDevice.map((items, index) => {
            return (
              <HotItemCard
                key={items.image}
                name={items.name}
                price={items.price}
                image={items.image}
                index={index}
              />
            );
          })}

        {/* .............................. */}

        {home &&
          home.map((items, index) => {
            return (
              <HotItemCard
                key={items.image}
                name={items.name}
                price={items.price}
                image={items.image}
                index={index}
              />
            );
          })}

        {/* .............................. */}

        {lifeStyle &&
          lifeStyle.map((items, index) => {
            return (
              <HotItemCard
                key={items.image}
                name={items.name}
                price={items.price}
                image={items.image}
                index={index}
              />
            );
          })}

        {/* ........................................... */}

        {mobileAccessories &&
          mobileAccessories.map((items, index) => {
            return (
              <HotItemCard
                key={items.image}
                name={items.name}
                price={items.price}
                image={items.image}
                index={index}
              />
            );
          })}

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
