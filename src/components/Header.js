import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="loginBtn" onClick={handleClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
