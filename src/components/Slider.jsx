import React from "react";
import main from "../assets/main.png";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <>
      <div className="bg-black text-white  h-[90vh]">
        <div className="flex flex-col h-[90vh] gap-[50px] justify-start items-center ">
          <div className=" flex flex-col gap-3 text-center mt-[50px]">
            <p className="font-thin">New</p>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  to-pink-500 ">
              iphone 14 Pro
            </p>
            <p className="font-bold text-xl">pro.Beyond</p>
            <p>From $41.62/mo. for 24 mo. or $999 before trade-in</p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button className="text-xl bg-sky-600 p-2 px-4 rounded-[20px]">
              Buy
            </button>
            <span>
              <a href="https://www.apple.com/iphone/">Learn more.</a>
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0.2, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="bg-red w-full my-auto overflow-hidden"
          >
            <img
              src={main}
              className="w-[500px] mx-auto cursor-pointer"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Slider;
