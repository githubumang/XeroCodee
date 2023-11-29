"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/landing/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
    const Navbars = [
        {
            title:'Home',
            link:'#'
        },
        {
            title:'Team',
            link:'https://xerocodee.com/team/'
        },
        {
            title:'Contact',
            link:'mail:hello@xerocodee.com'
        },
        {
            title:'Careers',
            link:'https://careers.xerocodee.com/'
        }
    ]
    const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
    <div className='hidden md:flex m-2 bg-white rounded shadow-md md:py-3 md:px-10  '>
        <div className='flex'>
        <Image src={logo} className='w-10' alt='logo'/><div className='mt-2 font-bold hidden md:inline'>erocodee.</div>
        </div>
        <div className='md:flex mt-2  mx-auto hidden md:visible'>
            {Navbars.map((Navbar, index)=>{
                return(
                    <Link href={Navbar.link} className='mx-3' target='__blank'>
                        {Navbar.title}
                    </Link>
                )
            })}
        </div>
        <button className='hidden md:inline border-2 border-blue-500 px-3 text-blue-500 mr-3 hover:text-white hover:bg-blue-500 rounded hover:border-white'>Sign in</button>
    </div>
    <div className='md:hidden m-2 bg-white rounded '>
        <div className='flex justify-between px-3'>
        <Image src={logo} className='w-10' alt='logo'/>
        <IoReorderThreeOutline className='my-auto text-[38px]' onClick={(()=>{setToggleNavbar(!toggleNavbar)})}/>
        </div>
        {toggleNavbar && (
            <div className='text-center'>
                <div className=''>
                    {Navbars.map((Navbar, index)=>{
                        return(
                            <div className=''>
                            <Link href={Navbar.link} target='__blank'>
                                {Navbar.title}
                            </Link>
                            </div>
                        )
                    })}
                </div>
                <button className='border-2 border-blue-500 px-3 text-blue-500  hover:text-white hover:bg-blue-500 rounded hover:border-white text-center'>Sign in</button>
            </div>
        )}
    </div>

    </>

  )
}

export default Header