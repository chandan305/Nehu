import React, { useState } from 'react'
import { images } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <img className='w-35' src={images.logo_icon} alt="" />

 {/* menu name there */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/product" className="flex flex-col items-center gap-1">
          <p>PlaceOderd</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/placeoderd" className="flex flex-col items-center gap-1">
          <p>Product</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/login" className="flex flex-col items-center gap-1">
          <p>Login</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/signup" className="flex flex-col items-center gap-1">
          <p>SigUp</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

       <div className='flex items-center gap-6'>
              {/* search*/}
         <img className='w-5 cursor-pointer' src={images.search} alt="" />

         {/* login user id  */}
         <div className='group relative'>
            <img className='w-5 cursor-pointer' src={images.user_id} alt="" />
            {/* dropdown menu */}
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black '>My Profile</p>
                  <p className='cursor-pointer hover:text-black '>Oderds</p>
                  <p className='cursor-pointer hover:text-black '>LogOut</p>
                </div>
            </div>
         </div>

         {/* amoze cart */}

         <Link to="/cart" className='relative'>
           <img className='w-6' src={images.shopping} alt="" />
           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>8</p>
         </Link>
         {/* toggle */}
         <img onClick={()=>setVisible(true)} className='w-6 sm:hidden cursor-pointer' src={images.menu_images} alt="" />
       </div>
       {/* sideBar menu for small screen */}

       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                <img className='h-4' src={images.back} alt="" />
                <p>Back</p>
            </div>
            {/* navlink toggle menu */}
             <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 text-gray-700" to="/">Home</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 text-gray-700" to="/about">About</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 text-gray-700" to="/collection">Collection</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 text-gray-700" to="/placeoderd">PlaceOderd</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 text-gray-700" to="/product">Product</NavLink>
          </div>
       </div>
    </div>
  )
}

export default Navbar;
