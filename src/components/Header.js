import React, { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between m-t-4 m-b-4 p-4 items-center shadow shadow-gray-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="p-2">OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 py-2 hover:bg-slate-100 rounded-sm cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-100 rounded-sm cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-100 rounded-sm cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-100 rounded-sm cursor-pointer">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-4 py-2 hover:bg-slate-100 rounded-sm cursor-pointer font-bold">
            <Link to="cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 py-2 hover:bg-slate-100 rounded-sm cursor-pointer"
            onClick={handleClick}
          >
            {btnName}
          </button>
          <li className="px-4 py-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
