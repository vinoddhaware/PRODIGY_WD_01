import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='w-full sticky top-0 z-10 bg-[#e8e8e5]'>
        <div className='md:flex items-center justify-between py-4'>
        <div className="text-2xl font-bold pl-8">
            Responsive Navbar 
            </div>
            <div className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
               <button onClick={() => setOpenMenu(!openMenu)}>
                 {
                    openMenu?<IoClose />:<MdMenu />
                 }
                </button>
            </div>
        <div className={`md:flex md:items-center md:pb-0 pb-10 absolute bg-[#e8e8e5] md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${openMenu?"top-16":"top-[-490px]"}`}>

        <div className='mr-10'>
                <a href="/" className="active:scale-95 transition-all duration-200 block md:inline-block hover:text-white ml-3 p-3 py-3 md:border-none hover:bg-slate-800 rounded-2xl">Home
                </a>
                <a href="/" className="active:scale-95 transition-all duration-200 block md:inline-block hover:text-white ml-3 p-3 py-3 md:border-none hover:bg-slate-800 rounded-2xl">Services
                </a>
                <a href="/" className="active:scale-95 transition-all duration-200 block md:inline-block hover:text-white ml-3 p-3 py-3 md:border-none hover:bg-slate-800 rounded-2xl">About us
                </a>
                <a href="/" className="active:scale-95 transition-all duration-200 block md:inline-block hover:text-white ml-3 p-3 py-3 md:border-none hover:bg-slate-800 rounded-2xl">Gallery
                </a>
                <a href="/" className="active:scale-95 transition-all duration-200 block md:inline-block hover:text-white ml-3 p-3 py-3 md:border-none hover:bg-slate-800 rounded-2xl">Visit Us
                </a>
        </div>
        <div className="text-end  flex w-auto rounded pr-8 p-3">
            <a href="/">
                <div className="flex justify-end">
                    <div className="flex items-center h-10 w-30 rounded-md hover:bg-[#df9e39] active:bg-[#c5831d] bg-[#c8a876] text-white font-medium p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Call now
                    </div>
                </div>
            </a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header
