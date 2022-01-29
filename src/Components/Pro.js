import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Pro = (props) => {
  
  return (
    <Link to="/Product/">
    <div>
      <img src="/Images/peproni.png" alt="pizza" />
      <div className="text-center">
        <h2 className="text-lg font-bold py-2"> {props.Prods.name} </h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          {props.Prods.size}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span> {props.Prods.price} ₹</span>
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
    </Link>
  );
};
export default Pro;
