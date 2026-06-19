import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id:1,
        name : "All",
        image : <TiThSmallOutline className="text-green-600 h-[35px] w-[30px] ml-2"/>
    },
    {
        id:2,
        name : "BreakFast",
        image : <MdOutlineFreeBreakfast className="text-green-600 h-[35px] w-[30px] ml-2"/>
    },
    {
        id:3,
        name : "Soup",
        image : <MdSoupKitchen className="text-green-600 h-[35px] w-[30px] ml-2"/>
    },
    {
        id:4,
        name : "Noodles",
        image : <TiThSmallOutline className="text-green-600 h-[35px] w-[30px] ml-2"/>
    },
    {
        id:5,
        name : "Main_Course",
        image : <MdOutlineFoodBank className="text-green-600 h-[35px] w-[30px] ml-2" />
    },
    {
        id:6,
        name : "Pizza",
        image : <GiFullPizza className="text-green-600 h-[35px] w-[30px] ml-2" />
    },
    {
        id:7,
        name : "Burger",
        image : <GiHamburger className="text-green-600 h-[35px] w-[30px] ml-2" />
    }
   
]

export default Categories
