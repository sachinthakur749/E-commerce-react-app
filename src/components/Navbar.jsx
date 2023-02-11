import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const localSignup = localStorage.getItem("signup");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload()
  };

  const handleAccount = ()=>{
    // {localSignup?<Navigate to={'/account'}/>:null}
    if(!localSignup){
     return navigate('/home')
    }else{
     return navigate('/account')
    }

    // navigate('/account')

  }


  return (
    <>
      <div className="flex justify-between items-center px-[75px] h-[75px]">
        <p className="text-2xl font-bold ">
          <span className="text-3xl text-[var(--primary-color)] font-bold ">
            <Link to={"/home"}>Lanceme</Link>
          </span>
          Shop
        </p>
        <div className="flex gap-4 relative items-center ">
          {/* <button className=" bg-[var(--primary-color)] text-white p-2  rounded-lg ">
            Login
          </button>
          <button className=" bg-[var(--primary-color)] text-white p-2  rounded-lg ">
            Signout
          </button> */}
          {localSignup ? (
            <button  onClick={handleLogout} className=" bg-[var(--primary-color)] text-white p-2  rounded-lg ">
              logout
            </button>
          ) : null}
          {localSignup ? (
            <button  onClick={handleAccount} className=" bg-[var(--primary-color)] text-white p-2  rounded-lg ">
              Account
            </button>
          ) : null
          }
          <AiOutlineShoppingCart
            className="cursor-pointer"
            onClick={() => navigate("/carts")}
            size={40}
          />
          {cart.cartItem.length !== 0 ? (
            <div className="flex absolute right-[-12px] top-0 justify-center p-[10px] items-center w-[12px] h-[12px] rounded-[50%] text-white  bg-[var(--primary-color)] ">
              {cart.cartItem.length}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
