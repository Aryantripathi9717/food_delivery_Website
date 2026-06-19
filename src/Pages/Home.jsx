import React from "react";
import Nav from "../Components/Nav";
import Categories from "../Categories";
import Card from "../Components/Card";
import { food_items } from "../Food";
const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-6">
        {Categories.map((item) => (
          <div className="text-gray-700 bg-white w-[60px] h-[65px] text-[9px] flex flex-col items-start gap-2 p-1 justify-start font-semibold rounded-sm shadow-lg hover:bg-green-300 cursor-pointer transition-all duration-300">
            {item.image}
            {item.name}
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap gap-2 justify-center pt-8 pb-8 p-8 items-center">
        {food_items.map((item) => (
          <Card
            name={item.food_name}
            price={item.price}
            id={item.id}
            type={item.food_type}
            image={item.food_image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
