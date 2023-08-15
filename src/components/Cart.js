import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItemsList from "./RestaurantItemsList";
import { clearCart } from "../../utils/Redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="h-full">
          <div className="w-4/12 text-center bg-slate-200 absolute top-[50%] left-[35%] mt-[-25px] ml-[-25px] p-4">
            <h1 className="font-bold text-2xl">Your Shopping Bag is empty</h1>
            <h6 className=" text-lg text-black mt-2">Fill it with joy!</h6>
            <h3
              className="mt-4 bg-slate-50 p-4 rounded-xl cursor-pointer"
              to="/"
            >
              <Link to="/">Go To Home Page</Link>
            </h3>
          </div>
        </div>
      ) : (
        <div className="w-6/12 mx-auto mt-4 items-center">
          <div className="flex justify-between">
            <h1 className="text-bold text-lg">Shopping Bag</h1>
            <button
              onClick={() => dispatch(clearCart())}
              className=" bg-black text-white p-2 rounded-md"
            >
              Clear Cart
            </button>
          </div>
          <div className="bg-gray-50 p-4 my-4 shadow-md">
            <RestaurantItemsList items={cartItems} />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
