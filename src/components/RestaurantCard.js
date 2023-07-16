import React from "react";

import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    props?.resData?.data;

  return (
    <div className="p-4 m-2 bg-gray-100 hover:bg-gray-200 w-[200px] h-[350px] rounded-md">
      <img
        className="rounded-sm"
        alt="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <div className="mt-4">
        <h3 className="font-bold">{name}</h3>
        <h4 className="mt-4">{cuisines.join(", ")}</h4>
        <h4 className="mt-1">{avgRating}</h4>
        <h4 className="mt-1">{deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
