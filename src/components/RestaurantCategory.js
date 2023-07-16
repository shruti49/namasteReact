import React, { useState } from "react";
import RestaurantItemsList from "./RestaurantItemsList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const { title, itemCards } = data;

  const toggleAccordian = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-50 mx-auto p-4 my-4 shadow-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleAccordian}>
        <span className="font-bold">
          {title} ({itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* accordian body */}
      {showItems && <RestaurantItemsList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
