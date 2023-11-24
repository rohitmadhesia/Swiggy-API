import React, { useState, useContext } from "react";

import { HEAD_URL } from "../Utilites/Constant";
import { Link } from "react-router-dom";
import userContext from "../Utilites/userContext";
import {  useSelector } from "react-redux";

const Header = () => {
  const [update, setUpdate] = useState("login");

  const {userLoggedIn} = useContext(userContext)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
   
  return (
    <>
      <div className="flex justify-between m-2 bg-pink-200 shadow-lg ">
        <div className="">
          <img className="w-32 rounded-2xl ml-3 mt-1  " alt="img" src={HEAD_URL} />
        </div>
        <div className="">
          <ul className="flex p-10 gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
            <Link to="/cart">Cart - ({cartItems.length}items)</Link></li>
            <button
              onClick={() => {
                update === "login" ? setUpdate("logout") : setUpdate("login");
              }}
            >
              {update}
            </button>
            <li>{userLoggedIn}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
