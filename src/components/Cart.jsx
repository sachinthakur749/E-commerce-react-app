import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/cartSlice";
import Navbar from "./Navbar";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const handleRemoveFromCart = (cartItem)=>{
  //     dispatch(removeFromCart(cartItem))
  // }

  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto p-4">
          {cart.cartItem.map((cartItem, ind) => {
            return (
              <div
                key={ind}
                className="flex relative  rounded-[20px] mt-6 p-2   justify-around gap-4 items-center bg-white"
              >
                <img
                  className="w-[150px] h-[150px]"
                  src={cartItem.image}
                  alt=""
                />
                <p className="text-xl">
                  <span>{cartItem.description}</span>
                </p>
                <div className="button flex  gap-2 items-center">
                  <button
                    onClick={() => dispatch(decreaseQuantity(cartItem))}
                    className="text-xl text-white bg-[var(--primary-color)]  px-4 rounded-[20px]"
                  >
                    -
                  </button>
                  <p>{cartItem.cartQuantity}</p>
                  <button
                    onClick={() => dispatch(increaseQuantity(cartItem))}
                    className="text-xl text-white bg-[var(--primary-color)]  px-4 rounded-[20px]"
                  >
                    +
                  </button>
                </div>
                <p className="font-bold text-xl">
                  Rs.{cartItem.price * cartItem.cartQuantity}
                </p>
                <FaTimes
                  onClick={() => dispatch(removeFromCart(cartItem))}
                  className="absolute cursor-pointer hover:text-red-500  top-[12px] right-[12px]"
                />
              </div>
            );
          })}
          <p className="bg-white  text-end rounded-[20px] p-4 mt-6">
            total :{" "}
            {cart.cartItem
              .map((item) => item.price * item.cartQuantity)
              .reduce((total, value) => total + value, 0)}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
