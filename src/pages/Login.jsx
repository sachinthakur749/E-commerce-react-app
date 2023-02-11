import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
         <div className=' h-screen flex justify-center items-center'>
            <div className=" flex flex-col gap-[60px] w-[500px] bg-black/10 shadow-xl border-2 border-white  rounded-lg p-[40px]  h-max" >
                <p className='text-2xl font-bold text-center'><span className='text-3xl text-[var(--primary-color)] font-bold '>Lanceme</span> Shop</p>
                <div className='flex gap-2 flex-col'>
                    <label className='text-xl text-gray-600' >E-mail</label>
                    <input className='w-full pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2' placeholder='email...' type="email" />
                </div>
                <div className='flex gap-2 flex-col'>
                    <label className='text-xl' >Password</label>
                    <input className='w-full pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2' placeholder='password' type="password" />
                </div>
                <button className='p-3 text-xl bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]   text-white cursor-pointer rounded-lg '>Login</button>
                <p>Don't have  Account ? <Link className='font-bold cursor-pointer text-[var(--primary-color)]' to={'/'}  >Click here</Link>  </p>
            </div>
        </div>
    </>
  )
}

export default Login