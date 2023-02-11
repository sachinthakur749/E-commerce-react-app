import React, { useRef,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const email = useRef()
    const password = useRef()
    const localSignup = localStorage.getItem("signup")
    const navigate = useNavigate()

    const handleClick = ()=>{
        console.log(email.current.value,password.current.value);
        if(email.current.value&&password.current.value){
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("signup",email.current.value)
            alert('Account Created succesfully')
            window.location.reload()
        }
    }

    useEffect(() => {
      
        if(!localSignup){
            navigate('/')
        }else{
            // navigate('/home')
            navigate('/login')
        }
    
      return () => {
        
      }
    }, [localSignup])
    




  return (
    <>
        <div className=' h-screen flex justify-center items-center'>
            <div className=" flex flex-col gap-[60px] w-[500px] bg-black/10 shadow-xl border-2 border-white  rounded-lg p-[40px]  h-max" >
                <p className='text-2xl font-bold text-center'><span className='text-3xl text-[var(--primary-color)] font-bold '>Lanceme</span> Shop</p>
                <p className='text-center text-2xl font-bold '>Create an Account</p>
                <div className='flex gap-2 flex-col'>
                    <label className='text-xl text-gray-600' >E-mail</label>
                    <input className='w-full pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2' ref={email} placeholder='email...' type="email" />
                </div>
                <div className='flex gap-2 flex-col'>
                    <label className='text-xl' >Password</label>
                    <input className='w-full pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2' ref={password} placeholder='password' type="password" />
                </div>
                <button onClick={handleClick} className='p-3 text-xl bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]   text-white cursor-pointer rounded-lg '>Sign Up</button>
                {/* <p>Already Have Account ? Click here </p> */}
                <p>Already Have  Account ? <Link className='font-bold cursor-pointer text-[var(--primary-color)]' to={'/login'}  >Click here</Link>  </p>
            </div>
        </div>
    </>
  )
}

export default Signup