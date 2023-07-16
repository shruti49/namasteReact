import React from "react";
import { CDN_URL } from "../../utils/constants";

const RestaurantItemsList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const {
          id,
          name,
          price,
          description,
          defaultPrice,
          imageId,
        } = item?.card?.info;

        return (
          <div key={id} className="m-2 p-2 border-b-2 text-left flex justify-between">
            <div className="w-10/12">
              <div>
                <h5 className="font-semibold">{name}</h5>
                <span className="font-medium">
                  ₹{price ? price / 100 : defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <img
              className="rounded-lg object-cover w-20 h-20 shadow-xl"
              alt="item-logo"
              src={`${CDN_URL}/${imageId}`}
            />
          </div>
        );
      })}
    </>
  );
};

export default RestaurantItemsList;
