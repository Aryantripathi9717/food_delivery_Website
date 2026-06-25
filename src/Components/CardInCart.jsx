import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const CardInCart = ({id,name,price,image,qty}) => {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-[80px] shadow-lg p-1 flex justify-between '>
        <div className='w-[80%] h-full gap-3 flex'>
            <div className='w-[50%] h-full overflow-hidden rounded lg'>
                <img  src={image} alt="" className='object-cover' />
            </div>
            <div className='w-[40%] h-full flex flex-col gap-4'>
                <div className='text-[12px] text-black font-semibold mt-1'>
                    {name}
                </div>
                <div className='w-[60px] h-[24px] bg-slate-300 flex rounded-lg overflow-hidden shadow-md font-medium border border-green-400 text-sm text-green-400'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-slate-300' onClick={()=>{qty>1? dispatch(DecrementQty(id)) : 1}}>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center hover:bg-gray-300'>{qty}</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-slate-300' onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6 '>
            <span className='text-[12px] font-semibold'>Rs {price}/-</span>
            <RiDeleteBin6Line className='text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default CardInCart