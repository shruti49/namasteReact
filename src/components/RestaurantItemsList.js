import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/Redux/cartSlice";

const RestaurantItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatching an action
    dispatch(addItem(item));
  };
  return (
    <>
      {items.map((item) => {
        const { id, name, price, description, defaultPrice, imageId } =
          item?.card?.info;

        return (
          <div
            key={id}
            className="m-2 p-2 border-b-2 text-left flex justify-between items-center"
          >
            <div className="w-9/12">
              <div>
                <h5 className="font-semibold">{name}</h5>
                <span className="font-medium">
                  ₹{price ? price / 100 : defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <div>
              <div className="absolute">
                <button
                  className="p-2 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
              </div>
              <img
                className="rounded-lg object-cover w-24 h-24 shadow-xl"
                alt="item-logo"
                src={`${CDN_URL}/${imageId}`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantItemsList;
