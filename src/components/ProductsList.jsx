import React from "react";
import { productsData } from "../data/ProductsData";
import  {useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductsList = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (products)=>{
      dispatch(addToCart(products))
    }


  return (
    <>
      <div className="w-[100vw]">
        <div className="text-center my-6">
          <h1 className="text-3xl font-extrabold">
            <span className="text-3xl font-bold text-[var(--primary-color)]">
              Lanceme{" "}
            </span>
            shop.
            <span className="text-[#6E6E73]">
              {" "}
              The best way to buy the products you love.
            </span>{" "}
          </h1>
        </div>
        <div className=" max-w-[1240px]  mx-auto sm:p-4  my-7  grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2  ">
          {productsData.map((products, ind) => {
            return (
              <div
                key={ind}
                className="container bg-white flex flex-col p-4 rounded-[20px] shadow-lg justify-between   h-full w-full sm:w-[300px] sm:h-[400px]  "
              >
                <div className=" h-[500px]">
                  <img
                    className="h-full w-full object-contain"
                    src={products.image}
                    alt=""
                  />
                </div>

                <div className="">
                  <p>{products.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-thin ">${products.price}</p>
                    <button onClick={()=>handleAddToCart(products)} className="bg-[var(--primary-color)] text-white p-2 px-4 rounded-[20px]">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
