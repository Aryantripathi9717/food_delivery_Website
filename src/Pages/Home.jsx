import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Categories";
import Card from "../Components/Card";
import { food_items } from "../Food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import CardInCart from "../Components/CardInCart";
import { useSelector } from "react-redux";

const Home = () => {

  let {cate,setCate,input,showCart,setShowCart} = useContext(dataContext);

  function filter(category){
    console.log(category);
    if(category==="All") setCate(food_items);
    else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList);
    }
  }

 let items = useSelector(state=>state.cart)

 let subTotal = items.reduce((total,item)=> total+item.price*item.qty,0)
 let deleveryFee = 20;
 let taxes = subTotal * 0.5/100;
 let total = Math.floor(subTotal+deleveryFee+taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
   {!input ?    <div className="flex flex-wrap justify-center items-center gap-6">
        {Categories.map((item) => (
          <div key={item.name} className="text-gray-700 bg-white w-[60px] h-[65px] text-[9px] flex flex-col items-start gap-2 p-1 justify-start  font-semibold rounded-sm shadow-lg hover:bg-green-300 cursor-pointer transition-all duration-300" onClick={()=>filter(item.name)}>
            {item.image}
            {item.name}
          </div>
        ))}
      </div> : null}

      <div className="w-full flex flex-wrap gap-2 justify-center pt-8 pb-8 p-8 items-center">
        {cate.map((item) => (
          <Card 
            key={item.id}
            name={item.food_name}
            price={item.price}
            id={item.id}
            type={item.food_type}
            image={item.food_image}
          />
        ))}
      </div>
      { <div className={`w-full md:w-[43vw] shadow-2xl bg-white h-[100%] top-0 right-0 fixed p-3 transition-all duration-300 overflow-auto ${showCart ? 'translate-x-0' : 'translate-x-full'}  text-green-400`}>
        <header className="flex justify-between items-center">
          <span className="font-semibold">Order Items</span>
          <span onClick={()=>setShowCart(!showCart)} className="cursor-pointer hover:text-gray-800"><RxCross2 /></span>
        </header>
      <div className="w-full flex flex-col gap-3">
        {items.map((item)=>(
          <CardInCart id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty}/>
        ))}
      </div>
      <div className="w-full border-t-2 border-black mt-7 p-5 border-b-2 text-[12px]">
        <div className="flex justify-between mb-1 items-center w-full">
          <span className="text-gray-600 font-semibold" >Subtotal</span>
          <span>Rs {subTotal}/-</span>
        </div>
        <div className="flex justify-between mb-1 items-center w-full">
          <span className="text-gray-600 font-semibold" >Delevery Charge</span>
          <span>Rs {deleveryFee}/-</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-600 font-semibold" >Taxes</span>
          <span>Rs {taxes}/-</span>
        </div>

      </div>
       <div className="flex text-[15px] justify-between px-5 pt-2 pb-3 mb-1 items-center w-full">
          <span className="text-gray-600 font-semibold" >Total</span>
          <span>Rs {total}/-</span>
        </div>

        <div className="flex items-center justify-center">
          <button  className="w-[74%] text-gray-700 text-[11px] font-semibold  bg-green-500 h-6 rounded-md hover:bg-green-400 transition-all">Place Order</button>
        </div>
      </div>}
    </div>
  );
};

export default Home;
