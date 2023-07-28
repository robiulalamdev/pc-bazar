import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/logo/logo.jpg"
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const { data } = useSession();


    let navberRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!navberRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <nav className="w-full h-16 fixed top backdrop-blur-lg z-10 bg-[#f1f5f9]">
            <nav ref={navberRef} className='uppercase'>
                <div className='relative cursor-pointer flex justify-between items-center gap-6 lg:gap-10 h-14 px-4 md:px-8 max-w-[1440px] mx-auto'>
                    <div className='flex-grow'>
                        <Link href='/'><Image className='w-32' src={logo} alt="navberImage" /></Link>
                    </div>
                    <div className='hidden lg:block'>
                        <Link href='/' className='text-black hover:text-primary duration-100 font-semibold text-[13px]'>Home</Link>
                    </div>
                    <div className='hidden lg:block'>
                        <button className='text-black hover:text-primary duration-100 font-semibold text-[13px]'>CATEGORIES</button>
                    </div>
                    <div className='hidden lg:block'>
                        <Link href="/pc-builder" className='text-black hover:text-primary duration-100 font-semibold text-[13px] uppercase'>PC Builder</Link>
                    </div>

                    {
                        data?.user?.email ? <div className='flex items-center gap-2'>
                            <button onClick={() => signOut()} className='w-24 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded'>
                                <h1 className='text-white font-semibold text-sm'>LOG OUT</h1>
                            </button>
                        </div>
                            :
                            <div className='hidden lg:block lg:flex justify-between items-center gap-6'>
                                <Link href='/signin' className='w-24 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded'>
                                    <h1 className='text-white font-semibold text-sm'>SIGN IN</h1>
                                </Link>
                            </div>
                    }
                    {/* -----------toggler button----------- */}
                    <div onClick={() => setOpen(!open)} className="w-10 lg:hidden text-blue-600">
                        {
                            open ? <span>
                                <svg className='w-8 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                            </span>
                                :
                                <span>
                                    <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                                </span>
                        }
                    </div>
                    {/* -----------toggler button end----------- */}

                </div>
                <div className={`bg-[#f1f5f9] absolute z-50 duration-300 border-r mt-[17px] lg:hidden flex flex-col items-start w-72 min-h-screen bg-white px-4 py-4
          ${open ? 'left-0' : '-left-[300px]'}`}>
                    <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                        <Link href='/' className='text-black font-semibold hover:text-white w-full py-2'>Home</Link>
                    </div>
                    <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                        <button className='text-black font-semibold hover:text-white w-full py-2'>CATEGORIES</button>
                    </div>
                    <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                        <Link href="/pc-builder" className='text-black font-semibold hover:text-white w-full py-2'>PC Builder</Link>
                    </div>

                    {
                        !data?.user?.email && <div className='lg:hidden flex items-center gap-6 mt-4'>
                            <Link href='/signin' className='w-24 h-8 bg-blue-600 hover:bg-blue-700 duration-300 flex justify-center items-center rounded'>
                                <h1 className='text-white font-semibold'>SIGN IN</h1>
                            </Link>
                        </div>
                    }
                </div>
            </nav>
        </nav>
    )
}
