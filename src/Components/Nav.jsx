import {React,useState }from "react";
import { IoFastFood } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { food_items } from "../Food";
import { dataContext } from "../context/UserContext";
const Nav = () => {
    let {input,setInput} = useState(dataContext);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-2 md:px-6">
      <div className=" w-[30px] h-[22px] md:h-[30px] flex bg-white flex justify-center items-center rounded-sm shadow-lg hover:bg-green-300 cursor-pointer transition-all duration-300">
        <IoFastFood className="text-green-600 h-3 md:h-6" />
      </div>
      <form
        action=""
        className="bg-white flex px-2 items-center w-[65%] md:w-[80%] h-[22px] md:h-[30px] shadow-lg rounded-sm cursor-pointer"
      >
        <IoSearch className="m-2 h-3 text-green-600" />
        <input
          type="text"
          placeholder="Search Items....."
          className="w-[100%] outline-none text-[8px] md:text-[12px]"

        />
      </form>
      <div className=" w-[30px] h-[22px] md:h-[30px]  flex bg-white flex justify-center items-center rounded-sm shadow-lg relative hover:bg-green-300 cursor-pointer transition-all duration-300">
        <span className="absolute text-[8px] md:text-[10px] top-[-2px] right-[6px] md:right-[4px] text-green-700 font-semibold">
          0
        </span>
        <LuShoppingBag className="text-green-600 h-3 md:h-6" />
      </div>
    </div>
  );
};

export default Nav;
