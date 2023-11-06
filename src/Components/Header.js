import React, { useState, useEffect } from "react";

import { HEAD_URL } from "../Utilites/Constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [update, setUpdate] = useState("login");

  useEffect(() => {
    console.log("update");
  }, [update]);

  return (
    <>
      <div className="flex justify-between m-2 bg-pink-200 shadow-lg ">
        <div className="">
          <img className="w-32  " alt="img" src={HEAD_URL} />
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
            <li>Cart</li>
            <button
              onClick={() => {
                update === "login" ? setUpdate("logout") : setUpdate("login");
              }}
            >
              {update}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
