import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../data/ProductsData";
import { addToList, removeFromList } from "../features/cartSlice";

const Admin = () => {
  const localSignup = localStorage.getItem("signup");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [URL, setURL] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const addToProductsList = () => {
    dispatch(
      addToList({ id: uuidv4(), image: URL, description: desc, price: price })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="main-container  flex">
        <div className="left-nav text-center flex gap-4 flex-col p-4 bg-[var(--primary-color)] rounded-lg h-[90vh] w-[300px] ">
          <p className="text-center border-b-2 ">
            <span className="text-2xl  font-bold text-white text-center">
              Admin Dashboard
            </span>
          </p>
          <NavLink
            to={"/home"}
            className="text-white mt-4 text-xl font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to={"/carts"}
            className="text-white mt-4 text-xl font-semibold"
          >
            Cart
          </NavLink>
          <NavLink className="text-white mt-4 text-xl font-semibold">
            about
          </NavLink>
          <NavLink
            to={"/carts"}
            className="text-white flex justify-center mt-4 text-xl font-semibold"
          >
            <AiOutlineShoppingCart size={40} />
          </NavLink>
        </div>
        <div className="mid-container p-4 ml-2 bg-[#A7D086]  scrollbar-none overflow-y-scroll h-[90vh] rounded-lg border border-[var(--primary-color)] w-[65%]  ">
          <p className="    text-center text-lg text-white ">
            Available Products on{" "}
            <span className="text-[var(--primary-color)] font-bold text-xl">
              Lanceme{" "}
            </span>{" "}
            <span className="text-black">shop</span>
          </p>
          {cart.productsData.map((cartItem, ind) => {
            return (
              <div
                key={ind}
                className="flex relative   rounded-[20px] mt-6 p-2   justify-around gap-4 items-center bg-white"
              >
                <img
                  className="w-[100px] h-[100px]"
                  src={cartItem.image}
                  alt=""
                />
                <p className="">
                  <span>{cartItem.description}</span>
                </p>

                <p className=" text-xl">Rs.{cartItem.price}</p>
                <FaTimes
                  onClick={() => dispatch(removeFromList(cartItem))}
                  className="absolute cursor-pointer hover:text-red-500  top-[12px] right-[12px]"
                />
              </div>
            );
          })}
        </div>
        <div className="right-container h-max p-4 mx-2  w-[35%] rounded-lg bg-[#A7D086] ">
          <p className="text-white text-center">
            Add More Products to{" "}
            <span className="text-[var(--primary-color)] font-bold text-xl">
              Lanceme{" "}
            </span>{" "}
            <span className="text-black">shop</span>{" "}
          </p>
          <div className="flex flex-col mt-4 ">
            <input
              onChange={(e) => setURL(e.target.value)}
              className="w-full mt-4 pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2"
              placeholder="paste image url..."
              type="text"
            />
            <input
              onChange={(e) => setDesc(e.target.value)}
              className="w-full mt-4 pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2"
              placeholder="product description..."
              type="text"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-4 pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2"
              placeholder="price..."
              type="text"
            />
            <button
              onClick={addToProductsList}
              className="m-4 mt-[50px] bg-[var(--primary-color)] text-white rounded-lg py-4 "
            >
              Add to ProductsList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
