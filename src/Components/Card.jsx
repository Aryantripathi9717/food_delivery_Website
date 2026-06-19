import React from "react";
import Image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({ name, price, id, type, image }) => {
  return (
    <div className="w-[150px] h-[205px] bg-white p-2 rounded-md shadow-lg cursor-pointer hover:bg-green-100 hover:border-2 border-green-400">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-md">
        <img src={image} alt="" className="object-fill" />
      </div>
      <div className="text-black font-semibold text-[12px]">{name}</div>
      <div className="flex justify-between items-center text-green-600 text-[10px] font-bold">
        <div>Rs {price}/-</div>
        <div className="flex justify-center items-center gap-1 m-1">
          {" "}
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full text-gray-700 text-[12px] font-semibold bg-green-200 h-5 rounded-sm hover:bg-green-400 transition-all">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
